# CKEditorクリーンアップ 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** CKEditorからTiptap（Rich Text Editor）移行後に残存する不要コードを削除し、CKEditor由来の命名を統一してRichTextEditorに変更する

**Architecture:** 削除→PHPリネーム→JSリネーム→React/TSリネーム→ビルド→結合テストの順で進める。各タスクはgrepで変更前後を検証してからコミットする。ファイル名変更（CkEditor.js→RichTextEditor.js）はJSコアファイルのタスクでまとめて実施する。

**Tech Stack:** PHP, JavaScript (jQuery.Class), Smarty Template, React/TypeScript, Playwright MCP（結合テスト）

**Spec:** `docs/superpowers/specs/2026-03-27-ckeditor-code-cleanup-design.md`

---

## 変更ファイル一覧

| ファイル | 種別 | 変更内容 |
|---------|------|---------|
| `public/libraries/jquery/ckeditor/` | 削除 | ライブラリディレクトリ(5.8MB)削除 |
| `kcfinder/` | 削除 | CKEditor用ファイルブラウザ(1.4MB)削除 |
| `test/unit/ckeditor_test/` | 削除 | 旧CKEditor用テストスクリプト削除 |
| `public/resources/app.js` | 修正 | `setRTEValues()`関数(1012-1017行)削除 |
| `modules/Vtiger/models/Field.php` | 修正 | `isCkEditor()`, `isCkeditor()` → `isRichTextEditor()` |
| `modules/Documents/models/Field.php` | 修正 | `isCkEditor()` → `isRichTextEditor()` |
| `modules/Users/models/Field.php` | 修正 | `isCkEditor()` → `isRichTextEditor()` |
| `modules/Faq/models/Field.php` | 修正 | `isCkEditor()` → `isRichTextEditor()` |
| `modules/HelpDesk/models/Field.php` | 修正 | `isCkEditor()` → `isRichTextEditor()` |
| `modules/Vtiger/apis/GetFields.php` | 修正 | APIレスポンスキー `isCkEditor` → `isRichTextEditor` |
| `modules/Vtiger/actions/Save.php` | 修正 | `$ckeditorFields` → `$richTextFields` |
| `modules/Vtiger/actions/SaveAjax.php` | 修正 | `purifyCkeditorField()` → `purifyRichTextField()`、`$ckeditorFields` → `$richTextFields` |
| `modules/Vtiger/views/Detail.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/Vtiger/views/List.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/Vtiger/views/ComposeEmail.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/Vtiger/views/DashBoard.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/Documents/views/Edit.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/Documents/views/QuickCreateAjax.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/Users/views/PreferenceEdit.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/EmailTemplates/views/Edit.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/PDFTemplates/views/Edit.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/Settings/Workflows/views/Edit.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/MailManager/views/List.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/Rss/views/List.php` | 修正 | リソース参照リネーム(1箇所) |
| `modules/RecycleBin/views/List.php` | 修正 | リソース参照リネーム(1箇所) |
| `layouts/v7/modules/Vtiger/partials/EditViewContents.tpl` | 修正 | `isCkEditor()` → `isRichTextEditor()` (2箇所) |
| `layouts/v7/modules/Vtiger/uitypes/Text.tpl` | 修正 | `isCkEditor()` → `isRichTextEditor()` |
| `layouts/v7/modules/Vtiger/JSResources.tpl` | 修正 | `CkEditor.js` → `RichTextEditor.js` |
| `public/layouts/v7/modules/Vtiger/resources/CkEditor.js` | リネーム+修正 | ファイル名変更、クラス名・メソッド名リネーム |
| `public/layouts/v7/modules/Vtiger/resources/RichTextEditor.js` | 新規（上記リネーム後） | — |
| `public/layouts/v7/modules/Vtiger/resources/Edit.js` | 修正 | `addFieldCkEditor`等リネーム |
| `public/layouts/v7/modules/Vtiger/resources/Detail.js` | 修正 | `ckeditor_columns`等リネーム |
| `public/layouts/v7/modules/Documents/resources/Edit.js` | 修正 | `registerEventForCkEditor`等リネーム |
| `public/layouts/v7/modules/Documents/resources/Documents.js` | 修正 | `cke`変数等リネーム |
| `public/layouts/v7/modules/HelpDesk/resources/Edit.js` | 修正 | `registerEventForCkEditor`等リネーム |
| `public/layouts/v7/modules/Faq/resources/Edit.js` | 修正 | `registerEventForCkEditor`等リネーム |
| `public/layouts/v7/modules/Emails/resources/MassEdit.js` | 修正 | `ckEditorInstance`等リネーム |
| `public/layouts/v7/modules/EmailTemplates/resources/Edit.js` | 修正 | `registerEventForCkEditor`等リネーム |
| `public/layouts/v7/modules/PDFTemplates/resources/Edit.js` | 修正 | `registerEventForCkEditor`等リネーム |
| `public/layouts/v7/modules/Settings/Workflows/resources/Edit.js` | 修正 | `ckEditorInstance`等リネーム |
| `public/layouts/v7/modules/Users/resources/Edit.js` | 修正 | `ckEditorInstance`等リネーム |
| `assets/react-web-components/src/types/field.ts` | 修正 | `isCkEditor` → `isRichTextEditor` |
| `assets/react-web-components/src/types/quickcreate.ts` | 修正 | `isCkEditor` → `isRichTextEditor` |
| `assets/react-web-components/src/components/FieldRenderer.tsx` | 修正 | `isCkEditor` → `isRichTextEditor` |
| `assets/react-web-components/src/components/QuickCreate/QuickCreateForm.tsx` | 修正 | `isCkEditor` → `isRichTextEditor` |
| `assets/react-web-components/src/components/QuickCreate/hooks/useQuickCreateFields.ts` | 修正 | `isCkEditor` → `isRichTextEditor` |
| `public/resources/web-components/web-components.js` | 再生成 | `npm run build`で再生成 |

