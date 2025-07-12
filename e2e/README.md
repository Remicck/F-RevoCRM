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
npx playwright test e2e/auth/login.spec.js
npx playwright test e2e/modules/contacts.spec.js
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
│   └── login.spec.js
├── modules/           # 各モジュールのテスト
│   ├── contacts.spec.js
│   └── accounts.spec.js
├── helpers/           # ヘルパー関数
│   └── auth.js
├── fixtures/          # テストデータ
│   └── test-data.js
└── README.md
```

## テストデータ

テストでは以下の命名規則でテストデータを作成します：
- コンタクト: `テスト太郎_{timestamp}`
- アカウント: `テスト株式会社_{timestamp}`
- Eメール: `test.{timestamp}@example.com`

これにより、テスト実行毎に一意のデータが作成され、テスト間での干渉を防ぎます。

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