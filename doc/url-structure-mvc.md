# F-RevoCRM URL構造とMVCアーキテクチャドキュメント

## 概要

F-RevoCRMは、VtigerCRMをベースとしたPHP製のCRMシステムで、MVCアーキテクチャパターンを採用しています。このドキュメントでは、URLの構造とMVCのController部分（ViewとAction）の対応関係について詳しく説明します。

## URL構造の基本パターン

F-RevoCRMのURLは以下の基本パターンに従います：

```
index.php?module=[ModuleName]&view=[ViewName]&[AdditionalParams]
index.php?module=[ModuleName]&action=[ActionName]&[AdditionalParams]
```

### 基本的なURL構造

#### 1. Viewベースのリクエスト（読み取り系）
```
index.php?module=Calendar&view=Calendar&lastViewDate=2025-07-07&Viewtype=week
index.php?module=Calendar&view=List
index.php?module=Potentials&view=List&viewname=10&app=SALES
index.php?module=Potentials&view=Edit&app=SALES
index.php?module=Reports&view=Detail&record=1
index.php?module=Home&view=DashBoard&app=MARKETING
```

#### 2. Actionベースのリクエスト（変更系）
```
index.php?module=Potentials&action=Save
index.php?module=Calendar&action=SaveAjax
index.php?module=CustomView&action=Delete
```

### パラメータの詳細

| パラメータ | 説明 | 例 |
|-----------|------|-----|
| `module` | 対象モジュール名 | Calendar, Potentials, Reports, Accounts |
| `view` | 表示するView | List, Edit, Detail, Calendar, DashBoard |
| `action` | 実行するAction | Save, Delete, SaveAjax |
| `record` | レコードID（Detail/Edit時） | 1, 123, 456 |
| `viewname` | カスタムビュー名 | 10, 11, 19 |
| `app` | アプリケーションコンテキスト | MARKETING, SALES |

## MVCアーキテクチャとファイル構造

### 1. リクエストルーティング

すべてのリクエストは `index.php` を通じて処理され、`includes/main/WebUI.php` でルーティングされます。

```php
// WebUI.php 194行目付近
$handlerClass = Vtiger_Loader::getComponentClassName($componentType, $componentName, $qualifiedModuleName);
$handler = new $handlerClass();
```

### 2. Viewクラス（読み取り系Controller）

Viewクラスは `modules/[ModuleName]/views/` ディレクトリに配置されます。

#### ファイル配置パターン
```
modules/
├── Calendar/
│   └── views/
│       ├── Calendar.php        → Calendar_Calendar_View
│       ├── List.php           → Calendar_List_View（継承の場合は存在しない）
│       └── Detail.php         → Calendar_Detail_View
├── Potentials/
│   └── views/
│       ├── Detail.php         → Potentials_Detail_View
│       └── ConvertPotential.php → Potentials_ConvertPotential_View
└── Reports/
    └── views/
        └── Detail.php         → Reports_Detail_View
```

#### クラス命名規則
```php
// URL: index.php?module=Calendar&view=Calendar
// ファイル: modules/Calendar/views/Calendar.php
// クラス名: Calendar_Calendar_View extends Vtiger_Index_View

class Calendar_Calendar_View extends Vtiger_Index_View {
    public function process(Vtiger_Request $request) {
        // ビューの処理ロジック
    }
}
```

#### 継承チェーン
各モジュールのViewクラスは以下の継承チェーンに従います：

```
モジュール固有View → Vtiger基底View → 共通基底クラス
例: Calendar_Calendar_View → Vtiger_Index_View → Vtiger_View
例: Potentials_Detail_View → Vtiger_Detail_View → Vtiger_View
```

### 3. Actionクラス（変更系Controller）

Actionクラスは `modules/[ModuleName]/actions/` ディレクトリに配置されます。

#### ファイル配置パターン
```
modules/
├── Calendar/
│   └── actions/
│       ├── Save.php           → Calendar_Save_Action
│       ├── SaveAjax.php       → Calendar_SaveAjax_Action
│       └── Delete.php         → Calendar_Delete_Action
├── Potentials/
│   └── actions/
│       ├── Save.php           → Potentials_Save_Action
│       └── SaveAjax.php       → Potentials_SaveAjax_Action
└── CustomView/
    └── actions/
        ├── Save.php           → CustomView_Save_Action
        └── Delete.php         → CustomView_Delete_Action
```

#### クラス命名規則
```php
// URL: index.php?module=Potentials&action=Save
// ファイル: modules/Potentials/actions/Save.php
// クラス名: Potentials_Save_Action extends Vtiger_Save_Action

class Potentials_Save_Action extends Vtiger_Save_Action {
    public function process(Vtiger_Request $request) {
        // アクションの処理ロジック
        parent::process($request);
    }
}
```