---

### Task 1: 不要ファイル・ディレクトリの削除

**Files:**
- Delete: `public/libraries/jquery/ckeditor/`（ディレクトリ丸ごと）
- Delete: `kcfinder/`（ディレクトリ丸ごと）
- Delete: `test/unit/ckeditor_test/`（ディレクトリ丸ごと）
- Modify: `public/resources/app.js`（1012-1017行の`setRTEValues`関数を削除）

- [ ] **Step 1: 削除前に対象の存在を確認する**

```bash
ls public/libraries/jquery/ckeditor/
ls kcfinder/
ls test/unit/ckeditor_test/
```

Expected: 各ディレクトリが存在すること

- [ ] **Step 2: CKEditorライブラリディレクトリを削除する**

```bash
rm -rf public/libraries/jquery/ckeditor
```

- [ ] **Step 3: KCFinderディレクトリを削除する**

```bash
rm -rf kcfinder
```

- [ ] **Step 4: 旧CKEditorテストディレクトリを削除する**

```bash
rm -rf test/unit/ckeditor_test
```

- [ ] **Step 5: app.jsのsetRTEValues関数（dead code）を削除する**

`public/resources/app.js` の以下の関数ブロック（1012-1017行）を削除する。
削除対象は次の6行：

```javascript
	setRTEValues: function(kv) {
		for (var k in kv) {
			var rte = CKEDITOR.instances[k];
			if (rte) rte.setData(kv[k]);
		}
	},
```

前後のコンテキスト（`setFormValues`の末尾 `},` と `getPageController`の開始コメント `/**`）を確認して
正確に該当6行のみを削除する。削除後、前後に余分な空行が2行以上続かないことを確認する。

- [ ] **Step 6: 削除・変更が正しく行われたことをgrepで確認する**

```bash
grep -n "setRTEValues\|CKEDITOR" public/resources/app.js
```

Expected: 0件（何も出力されない）

- [ ] **Step 7: コミットする**

```bash
git add -A
git commit -m "refactor: CKEditorライブラリ・KCFinder・不要コードを削除"
```

---

### Task 2: PHPメソッド名リネーム（Field.php 5ファイル）

**Files:**
- Modify: `modules/Vtiger/models/Field.php`
- Modify: `modules/Documents/models/Field.php`
- Modify: `modules/Users/models/Field.php`
- Modify: `modules/Faq/models/Field.php`
- Modify: `modules/HelpDesk/models/Field.php`

**リネーム規則:**
- `isCkEditor()` メソッド定義 → `isRichTextEditor()`
- `isCkeditor()` メソッド定義（typo版） → `isRichTextEditor()`

- [ ] **Step 1: 変更前の状態をgrepで確認する**

```bash
grep -rn "isCkEditor\|isCkeditor" modules/Vtiger/models/Field.php modules/Documents/models/Field.php modules/Users/models/Field.php modules/Faq/models/Field.php modules/HelpDesk/models/Field.php
```

Expected: 各ファイルに1〜2箇所のメソッド定義が見つかること

- [ ] **Step 2: modules/Vtiger/models/Field.php を修正する**

対象ファイルで以下のリネームを実施する：
- `isCkEditor` → `isRichTextEditor`（メソッド定義）
- `isCkeditor` → `isRichTextEditor`（typo版メソッド定義）

**注意:** このファイルには `isCkEditor()` のデフォルト実装（`return false`）と、
`isCkeditor()` を呼び出す箇所（`isAjaxEditable()`内）の両方が存在する可能性がある。
全ての `isCkEditor` と `isCkeditor` を `isRichTextEditor` に変更すること。

- [ ] **Step 3: 残り4ファイル（Documents/Users/Faq/HelpDesk）を修正する**

