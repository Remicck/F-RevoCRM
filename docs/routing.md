# F-RevoCRM ルーティングシステム詳細

## 概要
F-RevoCRMのURL構造とリクエスト処理の詳細な仕組みについて解説します。

## 1. URL構造の基本

### 1.1 基本パターン
```
index.php?module=MODULE&view=VIEW&action=ACTION&record=ID&param=value
```

### 1.2 パラメータ詳細
| パラメータ | 必須 | 説明 | 例 |
|-----------|------|------|-----|
| module | ◯ | モジュール名 | Accounts, Contacts, Settings:Users |
| view | △ | ビュー名（未指定時：Index） | List, Detail, Edit |
| action | △ | アクション名 | Save, Delete, MassDelete |
| record | △ | レコードID | 123, 456 |

### 1.3 階層モジュール
設定系モジュールは`:`区切りで階層を表現：
```
module=Settings:Users       → modules/Settings/Users/
module=Settings:Workflows   → modules/Settings/Workflows/
```

## 2. リクエスト処理フロー

### 2.1 処理順序
```
1. index.php (エントリーポイント)
    ↓
2. includes/main/WebUI.php (メインコントローラー)
    ↓
3. includes/Loader.php (クラス解決)
    ↓
4. modules/MODULE/views|actions/COMPONENT.php (実行)
```

### 2.2 WebUI.phpでの処理詳細

#### リクエスト解析
```php
$module = $request->getModule();          // moduleパラメータ
$view = $request->get('view');           // viewパラメータ
$action = $request->get('action');       // actionパラメータ
```

#### デフォルト値設定
```php
// module未指定時の処理
if (empty($module)) {
    if ($this->isUserLoggedIn()) {
        $module = $this->getDefaultModule();  // ユーザーのデフォルトページ
    } else {
        $module = 'Users';                    // ログイン画面
    }
}

// view未指定時
if (empty($view)) {
    $view = 'Index';
}
```

#### コンポーネント特定
```php
if (!empty($action)) {
    $componentType = 'Action';
    $componentName = $action;
} else {
    $componentType = 'View';  
    $componentName = $view;
}
```

## 3. クラス解決システム

### 3.1 Loader.phpの仕組み

#### クラス名生成ルール
```php
// 基本パターン: Module_Component_Type
$className = $moduleClassPath . '_' . $componentName . '_' . $componentType;

// 例:
// Accounts_Detail_View
// Accounts_Save_Action
// Settings_Users_List_View
```

#### ファイルパス解決
```php
// ディレクトリマッピング
$componentTypeDirectory = strtolower($componentType) . 's';
// 'View' → 'views', 'Action' → 'actions'

// ファイルパス構築
$filePath = 'modules.' . $moduleDir . '.' . $componentTypeDirectory . '.' . $componentName;
// 例: modules.Accounts.views.Detail
```

### 3.2 フォールバック機能

#### 解決順序
1. **モジュール固有**: `modules/Accounts/views/Detail.php`
2. **中間階層**: `modules/Settings/Vtiger/views/Detail.php` (Settings系の場合)
3. **基底クラス**: `modules/Vtiger/views/Detail.php`

#### 具体例
```php
// Accounts_Detail_View クラスを探す場合
1. modules/Accounts/views/Detail.php → Accounts_Detail_View
2. (見つからない場合) modules/Vtiger/views/Detail.php → Vtiger_Detail_View
```

## 4. 具体的なURL例

### 4.1 基本的な画面遷移

#### 企業一覧画面
```
URL: index.php?module=Accounts&view=List
クラス: Accounts_List_View
ファイル: modules/Accounts/views/List.php
テンプレート: layouts/v7/modules/Accounts/ListViewContents.tpl
```

#### 企業詳細画面
```
URL: index.php?module=Accounts&view=Detail&record=123
クラス: Accounts_Detail_View  
ファイル: modules/Accounts/views/Detail.php
テンプレート: layouts/v7/modules/Accounts/DetailViewFullContents.tpl
```

