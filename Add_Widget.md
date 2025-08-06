# F-RevoCRM ダッシュボードウィジェット追加手順

このドキュメントでは、F-RevoCRMのダッシュボードに新しいウィジェットを追加する方法について説明します。

## 目次
1. [ウィジェットシステムの概要](#ウィジェットシステムの概要)
2. [ウィジェットの種類](#ウィジェットの種類)
3. [新規ウィジェット追加手順](#新規ウィジェット追加手順)
4. [ウィジェット設定の保存](#ウィジェット設定の保存)
5. [JavaScript連携](#JavaScript連携)
6. [ウィジェットの権限制御](#ウィジェットの権限制御)
7. [トラブルシューティング](#トラブルシューティング)
8. [参考リソース](#参考リソース)
9. [まとめ](#まとめ)

## ウィジェットシステムの概要

F-RevoCRMのダッシュボードウィジェットは以下の要素で構成されています：

- **リンクタイプ**: `DASHBOARDWIDGET`として登録
- **データベーステーブル**: 
  - `vtiger_links` - ウィジェット定義
  - `vtiger_module_dashboard_widgets` - ユーザー別ウィジェット設定
- **MVCアーキテクチャ**:
  - Controller: `modules/{Module}/dashboards/{WidgetName}.php`
  - View: `layouts/v7/modules/{Module}/dashboards/{WidgetName}.tpl`
  - Model: `modules/{Module}/models/{WidgetName}.php`（必要に応じて）

## ウィジェットの種類

F-RevoCRMでサポートされている主なウィジェットタイプ：

1. **MiniList** - レコードリスト表示
2. **History** - 履歴表示
3. **CalendarActivities** - カレンダー活動
4. **OverdueActivities** - 期限切れ活動
5. **Notebook** - メモ帳
6. **TagCloud** - タグクラウド
7. **ChartWidget** - グラフ表示（レポート連携）
8. **カスタムウィジェット** - 独自実装

## 新規ウィジェット追加手順

### ⚠️ 重要: モジュール選択について

ダッシュボードウィジェットは**Homeモジュール**に配置することを強く推奨します。権限の問題を回避し、すべてのユーザーがアクセス可能になります。

### ステップ1: ウィジェットクラスの作成

**推奨**: `modules/Home/dashboards/{YourWidget}.php`を作成：

```php
<?php
class Home_{YourWidget}_Dashboard extends Vtiger_IndexAjax_View {
    
    public function process(Vtiger_Request $request, $widget=NULL) {
        $currentUser = Users_Record_Model::getCurrentUserModel();
        $viewer = $this->getViewer($request);
        $moduleName = $request->getModule();
        
        // ウィジェットIDの取得
        if ($widget && !$request->has('widgetid')) {
            $widgetId = $widget->get('id');
        } else {
            $widgetId = $request->get('widgetid');
        }
        
        // ウィジェットインスタンスの取得
        $widget = Home_{YourWidget}_Model::getUserInstance($widgetId);
        
        // モード処理（保存など）
        $mode = $request->get('mode');
        if ($mode == 'save') {
            $widget->save($request);
        }
        
        // ビューへの変数割り当て
        $viewer->assign('WIDGET', $widget);
        $viewer->assign('MODULE_NAME', $moduleName);
        $viewer->assign('CURRENT_USER', $currentUser);
        
        // コンテンツのみの更新か全体の描画かを判定
        $content = $request->get('content');
        if(!empty($content)) {
            $viewer->view('dashboards/{YourWidget}Contents.tpl', $moduleName);
        } else {
            $viewer->view('dashboards/{YourWidget}.tpl', $moduleName);
        }
    }
}
```

### ステップ2: テンプレートファイルの作成

#### メインテンプレート: `layouts/v7/modules/Home/dashboards/{YourWidget}.tpl`

```smarty
{strip}
<div class="dashboardWidgetHeader">
    {include file="dashboards/WidgetHeader.tpl"|@vtemplate_path:$MODULE_NAME}
</div>
<div class="dashboardWidgetContent">
    {include file="dashboards/{YourWidget}Contents.tpl"|@vtemplate_path:$MODULE_NAME}
</div>
<div class="widgeticons dashBoardWidgetFooter">
    <div class="footerIcons pull-right">
        {include file="dashboards/DashboardFooterIcons.tpl"|@vtemplate_path:$MODULE_NAME}
    </div>
</div>
{/strip}
```

#### コンテンツテンプレート: `layouts/v7/modules/Home/dashboards/{YourWidget}Contents.tpl`

```smarty
{strip}
<div class="widget-contents">
    {* ウィジェットのコンテンツをここに実装 *}
    {foreach item=ITEM from=$DATA}
        <div class="widget-item">
            {$ITEM.name}
        </div>
    {/foreach}
</div>

{* JavaScriptを含む場合は{literal}タグで囲む *}
<script type="text/javascript">
{literal}
jQuery(document).ready(function() {
    // JavaScript コード
});
{/literal}
</script>
{/strip}
```

### ステップ3: データベース登録用スクリプトの作成

`setup/scripts/XX_Add_{YourWidget}Widget.php`を作成：

```php
<?php
$Vtiger_Utils_Log = true;
include_once('vtlib/Vtiger/Menu.php');
include_once('vtlib/Vtiger/Module.php');

global $adb, $log;

echo "Starting {YourWidget} Widget Registration...\n";

// Get Home module instance for dashboard widgets
$homeModuleInstance = Vtiger_Module::getInstance('Home');

if ($homeModuleInstance) {
    // First, check and remove any existing widget with wrong configuration
    $query = "SELECT linkid FROM vtiger_links WHERE linklabel = ? AND linktype = ?";
    $result = $adb->pquery($query, array('Your Widget Name', 'DASHBOARDWIDGET'));
    
    if ($adb->num_rows($result) > 0) {
        $oldLinkId = $adb->query_result($result, 0, 'linkid');
        echo "ℹ️ Removing old widget configuration (linkId: $oldLinkId)...\n";
        
        // Remove old widget entries
        $adb->pquery("DELETE FROM vtiger_module_dashboard_widgets WHERE linkid = ?", array($oldLinkId));
        $adb->pquery("DELETE FROM vtiger_links WHERE linkid = ?", array($oldLinkId));
    }
    
    // Add the widget link with correct configuration
    // IMPORTANT: For dashboard widgets, we use Home module URL to avoid permission issues
    $linkId = $homeModuleInstance->addLink(
        'DASHBOARDWIDGET',                                    // Link type
        'Your Widget Name',                                   // Widget label
        'index.php?module=Home&view=ShowWidget&name=YourWidget',  // URL - Using Home module
        '',                                                    // Icon path (optional)
        '15'                                                   // Sequence
    );
    
    if ($linkId) {
        echo "✅ {YourWidget} Widget registered successfully with linkId: $linkId\n";
        echo "Widget registration complete.\n";
        echo "Users can now add 'Your Widget Name' from their dashboard.\n";
    } else {
        echo "❌ Failed to register {YourWidget} Widget\n";
    }
} else {
    echo "❌ Error: Home module not found. Cannot register widget.\n";
}
```

#### 実行方法:
```bash
php setup/scripts/XX_Add_{YourWidget}Widget.php
```

### ステップ4: モデルクラスの作成（推奨）

データ処理とウィジェット設定保存のため、専用のモデルクラスを作成：

`modules/Home/models/{YourWidget}.php`:

```php
<?php
class Home_{YourWidget}_Model extends Vtiger_Widget_Model {
    
    /**
     * ウィジェットデータの取得
     * @return array
     */
    public function getData() {
        $rawData = $this->get('data');
        if ($rawData) {
            return Zend_Json::decode(decode_html($rawData));
        }
        return array();
    }
    
    /**
     * ウィジェット内容の保存
     * @param Vtiger_Request $request
     */
    public function save($request) {
        $db = PearDatabase::getInstance();
        $widgetId = $request->get('widgetid');
        
        // リクエストデータの取得
        $requestData = $request->get('data');
        if (is_array($requestData)) {
            $dataToSave = $requestData;
        } else {
            // 直接パラメータから取得
            $dataToSave = array(
                'content' => $request->get('content')
            );
        }
        
        // 保存日時の追加
        $date_var = date("Y-m-d H:i:s");
        $date = $db->formatDate($date_var, true);
        $dataToSave['lastSavedOn'] = $date;
        
        // JSON形式で保存
        $data = Zend_Json::encode($dataToSave);
        $this->set('data', $data);
        
        // データベースに更新
        $db->pquery('UPDATE vtiger_module_dashboard_widgets SET data=? WHERE id=?', 
            array($data, $widgetId));
    }
    
    /**
     * ユーザー固有のウィジェットインスタンス取得
     * @param int $widgetId
     * @return Home_{YourWidget}_Model
     */
    public static function getUserInstance($widgetId) {
        $currentUser = Users_Record_Model::getCurrentUserModel();
        $db = PearDatabase::getInstance();
        
        $result = $db->pquery('SELECT vtiger_module_dashboard_widgets.*, vtiger_links.linkurl 
            FROM vtiger_module_dashboard_widgets 
            INNER JOIN vtiger_links ON vtiger_links.linkid = vtiger_module_dashboard_widgets.linkid 
            WHERE linktype = ? AND vtiger_module_dashboard_widgets.id = ? 
            AND vtiger_module_dashboard_widgets.userid = ?', 
            array('DASHBOARDWIDGET', $widgetId, $currentUser->getId()));
        
        $self = new self();
        if($db->num_rows($result)) {
            $row = $db->query_result_rowdata($result, 0);
            $self->setData($row);
        }
        return $self;
    }
}
```

### ステップ5: 言語ファイルの更新

各言語ファイルに翻訳を追加：

#### 日本語: `languages/ja_jp/Home.php`
```php
'LBL_YOUR_WIDGET_LABELS' => '翻訳された文字列',
```

#### 英語: `languages/en_us/Home.php`
```php
'LBL_YOUR_WIDGET_LABELS' => 'Translated strings',
```

## ウィジェット設定の保存

ユーザー固有の設定を保存する場合：

```php
// ウィジェット設定の保存
$widgetModel = new Vtiger_Widget_Model();
$widgetModel->set('linkid', $linkId);
$widgetModel->set('userid', $currentUser->getId());
$widgetModel->set('filterid', $filterId); // オプション
$widgetModel->set('data', json_encode($customData)); // カスタムデータ
$widgetModel->add();

// 位置の更新
Vtiger_Widget_Model::updateWidgetPosition($position, $linkId, null, $userId);

// サイズの更新
Vtiger_Widget_Model::updateWidgetSize($size, $linkId, null, $userId, $tabId);
```

## JavaScript連携

ウィジェットの動的更新が必要な場合：

```javascript
// layouts/v7/modules/{YourModule}/resources/DashBoard.js
Vtiger_DashBoard_Js('YourModule_DashBoard_Js', {}, {
    
    registerYourWidgetEvents: function() {
        var thisInstance = this;
        
        // ウィジェットの自動更新
        jQuery('.yourwidget-container').on('click', '.refresh-widget', function() {
            var element = jQuery(this).closest('.dashboardWidget');
            var widgetId = element.attr('data-widgetid');
            
            thisInstance.refreshWidget(widgetId).then(function(data) {
                element.find('.dashboardWidgetContent').html(data);
            });
        });
    },
    
    refreshWidget: function(widgetId) {
        var params = {
            module: app.getModuleName(),
            view: 'ShowWidget',
            name: 'YourWidget',
            widgetid: widgetId,
            content: true
        };
        
        return app.request.post({data: params});
    },
    
    registerEvents: function() {
        this._super();
        this.registerYourWidgetEvents();
    }
});
```

## ウィジェットの権限制御

```php
public function requiresPermission(Vtiger_Request $request) {
    $permissions = parent::requiresPermission($request);
    
    // カスタム権限チェック
    $permissions[] = array(
        'module_parameter' => 'module',
        'action' => 'DetailView'
    );
    
    return $permissions;
}

public function checkPermission(Vtiger_Request $request) {
    $moduleName = $request->getModule();
    $moduleModel = Vtiger_Module_Model::getInstance($moduleName);
    $currentUserPrivilegesModel = Users_Privileges_Model::getCurrentUserPrivilegesModel();
    
    if(!$currentUserPrivilegesModel->hasModulePermission($moduleModel->getId())) {
        throw new AppException(vtranslate('LBL_PERMISSION_DENIED'));
    }
}
```

## トラブルシューティング

### よくある問題と解決方法

1. **ウィジェットが表示されない**
   - `vtiger_links`テーブルにレコードが存在することを確認
   - リンクタイプが`DASHBOARDWIDGET`であることを確認
   - **重要**: Homeモジュール（tabid=9）を使用していることを確認

2. **権限エラー（Call to a member function isActive() on false）**
   - **原因**: 他のモジュールでウィジェットを登録している
   - **解決**: Homeモジュールを使用し、URLも`module=Home`にする

3. **クラスが見つからないエラー**
   - ファイル名とクラス名の命名規則を確認
   - `modules/Home/dashboards/{WidgetName}.php`
   - クラス名: `Home_{WidgetName}_Dashboard`

4. **Smartyシンタックスエラー**
   - JavaScriptコードは`{literal}..{/literal}`で囲む
   - コロン（:）やブレース（{,}）はSmartyの予約文字

5. **Access level errorエラー**
   - モデルクラスのメソッドが`public`であることを確認
   - 親クラスとのアクセスレベル互換性を保つ

6. **テンプレートエラー**
   - テンプレートパスが正しいことを確認
   - Smartyのキャッシュをクリア: `rm -rf test/templates_c/*`

## 参考リソース

- 既存ウィジェットの実装: `modules/Vtiger/dashboards/`
- ウィジェットモデル: `modules/Vtiger/models/Widget.php`
- ダッシュボードモデル: `modules/Vtiger/models/DashBoard.php`
- テンプレート例: `layouts/v7/modules/Vtiger/dashboards/`

## まとめ

F-RevoCRMのダッシュボードウィジェットシステムは柔軟で拡張可能な設計になっています。
このガイドに従って実装することで、ビジネス要件に合わせたカスタムウィジェットを追加できます。
開発時は既存のウィジェット実装を参考にし、MVCパターンに従った実装を心がけてください。