各ファイルの `isCkEditor()` メソッド定義を `isRichTextEditor()` に変更する：
- `modules/Documents/models/Field.php`
- `modules/Users/models/Field.php`
- `modules/Faq/models/Field.php`
- `modules/HelpDesk/models/Field.php`

- [ ] **Step 4: 変更後の状態を確認する**

```bash
grep -rn "isCkEditor\|isCkeditor" modules/Vtiger/models/Field.php modules/Documents/models/Field.php modules/Users/models/Field.php modules/Faq/models/Field.php modules/HelpDesk/models/Field.php
```

Expected: 0件（何も出力されない）

```bash
grep -rn "isRichTextEditor" modules/Vtiger/models/Field.php modules/Documents/models/Field.php modules/Users/models/Field.php modules/Faq/models/Field.php modules/HelpDesk/models/Field.php
```

Expected: 各ファイルに1〜2箇所が見つかること

- [ ] **Step 5: コミットする**

```bash
git add modules/Vtiger/models/Field.php modules/Documents/models/Field.php modules/Users/models/Field.php modules/Faq/models/Field.php modules/HelpDesk/models/Field.php
git commit -m "refactor: Field.phpのisCkEditor()をisRichTextEditor()にリネーム"
```

---

### Task 3: PHP APIキー + 浄化処理リネーム

**Files:**
- Modify: `modules/Vtiger/apis/GetFields.php`（`isCkEditor` → `isRichTextEditor`）
- Modify: `modules/Vtiger/actions/Save.php`（`$ckeditorFields` → `$richTextFields`）
- Modify: `modules/Vtiger/actions/SaveAjax.php`（`purifyCkeditorField()` → `purifyRichTextField()`、`$ckeditorFields` → `$richTextFields`）

- [ ] **Step 1: 変更前の状態をgrepで確認する**

```bash
grep -n "isCkEditor" modules/Vtiger/apis/GetFields.php
grep -n "ckeditorFields\|purifyCkeditorField" modules/Vtiger/actions/Save.php
grep -n "ckeditorFields\|purifyCkeditorField" modules/Vtiger/actions/SaveAjax.php
```

Expected: 各ファイルに該当箇所が見つかること

- [ ] **Step 2: GetFields.php のAPIレスポンスキーをリネームする**

`modules/Vtiger/apis/GetFields.php` 内の `isCkEditor` を `isRichTextEditor` に変更する。
（APIレスポンスのJSONキーとして使用されている箇所）

- [ ] **Step 3: Save.php の変数名をリネームする**

`modules/Vtiger/actions/Save.php` 内の `$ckeditorFields` を `$richTextFields` に変更する。

- [ ] **Step 4: SaveAjax.php のメソッド名と変数名をリネームする**

`modules/Vtiger/actions/SaveAjax.php` で以下を変更する：
- `purifyCkeditorField` → `purifyRichTextField`（メソッド定義と呼び出しの両方）
- `$ckeditorFields` → `$richTextFields`

呼び出し箇所は2行ある（約109行目と141行目）。定義と合わせて3箇所すべて変更する。

- [ ] **Step 5: 変更後の状態を確認する**

```bash
grep -n "isCkEditor\|ckeditorFields\|purifyCkeditorField" modules/Vtiger/apis/GetFields.php modules/Vtiger/actions/Save.php modules/Vtiger/actions/SaveAjax.php
```

Expected: 0件（何も出力されない）

- [ ] **Step 6: コミットする**

```bash
git add modules/Vtiger/apis/GetFields.php modules/Vtiger/actions/Save.php modules/Vtiger/actions/SaveAjax.php
git commit -m "refactor: APIキー・浄化処理のCKEditor命名をRichTextEditorにリネーム"
```

---

### Task 4: PHPビューファイルのリソース参照リネーム（13ファイル）

**Files（Modify 13ファイル）:**
- `modules/Vtiger/views/Detail.php`
- `modules/Vtiger/views/List.php`
- `modules/Vtiger/views/ComposeEmail.php`
- `modules/Vtiger/views/DashBoard.php`
- `modules/Documents/views/Edit.php`
- `modules/Documents/views/QuickCreateAjax.php`
- `modules/Users/views/PreferenceEdit.php`
- `modules/EmailTemplates/views/Edit.php`
- `modules/PDFTemplates/views/Edit.php`
- `modules/Settings/Workflows/views/Edit.php`
- `modules/MailManager/views/List.php`
- `modules/Rss/views/List.php`
- `modules/RecycleBin/views/List.php`

各ファイルの `"modules.Vtiger.resources.CkEditor"` または `'modules.Vtiger.resources.CkEditor'` を
`"modules.Vtiger.resources.RichTextEditor"` または `'modules.Vtiger.resources.RichTextEditor'`（引用符の種類を維持）に変更する。

