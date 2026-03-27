# QuickCreate React版 リッチテキストエディタ統合 設計書

## 概要

React版QuickCreateのFieldRendererで、`isCkEditor`フラグがtrueのフィールドに対してTiptapリッチテキストエディタをReactコンポーネントとして直接統合する。

## 背景

- CKEditorからTiptap（WebComponents）への置き換えは編集画面で完了済み
- 従来型テンプレート（Smarty）のQuickCreateでは`Text.tpl`内の`isCkEditor()`判定で対応済み
- React版QuickCreateではUIType 19/20/21を一律textareaとして描画しており、Tiptap統合が未実装

## 対象モジュール・フィールド

| モジュール | フィールド | isCkEditor定義箇所 |
|-----------|-----------|-------------------|
| Documents | notecontent | `modules/Documents/models/Field.php` |
| HelpDesk | description, solution | `modules/HelpDesk/models/Field.php` |
| FAQ | question, faq_answer | `modules/Faq/models/Field.php` |
| Users | signature | `modules/Users/models/Field.php` |

**注意:** UsersモジュールはQuickCreate対象でない可能性がある。実装時にQuickCreateが有効かどうか確認し、対象外であればテストから除外する。

## アーキテクチャ

### 変更1: バックエンドAPI拡張

**ファイル:** `modules/Vtiger/apis/GetFields.php`

`formatFieldInfo()`メソッドのレスポンスに`isCkEditor`フラグ（boolean）を追加する。

```php
// formatFieldInfo() 内
$fieldData['isCkEditor'] = $fieldModel->isCkEditor();
```

既存のモジュール別`isCkEditor()`オーバーライドがそのまま活用される。API変更は後方互換（フラグ追加のみ）。

### 変更2: React型定義の拡張

**ファイル:** `assets/react-web-components/src/types/field.ts`

`FieldInfo`型に`isCkEditor`プロパティを追加。

```typescript
isCkEditor?: boolean;
```

**ファイル:** `assets/react-web-components/src/types/quickcreate.ts`

`QuickCreateFieldData`型にも同プロパティを追加。

### 変更3: FieldRendererでのTiptap統合

**ファイル:** `assets/react-web-components/src/components/FieldRenderer.tsx`

UIType 19/20/21のcaseブロック内で`field.isCkEditor`を判定:
- `true`: Tiptap Reactコンポーネントを直接importして描画（編集画面と同じフル機能）
- `false`: 従来通り`<Textarea>`コンポーネントを描画

#### Reactコンポーネント直接利用

`<rich-text-editor>` WebComponentを経由せず、`tiptap.tsx`のTiptapコンポーネントを直接importする。

理由:
- React内でWebComponentを使うとstate管理が二重になる
- CustomEventの手動配線が不要になる
- Shadow DOMとの不整合リスクを回避

```typescript
import Tiptap from './ui/tiptap/tiptap';
```

#### onChangeシグネチャのアダプタ

TiptapのonChangeシグネチャ:
```typescript
onChange?: (event: { target: { name: string; value: string } }) => void;
```

FieldRendererのonChange:
```typescript
onChange: (name: string, value: FieldValue) => void;
```

アダプタ関数で差異を吸収する:
```typescript
const handleTiptapChange = (e: { target: { name: string; value: string } }) => {
  onChange(e.target.name, e.target.value);
};
```

#### 空値の扱い

- 初期値が`null`/`undefined`の場合: 空文字列`""`としてTiptapに渡す
- Tiptapは空エディタで`""`を返す（text === "" の場合、tiptap.tsx 867行目）
- 保存時に空HTMLタグ（`<p></p>`等）が送信されないことを検証する
- 既存データにHTMLエンティティが含まれる場合は`html_entity_decode`相当の処理がバックエンドで対応済みか確認する

### 変更4: QuickCreateFormのレイアウト

**ファイル:** `assets/react-web-components/src/components/QuickCreate/QuickCreateForm.tsx`

既存の`md:col-span-2`ロジック:
```typescript
(field.uitype === '19' || field.uitype === '21') && 'md:col-span-2'
```

UIType 20が含まれていないため、isCkEditorがtrueのフィールドも`md:col-span-2`を適用するよう条件を拡張する:
```typescript
(field.uitype === '19' || field.uitype === '20' || field.uitype === '21' || field.isCkEditor) && 'md:col-span-2'
```

## データフロー

```
[PHP] GetFields API
  └→ formatFieldInfo() で isCkEditor フラグをレスポンスに含める
       └→ $fieldModel->isCkEditor() を呼び出し（モジュール別オーバーライド）

[React] useQuickCreateFields
  └→ API レスポンスを FieldInfo 型に変換（isCkEditor を含む）
       └→ QuickCreateForm → FieldRenderer
            └→ isCkEditor === true → Tiptap Reactコンポーネント（直接import）
            └→ isCkEditor === false → <Textarea> コンポーネント
```

## HTMLサニタイズとの互換性

サーバーサイドのHTMLPurifierがTiptapの生成するHTMLタグを除去しないことを確認する。特に:
- カスタムの`<span>`ハイライト（`SpanHighlight`拡張が`<mark>`を`<span>`に変換）
- インラインスタイル（`font-size`, `color`, `background-color`等）
- テーブル関連タグ（`<table>`, `<th>`, `<td>`のインラインスタイル）

編集画面で既に同じTiptapコンポーネントが使用されており、HTMLPurifier互換は確認済みだが、QuickCreate経由の保存パスでも同じサニタイズ処理が適用されることを検証する。

## 影響範囲

### 変更ファイル

| ファイル | 変更内容 |
|---------|---------|
| `modules/Vtiger/apis/GetFields.php` | formatFieldInfo()にisCkEditorフラグ追加 |
| `assets/react-web-components/src/types/field.ts` | FieldInfo型にisCkEditorプロパティ追加 |
| `assets/react-web-components/src/types/quickcreate.ts` | QuickCreateFieldData型にisCkEditorプロパティ追加 |
| `assets/react-web-components/src/components/FieldRenderer.tsx` | textarea描画時のisCkEditor判定・Tiptap Reactコンポーネント統合 |
| `assets/react-web-components/src/components/QuickCreate/QuickCreateForm.tsx` | md:col-span-2条件にisCkEditor対応追加 |

### 影響を受けないファイル

- 従来型テンプレート（Smarty）: 変更なし
- Tiptapコンポーネント本体（tiptap.tsx）: 変更なし
- CkEditor.js: 変更なし
- 各モジュールのField.php: 変更なし（既存のisCkEditor()をそのまま利用）

## テスト方針

### 検証対象モジュール

Documents, HelpDesk, FAQ（UsersはQuickCreate対象か実装時に確認）

### 検証項目

1. QuickCreate画面でisCkEditor対象フィールドにTiptapエディタが表示される
2. テキスト入力・書式設定（太字、リスト、見出し等）が正常に動作する
3. 保存時にリッチテキストの値が正しく送信・保存される（HTMLPurifier通過後も保持される）
4. isCkEditor非対象フィールドは従来通りtextareaが表示される
5. QuickCreate画面のレイアウトが崩れない（isCkEditor対象フィールドがcol-span-2で表示される）
6. 初期値がnull/空の場合にエラーが発生しない
7. 空のエディタで保存した場合に空HTMLタグが保存されない
