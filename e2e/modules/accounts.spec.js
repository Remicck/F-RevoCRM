import { test } from '@playwright/test';
import { login } from '../helpers/auth.js';

// アカウント固有のテストケースのみ残す
// 標準的なCRUD操作は standard-module-tests.spec.js で実行される

test.describe('アカウント固有機能テスト', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  // ここにアカウントモジュール固有のテストケースを追加
  // 例: 関連レコードの作成、特殊なワークフロー、固有のビジネスロジックなど
});