- [ ] **Step 1: 変更前の状態をgrepで確認する**

```bash
grep -rn "modules.Vtiger.resources.CkEditor" modules/
```

Expected: 13件ヒットすること

- [ ] **Step 2: 全13ファイルのリソース参照を一括リネームする**

各ファイルで `modules.Vtiger.resources.CkEditor` を `modules.Vtiger.resources.RichTextEditor` に変更する。
引用符の種類（シングル/ダブル）は各ファイルの既存スタイルに合わせること。

- [ ] **Step 3: 変更後の状態を確認する**

```bash
grep -rn "modules.Vtiger.resources.CkEditor" modules/
```

Expected: 0件

```bash
grep -rn "modules.Vtiger.resources.RichTextEditor" modules/
```

Expected: 13件

- [ ] **Step 4: コミットする**

```bash
git add modules/Vtiger/views/Detail.php modules/Vtiger/views/List.php modules/Vtiger/views/ComposeEmail.php modules/Vtiger/views/DashBoard.php modules/Documents/views/Edit.php modules/Documents/views/QuickCreateAjax.php modules/Users/views/PreferenceEdit.php modules/EmailTemplates/views/Edit.php modules/PDFTemplates/views/Edit.php modules/Settings/Workflows/views/Edit.php modules/MailManager/views/List.php modules/Rss/views/List.php modules/RecycleBin/views/List.php
git commit -m "refactor: PHPビューファイルのJSリソース参照をCkEditorからRichTextEditorにリネーム"
```

---

### Task 5: Smartyテンプレート + JSResources.tpl のリネーム

**Files:**
- Modify: `layouts/v7/modules/Vtiger/partials/EditViewContents.tpl`
- Modify: `layouts/v7/modules/Vtiger/uitypes/Text.tpl`
- Modify: `layouts/v7/modules/Vtiger/JSResources.tpl`

- [ ] **Step 1: 変更前の状態をgrepで確認する**

```bash
grep -n "isCkEditor" layouts/v7/modules/Vtiger/partials/EditViewContents.tpl
grep -n "isCkEditor" layouts/v7/modules/Vtiger/uitypes/Text.tpl
grep -n "CkEditor" layouts/v7/modules/Vtiger/JSResources.tpl
```

Expected:
- EditViewContents.tpl: 2箇所
- Text.tpl: 1箇所
- JSResources.tpl: `CkEditor.js` の読み込み1箇所

- [ ] **Step 2: EditViewContents.tpl の isCkEditor() 呼び出しをリネームする**

`layouts/v7/modules/Vtiger/partials/EditViewContents.tpl` 内の
`isCkEditor()` を `isRichTextEditor()` に変更する（2箇所）。

- [ ] **Step 3: Text.tpl の isCkEditor() 呼び出しをリネームする**

`layouts/v7/modules/Vtiger/uitypes/Text.tpl` 内の
`isCkEditor()` を `isRichTextEditor()` に変更する（1箇所）。

- [ ] **Step 4: JSResources.tpl のCkEditor.jsへの参照をRichTextEditor.jsに変更する**

`layouts/v7/modules/Vtiger/JSResources.tpl` の55行目付近：

```
'layouts/v7/modules/Vtiger/resources/CkEditor.js'
```

を

```
'layouts/v7/modules/Vtiger/resources/RichTextEditor.js'
```

に変更する。

- [ ] **Step 5: 変更後の状態を確認する**

```bash
grep -n "isCkEditor" layouts/v7/modules/Vtiger/partials/EditViewContents.tpl layouts/v7/modules/Vtiger/uitypes/Text.tpl
grep -n "CkEditor" layouts/v7/modules/Vtiger/JSResources.tpl
```

Expected: すべて0件

- [ ] **Step 6: コミットする**

```bash
git add layouts/v7/modules/Vtiger/partials/EditViewContents.tpl layouts/v7/modules/Vtiger/uitypes/Text.tpl layouts/v7/modules/Vtiger/JSResources.tpl
git commit -m "refactor: SmaryテンプレートとJSResources.tplのCKEditor命名をリネーム"
```

---

### Task 6: JSコアファイルのリネーム（CkEditor.js → RichTextEditor.js）

**Files:**
- Rename + Modify: `public/layouts/v7/modules/Vtiger/resources/CkEditor.js` → `RichTextEditor.js`

**リネーム規則（ファイル内）:**

| 現在 | 変更後 |
|------|--------|
| `Vtiger_CkEditor_Js` | `Vtiger_RichTextEditor_Js` |
| `getCkEditorInstanceFromName` | `getRichTextEditorInstanceFromName` |
| `loadCkEditor` | `loadRichTextEditor` |
| `loadContentsInCkeditor` | `loadContentsInRichTextEditor` |
| `removeCkEditor` | `removeRichTextEditor` |

