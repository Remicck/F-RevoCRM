# レイアウト・ビューシステムドキュメント

このドキュメントは、F-RevoCRMのレイアウトとビューシステム（MVCのVの部分）に関する包括的なガイドです。

## 概要

F-RevoCRMは、PHP/MySQLベースのCRMシステムで、Smarty 4.3テンプレートエンジンを使用したモジュラーMVCアーキテクチャを採用しています。ビューレイヤーは、柔軟なテーマシステム、テンプレート継承、およびレスポンシブデザインをサポートしています。

## アーキテクチャ概要

### ディレクトリ構造

```
layouts/v7/
├── lib/                     # サードパーティライブラリ
├── modules/                 # モジュール別テンプレート
│   ├── Vtiger/             # 基本テンプレート（全モジュールで使用）
│   ├── Accounts/           # Accountsモジュール固有テンプレート
│   ├── Contacts/           # Contactsモジュール固有テンプレート
│   └── [ModuleName]/       # その他のモジュール固有テンプレート
├── resources/              # 共通リソース
├── skins/                  # テーマとスタイル
│   ├── vtiger/            # 基本テーマ
│   ├── contact/           # コンタクト用テーマ
│   ├── sales/             # セールス用テーマ
│   └── [theme]/           # その他のテーマ
└── README.md
```

### MVCパターンの実装

**Model-View-Controller関係：**
- **Model**: `modules/{ModuleName}/models/` - データとビジネスロジック
- **View**: `modules/{ModuleName}/views/` - PHPビューコントローラ
- **Template**: `layouts/v7/modules/{ModuleName}/` - Smartyテンプレート

## ビューコントローラシステム

### 継承階層

```
Vtiger_Controller (抽象ベース)
  ↓
Vtiger_Action_Controller (抽象)
  ↓
Vtiger_View_Controller (抽象ビューベース)
  ↓
Vtiger_Basic_View (抽象)
  ↓
[具体的なビュー: Detail, List, Edit, etc.]
```

### 基本ビュータイプ

1. **Detail.php** - レコード詳細表示
2. **Edit.php** - レコード作成・編集フォーム
3. **List.php** - レコード一覧表示
4. **Index.php** - モジュールランディングページ
5. **BasicAjax.php** - AJAX専用ビュー

### ビュー処理ライフサイクル

```php
// 標準フロー
1. preProcess()    // ヘッダー、ナビゲーション、共通データ設定
2. process()       // メインビューロジックとテンプレートレンダリング
3. postProcess()   // フッター、クリーンアップ
```

### テンプレート解決プロセス

```php
// テンプレート検索順序：
1. /layouts/v7/modules/{ModuleName}/{TemplateName}.tpl
2. /layouts/v7/modules/Vtiger/{TemplateName}.tpl (フォールバック)
```

## テンプレートシステム

### Smartyテンプレート構造

#### 基本テンプレートパターン

```smarty
{**************************** ライセンスヘッダー ****************************}
{strip}
    {* 適切なインデントでテンプレートコンテンツ *}
    {if !empty($PICKIST_DEPENDENCY_DATASOURCE)}
        <input type="hidden" name="picklistDependency" value='{Vtiger_Util_Helper::toSafeHTML($PICKIST_DEPENDENCY_DATASOURCE)}' />
    {/if}
    
    {* メインコンテンツブロック *}
{/strip}
```

#### 変数割り当てと使用

```smarty
{assign var="FIELD_MODEL" value=$RECORD_STRUCTURE['fieldname']}
{assign var=WIDTHTYPE value=$USER_MODEL->get('rowheight')}
{assign var=IS_HIDDEN value=$BLOCK->isHidden()}
```

#### 条件分岐ロジック

```smarty
{if $FIELD_MODEL->isEditable() eq true}
    {* 編集可能フィールドコンテンツ *}
{else}
    {* 読み取り専用コンテンツ *}
{/if}

{if $FIELD_MODEL->get('uitype') eq "19"}
    {* テキストエリアフィールド *}
{else if $FIELD_MODEL->get('uitype') eq "20"}
    {* ロングテキストフィールド *}
{/if}
```

