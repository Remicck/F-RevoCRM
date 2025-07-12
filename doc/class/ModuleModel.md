# ModuleModel クラス

## 概要

`Vtiger_Module_Model` は F-RevoCRM におけるCRMモジュールの中核的な抽象化クラスです。各CRMモジュール（取引先、連絡先、リード等）の機能、設定、メタデータを統一的に管理するためのベースモデルとして機能します。

## ファイル構成

- **メインクラス**: `modules/Vtiger/models/Module.php`
- **ベースクラス**: `vtlib/Vtiger/Module.php`

## クラス階層

```
Vtiger_Module (vtlibライブラリのベース)
  ↓ 継承
Vtiger_Module_Model (モジュールモデル)
  ↓ 継承
モジュール固有モジュールモデル (Accounts_Module_Model, Contacts_Module_Model等)
```

## 主要プロパティ

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `$blocks` | array/false | モジュールのブロック情報 |
| `$nameFields` | array/false | モジュールの名前フィールド |
| `$moduleMeta` | object/false | モジュールのメタ情報 |
| `$fields` | array/false | モジュールのフィールド情報 |
| `$relations` | array/null | モジュールの関連情報 |

## 主要メソッド

### 基本情報

#### `getId()` / `getName()`
- **機能**: モジュールID/名前の取得
- **戻り値**: Number (ID), String (名前)

#### `get($propertyName)` / `set($propertyName, $propertyValue)`
- **機能**: プロパティの取得・設定
- **戻り値**: Object (取得時), Vtiger_Module_Model (設定時)
- **例外**: 存在しないプロパティの場合はExceptionをスロー

#### `getSingularLabelKey()`
- **機能**: 単数形ラベルキーを取得
- **戻り値**: String (`SINGLE_{モジュール名}`)

### モジュール状態・機能チェック

#### `isActive()`
- **機能**: モジュールがアクティブかチェック
- **戻り値**: Boolean
- **詳細**: presence値が0または2の場合にtrue

#### `isEntityModule()`
- **機能**: エンティティタイプのモジュールかチェック
- **戻り値**: Boolean

#### `isQuickCreateSupported()`
- **機能**: クイック作成がサポートされているかチェック
- **戻り値**: Boolean

#### `isSummaryViewSupported()`
- **機能**: サマリービューがサポートされているかチェック
- **戻り値**: Boolean

#### `isTrackingEnabled()`
- **機能**: 変更追跡が有効かチェック
- **戻り値**: Boolean
- **詳細**: ModTrackerモジュールとの連携

#### `isCommentEnabled()`
- **機能**: コメント機能が有効かチェック
- **戻り値**: Boolean
- **詳細**: ModCommentsモジュールとの関連を確認

#### `isQuickPreviewEnabled()`
- **機能**: クイックプレビューが有効かチェック
- **戻り値**: Boolean

### レコード操作

#### `saveRecord(Vtiger_Record_Model $recordModel)`
- **機能**: レコードモデルを保存
- **引数**: Vtiger_Record_Model - 保存するレコード
- **戻り値**: Vtiger_Record_Model - 保存後のレコード（IDが設定される）

#### `deleteRecord(Vtiger_Record_Model $recordModel)`
- **機能**: レコードモデルを削除
- **引数**: Vtiger_Record_Model - 削除するレコード
- **詳細**: 論理削除（ごみ箱）と関連レコード移管処理を実行

### メタデータ・構造

#### `getModuleMeta($userModel = false)`
- **機能**: モジュールメタ情報を取得
- **引数**: $userModel - ユーザーモデル（オプション）
- **戻り値**: Vtiger_ModuleMeta_Model

#### `getColumnFieldMapping()`
- **機能**: カラム-フィールドマッピングを取得
- **戻り値**: Array

### ビューコンポーネント名