`getPlainText`, `setElement`, `getElement`, `getElementId`, `getData` はリネーム不要。

- [ ] **Step 1: 変更前の状態をgrepで確認する**

```bash
grep -n "Vtiger_CkEditor_Js\|getCkEditorInstanceFromName\|loadCkEditor\|loadContentsInCkeditor\|removeCkEditor" public/layouts/v7/modules/Vtiger/resources/CkEditor.js
```

Expected: 各名前が複数箇所ヒットすること

- [ ] **Step 2: ファイル内のすべてのCKEditor命名をリネームする**

`public/layouts/v7/modules/Vtiger/resources/CkEditor.js` を読み込み、以下をすべて置換する：
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `getCkEditorInstanceFromName` → `getRichTextEditorInstanceFromName`
- `loadCkEditor` → `loadRichTextEditor`
- `loadContentsInCkeditor` → `loadContentsInRichTextEditor`
- `removeCkEditor` → `removeRichTextEditor`

- [ ] **Step 3: ファイルをCkEditor.jsからRichTextEditor.jsにリネームする（gitで追跡）**

```bash
git mv public/layouts/v7/modules/Vtiger/resources/CkEditor.js public/layouts/v7/modules/Vtiger/resources/RichTextEditor.js
```

- [ ] **Step 4: 変更後の状態を確認する**

```bash
ls public/layouts/v7/modules/Vtiger/resources/RichTextEditor.js
grep -n "CkEditor\|loadCkEditor\|loadContentsInCkeditor\|removeCkEditor\|getCkEditorInstanceFromName" public/layouts/v7/modules/Vtiger/resources/RichTextEditor.js
```

Expected:
- RichTextEditor.jsが存在すること
- grep: 0件（コメント行の歴史的記述は残してもよい）

- [ ] **Step 5: コミットする**

```bash
git add public/layouts/v7/modules/Vtiger/resources/RichTextEditor.js
git commit -m "refactor: CkEditor.jsをRichTextEditor.jsにリネームし、クラス名・メソッド名を更新"
```

---

### Task 7: JSコアの呼び出し元リネーム（Vtiger/Edit.js + Detail.js）

**Files:**
- Modify: `public/layouts/v7/modules/Vtiger/resources/Edit.js`
- Modify: `public/layouts/v7/modules/Vtiger/resources/Detail.js`

**Edit.js のリネーム規則:**

| 現在 | 変更後 |
|------|--------|
| `addFieldCkEditor` | `addFieldRichTextEditor` |
| `ckEditorSource` | `richTextEditorSource` |
| `ckEditorInstance` (ローカル変数) | `richTextEditorInstance` |
| `new Vtiger_CkEditor_Js()` | `new Vtiger_RichTextEditor_Js()` |
| `ckEditorInstance.loadCkEditor(...)` | `richTextEditorInstance.loadRichTextEditor(...)` |

**Detail.js のリネーム規則:**

| 現在 | 変更後 |
|------|--------|
| `ckeditor_columns` | `richTextColumns` |
| `ckeditor_column` | `richTextColumn` |

- [ ] **Step 1: 変更前の状態をgrepで確認する**

```bash
grep -n "CkEditor\|ckeditor\|ckEditor" public/layouts/v7/modules/Vtiger/resources/Edit.js
grep -n "ckeditor_column" public/layouts/v7/modules/Vtiger/resources/Detail.js
```

- [ ] **Step 2: Edit.js のリネームを実施する**

`public/layouts/v7/modules/Vtiger/resources/Edit.js` で以下を変更する：
- `addFieldCkEditor` → `addFieldRichTextEditor`
- `ckEditorSource` → `richTextEditorSource`（CSSクラス文字列を含む）
- `ckEditorInstance` → `richTextEditorInstance`（ローカル変数）
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `loadCkEditor` → `loadRichTextEditor`

- [ ] **Step 3: Detail.js のリネームを実施する**

`public/layouts/v7/modules/Vtiger/resources/Detail.js` の309-311行付近で以下を変更する：
- `ckeditor_columns` → `richTextColumns`
- `ckeditor_column` → `richTextColumn`

- [ ] **Step 4: 変更後の状態を確認する**

```bash
grep -n "CkEditor\|ckeditor\|ckEditor\|addFieldCkEditor\|ckEditorSource" public/layouts/v7/modules/Vtiger/resources/Edit.js
grep -n "ckeditor_column" public/layouts/v7/modules/Vtiger/resources/Detail.js
```

Expected: すべて0件（コメント除く）

- [ ] **Step 5: コミットする**

```bash
git add public/layouts/v7/modules/Vtiger/resources/Edit.js public/layouts/v7/modules/Vtiger/resources/Detail.js
git commit -m "refactor: Vtiger/Edit.jsとDetail.jsのCKEditor命名をRichTextEditorにリネーム"
```

---

