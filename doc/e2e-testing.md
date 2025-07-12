# F-RevoCRM E2Eテストガイド

このドキュメントは、F-RevoCRMのEnd-to-End（E2E）テストシステムの包括的なガイドです。

## 概要

F-RevoCRMのE2Eテストは、TypeScriptとPlaywrightを使用してWebアプリケーションの機能を自動的にテストします。テストは実際のブラウザ環境でCRMモジュールの主要機能（CRUD操作、検索、認証など）を検証します。

## 技術スタック

- **テストフレームワーク**: Playwright v1.40.0+
- **言語**: TypeScript 5.0+
- **ブラウザ**: Chromium, Firefox, WebKit（設定可能）
- **環境**: Node.js 18+

## ディレクトリ構造

```
e2e/
├── auth/                    # 認証関連テスト
│   └── login.spec.ts       # ログイン・ログアウト機能
├── config/                  # テスト設定ファイル
│   └── modules.config.ts   # モジュール設定とフィールドマッピング
├── helpers/                 # ヘルパー関数
│   ├── auth.ts             # 認証ヘルパー
│   └── modules.ts          # モジュール操作ヘルパー
├── modules/                 # モジュール別テスト
│   ├── accounts.spec.ts    # アカウント固有テスト
│   ├── contacts.spec.ts    # コンタクト固有テスト
│   └── standard-module-tests.spec.ts  # 標準CRUD操作テスト
├── tsconfig.json           # TypeScript設定
└── README.md              # 基本的なセットアップガイド
```

## セットアップと実行

### 前提条件

1. **F-RevoCRMサーバー**: `http://localhost` で稼働
2. **管理者アカウント**: 
   - ユーザー名: `admin`
   - パスワード: `Admin1234/`
3. **Node.js**: 18以上

### インストール

```bash
# プロジェクトルートで実行
npm install

# Playwrightブラウザのインストール
npx playwright install
```

### テスト実行コマンド

```bash
# 全テスト実行
npm test

# ヘッドモード（ブラウザ表示）
npm run test:headed

# デバッグモード
npm run test:debug

# UIモード
npm run test:ui

# 特定ファイルのテスト
npx playwright test e2e/auth/login.spec.ts

# HTMLレポート表示
npm run report
```

## テスト設定システム

### モジュール設定（modules.config.ts）

#### 型定義

```typescript
interface FieldConfig {
  selector: string;              // CSS セレクター
  inputType: FieldInputType;     // フィールドタイプ
  testValue: string | TestValueFunction | null;  // テスト値
}

interface ModuleConfig {
  moduleName: string;            // モジュール名
  moduleLabel: string;           // 表示名
  createButtonText: string;      // 作成ボタンテキスト
  listPageTitle: RegExp;         // 一覧ページタイトル
  requiredFields: Record<string, FieldConfig>;    // 必須フィールド
  optionalFields?: Record<string, FieldConfig>;   // オプションフィールド
}
```

#### フィールドタイプ

- `text`: テキスト入力
- `textarea`: 複数行テキスト
- `select`: セレクトボックス
- `date`: 日付入力
- `number`: 数値入力
- `checkbox`: チェックボックス

#### テスト値の種類

1. **固定値**: `'固定文字列'`
2. **関数**: `(timestamp) => \`動的値_\${timestamp}\``
3. **null**: 値なし（依存関係が必要な場合）

### テスト対象モジュールの設定

```typescript
// selectedModules配列でテスト対象を制御
export const selectedModules: string[] = [
  'Accounts',      // 顧客企業
  'Contacts',      // 顧客担当者
  'Leads',         // 見込み客
  'Potentials',    // 案件
  // 'HelpDesk',   // コメントアウトで無効化
  // その他のモジュール...
];
```

## ヘルパー関数

### 認証ヘルパー（auth.ts）

```typescript
// ログイン
await login(page, 'username', 'password');

// ログアウト
await logout(page);

// アカウント一覧への直接移動
await navigateToAccounts(page);
```

### モジュール操作ヘルパー（modules.ts）

```typescript
// モジュール一覧へ移動
await navigateToModule(page, 'Accounts');

// 新規作成ボタンクリック
await clickCreateButton(page, '顧客企業の追加');

// フィールド入力（存在する場合のみ）
await fillFieldIfExists(page, '#selector', 'value');

// フォーム保存
await saveForm(page);

// 編集ボタンクリック
await clickEditButton(page);

// 検索実行
await performSearch(page, '検索テキスト');

// レコード削除
const deleted = await deleteRecord(page);
```

## テストパターン

### 標準CRUD操作テスト

`standard-module-tests.spec.ts`では、設定されたモジュールに対して以下のテストを自動生成します：

1. **一覧表示テスト**: モジュール一覧ページの表示確認
2. **作成テスト**: 新規レコードの作成と保存
3. **編集テスト**: 既存レコードの編集と更新
4. **検索テスト**: レコード検索機能の確認
5. **削除テスト**: レコードの削除機能の確認

### 認証テスト

`auth/login.spec.ts`では以下をテストします：

