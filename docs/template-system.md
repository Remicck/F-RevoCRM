# F-RevoCRM テンプレートシステム詳細

## 概要
F-RevoCRMのSmartyベーステンプレートシステムの詳細な仕組みと開発方法について解説します。

## 1. テンプレートシステム基本構造

### 1.1 ディレクトリ構造
```
layouts/v7/
├── modules/                   # モジュール別テンプレート
│   ├── Vtiger/               # 共通テンプレート（基底）
│   ├── Accounts/             # 企業モジュール固有
│   ├── Contacts/             # 担当者モジュール固有
│   └── Settings/             # 設定系テンプレート
├── lib/                      # サードパーティライブラリ
├── resources/                # アプリケーション固有CSS/JS
└── skins/                    # テーマ別スタイル
```

### 1.2 テンプレート解決順序
1. **モジュール固有**: `layouts/v7/modules/MODULE/template.tpl`
2. **共通テンプレート**: `layouts/v7/modules/Vtiger/template.tpl`

## 2. Viewer.phpによるテンプレート処理

### 2.1 Vtiger_Viewerクラスの役割
`includes/runtime/Viewer.php`でSmartyを拡張：

```php
class Vtiger_Viewer extends Smarty {
    // テンプレートパス解決
    public function getTemplatePath($templateName, $moduleName='')
    
    // テンプレート表示
    public function view($templateName, $moduleName='', $fetch=false)
    
    // 変数アサイン
    public function assign($tpl_var, $value = null)
}
```

### 2.2 テンプレートパス解決ロジック
```php
public function getTemplatePath($templateName, $moduleName='') {
    // 1. モジュール固有テンプレートを探す
    $completeFilePath = $this->getTemplateDir(0) . "/modules/$moduleName/$templateName";
    if(!empty($moduleName) && file_exists($completeFilePath)) {
        return "modules/$moduleName/$templateName";
    }
    
    // 2. 共通テンプレートにフォールバック
    return "modules/Vtiger/$templateName";
}
```

### 2.3 Smarty設定
```php
// コンパイル先設定
$this->compile_dir = "test/templates_c/v7/";

// テンプレートディレクトリ
$this->template_dir = "layouts/v7/";

// セキュリティ設定
$this->use_sub_dirs = true;
```

## 3. テンプレートファイルの命名規則と種類

### 3.1 主要テンプレートタイプ

#### DetailView系
- `DetailViewFullContents.tpl` - 詳細画面全体
- `DetailViewHeaderTitle.tpl` - ヘッダータイトル部分
- `DetailViewSummaryContents.tpl` - サマリー情報
- `DetailViewBlockView.tpl` - ブロック表示
- `DetailViewActions.tpl` - 操作ボタン

#### ListView系
- `ListViewContents.tpl` - 一覧画面全体
- `ListViewHeader.tpl` - 一覧ヘッダー
- `ListViewActions.tpl` - 一括操作ボタン
- `ListViewRecordActions.tpl` - レコード単位の操作

#### EditView系
- `EditView.tpl` - 編集画面
- `OverlayEditView.tpl` - オーバーレイ編集
- `QuickCreate.tpl` - クイック作成画面

#### 共通系
- `Index.tpl` - 基本インデックス画面
- `Header.tpl` - ヘッダー
- `Footer.tpl` - フッター
- `Popup.tpl` - ポップアップ画面

### 3.2 UIType別テンプレート
```
layouts/v7/modules/Vtiger/uitypes/
├── Text.tpl                  # テキストフィールド
├── Email.tpl                 # メールフィールド
├── Datetime.tpl              # 日時フィールド
├── Picklist.tpl              # 選択リスト
├── Currency.tpl              # 通貨フィールド
└── Reference.tpl             # 参照フィールド
```

## 4. テンプレート変数と関数

### 4.1 主要なテンプレート変数