#### `getListViewName()` / `getDetailViewName()` / `getEditViewName()`
- **機能**: 各ビューのコンポーネント名を取得
- **戻り値**: String ('List', 'Detail', 'Edit')

#### `getDuplicateViewName()` / `getDeleteActionName()` / `getDefaultViewName()`
- **機能**: 複製ビュー、削除アクション、デフォルトビューのコンポーネント名を取得
- **戻り値**: String

### URL生成

#### `getDefaultUrl()` / `getListViewUrl()`
- **機能**: デフォルト/一覧ビューのURLを生成
- **戻り値**: String

#### `getCreateRecordUrl()` / `getQuickCreateUrl()`
- **機能**: レコード作成/クイック作成のURLを生成
- **戻り値**: String

#### `getImportUrl()` / `getExportUrl()` / `getPDFExportUrl()`
- **機能**: インポート/エクスポート/PDF出力のURLを生成
- **戻り値**: String

#### `getFindDuplicatesUrl()` / `getDashBoardUrl()`
- **機能**: 重複検索/ダッシュボードのURLを生成
- **戻り値**: String

#### `getDetailViewUrl($id)`
- **機能**: 指定レコードの詳細ビューURLを生成
- **引数**: $id - レコードID
- **戻り値**: String

### フィルター・カスタムビュー

#### `getAllFilterCvidForModule()`
- **機能**: 「すべて」フィルターのカスタムビューIDを取得
- **戻り値**: Number/false

#### `getListViewUrlWithAllFilter()`
- **機能**: 「すべて」フィルター付きの一覧ビューURLを取得
- **戻り値**: String

#### `getDefaultCustomFilter()`
- **機能**: デフォルトカスタムフィルターを取得
- **戻り値**: Number/false

### レコード生成・変換

#### `getRecordFromArray($valueArray, $rawData = false)`
- **機能**: 配列からレコードモデルインスタンスを生成
- **引数**: 
  - `$valueArray`: Array - 値の配列
  - `$rawData`: Boolean - 生データとして設定するか
- **戻り値**: Vtiger_Record_Model

### ブロック・フィールド管理

#### `getBlocks()`
- **機能**: モジュールの全ブロックを取得
- **戻り値**: Array - Vtiger_Block_Model の配列

#### `getFields($blockInstance = false)`
- **機能**: モジュールの全フィールドを取得
- **戻り値**: Array - Vtiger_Field_Model の配列

#### `getFieldsByType($type)`
- **機能**: 指定タイプのフィールドを取得
- **引数**: $type - フィールドタイプ（文字列または配列）
- **戻り値**: Array - Vtiger_Field_Model の配列

#### `getFieldsByLabel()` / `getFieldsById()`
- **機能**: ラベル/IDをキーとするフィールド配列を取得
- **戻り値**: Array

#### `getField($fieldName)`
- **機能**: 指定名のフィールドモデルを取得
- **引数**: $fieldName - フィールド名
- **戻り値**: Vtiger_Field_Model

#### `getFieldByColumn($columnName)`
- **機能**: 指定カラム名のフィールドモデルを取得
- **引数**: $columnName - カラム名
- **戻り値**: Vtiger_Field_Model/NULL

#### `getQuickCreateFields()`
- **機能**: クイック作成対応フィールドを取得
- **戻り値**: Array - Vtiger_Field_Model の配列

### 名前フィールド

#### `getNameFields()`
- **機能**: モジュールの名前を構成するフィールドを取得
- **戻り値**: Array - フィールド名の配列
- **詳細**: vtiger_entitynameテーブルから取得、キャッシュ機能付き

### 関連モジュール

#### `getRelations()`
- **機能**: モジュールの関連情報を取得
- **戻り値**: Array - Vtiger_Relation_Model の配列

### 最近のレコード

#### `getRecentRecords($limit = 10)`
- **機能**: 最近更新されたレコードを取得
- **引数**: $limit - 取得件数制限
- **戻り値**: Array - Vtiger_Record_Model の配列

