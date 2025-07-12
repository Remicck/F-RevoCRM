# F-RevoCRM ディレクトリ構成

## 概要

F-RevoCRM は日本語ローカライズされたCRMシステムで、PHP をベースとしたモジュラー型のアーキテクチャを採用しています。このドキュメントでは、プロジェクトの主要ディレクトリとその役割について説明します。

## ルートディレクトリ構成

```
F-RevoCRM/
├── assets/                    # 生成されたアセットファイル
├── cache/                     # キャッシュファイル
├── config*.php               # 設定ファイル群
├── cron/                     # バックグラウンドタスク関連
├── data/                     # エンティティクラス
├── doc/                      # プロジェクトドキュメント
├── docker/                   # Docker環境設定
├── include/                  # レガシーのユーティリティ・ライブラリ
├── includes/                 # コアシステム（ランタイム、ローダーなど）
├── kcfinder/                 # ファイルマネージャー
├── languages/                # 多言語対応ファイル
├── layouts/                  # フロントエンドテンプレート・アセット
├── libraries/                # サードパーティライブラリ
├── logs/                     # ログファイル
├── migrate/                  # データベースマイグレーション
├── modules/                  # CRMモジュール（メイン機能）
├── packages/                 # パッケージファイル
├── resources/                # 共有リソース
├── schema/                   # データベーススキーマ
├── setup/                    # インストール・セットアップ
├── storage/                  # ファイルストレージ
├── test/                     # テストファイル
├── user_privileges/          # ユーザー権限設定
├── vendor/                   # Composer依存関係
├── vtlib/                    # vtigerライブラリ
├── index.php                 # エントリーポイント
└── webservice.php           # Web API エントリーポイント
```

## 主要ディレクトリの詳細

### 1. `/modules/` - CRMモジュール（メイン機能）

各CRM機能を独立したモジュールとして実装。MVCパターンに基づく構造。

```
modules/
├── Accounts/                 # 取引先管理
├── Assets/                   # 資産管理
├── Calendar/                 # カレンダー・活動管理
├── Campaigns/                # キャンペーン管理
├── Contacts/                 # 連絡先管理
├── Documents/                # ドキュメント管理
├── EmailTemplates/           # メールテンプレート
├── Emails/                   # メール管理
├── Events/                   # イベント管理
├── Faq/                      # FAQ管理
├── HelpDesk/                 # ヘルプデスク・チケット管理
├── Home/                     # ダッシュボード
├── Import/                   # データインポート
├── Inventory/                # 在庫管理
├── Invoice/                  # 請求書管理
├── Leads/                    # リード管理
├── Potentials/               # 商談管理
├── Products/                 # 製品管理
├── Project/                  # プロジェクト管理
├── Reports/                  # レポート機能
├── Settings/                 # システム設定
├── Users/                    # ユーザー管理
└── Vtiger/                   # コア機能（ベースクラス等）
```

#### モジュール内部構造

各モジュールは以下の構造を持ちます：

```
{ModuleName}/
├── {ModuleName}.php          # エンティティクラス（データ操作）
├── actions/                  # アクションクラス（Controller）
│   ├── Save.php             # データ保存処理
│   ├── Delete.php           # データ削除処理
│   └── ...
├── models/                   # モデルクラス（ビジネスロジック）
│   ├── Module.php           # モジュールモデル
│   ├── Record.php           # レコードモデル
│   ├── ListView.php         # リストビューモデル
│   ├── DetailView.php       # 詳細ビューモデル
│   └── ...
├── views/                    # ビュークラス（View）
│   ├── List.php             # リストビュー
│   ├── Detail.php           # 詳細ビュー
│   ├── Edit.php             # 編集ビュー
│   └── ...
├── handlers/                 # イベントハンドラー
├── uitypes/                  # カスタムUIタイプ
└── schema.xml               # モジュール定義（vtlibで使用）
```

### 2. `/layouts/v7/` - フロントエンドテンプレート・アセット

Smarty テンプレートエンジンを使用したビューレイヤー。

