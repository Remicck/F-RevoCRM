# F-RevoCRM vtranslate関数ドキュメント

## 概要

`vtranslate`関数は、F-RevoCRMの国際化（i18n）のコア機能で、日本語を主要言語とした多言語サポートを提供します。翻訳ルックアップ、文字列フォーマット、フォールバック機能を処理します。

## 関数定義

**場所:** `includes/runtime/LanguageHandler.php:283`

**シグネチャ:**
```php
function vtranslate($key, $moduleName = '')
```

**パラメータ:**
- `$key` (必須): 検索する翻訳キー/ラベル
- `$moduleName` (オプション): 翻訳のモジュールコンテキスト
- 追加パラメータ: sprintf形式のフォーマットをサポート

## 基本的な使用法

### シンプルな翻訳
```php
// モジュールコンテキストでの基本翻訳
vtranslate('LBL_SAVE', 'Accounts')  // 戻り値: "保存" (日本語) または "Save" (英語)

// 共通翻訳（モジュールなし）
vtranslate('LBL_CANCEL')           // Vtiger.phpの共通翻訳を使用
vtranslate('LBL_DELETE')           // 戻り値: "削除" (日本語) または "Delete" (英語)
```

### 文字列フォーマット
```php
// sprintf形式のパラメータを使用
vtranslate('LBL_RECORDS_FOUND', 'Vtiger', $count)  // "見つかったレコード: %d件" → "見つかったレコード: 25件"

// 複数パラメータ
vtranslate('LBL_STARRED_RECORD_TO', 'Vtiger', $from, $to)  // "%s から %s" → "田中 から 佐藤"
```

### Smartyテンプレートでの使用
```smarty
{vtranslate('LBL_ADD_RECORD', $MODULE)}
{vtranslate('LBL_TOTAL', $MODULE_NAME)}
{vtranslate('LBL_SEARCH', 'Vtiger')}
```

## 言語ファイル構造

### ディレクトリ構成
```
languages/
├── ja_jp/                    # 主要言語（日本語）
│   ├── Vtiger.php           # 共通翻訳
│   ├── Accounts.php         # アカウントモジュール翻訳
│   ├── Contacts.php         # コンタクトモジュール翻訳
│   ├── Settings/
│   │   ├── Vtiger.php       # 設定共通翻訳
│   │   ├── Currency.php     # 設定通貨モジュール
│   │   └── Users.php        # 設定ユーザモジュール
│   └── ...
├── en_us/                   # 英語翻訳
│   ├── Vtiger.php
│   └── ...
└── de_de/                   # ドイツ語翻訳
    └── ...
```

### 言語ファイル形式
```php
<?php
$languageStrings = array(
    // Basic labels
    'LBL_SAVE' => '保存',
    'LBL_CANCEL' => 'キャンセル',
    'LBL_DELETE' => '削除',
    
    // Module-specific labels
    'Account Name' => '顧客企業名',
    'Phone' => '電話番号',
    
    // Messages with placeholders
    'LBL_RECORDS_FOUND' => '見つかったレコード: %d件',
    'LBL_IMPORT_STEP' => 'ステップ %d / %d',
);

// JavaScript translations
$jsLanguageStrings = array(
    'JS_DUPLICATE_RECORD' => 'レコードの複製',
    'JS_SAME_REPORT_NAME' => '同名のレポートが存在します。',
    'JS_PLEASE_SELECT_ATLEAST_ONE_RECORD' => '少なくとも1つのレコードを選択してください。',
);
?>
```

## 翻訳解決プロセス

システムは以下の階層に従います：

1. **モジュール固有の翻訳**: `languages/{lang}/{module}.php`を確認
2. **ベースモジュール翻訳**: サブモジュール（例：`Settings.ModuleName`）の場合、ベースモジュールを確認
3. **共通翻訳**: 共通ラベルについて`languages/{lang}/Vtiger.php`を確認
4. **デフォルト言語フォールバック**: ユーザーの言語で見つからない場合、デフォルト言語を試行
5. **キーを返す**: 翻訳が見つからない場合、元のキーを返す

### `vtranslate('LBL_SAVE', 'Accounts')`の解決例

1. `languages/ja_jp/Accounts.php`で`LBL_SAVE`を確認
2. 見つからない場合、`languages/ja_jp/Vtiger.php`を確認
3. 見つからない場合、`languages/en_us/Accounts.php`（デフォルト言語）を確認
4. 見つからない場合、`languages/en_us/Vtiger.php`を確認
5. まだ見つからない場合、`'LBL_SAVE'`を返す

## JavaScript翻訳関数

**関数:** `vJSTranslate($key, $moduleName = '')`

**場所:** `includes/runtime/LanguageHandler.php:316`

**使用法:**
```javascript
// JavaScriptコード内で
var message = '{vJSTranslate("JS_DUPLICATE_RECORD", $MODULE)}';
var confirmMsg = '{vJSTranslate("JS_ARE_YOU_SURE", "Vtiger")}';
```

**アクセス対象:** 言語ファイルの`$jsLanguageStrings`配列

## 言語検出

システムは以下を通じて言語を決定します：

