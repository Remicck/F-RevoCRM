# 設計書: リッチテキストエディター ツールバーアクティブ状態のリアクティブ更新

- **作成日:** 2026-03-31
- **対象ファイル:** `assets/react-web-components/src/components/ui/tiptap/tiptap.tsx`

---

## 1. 障害概要

### 現象

カーソルのみの状態（テキスト未選択）でツールバーの書式ボタンを押しても、ボタンのアクティブ表示が更新されない。テキストを入力すると初めて変更が反映される。

**対象ボタン:**

| ボタン | 確認方法 |
|--------|---------|
| 太字 | `editor.isActive("bold")` |
| 斜体 | `editor.isActive("italic")` |
| 下線 | `editor.isActive("underline")` |
| 取り消し線 | `editor.isActive("strike")` |
| 箇条書き | `editor.isActive("bulletList")` |
| 番号付きリスト | `editor.isActive("orderedList")` |
| 引用 | `editor.isActive("blockquote")` |

### 根本原因

`useEditorState` セレクターが `fontSize / textColor / highlight` のみを監視しており、上記の `isActive` 状態を含んでいない。

ProseMirror がトランザクションを発行した際、セレクターの戻り値が変わらなければ React は再レンダリングしない。太字などのトグルはテキストスタイルマーク（`storedMark`）の変更であり、セレクターの監視対象外のため React の再レンダリングが発生しない。

結果として JSX 内の `editor?.isActive("bold")` は古い値のまま評価され、ボタンの `active` クラスが更新されない。

---

## 2. 修正方針

### 既存の修正パターンとの整合

フォントサイズUI修正（`2026-03-31-tiptap-fontsize-ui-fix-design.md`）で導入した `useEditorState` セレクターを拡張する。同一の仕組みで全ツールバーボタンのアクティブ状態を管理する。

### 変更内容

#### `useEditorState` セレクターの拡張（`tiptap.tsx`）

`editorToolbarState` セレクターに以下のフィールドを追加する:

```typescript
// blockType の型を明示して null ガード側と正常系で型を統一する
type BlockType = "paragraph" | "h1" | "h2" | "h3";

const editorToolbarState = useEditorState({
  editor,
  selector: (ctx) => {
    const e = ctx.editor;
    if (!e) return {
      fontSize: "14px", textColor: "#000000", highlight: "",
      isBold: false, isItalic: false, isUnderline: false, isStrike: false,
      isBulletList: false, isOrderedList: false, isBlockquote: false,
      blockType: "paragraph" as BlockType,
    };
    return {
      // 既存フィールド
      fontSize: (e.getAttributes("textStyle")?.fontSize as string) || "14px",
      textColor: (e.getAttributes("textStyle")?.color as string) || "#000000",
      highlight: (e.getAttributes("highlight")?.color as string) || "",
      // 追加フィールド
      isBold:        e.isActive("bold"),
      isItalic:      e.isActive("italic"),
      isUnderline:   e.isActive("underline"),
      isStrike:      e.isActive("strike"),
      isBulletList:  e.isActive("bulletList"),
      isOrderedList: e.isActive("orderedList"),
      isBlockquote:  e.isActive("blockquote"),
      blockType: (
        e.isActive("heading", { level: 1 }) ? "h1"
        : e.isActive("heading", { level: 2 }) ? "h2"
        : e.isActive("heading", { level: 3 }) ? "h3"
        : "paragraph"
      ) as BlockType,
    };
  },
});
```

#### JSX の置き換え

| 変更前 | 変更後 | 行番号 |
|--------|--------|--------|
| `editor?.isActive("bold") ? "active" : ""` | `editorToolbarState?.isBold ? "active" : ""` | 1246 |
| `editor?.isActive("italic") ? "active" : ""` | `editorToolbarState?.isItalic ? "active" : ""` | 1258 |
| `editor?.isActive("underline") ? "active" : ""` | `editorToolbarState?.isUnderline ? "active" : ""` | 1270 |
| `editor?.isActive("strike") ? "active" : ""` | `editorToolbarState?.isStrike ? "active" : ""` | 1282 |
| `editor?.isActive("bulletList") ? "active" : ""` | `editorToolbarState?.isBulletList ? "active" : ""` | 1322 |
| `editor?.isActive("orderedList") ? "active" : ""` | `editorToolbarState?.isOrderedList ? "active" : ""` | 1334 |
| `editor?.isActive("blockquote") ? "active" : ""` | `editorToolbarState?.isBlockquote ? "active" : ""` | 1366 |
| `getCurrentBlockType()` (1099行) | `editorToolbarState?.blockType ?? "paragraph"` | 1099 |
| `getCurrentBlockType()` (1131行) | `editorToolbarState?.blockType ?? "paragraph"` | 1131 |

`getCurrentBlockType()` 関数（965〜970行）は全呼び出し箇所を置き換えた後に削除する。

---

## 3. 影響範囲

- **変更ファイル:** `tiptap.tsx` のみ
- **変更箇所:** `useEditorState` セレクター定義（1箇所）、JSX の className 条件式（8箇所）、`getCurrentBlockType()` 関数の削除
- **既存テスト:** フォントサイズ・フォーカス関連テストへの影響なし
- **新規テスト:** 各ボタンのアクティブ状態更新を確認するテストを追加

---

## 4. テスト方針

各書式ボタンについて以下を確認する:

1. カーソルのみの状態でボタンを押すと `active` クラスが付与される
2. 再度押すと `active` クラスが除去される（トグル動作）
3. ブロック要素（見出し・リスト・引用）は切り替え後に正しいアクティブ状態を示す

テストファイル: `src/components/ui/tiptap/__tests__/toolbar-active-state.test.tsx`

---

## 5. 成功基準

- カーソルのみの状態で各ボタンを押した直後にツールバー表示が更新される
- 全テスト通過