```
layouts/v7/
├── lib/                      # サードパーティライブラリ
│   ├── bootstrap/           # Bootstrap CSS フレームワーク
│   ├── font-awesome/        # アイコンフォント
│   ├── jquery/              # jQuery と関連プラグイン
│   ├── momentjs/            # 日付ライブラリ
│   └── ...
├── modules/                  # モジュール固有テンプレート
│   ├── Accounts/            # 取引先モジュールのテンプレート
│   ├── Calendar/            # カレンダーモジュールのテンプレート
│   ├── Vtiger/              # 共通テンプレート
│   └── ...
├── resources/               # 共有リソース
│   ├── Images/              # 画像ファイル
│   ├── application.js       # メインJavaScript
│   ├── custom.css           # カスタムCSS
│   └── helper.js            # ヘルパーJavaScript
└── skins/                   # テーマ・スキン
    ├── contact/             # コンタクト テーマ
    ├── marketing/           # マーケティング テーマ
    ├── sales/               # セールス テーマ
    └── ...
```

### 3. `/includes/` - コアシステム

システムの基盤となるクラスとコンポーネント。

```
includes/
├── Loader.php               # クラスローダー
├── exceptions/              # カスタム例外クラス
├── http/                    # HTTP関連
│   ├── Request.php          # リクエスト処理
│   ├── Response.php         # レスポンス処理
│   └── Session.php          # セッション管理
├── main/                    # メインコントローラー
│   └── WebUI.php            # メインUI制御
└── runtime/                 # ランタイムクラス
    ├── BaseModel.php        # ベースモデルクラス
    ├── Cache.php            # キャッシュ機能
    ├── Controller.php       # ベースコントローラー
    ├── Viewer.php           # ビューワークラス
    └── ...
```

### 4. `/include/` - レガシーユーティリティ

vtiger CRM から継承されたレガシーコード。

```
include/
├── QueryGenerator/          # クエリ生成器
├── ListView/                # リストビュー制御
├── Webservices/             # Web API 実装
├── database/                # データベース抽象化層
├── fields/                  # フィールドタイプ処理
├── utils/                   # ユーティリティ関数
└── ...
```

### 5. `/languages/` - 多言語対応

各言語のローカライゼーションファイル。

```
languages/
├── ja_jp/                   # 日本語（メイン）
├── en_us/                   # 英語
├── en_gb/                   # イギリス英語
├── de_de/                   # ドイツ語
├── fr_fr/                   # フランス語
├── es_es/                   # スペイン語
└── ...
```

各言語ディレクトリ内：

```
ja_jp/
├── Accounts.php             # 取引先モジュールの翻訳
├── Calendar.php             # カレンダーモジュールの翻訳
├── Vtiger.php               # 共通翻訳
├── Home.php                 # ホーム画面の翻訳
└── ...
```

### 6. `/data/` - エンティティクラス

データ操作の基盤クラス。

```
data/
├── CRMEntity.php            # CRMエンティティベースクラス
├── Tracker.php              # 変更追跡機能
└── VTEntityDelta.php        # エンティティ差分管理
```

### 7. `/libraries/` - サードパーティライブラリ

外部ライブラリとコンポーネント。

```
libraries/
├── PHPExcel/                # Excel操作ライブラリ
├── tcpdf/                   # PDF生成ライブラリ
├── adodb_vtigerfix/         # データベース抽象化
├── jquery/                  # jQuery関連
├── bootstrap/               # Bootstrap CSS
├── csrf-magic/              # CSRF保護
├── freetag/                 # タグ機能
├── log4php/                 # ログ出力
└── ...
```

### 8. `/vtlib/` - vtigerライブラリ

vtiger CRM の拡張・カスタマイズ フレームワーク。

```
vtlib/
├── Vtiger/                  # vtigerコアクラス
│   ├── Module.php           # モジュール管理
│   ├── Field.php            # フィールド管理
│   ├── Block.php            # ブロック管理
│   └── ...
└── ...
```

### 9. `/cron/` - バックグラウンドタスク

定期実行タスクとスケジュール機能。

```
cron/
├── vtigercron.sh            # メインクロンスクリプト（Linux）
├── vtigercron.bat           # メインクロンスクリプト（Windows）
├── sendreminder.sh          # リマインダー送信
├── modules/                 # モジュール固有のクロンタスク
└── ...
```

### 10. `/user_privileges/` - ユーザー権限

ユーザー権限とアクセス制御設定。

