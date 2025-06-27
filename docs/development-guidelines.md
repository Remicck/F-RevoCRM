# F-RevoCRM 開発ガイドライン

## 1. はじめに

このドキュメントは、F-RevoCRMプロジェクトにおける開発作業を円滑に進めるためのガイドラインです。特に、AI開発者（LLM）が自律的に開発タスクを遂行できるよう、具体的なワークフロー、コーディング規約、テスト方針などを定めることを目的とします。

既存のアーキテクチャ文書（`architecture.md`, `routing.md`など）を補完する、実践的な手引きとして利用してください。

## 2. 開発環境

基本的な環境構築の手順は `CLAUDE.md` を参照してください。

- **Dockerコンテナの起動:** `docker-compose up -d`
- **Composer依存関係のインストール:** `docker exec -it <container_id> composer install`
- **デバッグ:** Xdebugを利用します。詳細は `CLAUDE.md` の指示に従ってください。

## 3. コーディング規約

コードの品質と一貫性を保つため、以下の規約を遵守してください。

### PHP
- **スタイル:** [PSR-12](https://www.php-fig.org/psr/psr-12/) に準拠します。
- **命名規則:**
    - クラス名: `UpperCamelCase` (例: `MyAwesomeClass`)
    - メソッド名: `lowerCamelCase` (例: `myAwesomeMethod`)
    - 変数名: `lowerCamelCase`
    - 定数: `UPPER_SNAKE_CASE` (例: `MY_AWESOME_CONSTANT`)
- **ドキュメンテーション:** PHPDoc形式のコメントをクラス、メソッドに付与することを推奨します。

### 日本語の取り扱い
- **UI表示テキスト:** `languages/ja_jp/` 内の言語ファイルで管理します。コード内に日本語文字列をハードコーディングしないでください。
- **コメント・変数名:** 基本的に英語を使用しますが、日本の商習慣に特有の概念など、英語で表現しにくい場合に限り、ローマ字や日本語のコメントを許可します。
- **用語:** `CONTRIBUTING.md`内の日本語用語規則に従ってください。

## 4. 一般的な開発ワークフロー

機能追加やバグ修正は、以下のステップで進めます。

1.  **ブランチの作成:**
    - `main` ブランチから、作業内容に応じたブランチを作成します。
    - `feature/my-new-feature`
    - `bugfix/some-critical-bug`

2.  **バックエンドロジックの実装 (`modules/`)**
    - **モデルの変更:** `modules/{ModuleName}/models/` 内のモデルを修正・追加します。データベースの変更が必要な場合は、後述の「データベーススキーマの変更」を参照してください。
    - **アクションの変更:** ユーザー操作に応じた処理は `modules/{ModuleName}/actions/` 内に実装します。
    - **ビューの変更:** 画面表示のためのデータ準備は `modules/{ModuleName}/views/` 内で行います。

3.  **フロントエンド（UI）の実装 (`layouts/v7/`)**
    - **テンプレートの変更:** Smartyテンプレート（`.tpl`ファイル）を `layouts/v7/modules/{ModuleName}/` 内で修正・追加します。
    - **JavaScript/CSSの変更:**
        - `layouts/v7/resources/js/` や `layouts/v7/resources/css/` にあるファイルを修正します。
        - モジュール固有のJSは `layouts/v7/modules/{ModuleName}/resources/` に配置します。

4.  **データベーススキーマの変更**
    - スキーマの変更はマイグレーション機能を通じて行います。
    - `vtlib/Vtiger/Module.php` の `addColumn()` や `addTable()` などのAPIを利用して、適用・ロールバックが可能なスクリプトを作成します。
    - 直接SQLを実行するのではなく、フレームワークの機能を利用してください。

5.  **言語ファイルの更新**
    - 新しいラベルや文言を追加した場合は、`languages/ja_jp/{ModuleName}.php` などの関連する言語ファイルを更新します。

6.  **テストの実施**
    - 後述の「テスト」セクションに従い、必要なテストを実装・実行します。

7.  **プルリクエストの作成**
    - `main` ブランチに対してプルリクエストを作成します。
    - `PULL_REQUEST_TEMPLATE.md` に従い、変更内容を記述してください。

## 5. テスト

現在UnitTestは存在しない

## 6. WebサービスAPI

F-RevoCRMは `webservice.php` をエントリーポイントとするWebサービスAPIを提供しています。

- **エンドポイント:** `webservice.php`
- **認証:** `challenge-response` ベースの認証が必要です。`portal`などの既存クライアント実装を参考にしてください。
- **データ形式:** JSON
- **既存APIの確認:** `include/Webservices/` ディレクトリ以下に関数定義があります。新しいAPIを追加する際は、既存の作法に従ってください。

## 7. モジュール開発

新しいビジネスモジュールは `vtlib` を使って作成します。

1.  **パッケージの作成:** `vtlib/tools/console/` などを利用して、モジュールの雛形を作成します。
2.  **モジュール定義:** `manifest.xml` にモジュールの情報、依存関係、エンティティ情報などを記述します。
3.  **クラスの実装:** `modules/{NewModuleName}/` 以下に、MVCに沿ったクラスを実装します。
4.  **パッケージ化とインストール:** `vtlib` の機能を使ってモジュールをZIPファイルにパッケージ化し、CRMの「モジュール管理」画面からインストールします。

## 8. デバッグ

- **PHPエラー:** Dockerコンテナのログに出力されます。`docker logs -f <container_id>` で確認できます。
- **アプリケーションログ:** `logs/` ディレクトリにアプリケーションログが出力されます。
- **Xdebug:** `CLAUDE.md` の設定に従い、IDEと連携してステップ実行や変数の内容確認を行います。`XDEBUG_SESSION` をリクエストに含めることでデバッガが起動します。
