# F-RevoCRM フロントエンドJavaScript/UI開発ガイド

F-RevoCRMのフロントエンド開発で利用すべき標準UIコンポーネントと開発パターンについて説明します。

## 概要

F-RevoCRMは以下の技術スタックでフロントエンドを構築しています：

- **jQuery.class**: カスタムクラスシステム
- **Bootstrap 3.3.0**: UI フレームワーク
- **jQuery UI**: 日付ピッカー等のウィジェット
- **Select2**: セレクトボックス拡張
- **CKEditor**: WYSIWYGエディタ
- **Font Awesome**: アイコンフォント

## 1. jQuery.classによるクラスシステム

F-RevoCRMは独自のjQuery.classライブラリを使用してクラスベースのJavaScript開発を行っています。

### 1.1 基本的なクラス定義パターン

#### パターン1: jQuery.Class()による定義
```javascript
jQuery.Class("Vtiger_Helper_Js", {
    // クラスメソッド (static methods)
}, {
    // インスタンスメソッド (instance methods)
    registerEvents: function(){...}
});
```

#### パターン2: Vtiger.Class()による定義  
```javascript
Vtiger.Class("Vtiger_Detail_Js", {
    // クラスメソッド
    getInstance: function(){
        var instance = new this();
        return instance;
    }
}, {
    // インスタンスメソッド
    registerEvents: function(){...}
});
```

#### パターン3: 継承による定義
```javascript
Vtiger_Detail_Js("Contacts_Detail_Js", {}, {
    // 継承されたメソッドのオーバーライド
    registerAjaxPreSaveEvents: function(container) {
        this._super(container); // 親クラスのメソッド呼び出し
        // カスタム処理
    }
});
```

### 1.2 主要な基底クラス

#### コアクラス
| クラス名 | 説明 | ファイルパス |
|---------|------|------------|
| `Vtiger_Detail_Js` | 詳細画面の基底クラス | `layouts/v7/modules/Vtiger/resources/Detail.js` |
| `Vtiger_List_Js` | リスト画面の基底クラス | `layouts/v7/modules/Vtiger/resources/List.js` |
| `Vtiger_Edit_Js` | 編集画面の基底クラス | `layouts/v7/modules/Vtiger/resources/Edit.js` |
| `Vtiger_Field_Js` | フィールド操作基底クラス | `layouts/v7/modules/Vtiger/resources/Field.js` |
| `Vtiger_Helper_Js` | ヘルパー機能クラス | `layouts/v7/resources/helper.js` |

#### クラス命名規約
- 基底クラス: `Vtiger_[ViewType]_Js`
- モジュール固有クラス: `[ModuleName]_[ViewType]_Js`
- 例: `Contacts_Detail_Js`, `Accounts_Edit_Js`

### 1.3 インスタンス取得パターン
```javascript
getInstance: function(){
    var module = app.getModuleName();
    var moduleClassName = module+"_Detail_Js";
    var fallbackClassName = "Vtiger_Detail_Js";
    
    if(typeof window[moduleClassName] != 'undefined'){
        var instance = new window[moduleClassName]();
    } else {
        var instance = new fallbackClassName();
    }
    return instance;
}
```

## 2. Modal表示システム

### 2.1 基本Modal表示関数

#### 汎用Modal表示
```javascript
// 基本Modal表示
app.helper.showModal(content, params);

// パラメータ例
app.helper.showModal(data, {
    backdrop: true,
    show: true,
    keyboard: false,
    cb: function(container) {
        // Modal表示後のコールバック
    }
});

// Modal非表示
app.helper.hideModal();
```

#### デフォルトパラメータ
```javascript
app.helper.defaultModalParams(); // {backdrop: true, show: true, keyboard: false}
```

### 2.2 特定用途Modal

#### QuickCreateModal
```javascript
// QuickCreateイベント登録例
jQuery("#quickCreateModules").on("click", ".quickCreateModule", function(e, params){
    var quickCreateUrl = jQuery(e.currentTarget).data('url');
    var quickCreateModuleName = jQuery(e.currentTarget).data('name');
    
    thisInstance.getQuickCreateForm(quickCreateUrl, quickCreateModuleName, params).then(function(data){
        var callbackparams = {
            'cb': function (container){
                app.event.trigger('post.QuickCreateForm.show', form);
                app.helper.registerLeavePageWithoutSubmit(form);
                app.helper.registerModalDismissWithoutSubmit(form);
            },
            backdrop: 'static',
            keyboard: false
        }
        app.helper.showModal(data, callbackparams);
    });
});
```

#### Popup Modal（レコード選択）
```javascript
var popupInstance = Vtiger_Popup_Js.getInstance();
popupInstance.showPopup(params, eventToTrigger, callback);
```

### 2.3 ページオーバーレイ機能
```javascript
// ページコンテンツオーバーレイ
app.helper.loadPageContentOverlay(data, params);
app.helper.hidePageContentOverlay();

// ヘルプページオーバーレイ
app.helper.loadHelpPageOverlay(data, params);
app.helper.hideHelpPageOverlay();
```