```
user_privileges/
├── user_privileges_1.php    # ユーザー権限設定（ユーザーID別）
├── sharing_privileges_1.php # 共有権限設定
├── default_module_view.php  # デフォルトビュー設定
└── ...
```

### 11. `/cache/` - キャッシュ

テンプレートキャッシュと一時ファイル。

```
cache/
├── images/                  # 画像キャッシュ
├── import/                  # インポートキャッシュ
├── upload/                  # アップロードファイル
└── ...
```

### 12. `/storage/` - ファイルストレージ

ユーザーアップロードファイルと添付ファイル。

### 13. `/doc/` - プロジェクトドキュメント

開発者向けドキュメント。

```
doc/
├── class/                   # クラスドキュメント
│   ├── RecordModel.md      # RecordModel クラス説明
│   └── ModuleModel.md      # ModuleModel クラス説明
├── schema.md                # データベーススキーマ
├── fields.md                # フィールド定義
├── vtranslate.md            # 翻訳機能
└── directory-structure.md   # このファイル
```

### 14. `/setup/` - インストール・セットアップ

初期インストールとセットアップ機能。

### 15. `/docker/` - Docker環境

開発環境用のDocker設定。

```
docker/
├── docker-compose.yml       # Docker Compose設定
├── php/                     # PHP コンテナ設定
├── mysql/                   # MySQL コンテナ設定
└── ...
```

## 設定ファイル

```
├── config.inc.php           # メイン設定（自動生成）
├── config.template.php      # 設定テンプレート
├── config.db.php            # データベース設定
├── config.security.php      # セキュリティ設定
├── config.performance.php   # パフォーマンス設定
└── config.customize.php     # カスタマイズ設定
```

## 重要なエントリーポイント

- **`index.php`**: メインアプリケーション エントリーポイント
- **`webservice.php`**: Web API エントリーポイント
- **`public.php`**: パブリックアクセス（パスワードリセット等）
- **`cron/vtigercron.php`**: クロンタスク エントリーポイント

## データフロー

1. **リクエスト受信**: `index.php` → `includes/main/WebUI.php`
2. **ルーティング**: WebUI がモジュール・アクション・ビューを決定
3. **処理実行**: 
   - Action クラス（データ操作）
   - Model クラス（ビジネスロジック）
   - View クラス（画面表示）
4. **テンプレート処理**: Smarty エンジンでHTMLレンダリング
5. **レスポンス送信**: クライアントに結果を返送

## ファイル命名規則

### PHPクラス

- **モジュールクラス**: `{ModuleName}.php`
- **モデルクラス**: `{ModuleName}_{Type}_Model`
- **ビュークラス**: `{ModuleName}_{ViewName}_View`
- **アクションクラス**: `{ModuleName}_{ActionName}_Action`

### テンプレートファイル

- **ファイル拡張子**: `.tpl`
- **命名**: `{ViewName}.tpl` または `{ComponentName}.tpl`

### 言語ファイル

- **ファイル名**: `{ModuleName}.php`
- **配列名**: `$languageStrings`, `$jsLanguageStrings`

## 開発・拡張のポイント

### 1. 新しいモジュール作成

1. `/modules/{ModuleName}/` ディレクトリ作成
2. エンティティクラス、モデル、ビュー、アクションを実装
3. テンプレートファイルを `/layouts/v7/modules/{ModuleName}/` に作成
4. 言語ファイルを各言語ディレクトリに追加
5. vtlib を使用してモジュール登録

### 2. 既存モジュール拡張

- モジュール固有のクラスを継承
- カスタムフィールドやブロックを追加
- テンプレートをオーバーライド
- 言語ファイルを更新

### 3. カスタマイズのベストプラクティス

- コアファイルを直接変更せず、継承やフックを活用
- カスタムファイルは適切なディレクトリに配置
- バージョンアップ時の互換性を考慮
- ドキュメントを適切に更新

## 関連ツール

- **Composer**: PHP依存関係管理（`vendor/`）
- **Docker**: 開発環境（`docker/`）
- **スキーマ更新**: `setup/tools/UpdateDBSchema.php`
- **フィールド更新**: `setup/tools/UpdateFields.php`

このディレクトリ構成を理解することで、F-RevoCRM の拡張・カスタマイズ・メンテナンスが効率的に行えます。