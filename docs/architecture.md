# F-RevoCRM アーキテクチャドキュメント

## 概要
F-RevoCRMは、Vtiger CRMからフォークされた日本企業向けの高機能なCRMシステムです。本ドキュメントでは、LLMがコードを書く際に必要な、システムの詳細なアーキテクチャ情報を提供します。

## 1. URL構造とルーティングシステム

### 1.1 基本URL構造
```
index.php?module=MODULE&view=VIEW&action=ACTION&record=ID
```

### 1.2 パラメータ説明
- **module**: 対象モジュール名（Accounts、Contacts、Leads等）
- **view**: 表示する画面タイプ（List、Detail、Edit等）
- **action**: 実行するアクション（Save、Delete等）
- **record**: 対象レコードID

### 1.3 ルーティング処理フロー
1. **エントリーポイント**: `index.php`
2. **リクエスト処理**: `includes/main/WebUI.php`
3. **クラス解決**: `includes/Loader.php`
4. **コンポーネント実行**: 対象のView/Actionクラス

### 1.4 URL例とファイルマッピング
| URL | ファイルパス | クラス名 |
|-----|-------------|----------|
| `index.php?module=Accounts&view=List` | `modules/Accounts/views/List.php` | `Accounts_List_View` |
| `index.php?module=Accounts&view=Detail&record=123` | `modules/Accounts/views/Detail.php` | `Accounts_Detail_View` |
| `index.php?module=Accounts&action=Save` | `modules/Accounts/actions/Save.php` | `Accounts_Save_Action` |
| `index.php?module=Settings:Users&view=List` | `modules/Settings/Users/views/List.php` | `Settings_Users_List_View` |

## 2. ディレクトリ構造とファイル配置

### 2.1 コアディレクトリ
```
F-RevoCRM/
├── index.php                    # メインエントリーポイント
├── config.inc.php              # メイン設定ファイル
├── modules/                    # ビジネスロジックモジュール
│   ├── Vtiger/                # 基底クラス群
│   ├── Accounts/              # 企業モジュール
│   ├── Contacts/              # 担当者モジュール
│   └── Settings/              # システム設定モジュール
├── includes/                   # コアフレームワーク
│   ├── Loader.php             # クラスローダー
│   ├── main/WebUI.php         # メインUIコントローラー
│   └── runtime/               # ランタイムクラス
├── layouts/v7/                # Smartyテンプレート
│   ├── modules/               # モジュール別テンプレート
│   ├── lib/                   # サードパーティライブラリ
│   └── resources/             # アプリケーションCSS/JS
├── languages/                  # 多言語ファイル
├── vtlib/                     # VTigerライブラリ
└── storage/                   # ファイルアップロード領域
```

### 2.2 モジュールディレクトリ構造
```
modules/ModuleName/
├── ModuleName.php             # CRMEntityベースクラス（レガシー）
├── models/                    # データモデル
│   ├── Module.php            # モジュールモデル
│   ├── Record.php            # レコードモデル
│   ├── DetailView.php        # 詳細ビューモデル
│   └── ListView.php          # 一覧ビューモデル
├── views/                     # ビューコントローラー
│   ├── Detail.php            # 詳細画面
│   ├── List.php              # 一覧画面
│   ├── Edit.php              # 編集画面
│   └── QuickCreateAjax.php   # クイック作成
├── actions/                   # アクションコントローラー
│   ├── Save.php              # 保存アクション
│   ├── Delete.php            # 削除アクション
│   └── MassDelete.php        # 一括削除
└── uitypes/                   # カスタムフィールドタイプ
    ├── Text.php
    └── DateTime.php
```

## 3. MVCアーキテクチャとクラス継承

### 3.1 基底クラス階層
```
Vtiger_Base_Model (includes/runtime/BaseModel.php)
├── Vtiger_Record_Model (modules/Vtiger/models/Record.php)
├── Vtiger_Module_Model (modules/Vtiger/models/Module.php)
└── Vtiger_DetailView_Model (modules/Vtiger/models/DetailView.php)

Vtiger_Controller (includes/runtime/Controller.php)
├── Vtiger_Action_Controller
└── Vtiger_View_Controller
    ├── Vtiger_Header_View
    ├── Vtiger_Footer_View
    ├── Vtiger_Basic_View
    ├── Vtiger_Index_View
    └── Vtiger_Detail_View
```

### 3.2 クラス命名規則
- **Model**: `{Module}_{Component}_Model`
- **View**: `{Module}_{Component}_View`
- **Action**: `{Module}_{Component}_Action`

### 3.3 継承とフォールバック機能
1. モジュール固有クラス（例：`Accounts_Detail_View`）
2. 中間フォールバック（Settings系の場合）
3. 基底クラス（例：`Vtiger_Detail_View`）

## 4. テンプレートシステム（Smarty）

### 4.1 テンプレート配置ルール
```
layouts/v7/modules/
├── Vtiger/                    # 共通テンプレート（基底）
│   ├── DetailViewFullContents.tpl
│   ├── ListViewContents.tpl
│   └── EditView.tpl
├── Accounts/                  # モジュール固有テンプレート
│   ├── DetailViewHeaderTitle.tpl
│   └── ModuleSummaryView.tpl
└── Settings/                  # 設定画面テンプレート
```

