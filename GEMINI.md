# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリでコードを書く際のガイダンスを提供します。

## プロジェクト概要

F-RevoCRMは、Vtiger CRMからフォークされた日本企業向けの高機能なCRMシステムです。キャンペーン・リード管理、顧客・商談管理、販売管理、サポート管理、プロジェクト管理まで幅広い顧客関係管理機能を提供します。

## 開発コマンド

### 環境構築
```bash
# Docker開発環境の立ち上げ
docker-compose up

# Composerによる依存関係のインストール
docker exec -it [container_id] bash
cd /var/www/html/
composer install

# 初期Git設定（不要な変更が表示されないようにする）
git update-index --assume-unchanged parent_tabdata.php
git update-index --assume-unchanged tabdata.php
git update-index --assume-unchanged user_privileges/user_privileges_1.php
```

### 開発環境へのアクセス
- 開発用URL: `http://localhost`
- データベースアクセス: host=db, user=root, password=docker

### Xdebugセットアップ
Xdebug 3がプリインストールされています。デバッグを有効にするには：
1. `docker-compose.yml`を編集し、XDEBUG_CONFIGのモードを"off"から"debug"に変更
2. WSL2の場合：`docker-compose.override.yml.example`を`docker-compose.override.yml`にコピーしてIP設定

## アーキテクチャ概要

### コアディレクトリ構造

**メインアプリケーションファイル:**
- `index.php` - メインエントリーポイント
- `config.inc.php` - メイン設定ファイル（config.template.phpから自動生成）
- `modules/` - コアビジネスロジックモジュール（Accounts、Contacts、Leadsなど）
- `includes/` - コアフレームワーククラスとユーティリティ
- `vtlib/` - モジュール管理用VTigerライブラリフレームワーク

**フロントエンド・UI:**
- `layouts/v7/` - SmartyテンプレートとUIコンポーネント
- `layouts/v7/modules/` - モジュール固有のテンプレート
- `layouts/v7/lib/` - サードパーティJavaScriptライブラリとCSSフレームワーク
- `layouts/v7/resources/` - アプリケーションJavaScriptとCSS

**データ・設定:**
- `storage/` - ファイルアップロードと文書
- `languages/` - 多言語翻訳ファイル
- `user_privileges/` - ユーザーアクセス制御ファイル
- `cache/` - アプリケーションキャッシュファイル

### モジュールアーキテクチャ

各ビジネスモジュールは一貫したMVCパターンに従います：
- `ModuleName.php` - メインモジュールクラス（レガシー）
- `models/` - データモデルとビジネスロジック
- `views/` - 異なるUI画面用のビューコントローラー
- `actions/` - データ操作用のアクションコントローラー
- `uitypes/` - カスタムフィールドタイプハンドラー

**共通モジュールコンポーネント:**
- `DetailView.php` - レコード詳細ビューロジック
- `ListView.php` - リスト/グリッドビューロジック
- `Record.php` - 個別レコード操作
- `Module.php` - モジュールレベル操作

### テンプレートシステム

Smartyテンプレートエンジンを使用：
- テンプレートは`layouts/v7/modules/ModuleName/`に配置
- 共有テンプレートは`layouts/v7/modules/Vtiger/`に配置
- UIコンポーネントはモジュラーで再利用可能

### データベース・ORM

- ADODB ベースのカスタムORMを使用
- データベーススキーマは`schema/DatabaseSchema.xml`
- マイグレーションスクリプトは`modules/Migration/schema/`

### 拡張システム

- `vtlib/` - モジュールのパッケージ化とインストールシステム
- モジュールはZIPファイルとしてパッケージ化・配布可能
- カスタムフィールド、ワークフロー、UIレイアウトは設定可能

## 開発ワークフロー

### 新機能の作成
1. `modules/`ディレクトリ内の対象モジュールを特定
2. 必要に応じてmodels、views、actionsを作成/修正
3. 対応する`layouts/v7/modules/`ディレクトリにテンプレートを追加
4. Docker環境でテスト
5. CONTRIBUTING.mdに従い日本語用語規則に従う

### カスタマイズ領域
- システム設定 → フィールド管理でカスタムフィールド
- システム設定 → ワークフローでワークフロー
- システム設定 → Eメールテンプレートでメールテンプレート
- vtlibシステムでUIレイアウト

### 言語サポート
- 主要言語：日本語（ja_jp）
- 翻訳ファイルは`languages/[locale]/`
- モジュール固有の翻訳は各言語ファイル内

## 技術要件

- PHP 7.4-8.3
- MySQL 5.6+
- Apache 2.4+ with mod_rewrite
- 依存関係管理用Composer
- 開発環境用Docker

## 重要な注意事項

- これはURL経由でアクセスするWebアプリケーション（CLIではない）
- 設定ファイルはテンプレートから自動生成される
- storage/とcache/ディレクトリのファイル権限が重要
- セキュリティとURL書き換えに.htaccessを使用
- 専用Mobileモジュールでモバイルサポート