## 3. Alert・通知システム

### 3.1 モーダルアラート

#### アラートボックス（OK確認のみ）
```javascript
app.helper.showAlertBox({
    message: 'エラーが発生しました'
}, function(result) {
    console.log('アラートが閉じられました');
});
```

#### 確認ダイアログ（Yes/No選択）
```javascript
app.helper.showConfirmationBox({
    message: '本当に削除しますか？'
}).then(function(result) {
    if (result) {
        // Yes が選択された場合の処理
    }
});
```

### 3.2 Toast通知

#### 成功通知
```javascript
app.helper.showSuccessNotification({
    message: 'データが正常に保存されました',
    title: '成功'
});
```

#### エラー通知
```javascript
app.helper.showErrorNotification({
    message: 'サーバーエラーが発生しました',
    title: 'エラー'
});
```

#### 警告通知
```javascript
app.helper.showAlertNotification({
    message: '入力に問題があります',
    title: '警告'
});
```

### 3.3 プログレス表示
```javascript
// ローディング表示
app.helper.showProgress('データを保存中...');

// ローディング非表示
app.helper.hideProgress();

// 使用例
app.helper.showProgress(app.vtranslate('JS_LOADING'));
performAction().then(function() {
    app.helper.hideProgress();
    app.helper.showSuccessNotification({
        message: '完了しました'
    });
});
```

## 4. UI共通コンポーネント

### 4.1 セレクトボックス（Select2）

#### 基本的な初期化
```javascript
// Select2初期化
vtUtils.showSelect2ElementView(selectElement, params);

// ピックリストフィールド
var picklistField = new Vtiger_Picklist_Field_Js();
picklistField.getUi();
```

#### カスタム設定例
```javascript
jQuery(element).select2({
    placeholder: "オプションを選択",
    allowClear: true,
    width: '100%'
});
```

### 4.2 日付・時刻ピッカー

#### 日付フィールド
```javascript
// 日付フィールド初期化
vtUtils.registerEventForDateFields(container.find('.dateField'));

// 個別初期化
jQuery(element).datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true
});
```

#### 時刻フィールド  
```javascript
// 時刻フィールド初期化
vtUtils.registerEventForTimeFields(container.find('.timepicker-default'));
```

### 4.3 ファイルアップロード

#### HTMLテンプレート
```html
<div class="fileUploadContainer">
    <div class="fileUploadBtn btn btn-primary">
        <input type="file" class="inputElement multi with-preview" />
        <span class="fa fa-upload"></span> アップロード
    </div>
</div>
```

#### JavaScript初期化
```javascript
jQuery('.inputElement.multi').MultiFile({
    max: 5,
    accept: 'jpg|jpeg|png|gif|pdf|doc|docx',
    STRING: {
        remove: '削除',
        denied: 'このファイル形式は許可されていません'
    }
});
```

### 4.4 ツールチップ・ポップオーバー

#### 基本的な使用方法
```javascript
// ツールチップ表示
vtUtils.showQtip(element, message, customParams);

// ツールチップ非表示  
vtUtils.hideQtip(element);

// カスタム設定例
vtUtils.showQtip(element, 'ヘルプメッセージ', {
    position: {
        my: 'bottom center',
        at: 'top center'
    }
});
```

### 4.5 データテーブル

#### 基本的なテーブル機能
```javascript
// ページネーション
var paginationInstance = new Vtiger_Pagination_Js(container);
paginationInstance.initialize();

// フローティングヘッダー
jQuery('table').floatThead({
    scrollContainer: function($table) {
        return $table.closest('.table-container');
    }
});
```

### 4.6 フォームバリデーション

#### カスタムバリデーションルール
```javascript
// 日付検証
jQuery.validator.addMethod("date", function(value, element, params) {
    if (this.optional(element)) {
        return true;
    }
    return moment(value, 'YYYY-MM-DD', true).isValid();
}, "正しい日付形式で入力してください");

// 使用例
jQuery(form).validate({
    rules: {
        'date_field': {
            required: true,
            date: true
        }
    },
    messages: {
        'date_field': {
            required: "日付は必須です"
        }
    }
});
```

### 4.7 WYSIWYGエディタ（CKEditor）

#### 基本的な初期化
```javascript
var ckEditorInstance = new Vtiger_CkEditor_Js();
ckEditorInstance.loadCkEditor(element, customConfig);

// カスタム設定例
var config = {
    toolbar: [
        ['Bold', 'Italic', 'Underline'],
        ['NumberedList', 'BulletedList'],
        ['Link', 'Unlink']
    ],
    height: 300
};
ckEditorInstance.loadCkEditor(element, config);
```

## 5. 検索・フィルター機能

### 5.1 基本検索
```javascript
var basicSearch = new Vtiger_BasicSearch_Js();
basicSearch.registerEvents();
```

