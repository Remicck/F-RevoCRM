# F-RevoCRM E2Eテスト

このディレクトリには、F-RevoCRMのPlaywrightを使用したEnd-to-Endテストが含まれています。

## セットアップ

### 前提条件
- Node.js 18以上
- F-RevoCRMが http://localhost で稼働していること
- 管理者アカウント（username: admin, password: Admin1234/）が利用可能であること

### インストール
```bash
# プロジェクトルートで実行
npm install
npx playwright install
```

## テスト実行

### 全テストの実行
```bash
npm test
```

### ヘッドモードでの実行（ブラウザを表示）
```bash
npm run test:headed
```

### デバッグモードでの実行
```bash
npm run test:debug
```

### UIモードでの実行
```bash
npm run test:ui
```

### 特定のテストファイルの実行
```bash
npx playwright test e2e/auth/login.spec.ts
npx playwright test e2e/modules/contacts.spec.ts
```

### Inventory系テストの実行
```bash
# すべてのInventory系テスト
npm run test:inventory

# Inventory系テスト（ヘッドモード）
npm run test:inventory:headed

# 個別モジュールのテスト
npm run test:purchase-order
npm run test:sales-order
npm run test:quotes

# 従来のモジュールテスト
npm run test:modules
```

### 特定のブラウザでの実行
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## テスト結果の確認

### HTMLレポートの表示
```bash
npm run report
```

## テスト構造

```
e2e/
├── auth/              # 認証関連のテスト
│   └── login.spec.ts
├── modules/           # 標準モジュールのテスト
│   ├── contacts.spec.ts
│   ├── accounts.spec.ts
│   └── standard-module-tests.spec.ts
├── inventory/         # Inventory系特殊モジュールのテスト
│   ├── purchase-order.spec.ts
│   ├── sales-order.spec.ts
│   ├── quotes.spec.ts
│   └── helpers/
│       ├── line-items.ts    # 明細行操作
│       ├── calculations.ts  # 金額計算
│       └── common.ts        # 共通ユーティリティ
├── helpers/           # 共通ヘルパー関数
│   ├── auth.ts
│   ├── modules.ts
│   └── inventory.ts   # Inventory系共通
├── config/            # 設定
│   └── modules.config.ts
└── README.md
```

## テストデータ

テストでは以下の命名規則でテストデータを作成します：
- コンタクト: `テスト太郎_{timestamp}`
- アカウント: `テスト株式会社_{timestamp}`
- Eメール: `test.{timestamp}@example.com`
- 発注: `PurchaseOrder_{timestamp}`
- 受注: `SalesOrder_{timestamp}`
- 見積: `Quote_{timestamp}`

これにより、テスト実行毎に一意のデータが作成され、テスト間での干渉を防ぎます。

## Inventory系モジュールについて

PurchaseOrder（発注）、SalesOrder（受注）、Quotes（見積）は、以下の特殊な機能を持つため、標準モジュールとは別の専用テストスイートを作成しています：

### 主な特徴
- **複雑な明細行管理**: 製品・サービスの動的追加、数量・単価の計算
- **高度な税計算**: 消費税、軽減税率、地域別税率の対応
- **割引・送料計算**: 複数の割引タイプ、送料、調整額の計算
- **住所管理**: 請求先・出荷先の独立管理とコピー機能
- **ワークフロー**: ステータス管理と承認プロセス

### テスト内容
- 基本的なCRUD操作
- 明細行の追加・削除・編集
- 金額計算の正確性確認
- 税率・割引率の複雑な組み合わせテスト
- 住所コピー機能のテスト
- レスポンシブデザインとパフォーマンステスト

## 環境設定

### カスタムベースURL
```bash
# 別のURLでテストする場合
BASE_URL=http://your-custom-url npx playwright test
```

### 設定ファイル
`playwright.config.js` でテスト設定をカスタマイズできます。

## トラブルシューティング

### よくある問題

1. **ログインに失敗する**
   - F-RevoCRMが正しく起動しているか確認
   - 管理者アカウントの認証情報が正しいか確認

2. **要素が見つからない**
   - ページの読み込み時間が長い場合があります
   - `page.waitForTimeout()` を追加して待機時間を延ばす

3. **テストが不安定**
   - 非同期処理の完了を適切に待機する
   - `waitForSelector()` や `waitForURL()` を使用

## CI/CD統合

GitHub ActionsなどのCI/CDパイプラインでテストを実行する場合：

```yaml
- name: Install dependencies
  run: npm install

- name: Install Playwright browsers
  run: npx playwright install

- name: Run E2E tests
  run: npm test
```