#### 反復処理パターン

```smarty
{foreach key=BLOCK_LABEL item=FIELD_MODEL_LIST from=$RECORD_STRUCTURE}
    {foreach item=FIELD_MODEL key=FIELD_NAME from=$FIELD_MODEL_LIST}
        {* フィールド処理 *}
    {/foreach}
{/foreach}
```

### テンプレートインクルードパターン

#### コアインクルード

```smarty
{include file="DetailViewBlockView.tpl"|@vtemplate_path:$MODULE_NAME}
{include file="partials/EditViewContents.tpl"|@vtemplate_path:$MODULE}
{include file=vtemplate_path($FIELD_MODEL->getUITypeModel()->getTemplateName(),$MODULE)}
```

#### vtemplate_path関数

- `vtemplate_path()` - モジュールフォールバック付きテンプレートパス解決
- `@vtemplate_path` - 特定のモジュールコンテキストで使用
- モジュール固有テンプレートオーバーライドを可能にする

### フィールドレンダリングシステム

#### UIタイプテンプレート

`/uitypes/`ディレクトリに配置：
- **String.tpl** - テキスト入力フィールド
- **Text.tpl** - テキストエリアフィールド
- **Reference.tpl** - ルックアップ/参照フィールド
- **Date.tpl**, **DateTime.tpl** - 日付/時刻ピッカー
- **Picklist.tpl** - ドロップダウンフィールド
- **Boolean.tpl** - チェックボックスフィールド

#### フィールドモデル統合

```smarty
{assign var="FIELD_INFO" value=$FIELD_MODEL->getFieldInfo()}
{assign var="SPECIAL_VALIDATOR" value=$FIELD_MODEL->getValidator()}
{if $FIELD_MODEL->isMandatory() eq true} data-rule-required="true" {/if}
```

### 共通データ変数

#### コア変数

- `$MODULE` / `$MODULE_NAME` - 現在のモジュール名
- `$RECORD` - 現在のレコードモデル
- `$RECORD_STRUCTURE` - ブロック別フィールド構成
- `$FIELD_MODEL` - 個別フィールドモデル
- `$USER_MODEL` / `$CURRENT_USER_MODEL` - 現在のユーザー
- `$LISTVIEW_ENTRIES` - リストビューレコード

#### UI変数

- `$WIDTHTYPE` - 行の高さに関するユーザー設定
- `$IS_AJAX_ENABLED` - Ajax編集機能
- `$PICKIST_DEPENDENCY_DATASOURCE` - ピックリスト依存関係
- `$VIEWID` - 現在のカスタムビューID

### 国際化パターン

#### vtranslate関数

```smarty
{vtranslate('LBL_SAVE', $MODULE)}
{vtranslate($FIELD_MODEL->get('label'), $MODULE_NAME)}
{assign var=SINGLE_MODULE_NAME value='SINGLE_'|cat:$MODULE}
{vtranslate($SINGLE_MODULE_NAME, $MODULE)}
```

## フロントエンドアーキテクチャ

### CSSとテーマシステム

#### スキンディレクトリ構造

```
layouts/v7/skins/
├── vtiger/              # 基本テーマ
├── contact/             # コンタクトアプリテーマ
├── inventory/           # 在庫アプリテーマ
├── marketing/           # マーケティングアプリテーマ
├── sales/               # セールスアプリテーマ
├── support/             # サポートアプリテーマ
├── tools/               # ツールアプリテーマ
├── project/             # プロジェクトアプリテーマ
└── marketing_and_sales/ # マーケティング・セールス統合テーマ
```

#### LESSファイル構成

各テーマには以下が含まれます：
- `style.css` - コンパイル済みCSS
- `style.css.map` - ソースマップ
- `style.less` - LESSソースファイル
- `variables.less` - テーマ固有変数