#### 企業編集画面
```
URL: index.php?module=Accounts&view=Edit&record=123
クラス: Accounts_Edit_View
ファイル: modules/Vtiger/views/Edit.php (フォールバック)
テンプレート: layouts/v7/modules/Vtiger/EditView.tpl
```

### 4.2 アクション処理

#### 保存アクション
```
URL: index.php?module=Accounts&action=Save
クラス: Accounts_Save_Action
ファイル: modules/Vtiger/actions/Save.php (フォールバック)
処理: データ保存後、詳細画面にリダイレクト
```

#### 削除アクション
```
URL: index.php?module=Accounts&action=Delete&record=123
クラス: Accounts_Delete_Action
ファイル: modules/Vtiger/actions/Delete.php (フォールバック)
処理: レコード削除後、一覧画面にリダイレクト
```

### 4.3 設定画面

#### ユーザー管理一覧
```
URL: index.php?module=Settings:Users&view=List
クラス: Settings_Users_List_View
ファイル: modules/Settings/Users/views/List.php
テンプレート: layouts/v7/modules/Users/ListViewContents.tpl
```

#### システム設定詳細
```
URL: index.php?module=Settings:Vtiger&view=Index
クラス: Settings_Vtiger_Index_View
ファイル: modules/Settings/Vtiger/views/Index.php
テンプレート: layouts/v7/modules/Settings/Vtiger/Index.tpl
```

## 5. 特殊なルーティング

### 5.1 Ajax リクエスト
```
URL: index.php?module=Accounts&action=DetailAjax&record=123
レスポンス: JSON形式のデータ
ヘッダー: Content-Type: application/json
```

### 5.2 ポップアップ画面
```
URL: index.php?module=Accounts&view=Popup&src_module=Contacts
用途: 関連レコード選択ポップアップ
テンプレート: layouts/v7/modules/Vtiger/Popup.tpl
```

### 5.3 Quick Create
```
URL: index.php?module=Accounts&view=QuickCreateAjax
クラス: Accounts_QuickCreateAjax_View  
ファイル: modules/Accounts/views/QuickCreateAjax.php
用途: ヘッダーの「+」ボタンからの新規作成
```

## 6. パラメータとデータの受け渡し

### 6.1 リクエストパラメータの取得
```php
// Viewクラス内での取得方法
public function process(Vtiger_Request $request) {
    $module = $request->getModule();
    $recordId = $request->get('record');
    $mode = $request->get('mode');
    $sourceModule = $request->get('src_module');
}
```

### 6.2 よく使用されるパラメータ
| パラメータ | 用途 | 例 |
|-----------|------|-----|
| record | レコードID | 123 |
| mode | 処理モード | edit, duplicate |
| src_module | 呼び出し元モジュール | Contacts |
| relationId | 関連レコードID | 456 |
| page | ページ番号 | 1, 2, 3 |
| orderby | ソート項目 | accountname |
| sortorder | ソート順 | ASC, DESC |

### 6.3 データの引き継ぎ
```php
// ビューからアクションへのデータ引き継ぎ
// Edit.php (view) → Save.php (action)
$editData = $request->getAll();  // 全フォームデータを取得
```

## 7. エラーハンドリング

### 7.1 権限エラー
```
条件: ユーザーがアクセス権限を持たない
結果: OperationNotPermitted.tpl テンプレート表示
```

### 7.2 存在しないレコード
```
条件: 指定したrecordが存在しない
結果: NotAccessible.tpl テンプレート表示
```

### 7.3 存在しないモジュール/ビュー
```
条件: 指定したモジュールやビューが存在しない
結果: クラスローダーがフォールバック、または404エラー
```

このルーティングシステムにより、F-RevoCRMは柔軟かつ拡張性の高いURL処理を実現しています。