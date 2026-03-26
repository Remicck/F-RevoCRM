# RTE（Tiptap）検証設計書

**作成日:** 2026-03-25
**ブランチ:** req/1503-text-editor-usability-improvement
**目的:** CKEditorからTiptap（WebComponents）へ移行後、既存データの表示と実装済みRTE機能の動作を確認する

---

## 背景

コミット `a2c041e2` にてCKEditorをTiptap（WebComponents）に置き換えた。
本検証では以下の2点を確認する：

1. 既存のCKEditorデータが各モジュールで正しく**表示**されるか
2. Tiptapに実装されている**RTE機能**が全て動作するか

CKEditorの全機能がTiptapに実装されている必要はない。未実装機能については表示が崩れないことを確認する。

---

## ツール

- **ブラウザ自動化:** Playwright MCP（`mcp__playwright__*`）
- **テストレコード:** `test/unit/ckeditor_test/create_ckeditor_test_records.php` で作成済み

---

## 検証①: 表示確認

### 目的
既存のCKEditorデータ（HTML）が詳細画面で崩れずに表示されること。

### 対象モジュール（8件・並列実行）

| モジュール | テストレコード検索キー | 対象フィールド |
|---|---|---|
| Documents | `notes_title` = 【テスト】新規作成_CKEditor機能確認 | `notecontent` |
| HelpDesk | `ticket_title` = 【テスト】新規作成_CKEditor機能確認 | `description`, `solution` |
| FAQ | `question` にテスト文字列を含む | `question`, `faq_answer` |
| Users | `user_name` = test_ckeditor | `signature` |
| EmailTemplates | タイトル = 【テスト】新規作成_CKEditor機能確認 | 本文フィールド |
| PDFTemplates | タイトル = 【テスト】新規作成_CKEditor機能確認 | 本文フィールド |
| MailManager | タイトル = 【テスト】新規作成_CKEditor機能確認 | 本文フィールド |
| Workflows | タイトル = 【テスト】新規作成_CKEditor機能確認 | メール送信タスク本文 |

### 確認手順（各エージェント共通）

1. Playwright でログイン（`http://localhost/` / admin）
2. 対象モジュールのリスト画面へ遷移
3. テストレコードを検索して詳細画面を開く
4. RTE表示エリアの innerHTML を取得
5. 以下を確認：
   - コンテンツが空でないこと
   - raw HTML（`&lt;h1&gt;` 等）がそのまま表示されていないこと
   - ページにJSエラーが発生していないこと
6. ✅実装済み要素の存在確認（表示確認テーブル参照）

### 判定基準

- **OK**: HTMLが正しくレンダリングされ、ページが正常に表示される
- **NG**: raw HTMLが見える / ページが壊れる / JSエラーが発生する

---

## 検証②: RTE機能確認

### 目的
Tiptapのツールバーで実装済みの機能が全て正常に動作すること。

### 対象
**代表モジュール: Documents**（編集画面）

### 確認手順

1. Playwright でログイン
2. Documents のテストレコード（`【テスト】編集_CKEditor機能確認`）の編集画面を開く
3. `<rich-text-editor>` コンポーネントが表示されることを確認
4. 以下の各機能を操作して動作を確認する

### 検証機能一覧（✅実装済み14項目）

| # | 機能 | 操作内容 | 期待結果 |
|---|------|---------|---------|
| 1 | 見出し（H1/H2/H3） | ドロップダウンで「見出し1」選択 | テキストが `<h1>` に変換される |
| 2 | フォントサイズ | ドロップダウンで「24px」選択 | `font-size:24px` が適用される |
| 3 | 太字 | 「太字」ボタン押下 | テキストが `<strong>` になる |
| 4 | 斜体 | 「斜体」ボタン押下 | テキストが `<em>` になる |
| 5 | 下線 | 「下線」ボタン押下 | テキストが `<u>` になる |
| 6 | 取り消し線 | 「取り消し線」ボタン押下 | テキストが `<s>` になる |
| 7 | 文字色 | 「文字色」ボタン→色選択 | `color:` スタイルが適用される |
| 8 | 背景色 | 「背景色」ボタン→色選択 | `background-color:` が適用される |
| 9 | 箇条書きリスト | 「箇条書きリスト」ボタン押下 | `<ul><li>` が生成される |
| 10 | 番号付きリスト | 「番号付きリスト」ボタン押下 | `<ol><li>` が生成される |
| 11 | インデント | 「インデントを増やす」ボタン押下 | `margin-left` が付与される |
| 12 | 引用 | 「引用」ボタン押下 | `<blockquote>` が生成される |
| 13 | テーブル挿入 | 「テーブルを挿入」ボタン押下 | `<table>` が生成される |
| 14 | コード | （StarterKit経由）コードブロック操作 | `<code>` が生成される |