#### テーマ継承パターン

```less
@import "../vtiger/variables.less";  // 基本変数
@import "variables.less";           // テーマ固有変数
@import "../vtiger/style.less";     // 基本スタイル
```

#### アプリケーションカラー

```less
@contact_app : #3498DB;
@tool_app : #2ECC71;
@sales_app : #3CB878;
@marketing_app : #EF5E29;
@support_app : #6297C3;
@inventory_app: #F1C40F;
@project_app: #8E44AD;
```

### Bootstrap統合

- **TODC Bootstrap** (Google Material Designテーマ) 使用
- レスポンシブデザインでモバイルファースト
- カスタム統合でCRM固有スタイル保持

### JavaScriptアーキテクチャ

#### ライブラリ構成

**主要ライブラリ (`layouts/v7/lib/`)：**
- **jQuery エコシステム**: コアjQuery、jQuery UI、バリデーション、ウィジェット
- **Bootstrap コンポーネント**: 通知、日付ピッカー、モーダル
- **データ可視化**: チャート、グリッド、カレンダー
- **UI強化**: Select2、ツールチップ、スクロールバー、アニメーション
- **ユーティリティ**: Moment.js、WebSockets、ファイルアップロード

#### モジュールJavaScript

**モジュールJS構成 (`modules/*/resources/`)：**
- 各モジュールにビュー固有JSファイル
- 共通パターン: `Edit.js`, `Detail.js`, `List.js`, `Popup.js`
- JavaScript継承を通じたモジュール継承

#### コアJavaScriptフレームワーク

```javascript
// アプリケーションコントローラーパターン
window.app = (function () {
    var _controller = null;
    var _module = _META.module;
    var _view = _META.view;
    // ... リクエスト処理、PJAX、AJAXラッパー
})();
```

#### クラスシステム

- ベースクラス: `Vtiger_Base_Js`
- 初期化とイベント登録を含むコンポーネント構造
- モジュール固有ビュークラス（例：`Accounts_Detail_Js`）

### アセット管理

#### スクリプト登録システム

```php
// PHP アセット管理
Vtiger_JsScript_Model
Vtiger_CssScript_Model
```

#### テンプレートベース読み込み

```smarty
{foreach key=index item=jsModel from=$SCRIPTS}
    <script type="{$jsModel->getType()}" src="{vresource_url($jsModel->getSrc())}"></script>
{/foreach}
```

#### 依存関係管理

- コアライブラリ優先読み込み（jQuery、Bootstrap）
- モジュール固有スクリプトはコア後読み込み
- 機能とユーザー権限に基づく条件付き読み込み

## モジュール固有パターン

### 標準エンティティモジュール (Accounts, Contacts, Leads)

**特徴：**
- ベースビューからの単純継承
- 基本CRUD操作重視
- 標準テンプレート命名

**例：**
```php
class Accounts_Detail_View extends Vtiger_Detail_View
class Contacts_Detail_View extends Accounts_Detail_View  // 画像サポート
class Leads_ConvertLead_View extends Vtiger_Basic_View   // 変換機能
```

### 在庫モジュール (Invoice, Quotes, SalesOrder, PurchaseOrder)

**特徴：**
- `Inventory_Detail_View`と`Inventory_Edit_View`から継承
- 特殊な行項目処理
- 複雑な財務計算

**共通ビュー：**
- `ProductsPopup.php`と`ProductsPopupAjax.php`
- `ServicesPopup.php`と`ServicesPopupAjax.php`
- `SubProductsPopup.php`と`SubProductsPopupAjax.php`

### 特殊モジュール

#### カレンダーモジュール

**独自機能：**
- 複数カレンダービュー: `Calendar.php`, `SharedCalendar.php`
- 複雑なJavaScript統合 (fullcalendar.js)
- 特殊前処理 (`CalendarViewPreProcess.tpl`)
- カレンダー設定管理

