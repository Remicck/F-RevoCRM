# RecordModel クラス

## 概要

`Vtiger_Record_Model` は F-RevoCRM におけるCRMエンティティレコードの中核的な抽象化クラスです。すべてのCRMデータ（取引先、連絡先、リード等）のレコード操作を統一的に扱うためのベースモデルとして機能します。

## ファイル構成

- **メインクラス**: `modules/Vtiger/models/Record.php`
- **ベースクラス**: `includes/runtime/BaseModel.php`

## クラス階層

```
Vtiger_Base_Model (ベースモデル)
  ↓ 継承
Vtiger_Record_Model (レコードモデル)
  ↓ 継承
モジュール固有レコードモデル (Accounts_Record_Model, Contacts_Record_Model等)
```

## 主要プロパティ

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `$module` | Vtiger_Module_Model | レコードが属するモジュール |
| `$entity` | CRMEntity | レコードのエンティティインスタンス |
| `$valueMap` | array | レコードの値マップ（ベースクラスから継承） |
| `$rawData` | array | レコードの生データ |

## 主要メソッド

### レコード識別・基本操作

#### `getId()` / `setId($value)`
- **機能**: レコードIDの取得・設定
- **戻り値**: Number (取得時), Vtiger_Record_Model (設定時)

#### `getName()`
- **機能**: レコードの表示名を取得
- **戻り値**: String
- **詳細**: モジュールのnameフィールドから動的に名前を構築

#### `getDisplayName()`
- **機能**: レコードの表示名を取得（代替メソッド）
- **戻り値**: String

### モジュール関連

#### `getModule()` / `setModule($moduleName)`
- **機能**: レコードが属するモジュールの取得・設定
- **戻り値**: Vtiger_Module_Model (取得時), Vtiger_Record_Model (設定時)

#### `getModuleName()`
- **機能**: モジュール名の取得
- **戻り値**: String

#### `setModuleFromInstance($module)`
- **機能**: モジュールインスタンスから直接モジュールを設定
- **引数**: Vtiger_Module_Model
- **戻り値**: Vtiger_Record_Model

### エンティティ関連

#### `getEntity()` / `setEntity($entity)`
- **機能**: CRMEntityインスタンスの取得・設定
- **戻り値**: CRMEntity (取得時), Vtiger_Record_Model (設定時)

### データ操作

#### `getData()`
- **機能**: レコードのカラムフィールドデータを取得
- **戻り値**: Array
- **詳細**: trackableオブジェクトの場合はgetColumnFields()を呼び出し

#### `getRawData()` / `setRawData($data)`
- **機能**: 生データの取得・設定
- **戻り値**: Array (取得時), Vtiger_Record_Model (設定時)

### 表示・フォーマット

#### `getDisplayValue($fieldName, $recordId = false)`
- **機能**: フィールドの表示値を取得
- **引数**: 
  - `$fieldName`: String - フィールド名
  - `$recordId`: Number - レコードID（オプション）
- **戻り値**: String
- **詳細**: UITypeに応じた適切な表示形式で値を返す

#### `getDisplayableValues()`
- **機能**: 全フィールドの表示値を配列で取得
- **戻り値**: Array

#### `getField($fieldName)`
- **機能**: フィールドモデルを取得
- **戻り値**: Vtiger_Field_Model

### URL生成

#### `getDetailViewUrl()`
- **機能**: 詳細画面のURLを生成
- **戻り値**: String
- **形式**: `index.php?module={モジュール名}&view=Detail&record={レコードID}`

#### `getFullDetailViewUrl()`
- **機能**: 完全な詳細画面のURLを生成
- **戻り値**: String

#### `getEditViewUrl()`
- **機能**: 編集画面のURLを生成
- **戻り値**: String

#### `getUpdatesUrl()`
- **機能**: 更新履歴画面のURLを生成
- **戻り値**: String

#### `getDeleteUrl()`
- **機能**: 削除アクションのURLを生成
- **戻り値**: String

#### `getDuplicateRecordUrl()`
- **機能**: 複製画面のURLを生成
- **戻り値**: String

### レコード操作

#### `save()`
- **機能**: レコードを保存
- **戻り値**: void
- **詳細**: モジュールのsaveRecord()メソッドを呼び出し

#### `delete()`
- **機能**: レコードを削除
- **戻り値**: void
- **詳細**: モジュールのdeleteRecord()メソッドを呼び出し

### 権限チェック

#### `isEditable()`
- **機能**: レコードが編集可能かチェック
- **戻り値**: Boolean

#### `isDeletable()`
- **機能**: レコードが削除可能かチェック
- **戻り値**: Boolean

### ファイル・画像操作

#### `getImageDetails()`
- **機能**: レコードに関連付けられた画像の詳細を取得
- **戻り値**: Array
- **詳細**: 画像ID、パス、URL等の情報を含む配列

#### `deleteImage($imageId)`
- **機能**: 指定された画像を削除
- **引数**: $imageId - 画像ID
- **戻り値**: Boolean

#### `getFileDetails($attachmentId = false)`
- **機能**: ファイル添付の詳細を取得
- **戻り値**: Array

#### `downloadFile($attachmentId = false)`
- **機能**: ファイルのダウンロード処理
- **戻り値**: void (ファイル内容を直接出力)