#### `getDeletedRecordCondition()`
- **機能**: 削除済みレコード除外条件を取得
- **戻り値**: String

### ポップアップ・関連リスト

#### `getPopupFields()`
- **機能**: レコード選択ポップアップで表示するフィールドを取得
- **戻り値**: Array

#### `getRelatedListFields()`
- **機能**: 関連リストで表示するフィールドを取得
- **戻り値**: Array

#### `getConfigureRelatedListFields()`
- **機能**: 設定可能な関連リストフィールドを取得
- **戻り値**: Array

### ワークフロー・シーケンス

#### `isWorkflowSupported()`
- **機能**: ワークフローがサポートされているかチェック
- **戻り値**: Boolean

#### `hasSequenceNumberField()`
- **機能**: シーケンス番号フィールドがあるかチェック
- **戻り値**: Boolean
- **詳細**: UIType=4のフィールドの存在を確認

### 静的ファクトリメソッド

#### `getInstance($value)`
- **機能**: モジュールID/名前からモジュールモデルインスタンスを取得
- **引数**: $value - モジュールIDまたは名前
- **戻り値**: Vtiger_Module_Model

#### `getInstanceFromModuleObject(Vtiger_Module $moduleObj)`
- **機能**: Vtiger_Moduleオブジェクトからモジュールモデルを生成
- **戻り値**: Vtiger_Module_Model

#### `getInstanceFromArray($valueArray)`
- **機能**: 配列からモジュールモデルインスタンスを生成
- **戻り値**: Vtiger_Module_Model

#### `getCleanInstance($moduleName)`
- **機能**: 指定モジュールの新しいインスタンスを作成
- **戻り値**: Vtiger_Module_Model

### 全モジュール取得

#### `getAll($presence = array(), $restrictedModulesList = array(), $sequenced = false)`
- **機能**: CRMの全モジュールを取得
- **引数**:
  - `$presence`: 表示状態フィルター
  - `$restrictedModulesList`: 除外モジュールリスト
  - `$sequenced`: シーケンス順序
- **戻り値**: Array - モジュールモデルの配列

#### `getEntityModules()`
- **機能**: エンティティタイプのモジュールのみ取得
- **戻り値**: Array

#### `getSearchableModules()`
- **機能**: 検索可能なモジュールを取得
- **戻り値**: Array

#### `getPicklistSupportedModules()`
- **機能**: ピックリスト対応モジュールを取得
- **戻り値**: Array

### コメント・履歴

#### `getComments($pagingModel, $user, $dateFilter = '')`
- **機能**: モジュールの最新コメントを取得
- **引数**:
  - `$pagingModel`: ページングモデル
  - `$user`: ユーザーまたは'all'
  - `$dateFilter`: 日付フィルター
- **戻り値**: Array

#### `getHistory($pagingModel, $type = '', $userId = '', $dateFilter = '')`
- **機能**: コメントと最近の活動履歴を取得
- **引数**:
  - `$type`: 'comments', 'updates', 'all'
- **戻り値**: Array

### カレンダー活動

#### `getCalendarActivities($mode, $pagingModel, $user, $recordId = false)`
- **機能**: カレンダー活動を取得
- **引数**:
  - `$mode`: 'upcoming', 'overdue'
- **戻り値**: Array

### インポート・必須フィールド

#### `getRequiredFields($module = '')`
- **機能**: インポート時の必須フィールドを取得
- **戻り値**: Array

### 権限チェック

#### `isPermitted($actionName)`
- **機能**: 指定アクションが許可されているかチェック
- **引数**: $actionName - アクション名
- **戻り値**: Boolean

### 関連クエリ

#### `getSpecificRelationQuery($relatedModule)`
- **機能**: 特定関連モジュール用のクエリを取得
- **戻り値**: String