### 4.2 テンプレート解決順序
1. `modules/{ModuleName}/{templateName}`（モジュール固有）
2. `modules/Vtiger/{templateName}`（共通テンプレート）

### 4.3 主要テンプレートファイル
- **DetailView系**: `DetailViewFullContents.tpl`, `DetailViewHeaderTitle.tpl`
- **ListView系**: `ListViewContents.tpl`, `ListViewActions.tpl`
- **EditView系**: `EditView.tpl`, `OverlayEditView.tpl`
- **QuickCreate系**: `QuickCreate.tpl`

### 4.4 テンプレート変数
```smarty
{* 主要な変数 *}
$RECORD         # レコードモデル
$MODULE_NAME    # モジュール名
$RECORD_STRUCTURE # フィールド構造
$FIELD_MODEL    # フィールドモデル
$USER_MODEL     # ユーザーモデル

{* テンプレート関数 *}
{vtranslate('LBL_SAVE', $MODULE_NAME)}  # 翻訳
{include file='template.tpl'|vtemplate_path:$MODULE} # テンプレートinclude
```

## 5. データベースとORM

### 5.1 二重アーキテクチャ
F-RevoCRMは2つのデータアクセス層を併用しています：

#### レガシー層（CRMEntity）
- **基底クラス**: `data/CRMEntity.php`
- **特徴**: SugarCRM由来の低レベルCRUD操作
- **使用例**: `modules/Accounts/Accounts.php`

#### 新アーキテクチャ層（Vtiger_Record_Model）
- **基底クラス**: `modules/Vtiger/models/Record.php`
- **特徴**: 高レベルAPI、CRMEntityのラッパー
- **使用例**: `modules/Accounts/models/Record.php`

### 5.2 データベース設定
- **ORM**: ADODB ベースのカスタム実装
- **設定ファイル**: `config.inc.php`
- **スキーマ**: `schema/DatabaseSchema.xml`
- **マイグレーション**: `modules/Migration/schema/`

## 6. 開発時の重要なポイント

### 6.1 新機能開発の手順
1. **モジュール特定**: `modules/`ディレクトリ内の対象モジュール
2. **モデル作成/修正**: `models/`ディレクトリ
3. **ビュー作成/修正**: `views/`ディレクトリ
4. **アクション作成/修正**: `actions/`ディレクトリ
5. **テンプレート作成**: `layouts/v7/modules/`ディレクトリ
6. **言語ファイル更新**: `languages/ja_jp/`ディレクトリ

### 6.2 クラス作成時の注意点
- **命名規則遵守**: `{Module}_{Component}_{Type}`
- **継承関係**: 適切な基底クラスから継承
- **ファイル配置**: ディレクトリ構造に従った配置
- **オートロード**: `includes/Loader.php`による自動読み込み

### 6.3 テンプレート開発のベストプラクティス
- **共通機能**: Vtigerテンプレートをinclude
- **モジュール固有**: 必要に応じてオーバーライド
- **UIType活用**: フィールドタイプ別テンプレート利用
- **変数命名**: 既存のテンプレート変数に合わせる

### 6.4 デバッグとログ
- **ログファイル**: `logs/vtigercrm.log`
- **Xdebug**: Docker環境でプリセットアップ済み
- **エラー表示**: 開発環境では`display_errors = ON`推奨

## 7. セキュリティ

### 7.1 認証・認可
- **ログイン処理**: `modules/Users/actions/Login.php`
- **権限管理**: `user_privileges/`ディレクトリ
- **セッション管理**: `includes/http/Session.php`

### 7.2 データ保護
- **SQLインジェクション対策**: PearDatabaseクラス
- **XSS対策**: HTMLPurifier使用
- **CSRF対策**: `csrf-magic`ライブラリ
- **ファイルアップロード**: `storage/`ディレクトリで隔離

## 8. 多言語対応

### 8.1 言語ファイル構造
```
languages/
├── ja_jp/                     # 日本語（メイン）
│   ├── Accounts.php          # モジュール別翻訳
│   ├── Vtiger.php            # 共通翻訳
│   └── Install.php           # インストール用翻訳
└── en_us/                     # 英語
```

### 8.2 翻訳関数
```php
// PHP内
vtranslate('LBL_SAVE', 'Accounts')

// Smartyテンプレート内
{vtranslate('LBL_SAVE', $MODULE_NAME)}
```

## 9. 拡張とカスタマイズ

### 9.1 vtlibによるモジュール管理
- **モジュール作成**: `vtlib/Vtiger/Module.php`
- **フィールド追加**: `vtlib/Vtiger/Field.php`
- **関連付け**: `vtlib/Vtiger/Link.php`

### 9.2 カスタムフィールド
- **UIType**: カスタムフィールドタイプ作成
- **設定画面**: システム設定 → フィールド管理
- **テンプレート**: `uitypes/`ディレクトリ

### 9.3 ワークフロー
- **エンジン**: `modules/com_vtiger_workflow/`
- **設定**: システム設定 → ワークフロー
- **カスタムタスク**: `modules/com_vtiger_workflow/tasks/`

この包括的なアーキテクチャ情報により、F-RevoCRMでの効率的な開発が可能になります。