#### レコード関連
```smarty
$RECORD                # Vtiger_Record_Modelオブジェクト
$RECORD_STRUCTURE      # フィールド構造配列
$LISTVIEW_ENTRIES      # 一覧表示レコード配列
$RELATED_RECORDS       # 関連レコード配列
```

#### モジュール関連
```smarty
$MODULE_NAME           # モジュール名（例：Accounts）
$MODULE_MODEL          # Vtiger_Module_Modelオブジェクト
$QUALIFIED_MODULE      # 完全修飾モジュール名
```

#### ユーザー関連
```smarty
$USER_MODEL            # Users_Record_Modelオブジェクト
$USER_PRIVILEGES_MODEL # ユーザー権限情報
$CURRENT_USER          # 現在のユーザー情報
```

#### フィールド関連
```smarty
$FIELD_MODEL           # Vtiger_Field_Modelオブジェクト  
$FIELD_VALUE           # フィールド値
$FIELD_INFO            # フィールド情報
```

### 4.2 カスタムSmarty関数

#### vtemplate_path - テンプレートパス解決
```smarty
{include file='template.tpl'|vtemplate_path:$MODULE_NAME}
```

#### vtranslate - 翻訳
```smarty
{vtranslate('LBL_SAVE', $MODULE_NAME)}
{vtranslate('LBL_LIST_PRICE', 'Products')}
```

#### vresource_url - リソースURL生成
```smarty
<script src="{vresource_url('resources/application.js')}"></script>
<link href="{vresource_url('resources/application.css')}" rel="stylesheet">
```

#### vdate_format - 日付フォーマット
```smarty
{$RECORD->get('createdtime')|vdate_format}
{$RECORD->get('due_date')|vdate_format:'Y-m-d'}
```

## 5. 実際のテンプレート例

### 5.1 DetailViewFullContents.tpl
```smarty
{strip}
<div class="detailViewContainer">
    <div class="row">
        {* ヘッダー情報 *}
        <div class="col-md-12">
            {include file="DetailViewHeader.tpl"|vtemplate_path:$MODULE_NAME}
        </div>
        
        {* メインコンテンツ *}
        <div class="col-md-8">
            {include file="DetailViewBlockView.tpl"|vtemplate_path:$MODULE_NAME}
        </div>
        
        {* サイドバー *}
        <div class="col-md-4">
            {include file="DetailViewSummaryView.tpl"|vtemplate_path:$MODULE_NAME}
        </div>
    </div>
</div>
{/strip}
```

### 5.2 DetailViewBlockView.tpl
```smarty
{foreach key=BLOCK_LABEL_KEY item=FIELD_MODEL_LIST from=$RECORD_STRUCTURE}
    <div class="block" data-block="{$BLOCK_LABEL_KEY}">
        <h4 class="block-header">
            {vtranslate($BLOCK_LABEL_KEY, $MODULE_NAME)}
        </h4>
        
        <table class="table detailview-table">
            {foreach item=FIELD_MODEL from=$FIELD_MODEL_LIST}
                {if $FIELD_MODEL->isViewable()}
                    <tr>
                        <td class="fieldLabel">
                            {vtranslate($FIELD_MODEL->get('label'), $MODULE_NAME)}
                        </td>
                        <td class="fieldValue">
                            {include file=vtemplate_path($FIELD_MODEL->getUITypeModel()->getDetailViewTemplateName(), $MODULE_NAME) 
                                     FIELD_MODEL=$FIELD_MODEL MODULE=$MODULE_NAME RECORD=$RECORD}
                        </td>
                    </tr>
                {/if}
            {/foreach}
        </table>
    </div>
{/foreach}
```