### Task 8: JS呼び出し元リネーム（モジュール別 9ファイル）

**Files:**
- Modify: `public/layouts/v7/modules/Documents/resources/Edit.js`
- Modify: `public/layouts/v7/modules/Documents/resources/Documents.js`
- Modify: `public/layouts/v7/modules/HelpDesk/resources/Edit.js`
- Modify: `public/layouts/v7/modules/Faq/resources/Edit.js`
- Modify: `public/layouts/v7/modules/Emails/resources/MassEdit.js`
- Modify: `public/layouts/v7/modules/EmailTemplates/resources/Edit.js`
- Modify: `public/layouts/v7/modules/PDFTemplates/resources/Edit.js`
- Modify: `public/layouts/v7/modules/Settings/Workflows/resources/Edit.js`
- Modify: `public/layouts/v7/modules/Users/resources/Edit.js`

**各ファイル別リネーム規則:**

**Documents/Edit.js:**
- `registerEventForCkEditor` → `registerEventForRichTextEditor`
- `ckEditorSource` → `richTextEditorSource`
- `ckEditorInstance` → `richTextEditorInstance`
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `loadCkEditor` → `loadRichTextEditor`

**Documents/Documents.js:**
- `cke` (変数名) → `rte`
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `loadCkEditor` → `loadRichTextEditor`

**HelpDesk/Edit.js:**
- `registerEventForCkEditor` → `registerEventForRichTextEditor`
- `ckContentElement` → `rteContentElement`
- `addFieldCkEditor` → `addFieldRichTextEditor`

**Faq/Edit.js:**
- `registerEventForCkEditor` → `registerEventForRichTextEditor`
- `ckContentElement` → `rteContentElement`
- `addFieldCkEditor` → `addFieldRichTextEditor`

**Emails/MassEdit.js:**
- `ckEditorInstance` (プロパティ・ローカル変数) → `richTextEditorInstance`
- `getckEditorInstance` → `getRichTextEditorInstance`（コメント含む）
- `loadCkEditor` (MassEdit独自定義) → `loadRichTextEditor`
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `isCkeditorApplied` (jQueryデータキー文字列を含む) → `isRichTextEditorApplied`
- `loadContentsInCkeditor` → `loadContentsInRichTextEditor`

**EmailTemplates/Edit.js:**
- `registerEventForCkEditor` → `registerEventForRichTextEditor`
- `ckEditorSource` → `richTextEditorSource`
- `ckEditorInstance` → `richTextEditorInstance`
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `loadCkEditor` → `loadRichTextEditor`

**PDFTemplates/Edit.js:**
- `registerEventForCkEditor` → `registerEventForRichTextEditor`
- `ckEditorSource` → `richTextEditorSource`
- `ckEditorInstance` → `richTextEditorInstance`
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `loadCkEditor` → `loadRichTextEditor`

**Settings/Workflows/Edit.js:**
- `ckEditorInstance` (プロパティ・ローカル変数) → `richTextEditorInstance`
- `getckEditorInstance` → `getRichTextEditorInstance`（コメント含む）
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `loadCkEditor` → `loadRichTextEditor`

**Users/Edit.js:**
- `ckEditorInstance` → `richTextEditorInstance`
- `Vtiger_CkEditor_Js` → `Vtiger_RichTextEditor_Js`
- `loadCkEditor` → `loadRichTextEditor`
- コメント内の `ckeditor` 参照も `RichTextEditor` に更新

- [ ] **Step 1: 変更前の状態をgrepで確認する**

```bash
grep -rn "CkEditor\|ckeditor\|ckEditor\|ckContent\|isCkeditorApplied" \
  public/layouts/v7/modules/Documents/resources/Edit.js \
  public/layouts/v7/modules/Documents/resources/Documents.js \
  public/layouts/v7/modules/HelpDesk/resources/Edit.js \
  public/layouts/v7/modules/Faq/resources/Edit.js \
  public/layouts/v7/modules/Emails/resources/MassEdit.js \
  public/layouts/v7/modules/EmailTemplates/resources/Edit.js \
  public/layouts/v7/modules/PDFTemplates/resources/Edit.js \
  public/layouts/v7/modules/Settings/Workflows/resources/Edit.js \
  public/layouts/v7/modules/Users/resources/Edit.js
```

Expected: 複数の該当箇所がヒットすること

- [ ] **Step 2: Documents/Edit.js を修正する**

上記リネーム規則に従い変更する。

- [ ] **Step 3: Documents/Documents.js を修正する**

上記リネーム規則に従い変更する。変数 `cke` はDocuments.js内でのみ使用されているローカル変数。
コメント行（427行目）はそのまま残してよい。

- [ ] **Step 4: HelpDesk/Edit.js を修正する**

上記リネーム規則に従い変更する。

- [ ] **Step 5: Faq/Edit.js を修正する**