- 正常なログイン
- 不正なパスワードでのログイン失敗
- 空フィールドでのログイン失敗
- ログアウト機能

### モジュール固有テスト

各モジュール用の`.spec.ts`ファイルでは、そのモジュール特有の機能をテストします：

- 関連レコードの作成
- 特殊なワークフロー
- モジュール固有のビジネスロジック

## テストデータの命名規則

テストでは衝突を避けるためタイムスタンプベースの命名を使用：

```typescript
const timestamp = Date.now();
const testData = {
  accountName: `テスト株式会社_${timestamp}`,
  contactName: `テスト太郎_${timestamp}`,
  email: `test${timestamp}@example.com`
};
```

## TypeScript型安全性

### 主要な型定義

```typescript
// ページオブジェクトの型安全性
test('テスト名', async ({ page }: { page: Page }) => {
  // テスト実装
});

// 設定オブジェクトの型チェック
const config: ModuleConfig = moduleConfigs[moduleName];
if (!config) {
  throw new Error(`Module config not found: ${moduleName}`);
}

// フィールド設定の型安全性
const field: FieldConfig = config.requiredFields[fieldName];
const value: string = typeof field.testValue === 'function'
  ? field.testValue(timestamp)
  : (field.testValue || '');
```

### コンパイル時エラーチェック

```bash
# TypeScriptコンパイレーション確認
cd e2e && npx tsc --noEmit
```

## 設定のカスタマイズ

### Playwright設定（playwright.config.js）

```javascript
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'http://localhost',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // 他のブラウザ設定...
  ],
});
```

### TypeScript設定（e2e/tsconfig.json）

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "noEmit": true,
    "types": ["node"]
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules"]
}
```

## トラブルシューティング

### よくある問題と解決策

#### 1. ログインエラー
```
Error: Login failed
```
**解決策**:
- F-RevoCRMサーバーが起動しているか確認
- 管理者アカウントの認証情報を確認
- ベースURLが正しいか確認

#### 2. 要素が見つからない
```
Error: Element not found
```
**解決策**:
```typescript
// 要素の出現を待機
await page.waitForSelector('#element-id');

// URLの変更を待機
await page.waitForURL(/.*view=Detail.*/);

// 条件付き要素の処理
if (await element.isVisible()) {
  await element.click();
}
```

#### 3. テストタイムアウト
```
Error: Test timeout
```
**解決策**:
```typescript
// タイムアウト時間の調整
test.setTimeout(60000);

// 明示的な待機
await page.waitForTimeout(1000);

// 条件待ち
await expect(element).toBeVisible({ timeout: 10000 });
```

#### 4. TypeScriptコンパイルエラー
```
Error: Type 'undefined' is not assignable to type 'string'
```
**解決策**:
```typescript
// 型ガードの使用
if (!config) {
  throw new Error('Config not found');
}

// Non-null assertion
const value = getValue()!;

// デフォルト値の提供
const safeValue = getValue() || 'defaultValue';
```

## CI/CD統合

### GitHub Actions設定例

```yaml
name: E2E Tests

on: [push, pull_request]

jobs:
  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Install Playwright browsers
        run: npx playwright install
        
      - name: Start F-RevoCRM
        run: docker-compose up -d
        
      - name: Wait for application
        run: |
          timeout 60 bash -c 'until curl -f http://localhost; do sleep 2; done'
        
      - name: Run E2E tests
        run: npm test
        
      - name: Upload test results
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/
```

## ベストプラクティス

### 1. テスト設計
- **独立性**: テスト間の依存関係を避ける
- **冪等性**: 何度実行しても同じ結果になるようにする
- **一意性**: タイムスタンプを使用してデータの重複を避ける

### 2. コード品質
- **型安全性**: TypeScriptの型チェックを活用
- **再利用性**: 共通処理はヘルパー関数に抽出
- **可読性**: 明確なテスト名とコメントを使用

### 3. メンテナンス性
- **設定の外部化**: テストロジックと設定を分離
- **モジュラー設計**: 機能別にファイルを分割
- **ドキュメント**: 設定変更時はドキュメントも更新

### 4. パフォーマンス
- **並列実行**: 独立したテストは並列で実行
- **効率的な待機**: 必要最小限の待機時間を設定
- **リソース管理**: 不要なリソースは適切にクリーンアップ

## 拡張とカスタマイズ

### 新しいモジュールの追加

1. **設定追加**: `modules.config.ts`に新しいモジュール設定を追加
2. **テスト有効化**: `selectedModules`配列に追加
3. **固有テスト**: 必要に応じて専用テストファイルを作成

### カスタムヘルパー関数の作成

```typescript
// helpers/custom.ts
export async function customOperation(page: Page, data: any): Promise<void> {
  // カスタム操作の実装
}
```

### 新しいテストパターンの追加

```typescript
// modules/custom-tests.spec.ts
import { test, expect } from '@playwright/test';

test.describe('カスタムテスト', () => {
  // カスタムテストの実装
});
```

このドキュメントにより、F-RevoCRMのE2Eテストシステムを効果的に理解、使用、拡張することができます。