1. **ユーザー設定**: `Users_Record_Model::getCurrentUserModel()->get('language')`
2. **デフォルトフォールバック**: `config.inc.php`の`vglobal('default_language')`
3. **キャッシング**: 言語設定は`LanguageHandler::$userLanguage`にキャッシュされる

## 言語コンバーター機能

F-RevoCRMには高度な**言語コンバーター**システムが含まれています：

**モデル:** `Settings_LanguageConverter_Module_Model`

**機能:**
- 翻訳後の正規表現ベースの文字列置換
- モジュール固有および共通変換ルール
- `vtiger_language_rules`テーブルに保存されたデータベースルール
- 複雑なテキスト変換のサポート

**使用法:**
```php
// vtranslate後に自動的に適用される
$translated = vtranslate('LBL_SOME_TEXT', 'Module');
// 言語コンバータールールが自動的に適用される
```

## 一般的な翻訳パターン

### 標準ラベル
```php
// CRUD操作
vtranslate('LBL_ADD_RECORD', $module)     // "レコード追加"
vtranslate('LBL_EDIT_RECORD', $module)    // "レコード編集"
vtranslate('LBL_DELETE_RECORD', $module)  // "レコード削除"

// フォームアクション
vtranslate('LBL_SAVE')                    // "保存"
vtranslate('LBL_CANCEL')                  // "キャンセル"
vtranslate('LBL_BACK')                    // "戻る"
```

### エラーメッセージ
```php
vtranslate('LBL_INVALID_USERNAME_OR_PASSWORD')     // "ユーザ名またはパスワードが無効です"
vtranslate('LBL_FOLDER_EXISTS', $moduleName)       // "フォルダが既に存在します"
vtranslate('LBL_PERMISSION_DENIED')                // "アクセス権限がありません"
```

### モジュール固有ラベル
```php
// Accountsモジュール
vtranslate('Account Name', 'Accounts')             // "顧客企業名"
vtranslate('LBL_ACCOUNT_INFORMATION', 'Accounts')  // "顧客企業情報"

// Contactsモジュール  
vtranslate('Contact Name', 'Contacts')             // "担当者名"
vtranslate('Email', 'Contacts')                    // "メールアドレス"
```

## ベストプラクティス

### 1. 常にモジュールコンテキストを使用
```php
// 良い例
vtranslate('Phone', 'Contacts')

// 避けるべき（モジュール固有の翻訳が見つからない可能性）
vtranslate('Phone')
```

### 2. 適切なプレースホルダーを使用
```php
// 数値の場合
vtranslate('LBL_RECORDS_TOTAL', 'Vtiger', $count)  // %dを使用

// 文字列の場合
vtranslate('LBL_USER_WELCOME', 'Users', $username)  // %sを使用
```

### 3. 言語ファイルを確認
```php
// ラベルを使用する前に、以下に存在することを確認：
// languages/ja_jp/ModuleName.php
// languages/ja_jp/Vtiger.php（共通ラベルの場合）
```

### 4. JavaScript翻訳
```javascript
// クライアントサイドではvJSTranslateを使用
{vJSTranslate("JS_CONFIRM_DELETE", $MODULE)}

// JavaScriptコンテキストではvtranslateは使用しない
```

## 実装詳細

### コア翻訳メソッド
```php
// LanguageHandler.php内
public static function getTranslatedString($key, $moduleName = '') {
    $userLanguage = self::getLanguage();
    $translatedString = self::getTranslatedStringForLanguage($key, $moduleName, $userLanguage);
    
    if ($translatedString === null) {
        $defaultLanguage = vglobal('default_language');
        if ($userLanguage !== $defaultLanguage) {
            $translatedString = self::getTranslatedStringForLanguage($key, $moduleName, $defaultLanguage);
        }
    }
    
    return ($translatedString !== null) ? $translatedString : $key;
}
```

### キャッシングメカニズム
- 言語ファイルは最初の読み込み後にメモリにキャッシュされる
- ユーザー言語設定がキャッシュされる
- 翻訳文字列はモジュール・言語ごとにキャッシュされる

## 翻訳問題のデバッグ

### よくある問題と解決策

1. **翻訳が見つからない**
   - 言語ファイルにキーが存在するかを確認
   - モジュール名が正しいかを確認
   - Vtiger.phpへのフォールバックを確認

2. **間違ったモジュールコンテキスト**
   - 正しいモジュール名を使用していることを確認
   - 設定モジュールのSettings/プレフィックスを確認

3. **プレースホルダーの問題**
   - sprintf形式がパラメータと一致することを確認
   - 言語文字列の適切なエスケープを確認

### デバッグメソッド
```php
// 翻訳が存在するかを確認
$exists = array_key_exists('LBL_KEY', $languageStrings);

// 現在の言語を取得
$currentLang = Vtiger_Language_Handler::getLanguage();

// テスト用の特定言語を強制
// （LanguageHandler::$userLanguageを一時的に変更）
```

---

*このドキュメントはF-RevoCRMの完全なvtranslateシステムをカバーしています。言語ファイルの更新後は、実装されている場合はキャッシュをクリアすることを忘れないでください。*