### 5.2 高度フィルター
```javascript
var advanceFilter = new Vtiger_AdvanceFilter_Js();
advanceFilter.registerEvents();
```

### 5.3 リアルタイム検索
```javascript
jQuery(searchInput).instaFilta({
    scope: '.search-container',
    categorySelector: '.filter-category'
});
```

## 6. 開発のベストプラクティス

### 6.1 クラス定義の推奨パターン

1. **既存の基底クラスを継承する**
```javascript
// 良い例
Vtiger_Detail_Js("CustomModule_Detail_Js", {}, {
    registerEvents: function() {
        this._super(); // 親クラスのメソッドを呼び出し
        // カスタム処理
    }
});
```

2. **モジュール固有の機能は専用クラスで実装**
```javascript
// 良い例: モジュール固有クラス
CustomModule_Detail_Js("CustomModule_SpecialView_Js", {}, {
    registerSpecialEvents: function() {
        // 特別な処理
    }
});
```

### 6.2 UI コンポーネント使用の推奨事項

1. **Modal表示は統一関数を使用**
```javascript
// 良い例
app.helper.showModal(content, params);

// 悪い例：独自Modal実装
jQuery('#customModal').modal('show');
```

2. **Alert表示は用途に応じて使い分け**
```javascript
// 成功: showSuccessNotification
// エラー: showErrorNotification  
// 確認: showConfirmationBox
// アラート: showAlertBox
```

3. **国際化対応を必ず行う**
```javascript
// 良い例
app.helper.showSuccessNotification({
    message: app.vtranslate('JS_SAVE_SUCCESSFUL')
});

// 悪い例：ハードコード
app.helper.showSuccessNotification({
    message: '保存しました'
});
```

### 6.3 ファイル構成の推奨事項

#### 新しいJavaScriptファイルの配置
```
layouts/v7/modules/[ModuleName]/resources/
├── Detail.js          # 詳細画面用
├── Edit.js            # 編集画面用  
├── List.js            # 一覧画面用
└── CustomComponent.js # カスタムコンポーネント
```

#### テンプレートファイルの配置
```
layouts/v7/modules/[ModuleName]/
├── Detail.tpl         # 詳細画面テンプレート
├── Edit.tpl           # 編集画面テンプレート
├── List.tpl           # 一覧画面テンプレート
└── uitypes/           # フィールドタイプ別テンプレート
    ├── Text.tpl
    ├── Picklist.tpl
    └── Date.tpl
```

## 7. 既存UI機能の活用

### 7.1 避けるべきパターン

❌ **独自Modal実装**
```javascript
// 悪い例
jQuery('#myCustomModal').modal('show');
```

❌ **独自Alert実装**  
```javascript
// 悪い例
alert('エラーが発生しました');
```

❌ **独自ローディング実装**
```javascript
// 悪い例
jQuery('#customLoader').show();
```

### 7.2 推奨パターン

✅ **標準Modal使用**
```javascript
// 良い例
app.helper.showModal(content, params);
```

✅ **標準Alert使用**
```javascript
// 良い例
app.helper.showErrorNotification({
    message: app.vtranslate('JS_ERROR_MESSAGE')
});
```

✅ **標準ローディング使用**
```javascript
// 良い例
app.helper.showProgress();
```

## 8. デバッグとトラブルシューティング

### 8.1 よくある問題と解決方法

#### クラスが見つからないエラー
```javascript
// 問題: Uncaught ReferenceError: CustomModule_Detail_Js is not defined
// 解決: ファイルの読み込み順序を確認
// 基底クラス（Vtiger_Detail_Js）が先に読み込まれている必要がある
```

#### Modal が表示されない
```javascript
// 問題: Modal が表示されない
// 解決: コンテンツとパラメータを確認
console.log('Modal content:', content);
console.log('Modal params:', params);
app.helper.showModal(content, params);
```

#### Select2 が動作しない
```javascript
// 問題: Select2 が初期化されない
// 解決: 要素が存在するかチェック
if (jQuery(element).length > 0) {
    vtUtils.showSelect2ElementView(element, params);
}
```

### 8.2 デバッグ用のユーティリティ

```javascript
// デバッグ用のログ出力
if (typeof console !== 'undefined') {
    console.log('Debug info:', data);
}

// イベントの確認
jQuery(document).on('click', '*', function(e) {
    console.log('Clicked element:', e.target);
});
```

## 9. まとめ

F-RevoCRMのフロントエンド開発では以下を重視してください：

1. **既存の共通UIコンポーネントを活用する**
2. **jQuery.classベースのクラス継承パターンに従う**  
3. **国際化（vtranslate）を必ず使用する**
4. **標準的なModal/Alert機能を使用する**
5. **既存のファイル構成とネーミング規約に従う**

これらのガイドラインに従うことで、統一性のあるユーザーインターフェースと保守性の高いコードを実現できます。