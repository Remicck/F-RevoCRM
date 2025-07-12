import { expect } from '@playwright/test';

/**
 * ログイン用のヘルパー関数
 * @param {import('@playwright/test').Page} page
 * @param {string} username - ユーザー名（デフォルト: 'admin'）
 * @param {string} password - パスワード（デフォルト: 'Admin1234/'）
 */
export async function login(page, username = 'admin', password = 'Admin1234/') {
  await page.goto('/');
  
  // ログインフォームが表示されるまで待機
  await page.getByRole('textbox', { name: 'ユーザー名' }).waitFor();
  
  // ユーザー名とパスワードを入力
  await page.getByRole('textbox', { name: 'ユーザー名' }).fill(username);
  await page.getByRole('textbox', { name: 'パスワード' }).fill(password);
  
  // ログインボタンをクリック
  await page.getByRole('button', { name: 'ログイン' }).click();
  
  // ダッシュボードの読み込みを待機（タイトルで確認）
  await expect(page).toHaveTitle('ダッシュボード');
  
  // ログイン成功の確認（メインナビゲーションメニューの存在確認）
  await expect(page.locator('nav.navbar.app-fixed-navbar')).toBeVisible();
}

/**
 * ログアウト用のヘルパー関数
 * @param {import('@playwright/test').Page} page
 */
export async function logout(page) {
  // ユーザーメニューをクリック
  await page.getByRole('button').filter({ hasText: 'システム管理者' }).click();
  
  // ログアウトリンクをクリック
  await page.getByRole('link', { name: 'ログアウト' }).click();
  
  // ログインページにリダイレクトされることを確認
  await page.waitForURL('**/index.php');
  await expect(page.getByRole('textbox', { name: 'ユーザー名' }).first()).toBeVisible();
}

/**
 * アカウント一覧ページに移動するヘルパー関数
 * @param {import('@playwright/test').Page} page
 */
export async function navigateToAccounts(page) {
  // 直接URLでアカウント一覧ページにアクセス
  await page.goto('/index.php?module=Accounts&view=List&app=SALES');
  
  // アカウント一覧ページの読み込み完了を待機
  await expect(page).toHaveURL(/.*module=Accounts.*/);
  await expect(page.locator('h4:has-text("顧客企業")')).toBeVisible();
}