上記リネーム規則に従い変更する。

- [ ] **Step 6: Emails/MassEdit.js を修正する**

上記リネーム規則に従い変更する。
`isCkeditorApplied` はjQueryの `.data()` キーとして文字列で使われているため、
`.data('isCkeditorApplied', ...)` と `.data('isCkeditorApplied')` の両方を変更する。

- [ ] **Step 7: EmailTemplates/Edit.js を修正する**

上記リネーム規則に従い変更する。

- [ ] **Step 8: PDFTemplates/Edit.js を修正する**

上記リネーム規則に従い変更する。

- [ ] **Step 9: Settings/Workflows/Edit.js を修正する**

上記リネーム規則に従い変更する。

- [ ] **Step 10: Users/Edit.js を修正する**

上記リネーム規則に従い変更する。

- [ ] **Step 11: 変更後の状態を確認する**

```bash
grep -rn "Vtiger_CkEditor_Js\|registerEventForCkEditor\|addFieldCkEditor\|ckEditorSource\|ckEditorInstance\|ckContentElement\|isCkeditorApplied\|getckEditorInstance\|loadContentsInCkeditor" \
  public/layouts/v7/modules/Documents/resources/Edit.js \
  public/layouts/v7/modules/Documents/resources/Documents.js \
  public/layouts/v7/modules/HelpDesk/resources/Edit.js \
  public/layouts/v7/modules/Faq/resources/Edit.js \
  public/layouts/v7/modules/Emails/resources/MassEdit.js \
  public/layouts/v7/modules/EmailTemplates/resources/Edit.js \
  public/layouts/v7/modules/PDFTemplates/resources/Edit.js \
  public/layouts/v7/modules/Settings/Workflows/resources/Edit.js \
  public/layouts/v7/modules/Users/resources/Edit.js
```

Expected: 0件（コメント行除く）

- [ ] **Step 12: コミットする**

```bash
git add \
  public/layouts/v7/modules/Documents/resources/Edit.js \
  public/layouts/v7/modules/Documents/resources/Documents.js \
  public/layouts/v7/modules/HelpDesk/resources/Edit.js \
  public/layouts/v7/modules/Faq/resources/Edit.js \
  public/layouts/v7/modules/Emails/resources/MassEdit.js \
  public/layouts/v7/modules/EmailTemplates/resources/Edit.js \
  public/layouts/v7/modules/PDFTemplates/resources/Edit.js \
  public/layouts/v7/modules/Settings/Workflows/resources/Edit.js \
  public/layouts/v7/modules/Users/resources/Edit.js
git commit -m "refactor: 各モジュールJSファイルのCKEditor命名をRichTextEditorにリネーム"
```

---

### Task 9: React/TypeScriptのリネーム

**Files:**
- Modify: `assets/react-web-components/src/types/field.ts`
- Modify: `assets/react-web-components/src/types/quickcreate.ts`
- Modify: `assets/react-web-components/src/components/FieldRenderer.tsx`
- Modify: `assets/react-web-components/src/components/QuickCreate/QuickCreateForm.tsx`
- Modify: `assets/react-web-components/src/components/QuickCreate/hooks/useQuickCreateFields.ts`

**リネーム規則:** `isCkEditor` → `isRichTextEditor`（プロパティ名・変数名・条件分岐すべて）

`FieldRenderer.test.tsx`内のテストデータ（`isCkEditor: true`）も同様に変更すること。

- [ ] **Step 1: 変更前の状態をgrepで確認する**

```bash
grep -rn "isCkEditor" assets/react-web-components/src/
```

Expected: 複数ファイルに複数箇所ヒットすること（テストファイル含む）

- [ ] **Step 2: 全5ファイル（+テストファイル）の isCkEditor を isRichTextEditor にリネームする**

以下のファイルで `isCkEditor` を `isRichTextEditor` に変更する：
- `assets/react-web-components/src/types/field.ts`
- `assets/react-web-components/src/types/quickcreate.ts`
- `assets/react-web-components/src/components/FieldRenderer.tsx`
- `assets/react-web-components/src/components/QuickCreate/QuickCreateForm.tsx`
- `assets/react-web-components/src/components/QuickCreate/hooks/useQuickCreateFields.ts`
- `assets/react-web-components/src/components/FieldRenderer.test.tsx`（テストデータも変更）

- [ ] **Step 3: 変更後の状態を確認する**

```bash
grep -rn "isCkEditor" assets/react-web-components/src/
```

Expected: 0件

```bash
grep -rn "isRichTextEditor" assets/react-web-components/src/
```

Expected: 複数ファイルにヒットすること

- [ ] **Step 4: コミットする**

```bash
git add assets/react-web-components/src/
git commit -m "refactor: React/TypeScriptのisCkEditorプロパティをisRichTextEditorにリネーム"
```

---

### Task 10: Reactビルド成果物の再生成

