# F-RevoCRM クラス継承システム詳細

## 概要
F-RevoCRMのファイルベースのクラス継承システムとオブジェクト指向の継承管理について詳しく解説します。

## 1. クラスローダーシステム

### 1.1 Vtiger_Loaderクラス
`includes/Loader.php`に実装された中核的なクラスローダー：

```php
class Vtiger_Loader {
    // クラス名からファイルパス解決
    public static function resolveNameToPath($name, $type = 'php')
    
    // ファイルインクルード（キャッシュ機能付き）
    public static function includeOnce($filePath)
    
    // コンポーネントクラス名解決
    public static function getComponentClassName($componentType, $componentName, $qualifiedModuleName)
    
    // SPLオートローダー
    public static function autoLoad($className)
}
```

### 1.2 オートローディング設定
```php
// includes/Loader.phpで自動設定
spl_autoload_register('Vtiger_Loader::autoLoad');
```

### 1.3 クラス名解決ルール
```php
// 基本パターン: Module_Component_Type
$className = $moduleClassPath . '_' . $componentName . '_' . $componentType;

// 例:
// Accounts_Detail_View
// Accounts_Record_Model  
// Settings_Users_List_View
```

## 2. 基底クラス階層

### 2.1 最基底クラス
```
Vtiger_Base_Model (includes/runtime/BaseModel.php)
├── データ管理機能 ($valueMap)
├── アクセサーメソッド (get/set/has/isEmpty)
├── SQL安全化 (getForSql)
└── 一括データ操作 (setData/getData)
```

### 2.2 コントローラー階層
```
Vtiger_Controller (includes/runtime/Controller.php)
├── 抽象基底コントローラー
├── 認証・権限チェック機能
├── リクエスト検証
└── エクスポーズドメソッド管理

Vtiger_Action_Controller (継承)
├── アクション系処理
├── checkPermission()
├── validateRequest()  
└── process()

Vtiger_View_Controller (継承)
├── ビュー系処理
├── Smartyビューワー管理
├── テンプレート処理
└── レスポンス生成
```

### 2.3 View系継承チェーン
```
Vtiger_View_Controller
    ↓
Vtiger_Header_View (modules/Vtiger/views/Header.php)
    ↓ preProcess(), postProcess()
Vtiger_Footer_View (modules/Vtiger/views/Footer.php)  
    ↓ ヘッダー・フッター管理
Vtiger_Basic_View (modules/Vtiger/views/Basic.php)
    ↓ 基本ビュー機能
Vtiger_Index_View (modules/Vtiger/views/Index.php)
    ↓ インデックス画面処理
Vtiger_Detail_View (modules/Vtiger/views/Detail.php)
    ↓ 詳細画面処理
Accounts_Detail_View (modules/Accounts/views/Detail.php)
    ↓ Accounts固有の詳細画面処理
```

## 3. モデルクラス継承

### 3.1 Record Model階層
```
Vtiger_Base_Model
    ↓
Vtiger_Record_Model (modules/Vtiger/models/Record.php)
    ↓ レコード操作基本機能
Accounts_Record_Model (modules/Accounts/models/Record.php)
    ↓ Accounts固有のレコード処理
```

### 3.2 Module Model階層
```
Vtiger_Base_Model
    ↓
Vtiger_Module_Model (modules/Vtiger/models/Module.php)
    ↓ モジュール管理機能
Accounts_Module_Model (modules/Accounts/models/Module.php)
    ↓ Accounts固有のモジュール処理
```

### 3.3 DetailView Model階層
```
Vtiger_Base_Model
    ↓
Vtiger_DetailView_Model (modules/Vtiger/models/DetailView.php)
    ↓ 詳細画面データ構造管理
Accounts_DetailView_Model (modules/Accounts/models/DetailView.php)
    ↓ Accounts固有の詳細画面構造
```

## 4. レガシーとの共存（二重アーキテクチャ）

### 4.1 CRMEntityベース（レガシー）
```
CRMEntity (data/CRMEntity.php)
    ↓ SugarCRM由来の基底クラス
    ↓ 低レベルCRUD操作
Accounts (modules/Accounts/Accounts.php)
    ↓ Accounts固有のエンティティ処理
```

### 4.2 新旧システムの連携
```php
// Vtiger_Record_ModelがCRMEntityをラップ
class Vtiger_Record_Model extends Vtiger_Base_Model {
    protected $entity;  // CRMEntityインスタンス
    
    public function getEntity() {
        return $this->entity;
    }
    
    public function save() {
        return $this->entity->save();  // CRMEntityの機能を使用
    }
}
```

## 5. フォールバック機能

### 5.1 クラス解決のフォールバック順序
```php
// getComponentClassName()での解決順序
1. モジュール固有クラス
   modules/Accounts/views/Detail.php → Accounts_Detail_View

2. 中間フォールバック（Settings系）
   modules/Settings/Vtiger/views/Detail.php → Settings_Vtiger_Detail_View

3. 基底クラス
   modules/Vtiger/views/Detail.php → Vtiger_Detail_View
```