### 5.3 ListViewContents.tpl
```smarty
<div class="listViewContentDiv">
    <div class="listViewPageDiv">
        <div class="listViewTopMenuDiv">
            {include file="ListViewHeader.tpl"|vtemplate_path:$MODULE_NAME}
        </div>
        
        <div class="listViewActionsDiv">
            {include file="ListViewActions.tpl"|vtemplate_path:$MODULE_NAME}
        </div>
        
        <div class="listViewEntriesDiv">
            <table class="table listview-table">
                <thead>
                    <tr class="listViewHeaders">
                        {foreach item=LISTVIEW_HEADER from=$LISTVIEW_HEADERS}
                            <th>
                                {vtranslate($LISTVIEW_HEADER->get('label'), $MODULE_NAME)}
                            </th>
                        {/foreach}
                    </tr>
                </thead>
                <tbody>
                    {foreach item=LISTVIEW_ENTRY from=$LISTVIEW_ENTRIES}
                        <tr class="listViewEntries" data-id="{$LISTVIEW_ENTRY->getId()}">
                            {foreach item=LISTVIEW_HEADER from=$LISTVIEW_HEADERS}
                                <td>
                                    {$LISTVIEW_ENTRY->getDisplayValue($LISTVIEW_HEADER->get('name'))}
                                </td>
                            {/foreach}
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>
```

## 6. テンプレート継承とオーバーライド

### 6.1 継承パターン
```smarty
{* Accounts固有のDetailViewHeaderTitle.tpl *}
{* 基本情報は共通テンプレートを使用 *}
{include file="DetailViewHeaderFieldsView.tpl"|vtemplate_path:$MODULE_NAME}

{* モジュール固有の追加情報 *}
<div class="account-specific-header">
    {* Accounts固有のヘッダー情報 *}
</div>
```

### 6.2 部分オーバーライド
```smarty
{* 共通テンプレートの大部分を使用しつつ、一部をカスタマイズ *}
{extends file="DetailViewFullContents.tpl"|vtemplate_path:"Vtiger"}

{block name="summary_section"}
    {* Accounts固有のサマリーセクション *}
    <div class="accounts-summary">
        {include file="AccountsSummaryView.tpl"|vtemplate_path:$MODULE_NAME}
    </div>
{/block}
```

## 7. JavaScript/CSS統合

### 7.1 リソースファイル読み込み
```smarty
{* JavaScript読み込み *}
<script src="{vresource_url('layouts/v7/modules/Accounts/resources/Detail.js')}"></script>

{* CSS読み込み *}
<link href="{vresource_url('layouts/v7/modules/Accounts/resources/Detail.css')}" rel="stylesheet">

{* モジュール固有リソース *}
{if $MODULE_NAME eq 'Accounts'}
    <script src="{vresource_url('layouts/v7/modules/Accounts/resources/AccountsSpecific.js')}"></script>
{/if}
```

### 7.2 インライン処理
```smarty
<script type="text/javascript">
    jQuery(document).ready(function() {
        var moduleNam = '{$MODULE_NAME}';
        var recordId = '{$RECORD->getId()}';
        
        // JavaScript初期化処理
        Vtiger_{$MODULE_NAME}_Detail_Js.initialize();
    });
</script>
```

## 8. 開発時のベストプラクティス

### 8.1 テンプレート作成ガイドライン
1. **共通機能優先**: Vtigerの基底テンプレートを最大限活用
2. **minimal override**: 必要最小限のオーバーライドに留める
3. **変数命名**: 既存の命名規則に従う
4. **エスケープ**: XSS対策のため適切にエスケープ

### 8.2 よくあるパターン
```smarty
{* 条件分岐 *}
{if $FIELD_MODEL->isEditable()}
    <input type="text" name="{$FIELD_MODEL->get('name')}" value="{$FIELD_MODEL->get('fieldvalue')}">
{else}
    <span>{$FIELD_MODEL->getDisplayValue()}</span>
{/if}

{* ループ処理 *}
{foreach item=RECORD from=$RELATED_RECORDS}
    <div class="related-record" data-id="{$RECORD->getId()}">
        {$RECORD->getDisplayName()}
    </div>
{/foreach}

{* 権限チェック *}
{if $RECORD->isEditable()}
    <button class="btn btn-success">編集</button>
{/if}
```

このテンプレートシステムにより、F-RevoCRMは統一性を保ちながら柔軟なカスタマイズを可能にしています。