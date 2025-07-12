# CLAUDE.md

このファイルは、このリポジトリのコードで作業する際にClaude Code (claude.ai/code) に指導を提供します。

## 概要

F-RevoCRMは、Vtiger CRMをベースとした日本語ローカライズされた顧客関係管理（CRM）システムです。セールス、マーケティング、サポート、プロジェクト管理モジュールを備えた本格的なエンタープライズCRMで、PHPで記述されています。

**主要技術:**
- PHP 7.4-8.3
- MySQL 5.6+
- Smarty 4.3 テンプレートエンジン
- カスタムMVCアーキテクチャ
- Docker開発環境

## 一般的な開発コマンド

### セットアップと依存関係
```bash
# PHP依存関係のインストール（初回使用前に必要）
composer install

# Docker開発環境
docker-compose up

# Dockerコンテナへのアクセス
docker ps
docker exec -it [container_id] bash
```

### データベースアクセス（Docker）
- ホスト: `db`
- ユーザー: `root`
- パスワード: `docker`

### 重要なGit設定
クローン後、以下のコマンドを実行してローカル設定変更を無視します：
```bash
git update-index --assume-unchanged parent_tabdata.php
git update-index --assume-unchanged tabdata.php
git update-index --assume-unchanged user_privileges/user_privileges_1.php
```

## アーキテクチャ概要

### モジュールシステム
F-RevoCRMは、各CRM機能が個別のモジュールであるモジュールベースアーキテクチャを使用します：
- コアモジュール: `modules/` (Accounts、Contacts、Leadsなど)
- 各モジュールはモデル、ビュー、アクションを持つMVCパターンに従います
- `vtlib/` でのモジュール登録とデータベースでのモジュールメタデータ

### リクエストフロー
1. すべてのリクエストは `index.php` を通ります
2. `includes/main/WebUI.php` がルーティングを処理します
3. Module/Action/Viewパターン: `?module=Contacts&view=Detail&record=123`
4. `modules/[ModuleName]/views/` および `modules/[ModuleName]/actions/` のコントローラ

### 主要ディレクトリ
- `data/`: コアCRMエンティティクラス（CRMEntityベースクラス）
- `include/`: コアユーティリティ（データベース、ユーティリティ、フィールド）
- `includes/`: ランタイムコンポーネント、リクエスト処理
- `vtlib/`: モジュール管理とカスタマイゼーションフレームワーク
- `layouts/v7/`: Smartyテンプレートとフロントエンドアセット
- `languages/`: ローカライゼーションファイル（主に日本語）

### データベースパターン
- テーブルは `vtiger_` でプレフィックス
- エンティティデータは複数のテーブルに分割
- カスタムフィールドは `vtiger_[module]cf` テーブル
- メタデータ駆動のフィールド定義

### 設定
- メイン設定: `config.inc.php` (`config.template.php` から生成)
- セキュリティ設定: `config.security.php`
- ユーザー権限は `user_privileges/` にキャッシュ

### Webサービス
統合用のREST APIが `webservice.php` とWebservicesモジュールを通じて利用可能です。

## 開発ノート

### テスト
現在、F-RevoCRMには自動テストがありません。テストは手動で行われます。

### コード品質
リンティングツールは設定されていません。コードベースの既存のコードパターンに従ってください。

### カスタマイゼーション
- モジュールカスタマイゼーションにはvtlibフレームワークを使用
- カスタムモジュールは `modules/` ディレクトリに配置
- 既存のモジュール構造をテンプレートとして使用

### 日本語ローカライゼーション
主要言語は日本語です。言語ファイルは `languages/ja_jp/` にあります。

## Claude Code用ドキュメント

F-RevoCRMは、Claude Code使用のための包括的なドキュメントを維持しています：

### ドキュメントファイル
- `doc/schema.md`: 完全なデータベーススキーマドキュメント
- `doc/fields.md`: モジュールフィールドマッピングを含むvtiger_fieldテーブルドキュメント
- `doc/vtranslate.md`: vtranslate関数の包括的なドキュメントと使用ガイド
- `doc/directory-structure.md`: プロジェクトディレクトリ構造と組織ガイド
- `doc/frontend-ui.md`: フロントエンドJavaScript/UI開発ガイド（jQuery.class、Modal、Alert、共通UIコンポーネント）
- `doc/layouts.md`: Smartyテンプレートとレイアウトシステムガイド
- `doc/url-structure-mvc.md`: URLルーティングとMVCパターンドキュメント
- `doc/class/ModuleModel.md`: ModuleModelクラスドキュメントとAPIリファレンス
- `doc/class/RecordModel.md`: RecordModelクラスドキュメントとAPIリファレンス
- スキーマファイルは各更新ツールによって自動生成されます

### スキーマ更新ツール
```bash
# データベーススキーマドキュメントの更新
php setup/tools/UpdateDBSchema.php

# フィールドドキュメントの更新（vtiger_field分析）
php setup/tools/UpdateFields.php
```

ドキュメントには以下が含まれます：
- モジュール定義と関係
- カラム、インデックス、制約を含む完全なテーブル構造
- UIとデータベース間のフィールドマッピング
- カスタムフィールド設定
- データベースメタデータと統計
- UIタイプとフィールドプロパティを含むvtiger_field分析
- ブロックとシーケンスによるモジュールフィールド組織
- vtranslate関数の完全な使用法と国際化ガイド
- 言語ファイル構造と翻訳パターン
- 日本語ローカライゼーションのベストプラクティス
- プロジェクトディレクトリ構造とファイル組織
- フロントエンドJavaScript開発パターン（jQuery.class、Modal、Alert、UI共通コンポーネント）
- Smartyテンプレートシステムとレイアウト構造
- URLルーティングとMVCアーキテクチャ
- コアクラスドキュメント（ModuleModel、RecordModel）
- APIリファレンスと使用パターン

### 開発での使用法
ドキュメントは以下の用途に役立ちます：
- モジュール関係と依存関係の理解
- 適切なSQLクエリの生成
- 既存のデータ構造と統合する新機能の実装
- フィールドタイプ、制約、検証ルールの理解
- 各モジュールで利用可能なフィールドの検索
- UIタイプとフィールド動作の理解
- カスタムフィールドとシステムフィールドの識別
- 適切なフィールドマッピングでフォームとビューの作成
- 国際化のためのvtranslate関数の正しい使用
- 日本語ローカライゼーションパターンの理解
- 言語ファイルと翻訳キーの操作
- 適切な多言語サポートの実装
- プロジェクト構造の効率的なナビゲーション
- フロントエンドJavaScript開発（jQuery.class継承、Modal/Alert表示、UI共通コンポーネント活用）
- Smartyテンプレート作成とレイアウトシステムの理解
- URLルーティングとMVCパターンの実装
- コアクラス（ModuleModel、RecordModel）の適切な使用
- MVCパターンとクラス階層の理解

**重要:** データベースやフィールドの変更を行った後は、必ず各更新ツールを実行してください：
- データベース構造変更の場合: `setup/tools/UpdateDBSchema.php`
- フィールド設定変更の場合: `setup/tools/UpdateFields.php`

### playwright-mcp
開発環境では username: admin : password: Admin1234/ でログイン可能である
