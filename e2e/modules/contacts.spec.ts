import { test, type Page } from '@playwright/test';
import { login } from '../helpers/auth.js';

// コンタクト固有のテストケースのみ残す
// 標準的なCRUD操作は standard-module-tests.spec.js で実行される

test.describe('コンタクト固有機能テスト', () => {
  test.beforeEach(async ({ page }: { page: Page }) => {
    await login(page);
  });

  // ここにコンタクトモジュール固有のテストケースを追加
  // 例: アカウントとの関連付け、ポータルユーザー設定など
});