### 4. フォールバック機能

モジュール固有のView/Actionクラスが存在しない場合、基底クラスにフォールバックします。

#### フォールバック順序
1. `modules/[Module]/views/[View].php` → `[Module]_[View]_View`
2. `modules/Vtiger/views/[View].php` → `Vtiger_[View]_View`
3. エラー

例：
- `modules/Potentials/views/Edit.php` が存在しない場合
- `modules/Vtiger/views/Edit.php` の `Vtiger_Edit_View` を使用

## 実際のURL例とファイル対応

### 例1: カレンダーモジュール

| URL | ファイル | クラス |
|-----|---------|--------|
| `index.php?module=Calendar&view=Calendar` | `modules/Calendar/views/Calendar.php` | `Calendar_Calendar_View` |
| `index.php?module=Calendar&view=List` | `modules/Vtiger/views/List.php` | `Vtiger_List_View` |
| `index.php?module=Calendar&action=Save` | `modules/Calendar/actions/Save.php` | `Calendar_Save_Action` |

### 例2: 案件（Potentials）モジュール

| URL | ファイル | クラス |
|-----|---------|--------|
| `index.php?module=Potentials&view=List` | `modules/Vtiger/views/List.php` | `Vtiger_List_View` |
| `index.php?module=Potentials&view=Edit` | `modules/Vtiger/views/Edit.php` | `Vtiger_Edit_View` |
| `index.php?module=Potentials&view=Detail` | `modules/Potentials/views/Detail.php` | `Potentials_Detail_View` |
| `index.php?module=Potentials&action=Save` | `modules/Potentials/actions/Save.php` | `Potentials_Save_Action` |

### 例3: レポートモジュール

| URL | ファイル | クラス |
|-----|---------|--------|
| `index.php?module=Reports&view=List` | `modules/Vtiger/views/List.php` | `Vtiger_List_View` |
| `index.php?module=Reports&view=Detail&record=1` | `modules/Reports/views/Detail.php` | `Reports_Detail_View` |

## コンポーネント解決プロセス

### 1. `WebUI.php`でのリクエスト処理
```php
// リクエストパラメータの取得
$module = $request->getModule();
$view = $request->get('view');
$action = $request->get('action');

// コンポーネントタイプの決定
if (!empty($action)) {
    $componentType = 'Action';
    $componentName = $action;
} else {
    $componentType = 'View';
    $componentName = $view ?: 'Index';
}

// クラス名の解決とインスタンス化
$handlerClass = Vtiger_Loader::getComponentClassName($componentType, $componentName, $qualifiedModuleName);
$handler = new $handlerClass();
```

### 2. `Loader.php`でのクラス名解決
```php
// 基本パターン
// modules/[Module]/views/[View].php → [Module]_[View]_View
// modules/[Module]/actions/[Action].php → [Module]_[Action]_Action

// フォールバック先
// modules/Vtiger/views/[View].php → Vtiger_[View]_View
// modules/Vtiger/actions/[Action].php → Vtiger_[Action]_Action
```

## 特殊なケース

### 1. ダッシュボード
```
URL: index.php?module=Home&view=DashBoard
ファイル: modules/Home/views/DashBoard.php
クラス: Home_DashBoard_View
```

### 2. 設定モジュール
```
URL: index.php?module=Settings:Users&view=List
修飾モジュール名: Settings:Users
ファイル: modules/Settings/Vtiger/views/List.php
クラス: Settings_Vtiger_List_View
```

### 3. Ajaxリクエスト
```
URL: index.php?module=Calendar&action=SaveAjax
ファイル: modules/Calendar/actions/SaveAjax.php
クラス: Calendar_SaveAjax_Action
```

## 開発時の注意点

### 1. 命名規則の厳守
- ファイル名とクラス名は一致している必要があります
- キャメルケースとアンダースコアの使い分けに注意

### 2. 継承関係
- 基底クラスの機能を適切に継承・オーバーライド
- `parent::process($request)` などの呼び出しを忘れずに

### 3. 権限チェック
- 各Controller内で適切な権限チェックを実装
- `checkPermission()` メソッドをオーバーライド

### 4. テンプレートファイル
- Viewクラスは対応するSmartyテンプレートファイルと組み合わせて動作
- テンプレートは `layouts/v7/modules/[Module]/` に配置

## まとめ

F-RevoCRMのURL構造とMVCアーキテクチャは、明確な規則に基づいて設計されており、モジュール単位での拡張が容易になっています。新しい機能を追加する際は、既存のパターンに従ってView/Actionクラスを作成することで、統一性を保ちながら開発を進めることができます。

このドキュメントを参考に、F-RevoCRMの内部構造を理解し、効率的な開発を行ってください。