### 追加確認

- **HTMLソース編集**: ボタン押下でダイアログが開くこと
- **書式クリア**: 適用済み書式が除去されること
- **画像挿入**: ボタン押下でダイアログが開くこと

### 判定基準

- **OK**: ボタン押下後、エディタ内のDOMに期待するHTML要素が生成される
- **NG**: ボタンが無反応 / エラーが発生 / 期待と異なる要素が生成される

---

## CKEditor機能の対応状況（参考）

| 機能 | HTML要素 | 対応 | 備考 |
|---|---|:---:|---|
| 見出しH1/H2/H3 | `<h1>` `<h2>` `<h3>` | ✅ | Heading extension |
| 太字 | `<strong>` | ✅ | StarterKit |
| 斜体 | `<em>` | ✅ | StarterKit |
| 下線 | `<u>` | ✅ | Underline extension |
| 取り消し線 | `<s>` | ✅ | StarterKit (Strike) |
| 箇条書き | `<ul><li>` | ✅ | StarterKit |
| 番号リスト | `<ol><li>` | ✅ | StarterKit |
| リンク | `<a href>` | ❌ | Link extension未実装 |
| テーブル | `<table>` | ✅ | カスタムStyledTable |
| 文字色 | `color:#FF0000` | ✅ | Color extension |
| 背景色 | `background-color:#FFFF00` | ✅ | SpanHighlight（カスタム） |
| テキスト配置 | `text-align:left/center/right` | ❌ | TextAlign extension未実装 |
| 引用 | `<blockquote>` | ✅ | StarterKit |
| 水平線 | `<hr>` | △ | StarterKit含むがツールバーなし |
| インデント | `margin-left:40px` | ✅ | IndentExtension |
| フォントサイズ | `font-size:24px` | ✅ | FontSizeExtension |
| 特殊文字 | `&copy;` | △ | 直接入力は可能、挿入ツールなし |
| カスタムフォント | `font-family:...` | ❌ | FontFamily extension未実装 |
| 下付き | `<sub>` | ❌ | Subscript extension未実装 |
| 上付き | `<sup>` | ❌ | Superscript extension未実装 |
| アンカー | `<a name>` | ❌ | 未実装 |
| Computer Code | `<code>` | ✅ | StarterKit（インラインコード） |
| Divコンテナ | `<div>` | ❌ | Tiptapはdiv→paragraphに変換 |
| Special Container | `<div style="...">` | ❌ | 未実装 |
| Marker | `<span class="marker">` | ❌ | SpanHighlightはあるがクラス指定なし |

---

## 出力レポート形式

ファイル出力先: `/var/www/html/OutputFromClaude/rte_verification_YYYY-MM-DD.md`

```markdown
# RTE検証レポート YYYY-MM-DD

## ① 表示確認結果
| モジュール | 結果 | 問題点 |
|---|---|---|
| Documents | ✅ OK | |
| HelpDesk  | ❌ NG | rawHTMLが表示されている |
...

## ② RTE機能確認結果（Documents）
| 機能 | 結果 | 問題点 |
|---|---|---|
| 太字 | ✅ OK | |
| テーブル挿入 | ❌ NG | ボタン押下後エラー |
...

## まとめ
- 表示確認 OK: X/8 モジュール
- RTE機能 OK: X/14 機能
```

---

## アーキテクチャ

```
[オーケストレーター]
  ├─ [並列] 検証①: 8モジュールエージェント
  │     各エージェント: ログイン→詳細画面→DOM確認→結果JSON返却
  ├─ [逐次] 検証②: Documentsエージェント
  │     ログイン→編集画面→14機能操作→結果JSON返却
  └─ 集約→レポート出力
```