### 5.2 実装例
```php
public static function getComponentClassName($componentType, $componentName, $qualifiedModuleName) {
    // 1. モジュール固有クラス
    $moduleSpecificClassName = $moduleClassPath . '_' . $componentName . '_' . $componentType;
    if (class_exists($moduleSpecificClassName)) {
        return $moduleSpecificClassName;
    }
    
    // 2. 基底クラスフォールバック
    $fallbackClassName = 'Vtiger_' . $componentName . '_' . $componentType;
    if (class_exists($fallbackClassName)) {
        return $fallbackClassName;
    }
    
    throw new Exception("Class not found");
}
```

## 6. 具体的なクラス実装例

### 6.1 Accounts_Detail_View
```php
// modules/Accounts/views/Detail.php
class Accounts_Detail_View extends Vtiger_Detail_View {
    
    // 基底クラスの機能を継承しつつ、Accounts固有の処理を追加
    public function showModuleDetailView($request) {
        // Accounts固有の追加データ設定
        $recordModel = $this->record->getRecord();
        $hierarchyData = $this->getHierarchyData($recordModel);
        
        $viewer = $this->getViewer($request);
        $viewer->assign('HIERARCHY_DATA', $hierarchyData);
        
        // 基底クラスの処理を呼び出し
        parent::showModuleDetailView($request);
    }
    
    // Accounts固有のメソッド
    private function getHierarchyData($recordModel) {
        // 企業階層データの取得処理
    }
}
```

### 6.2 Accounts_Record_Model
```php
// modules/Accounts/models/Record.php
class Accounts_Record_Model extends Vtiger_Record_Model {
    
    // Accounts固有のビジネスロジック
    public function getHierarchyAccounts() {
        // 階層企業の取得
        return $this->getRelatedRecords('Accounts', 'parent_id');
    }
    
    // 基底メソッドのオーバーライド
    public function getDisplayName() {
        return $this->get('accountname');
    }
    
    // Accounts固有の保存前処理
    public function save() {
        $this->validateAccountData();
        return parent::save();
    }
    
    private function validateAccountData() {
        // Accounts固有のバリデーション
    }
}
```

### 6.3 Vtiger_Detail_View（基底クラス）
```php
// modules/Vtiger/views/Detail.php
class Vtiger_Detail_View extends Vtiger_Index_View {
    
    protected $record = false;
    
    public function process(Vtiger_Request $request) {
        $mode = $request->getMode();
        if(!empty($mode)) {
            $this->invokeExposedMethod($mode, $request);
            return;
        }
        $this->showModuleDetailView($request);
    }
    
    public function showModuleDetailView($request) {
        $recordId = $request->get('record');
        $moduleName = $request->getModule();
        
        $recordModel = Vtiger_Record_Model::getInstanceById($recordId, $moduleName);
        $recordStructure = Vtiger_RecordStructure_Model::getInstanceForModule($moduleName);
        
        $viewer = $this->getViewer($request);
        $viewer->assign('RECORD', $recordModel);
        $viewer->assign('RECORD_STRUCTURE', $recordStructure);
        $viewer->assign('MODULE_NAME', $moduleName);
        
        $viewer->view('DetailViewFullContents.tpl', $moduleName);
    }
}
```

## 7. vtlibによるモジュール管理

### 7.1 Vtiger_Moduleクラス
```php
// vtlib/Vtiger/Module.php
class Vtiger_Module {
    // モジュール作成
    public static function getInstance($moduleName)
    
    // データベースへの登録
    public function save()
    
    // 関連リスト追加
    public function setRelatedList($relatedModule, $label, $actions)
    
    // 権限設定
    public function setDefaultSharing($permission)
}
```

### 7.2 モジュール拡張の例
```php
// 新しいモジュールの作成例
$module = new Vtiger_Module();
$module->name = 'CustomModule';
$module->save();

// フィールド追加
$field = new Vtiger_Field();
$field->name = 'custom_field';
$field->table = 'vtiger_custommodule';
$field->column = 'custom_field';
$field->uitype = 1;  // テキストフィールド
$field->label = 'LBL_CUSTOM_FIELD';
$module->addField($field);
```

## 8. 開発時のベストプラクティス

### 8.1 クラス作成時の注意点
1. **命名規則**: `{Module}_{Component}_{Type}`を厳守
2. **継承**: 適切な基底クラスを選択
3. **フォールバック**: 基底クラスの機能を活用
4. **オーバーライド**: 必要最小限に留める

### 8.2 よくある実装パターン
```php
// 基底クラスの機能拡張
public function process($request) {
    // 前処理
    $this->preProcessCustom($request);
    
    // 基底クラスの処理
    parent::process($request);
    
    // 後処理  
    $this->postProcessCustom($request);
}

// 条件によるフォールバック
public function getCustomData() {
    $customData = $this->getModuleSpecificData();
    if (empty($customData)) {
        return $this->getDefaultData();
    }
    return $customData;
}
```

### 8.3 デバッグのコツ
```php
// クラス継承チェーンの確認
$reflectionClass = new ReflectionClass('Accounts_Detail_View');
$parentClass = $reflectionClass->getParentClass();
echo "Parent: " . $parentClass->getName();

// 使用されているクラスの確認
echo "Actual class: " . get_class($viewInstance);
```

この継承システムにより、F-RevoCRMは拡張性と保守性を両立した柔軟なアーキテクチャを実現しています。