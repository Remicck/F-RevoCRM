# 設計書: TipTap リストトグル時の文字色・背景色リセットバグ修正

**作成日:** 2026-03-31  
**対象ファイル:** `assets/react-web-components/src/components/ui/tiptap/tiptap.tsx`  
**種別:** バグ修正

---

## 1. バグ概要

### 現象

文字色または背景色（ハイライト）を設定した状態で、箇条書きリスト（bulletList）または番号付きリスト（orderedList）のボタンをクリックしてリストをONにすると、ツールバー上に表示される文字色・背景色の表示が初期値（`#000000` / 空文字列）にリセットされる。

### 再現手順

1. エディタにフォーカスを当てる
2. 文字色を任意の色（例: `#ff0000`）に設定する
3. 箇条書きリストボタンをクリックする
4. ツールバーの文字色表示が `#000000` に戻ることを確認する

### 影響範囲のパターン

| 操作 | 症状 |
|------|------|
| カーソルのみ状態で文字色設定 → bulletList ON | 文字色がリセット |
| カーソルのみ状態でハイライト設定 → bulletList ON | ハイライトがリセット |
| 両方設定 → orderedList ON | 文字色・ハイライト両方リセット |
| テキスト選択中に文字色設定 → bulletList ON | トグル後に選択解除され同様にリセット |

---

## 2. 根本原因

### ProseMirror の storedMarks の仕組み

TipTap（ProseMirror ベース）では、カーソルのみ（テキスト未選択）の状態でマーク（文字色、太字など）を設定すると、その設定は `storedMarks` に保持される。`storedMarks` は「次に入力される文字に適用される予定のマーク」を管理する一時的な状態であり、次の入力が発生するか、ブロックレベルのトランザクションが発行されるとクリアされる。

### トグルコマンドによる storedMarks のクリア

`toggleBulletList()` / `toggleOrderedList()` は段落ノードをリスト構造（`bulletList > listItem > paragraph`）に変換するブロックレベルのトランザクションを発行する。このトランザクション実行時に ProseMirror が `storedMarks` をクリアする。

### useEditorState セレクターへの影響

`useEditorState` セレクター内の以下のコードがツールバー表示値を取得している。

```typescript
// tiptap.tsx 行 939-941
fontSize: (e.getAttributes("textStyle")?.fontSize as string) || "14px",
textColor: (e.getAttributes("textStyle")?.color as string) || "#000000",
highlight: (e.getAttributes("highlight")?.color as string) || "",
```

`getAttributes()` はカーソルのみ状態では `storedMarks` を参照する。リストトグル後に `storedMarks` がクリアされるため、`getAttributes()` は `null` を返し、フォールバック値（`#000000` / `""`）がツールバーに表示される。

テキスト選択状態でトグルした場合も、トグル後に選択が解除されカーソルのみ状態になるため、`storedMarks` が空になり同様の問題が発生する。

---

## 3. 修正方針と実装詳細

### 方針

`bulletList` / `orderedList` の `onMouseDown` ハンドラ内で、リストトグルコマンドの実行前に現在の文字色・ハイライト色を取得し、トグル後のチェーンコマンドで再適用する。

これにより `storedMarks` がクリアされた後でも、チェーンコマンド内で色を明示的に再設定することで `storedMarks` を復元できる。

### 修正前のコード（行 1378-1394）

```typescript
{/* bulletList */}
<button
  type="button"
  className={`tiptap-btn ${editorToolbarState?.isBulletList ? "active" : ""}`}
  title="箇条書きリスト"
  onMouseDown={(e) =>
    handleAction(e, () =>
      editor?.chain().focus().toggleBulletList().run()
    )
  }
>
  <List size={14} />
</button>
<button
  type="button"
  className={`tiptap-btn ${editorToolbarState?.isOrderedList ? "active" : ""}`}
  title="番号付きリスト"
  onMouseDown={(e) =>
    handleAction(e, () =>
      editor?.chain().focus().toggleOrderedList().run()
    )
  }
>
  <ListOrdered size={14} />
</button>
```