#### `getDownloadFileURL($attachmentId = false)`
- **機能**: ファイルダウンロードURLを生成
- **戻り値**: String

### PDF操作

#### `getPDF($templateId, $is_preview = false)`
- **機能**: レコードをPDFとして出力
- **引数**:
  - `$templateId`: テンプレートID
  - `$is_preview`: プレビューモード

#### `getExportPDFUrl()`
- **機能**: PDF出力URLを生成
- **戻り値**: String

#### `getSendEmailPDFUrl()`
- **機能**: PDF付きメール送信URLを生成
- **戻り値**: String

### 静的ファクトリメソッド

#### `getCleanInstance($moduleName)`
- **機能**: 指定モジュールの新しいレコードモデルインスタンスを作成
- **引数**: $moduleName - モジュール名
- **戻り値**: Vtiger_Record_Model (またはモジュール固有モデル)

#### `getInstanceById($recordId, $module = null)`
- **機能**: レコードIDからレコードモデルインスタンスを取得
- **引数**:
  - `$recordId`: レコードID
  - `$module`: モジュール名またはモジュールモデル
- **戻り値**: Vtiger_Record_Model (またはモジュール固有モデル)

#### `getInstancesFromIds($recordIds, $moduleName)`
- **機能**: 複数のレコードIDから一括でレコードモデルを取得
- **引数**:
  - `$recordIds`: レコードIDの配列
  - `$moduleName`: モジュール名
- **戻り値**: Array (レコードIDをキーとするレコードモデルの配列)

### 検索・関連機能

#### `getSearchResult($searchKey, $module = false)`
- **機能**: 検索キーワードにマッチするレコードを検索
- **引数**:
  - `$searchKey`: 検索キーワード
  - `$module`: 検索対象モジュール（オプション）
- **戻り値**: Array (モジュール別にグループ化されたレコード配列)

#### `getRelatedListDisplayValue($fieldName)`
- **機能**: 関連リスト用の表示値を取得
- **戻り値**: String

#### `transferRelationInfoOfRecords($recordIds = array())`
- **機能**: 指定レコードの関連情報を現在のレコードに移管
- **戻り値**: Boolean

### コメント機能

#### `getRollupCommentsForModule($startIndex = 0, $pageLimit = 10)`
- **機能**: モジュールのロールアップコメントを取得
- **引数**:
  - `$startIndex`: 開始インデックス
  - `$pageLimit`: 取得件数制限
- **戻り値**: Array

#### `getCommentEnabledRelatedEntityIds($modulename, $recordId)`
- **機能**: コメント機能が有効な関連エンティティIDを取得
- **戻り値**: Array

### その他

#### `getDescriptionValue()`
- **機能**: レコードの説明文を取得
- **戻り値**: String

#### `getParentPopupContentsUrl()`
- **機能**: 親ポップアップ内容取得URLを生成
- **戻り値**: String

#### `getTitle($fieldInstance)`
- **機能**: フィールドインスタンスからタイトルを取得
- **戻り値**: String

#### `deleteDocument($notesid)`
- **機能**: ドキュメントを削除（静的メソッド）
- **引数**: $notesid - ドキュメントID
- **戻り値**: void

## 使用例

### 新しいレコード作成
```php
// 新しい取引先レコードを作成
$recordModel = Vtiger_Record_Model::getCleanInstance('Accounts');
$recordModel->set('accountname', '株式会社サンプル');
$recordModel->set('website', 'https://example.com');
$recordModel->save();
```

### 既存レコードの取得・更新
```php
// レコードID 123 の取引先を取得
$recordModel = Vtiger_Record_Model::getInstanceById(123, 'Accounts');

// データを更新
$recordModel->set('accountname', '株式会社サンプル（更新）');
$recordModel->save();
```

### 表示値の取得
```php
$recordModel = Vtiger_Record_Model::getInstanceById(123, 'Accounts');

// 基本情報
echo $recordModel->getName(); // レコード名
echo $recordModel->getDisplayValue('accountname'); // 取引先名の表示値

// URL生成
echo $recordModel->getDetailViewUrl(); // 詳細画面URL
echo $recordModel->getEditViewUrl();   // 編集画面URL
```

### 権限チェック
```php
$recordModel = Vtiger_Record_Model::getInstanceById(123, 'Accounts');

if ($recordModel->isEditable()) {
    // 編集可能な場合の処理
}

if ($recordModel->isDeletable()) {
    // 削除可能な場合の処理
}
```

## 注意事項

1. **権限管理**: 実際の操作前には必ず権限チェックメソッドを使用してください
2. **モジュール固有処理**: 一部のメソッドはモジュール固有の拡張クラスでオーバーライドされている場合があります
3. **データ整合性**: save()メソッド実行時は、必要な必須フィールドが設定されていることを確認してください
4. **パフォーマンス**: 大量のレコードを扱う場合は`getInstancesFromIds()`を使用して一括取得することを推奨します

## 関連クラス

- `Vtiger_Base_Model`: ベースモデルクラス
- `Vtiger_Module_Model`: モジュールモデルクラス
- `CRMEntity`: エンティティベースクラス
- `Vtiger_Field_Model`: フィールドモデルクラス
- モジュール固有レコードモデル（`Accounts_Record_Model`等）