#### レポートモジュール

**複雑なビュー構造：**
- `Detail.php` - データ処理付き標準レポート表示
- `ChartDetail.php` - jqPlot統合によるチャートレンダリング
- フォルダ管理 (`EditFolder.php`)
- エクスポート機能 (`ExportReport.php`)

#### ドキュメントモジュール

**ファイル管理機能：**
- `FilePreview.php` - ドキュメントプレビュー
- `AddFolder.php` - フォルダ管理
- `MoveDocuments.php` - ファイル整理

### 設定モジュール

**階層構造：**
- ベース: `Settings_Vtiger_Index_View`
- 管理者権限要求
- 複雑なメニューシステムとナビゲーション

**特殊設定モジュール：**
- **LayoutEditor**: ドラッグ&ドロップ機能付きフィールド・レイアウト管理
- **Workflows**: タスク管理と自動化
- **ModuleManager**: 拡張とモジュール管理

## セキュリティパターン

### データサニタイゼーション

```smarty
{Vtiger_Util_Helper::toSafeHTML($PICKIST_DEPENDENCY_DATASOURCE)}
{purifyHtmlEventAttributes($FIELD_MODEL->get('fieldvalue'),true)}
```

### CSRF保護

- セキュリティトークンとモジュールコンテキスト用隠しフォームフィールド

### 権限統合

- ビューコントローラレベルでの権限チェック
- レコードレベル共有（レポート）
- モジュールアクセスチェック

## パフォーマンス最適化

### テンプレート最適化

- 空白削除のために`{strip}`タグでラップ
- 不要なレンダリング回避のためのフィールド・ブロック可視性チェック

### アセット最適化

- ライブラリの縮小版（`*.min.js`, `*.min.css`）
- ランタイムでのLESSからCSSコンパイル
- キャッシュ管理のためのリソースバージョニング

## ベストプラクティス

### 開発ガイドライン

1. **テンプレート開発：**
   - 既存のモジュールテンプレートを参考にする
   - `{strip}`タグでパフォーマンス向上
   - vtranslateを使用した適切な国際化

2. **ビューコントローラ開発：**
   - 適切な基底クラスから継承
   - 権限チェックの実装
   - テンプレートへの適切なデータ渡し

3. **アセット管理：**
   - モジュール固有アセットの適切な登録
   - 依存関係の明確化
   - 縮小版の使用

4. **カスタマイゼーション：**
   - モジュール固有テンプレートでコアテンプレートをオーバーライド
   - 既存のコード規約に従う
   - 後方互換性の維持

### セキュリティ考慮事項

- ユーザー入力の常時サニタイゼーション
- 適切な権限チェック
- CSRF保護の実装
- セキュリティトークンの使用

## トラブルシューティング

### 一般的な問題

1. **テンプレートが見つからない：**
   - テンプレートパス確認
   - モジュール名とファイル名確認
   - フォールバック機能の確認

2. **CSS/JSが読み込まれない：**
   - アセット登録確認
   - パス設定確認
   - キャッシュクリア

3. **権限エラー：**
   - ユーザー権限確認
   - ビューコントローラの権限チェック実装確認

### デバッグツール

- Smartyデバッグモード有効化
- ブラウザ開発者ツール使用
- PHPエラーログ確認

## 関連ドキュメント

- [データベーススキーマドキュメント](schema.md)
- [フィールドドキュメント](fields.md)
- [vtranslate関数ドキュメント](vtranslate.md)
- [ディレクトリ構造ドキュメント](directory-structure.md)
- [ModuleModelクラスドキュメント](class/ModuleModel.md)
- [RecordModelクラスドキュメント](class/RecordModel.md)

---

**注意:** このドキュメントは、F-RevoCRMのレイアウト・ビューシステムの包括的なガイドです。開発時は、このドキュメントと実際のソースコードを参照し、既存のパターンに従って開発を進めてください。