### 修正後のコード

```typescript
{/* bulletList */}
<button
  type="button"
  className={`tiptap-btn ${editorToolbarState?.isBulletList ? "active" : ""}`}
  title="箇条書きリスト"
  onMouseDown={(e) =>
    handleAction(e, () => {
      const preColor = editor?.getAttributes("textStyle")?.color as string | undefined;
      const preHighlight = editor?.getAttributes("highlight")?.color as string | undefined;
      let chain = editor?.chain().focus().toggleBulletList();
      if (preColor) chain = chain?.setColor(preColor);
      if (preHighlight) chain = chain?.toggleHighlight({ color: preHighlight });
      chain?.run();
    })
  }
>
  <List size={14} />
</button>
<button
  type="button"
  className={`tiptap-btn ${editorToolbarState?.isOrderedList ? "active" : ""}`}
  title="番号付きリスト"
  onMouseDown={(e) =>
    handleAction(e, () => {
      const preColor = editor?.getAttributes("textStyle")?.color as string | undefined;
      const preHighlight = editor?.getAttributes("highlight")?.color as string | undefined;
      let chain = editor?.chain().focus().toggleOrderedList();
      if (preColor) chain = chain?.setColor(preColor);
      if (preHighlight) chain = chain?.toggleHighlight({ color: preHighlight });
      chain?.run();
    })
  }
>
  <ListOrdered size={14} />
</button>
```

### 修正の詳細説明

| ステップ | 処理内容 |
|----------|---------|
| 1 | `editor?.getAttributes("textStyle")?.color` でトグル前の文字色を取得 |
| 2 | `editor?.getAttributes("highlight")?.color` でトグル前のハイライト色を取得 |
| 3 | `chain().focus().toggleBulletList()` でリストトグル実行 |
| 4 | `preColor` が存在する場合のみ `setColor(preColor)` をチェーンに追加 |
| 5 | `preHighlight` が存在する場合のみ `toggleHighlight({ color: preHighlight })` をチェーンに追加 |
| 6 | `chain?.run()` でコマンドチェーンを実行 |

色が未設定の場合（`undefined`）は再適用しないため、デフォルト動作に影響を与えない。

---

## 4. 変更箇所一覧

| ファイル | 変更前行番号 | 変更種別 | 内容 |
|----------|------------|---------|------|
| `assets/react-web-components/src/components/ui/tiptap/tiptap.tsx` | 1378-1382 | 修正 | bulletList の `onMouseDown` ハンドラ |
| `assets/react-web-components/src/components/ui/tiptap/tiptap.tsx` | 1390-1394 | 修正 | orderedList の `onMouseDown` ハンドラ |

修正後は行数が増加するため、以降の行番号はシフトする。

---

## 5. 影響範囲

### 直接影響

- **bulletList ボタン**: `onMouseDown` ハンドラの動作変更。既存のトグル動作は維持され、色の再適用が追加される。
- **orderedList ボタン**: 同上。

### 間接影響

- **ツールバーの文字色表示**: リストトグル後も正しい色が表示されるようになる。
- **ツールバーのハイライト表示**: 同上。
- **文字のマーク（`storedMarks`）**: チェーンコマンドで色が明示的に再設定されるため、トグル後の入力にも正しい色が引き継がれる。

### 影響なし

- テキストが選択されていない・色が設定されていない通常のリスト操作
- 他のツールバーボタン（太字、斜体、見出しなど）
- リストのネスト・インデント操作
- テーブル関連の操作

---

## 6. テスト方針

### テストスペック

以下のテストケースを `test/unit/tiptap/` 以下に作成する。

#### TC-001: カーソルのみ状態で文字色設定後に bulletList ON

```
前提条件:
  - エディタが初期化済み
  - カーソルのみ状態（テキスト未選択）
手順:
  1. 文字色を #ff0000 に設定する
  2. bulletList ボタンをクリックする
期待結果:
  - ツールバーの文字色表示が #ff0000 のまま維持されること
  - editorToolbarState.textColor が "#ff0000" であること
```