#### `getRelationQuery($recordId, $functionName, $relatedModule, $relationId)`
- **機能**: 関連レコード取得用クエリを生成
- **戻り値**: String

#### `getNonAdminAccessControlQueryForRelation($relatedModuleName)`
- **機能**: 非管理者用アクセス制御クエリを取得
- **戻り値**: String

### ダッシュボード

#### `getOwnerWhereConditionForDashBoards($owner)`
- **機能**: ダッシュボード用所有者WHERE条件を取得
- **戻り値**: String

### リンク・メニュー

#### `getModuleBasicLinks()`
- **機能**: モジュールの基本リンクを取得
- **戻り値**: Array

#### `getSettingLinks()`
- **機能**: 設定リンクを取得
- **戻り値**: Array

#### `getSideBarLinks($linkParams)`
- **機能**: サイドバーリンクを取得
- **戻り値**: Array

#### `getQuickMenuModels()`
- **機能**: クイックメニューモデルを取得
- **戻り値**: Array

### カスタマイズ・アップグレード

#### `isCustomizable()` / `isModuleUpgradable()` / `isExportable()`
- **機能**: カスタマイズ/アップグレード/エクスポート可能かチェック
- **戻り値**: Boolean

### ビューフィールド

#### `getSummaryViewFieldsList()`
- **機能**: サマリービュー用フィールドリストを取得
- **戻り値**: Array

#### `getHeaderViewFieldsList()`
- **機能**: ヘッダービュー用フィールドリストを取得
- **戻り値**: Array

#### `getHeaderAndSummaryViewFieldsList()`
- **機能**: ヘッダーとサマリービュー用フィールドリストを取得
- **戻り値**: Array

### 検索・レコード操作

#### `getSearchRecordsQuery($searchValue, $searchFields, $parentId = false, $parentModule = false)`
- **機能**: レコード検索用クエリを生成
- **戻り値**: String

#### `searchRecord($searchValue, $parentId = false, $parentModule = false, $relatedModule = false)`
- **機能**: レコードを検索
- **戻り値**: Array

#### `transferRecordsOwnership($transferOwnerId, $relatedModuleRecordIds)`
- **機能**: レコード所有権を移管
- **戻り値**: void

### その他のユーティリティ

#### `getAlphabetSearchField()`
- **機能**: アルファベット検索用フィールドを取得
- **戻り値**: String

#### `getCompulsoryMandatoryFieldList()`
- **機能**: 必須項目リストを取得
- **戻り値**: Array

#### `getMandatoryFieldModels()`
- **機能**: 必須フィールドモデルを取得
- **戻り値**: Array

#### `getOrderBySql($orderBy)`
- **機能**: ORDER BY用SQLを生成
- **戻り値**: String

#### `getDefaultSearchField()`
- **機能**: デフォルト検索フィールドを取得
- **戻り値**: String

#### `getPopupViewFieldsList()`
- **機能**: ポップアップビュー用フィールドリストを取得
- **戻り値**: Array

### 機能チェック

#### `isQuickSearchEnabled()` / `isUtilityActionEnabled()` / `isListViewNameFieldNavigationEnabled()`
- **機能**: 各機能が有効かチェック
- **戻り値**: Boolean

#### `isDuplicateOptionAllowed($action, $recordId)`
- **機能**: 複製オプションが許可されているかチェック
- **戻り値**: Boolean

#### `isModuleRelated($moduleName)`
- **機能**: 指定モジュールと関連があるかチェック
- **戻り値**: Boolean

### 自動入力

#### `getAutoFillModule($moduleName)` / `getAutoFillModuleAndField($moduleName)`
- **機能**: 自動入力用モジュール・フィールド情報を取得
- **戻り値**: Array

### ユーティリティアクション

#### `getUtilityActionsNames()` / `getUtilityActions()`
- **機能**: ユーティリティアクション情報を取得
- **戻り値**: Array

### 拡張・アプリ