**Files:**
- Regenerate: `public/resources/web-components/web-components.js`

- [ ] **Step 1: TypeScriptのビルドを実行する**

作業ディレクトリ `/var/www/html/GitHub/assets/react-web-components` から以下を実行する（cdとnpmは別コマンドとして実行すること）：

```bash
cd /var/www/html/GitHub/assets/react-web-components
```

```bash
npm run build
```

Expected: ビルドが成功し、エラーが0件であること

- [ ] **Step 2: ビルド成果物にCkEditor命名が残っていないことを確認する**

```bash
grep -c "isCkEditor" public/resources/web-components/web-components.js
```

Expected: 0件

- [ ] **Step 3: コミットする**

```bash
git add public/resources/web-components/web-components.js
git commit -m "build: React Web ComponentビルドでisRichTextEditorを反映"
```

---

### Task 11: 全体的なリネーム漏れ確認

- [ ] **Step 1: 残存するCKEditor命名を全体検索する**

```bash
grep -rn "CkEditor\|ckeditor\|ckEditor\|isCkEditor\|purifyCkeditorField\|ckEditorSource\|ckEditorInstance\|ckContentElement\|isCkeditorApplied" \
  --include="*.php" --include="*.js" --include="*.ts" --include="*.tsx" --include="*.tpl" \
  . \
  --exclude-dir=".git" \
  --exclude-dir="node_modules" \
  --exclude-dir="test/unit/RichTextEditor"
```

Expected: ヒットするファイルが以下のみであること：
- `docs/` 配下（設計書・仕様書は歴史的記録として保持）
- `test/unit/RichTextEditor/` 配下（もしあれば）
- コメント行のみ

それ以外でヒットした場合は当該ファイルを修正する。

- [ ] **Step 2: 残存する `CKEDITOR`（大文字）の確認**

```bash
grep -rn "CKEDITOR" \
  --include="*.php" --include="*.js" --include="*.ts" --include="*.tsx" --include="*.tpl" \
  . \
  --exclude-dir=".git" \
  --exclude-dir="node_modules"
```

Expected: 0件（`app.js`のdead codeは削除済み、Documents.jsのCKEDITOR.instancesも削除済み）

---

### Task 12: 結合テスト

Playwright MCPを使用してシステムにログイン（ID: admin / PASSWORD: admin）し、
各モジュールの編集画面でRichTextEditorが正常に動作することを確認する。

- [ ] **Step 1: Playwright MCPでログインし、実行前スクリーンショットを取得する**

- `http://localhost/index.php` にアクセス
- ID: admin / PASSWORD: admin でログイン
- ログイン後ホーム画面のスクリーンショットを取得する

- [ ] **Step 2: Documentsモジュールの編集画面でRTEを確認する**

- Documents 新規作成画面を開く
- スクリーンショット取得
- `<rich-text-editor>` 要素が存在することを確認
- ブラウザコンソールにエラーがないことを確認

- [ ] **Step 3: HelpDeskモジュールの編集画面でRTEを確認する**

- HelpDesk 新規作成画面を開く
- `description`, `solution` フィールドに `<rich-text-editor>` が表示されることを確認
- スクリーンショット取得

- [ ] **Step 4: FAQモジュールの編集画面でRTEを確認する**

- FAQ 新規作成画面を開く
- `question`, `faq_answer` フィールドに `<rich-text-editor>` が表示されることを確認
- スクリーンショット取得

- [ ] **Step 5: Usersモジュール（個人設定）でRTEを確認する**

- 設定 > 個人設定を開く
- `signature` フィールドに `<rich-text-editor>` が表示されることを確認
- スクリーンショット取得

- [ ] **Step 6: EmailTemplatesモジュールの編集画面でRTEを確認する**

- EmailTemplates 新規作成画面を開く
- 本文エディタに `<rich-text-editor>` が表示されることを確認
- スクリーンショット取得

- [ ] **Step 7: PDFTemplatesモジュールの編集画面でRTEを確認する**

- PDFTemplates 新規作成画面を開く
- 本文エディタに `<rich-text-editor>` が表示されることを確認
- スクリーンショット取得

- [ ] **Step 8: Workflows編集画面でRTEを確認する**

- 設定 > Workflows の編集画面を開く
- メール送信タスクの本文エディタに `<rich-text-editor>` が表示されることを確認
- スクリーンショット取得

- [ ] **Step 9: 削除したCKEditorライブラリパスへのアクセスが404になることを確認する**

Playwright MCPで以下のURLにアクセスし、404になることを確認する：
`http://localhost/libraries/jquery/ckeditor/ckeditor.js`

- [ ] **Step 10: テストエビデンスをOutputFromClaudeに保存する**

スクリーンショット一式を `/var/www/html/OutputFromClaude/` 配下の適切なディレクトリに保存する。