#### TC-002: カーソルのみ状態でハイライト設定後に bulletList ON

```
前提条件:
  - エディタが初期化済み
  - カーソルのみ状態（テキスト未選択）
手順:
  1. ハイライト色を #ffff00 に設定する
  2. bulletList ボタンをクリックする
期待結果:
  - ツールバーのハイライト表示が #ffff00 のまま維持されること
  - editorToolbarState.highlight が "#ffff00" であること
```

#### TC-003: 文字色・ハイライト両方設定後に orderedList ON

```
前提条件:
  - エディタが初期化済み
  - カーソルのみ状態（テキスト未選択）
手順:
  1. 文字色を #0000ff に設定する
  2. ハイライト色を #00ff00 に設定する
  3. orderedList ボタンをクリックする
期待結果:
  - ツールバーの文字色表示が #0000ff のまま維持されること
  - ツールバーのハイライト表示が #00ff00 のまま維持されること
```

#### TC-004: 色未設定状態でのリストトグル（正常動作の保証）

```
前提条件:
  - エディタが初期化済み
  - 文字色・ハイライト未設定（デフォルト状態）
手順:
  1. bulletList ボタンをクリックする
期待結果:
  - エラーなくリストに切り替わること
  - ツールバーの文字色が "#000000" であること
  - ツールバーのハイライトが "" であること
  - isBulletList が true であること
```

#### TC-005: bulletList OFF 時（既にリスト状態からトグル）

```
前提条件:
  - エディタが初期化済み
  - bulletList がアクティブな状態
  - 文字色を #ff0000 に設定している
手順:
  1. bulletList ボタンを再度クリックして OFF にする
期待結果:
  - リストが解除されること
  - isBulletList が false になること
  - 文字色の表示が維持されること（#ff0000）
```

#### TC-006: テキスト選択状態での bulletList ON

```
前提条件:
  - エディタにテキストが入力されている
  - テキストが選択されている
  - 選択範囲の文字色が #ff0000 に設定されている
手順:
  1. bulletList ボタンをクリックする
期待結果:
  - テキストがリスト化されること
  - ツールバーの文字色が #ff0000 のまま維持されること
```

### テスト実装方針

- テストファイルの配置: `assets/react-web-components/src/components/ui/tiptap/tiptap.test.tsx`
- テストフレームワーク: Vitest + React Testing Library（プロジェクト既存の設定に従う）
- エディタの初期化: `@tiptap/react` の `useEditor` をモックせず、実際に初期化して使用する
- マウスイベントのシミュレーション: `fireEvent.mouseDown` を使用する
- 状態の検証: `getByTitle` でボタンを取得し、`getAttributes` の返り値を検証する

---

## 7. リスクと注意事項

| リスク | 内容 | 対策 |
|--------|------|------|
| チェーンコマンドの副作用 | `toggleHighlight` はトグル動作のため、既にハイライトが設定されている場合に解除してから再設定する可能性がある | `setHighlight`（非トグル版）が利用可能か確認し、あれば使用する |
| 型エラー | `chain` の型が `undefined` になる可能性がある | オプショナルチェーン（`?.`）で対処済み |
| storedMarks の参照タイミング | `getAttributes` がトグル後の状態を参照してしまう場合 | `onMouseDown` ハンドラの先頭（トグル前）で値を取得することで防止 |

### `toggleHighlight` vs `setHighlight` の確認

TipTap の Highlight 拡張に `setHighlight` コマンドが存在する場合は、トグル動作を避けるためにそちらを使用することが望ましい。プロジェクトで使用している `@tiptap/extension-highlight` のバージョンを確認し、利用可能なコマンドに応じて実装を選択する。

```typescript
// setHighlight が利用可能な場合（推奨）
if (preHighlight) chain = chain?.setHighlight({ color: preHighlight });

// toggleHighlight を使用する場合（フォールバック）
if (preHighlight) chain = chain?.toggleHighlight({ color: preHighlight });
```