#### `getBaseExtensionUrl($sourceModule)` / `getExtensionSettingsUrl($sourceModule)`
- **機能**: 拡張機能用URLを生成
- **戻り値**: String

#### `getAppName()`
- **機能**: モジュールのアプリ名を取得
- **戻り値**: Array

### アイコン

#### `getModuleIcon()`
- **機能**: モジュールアイコンを取得
- **戻り値**: String (HTML)

#### `getModuleIconPath($moduleName)`
- **機能**: 指定モジュールのアイコンパスを取得（静的メソッド）
- **戻り値**: String

## 使用例

### モジュールインスタンス取得
```php
// モジュール名からインスタンス取得
$moduleModel = Vtiger_Module_Model::getInstance('Accounts');

// モジュール情報取得
echo $moduleModel->getName(); // 'Accounts'
echo $moduleModel->getId();   // モジュールID
```

### フィールド操作
```php
$moduleModel = Vtiger_Module_Model::getInstance('Accounts');

// 全フィールド取得
$fields = $moduleModel->getFields();

// 特定タイプのフィールド取得
$referenceFields = $moduleModel->getFieldsByType('reference');

// 特定フィールド取得
$accountNameField = $moduleModel->getField('accountname');
```

### URL生成
```php
$moduleModel = Vtiger_Module_Model::getInstance('Accounts');

// 各種URL生成
echo $moduleModel->getListViewUrl();      // 一覧画面URL
echo $moduleModel->getCreateRecordUrl();  // 作成画面URL
echo $moduleModel->getDetailViewUrl(123); // 詳細画面URL（レコードID=123）
```

### 機能チェック
```php
$moduleModel = Vtiger_Module_Model::getInstance('Accounts');

// 機能サポート確認
if ($moduleModel->isQuickCreateSupported()) {
    // クイック作成対応
}

if ($moduleModel->isCommentEnabled()) {
    // コメント機能有効
}

if ($moduleModel->isTrackingEnabled()) {
    // 変更追跡有効
}
```

### レコード操作
```php
$moduleModel = Vtiger_Module_Model::getInstance('Accounts');

// 新規レコード作成
$recordModel = Vtiger_Record_Model::getCleanInstance('Accounts');
$recordModel->set('accountname', '株式会社テスト');
$moduleModel->saveRecord($recordModel);

// レコード削除
$recordModel = Vtiger_Record_Model::getInstanceById(123, 'Accounts');
$moduleModel->deleteRecord($recordModel);
```

### 関連モジュール
```php
$moduleModel = Vtiger_Module_Model::getInstance('Accounts');

// 関連モジュール取得
$relations = $moduleModel->getRelations();
foreach ($relations as $relation) {
    echo $relation->getRelationModuleName();
}

// 特定モジュールとの関連チェック
if ($moduleModel->isModuleRelated('Contacts')) {
    // Contactsモジュールと関連あり
}
```

## 注意事項

1. **キャッシュ機能**: 多くのメソッドでキャッシュ機能を使用しているため、開発時はキャッシュクリアが必要な場合があります
2. **権限チェック**: レコード操作前には必ず権限チェックを実行してください
3. **モジュール固有処理**: 一部のメソッドはモジュール固有の拡張クラスでオーバーライドされている場合があります
4. **データベース依存**: 多くの機能がデータベーステーブル（vtiger_tab、vtiger_field等）に依存しています
5. **パフォーマンス**: 大量データを扱う場合は適切な制限やページネーションを使用してください

## 関連クラス

- `Vtiger_Module`: ベースモジュールクラス（vtlibライブラリ）
- `Vtiger_Record_Model`: レコードモデルクラス
- `Vtiger_Field_Model`: フィールドモデルクラス
- `Vtiger_Block_Model`: ブロックモデルクラス
- `Vtiger_Relation_Model`: 関連モデルクラス
- モジュール固有モジュールモデル（`Accounts_Module_Model`等）