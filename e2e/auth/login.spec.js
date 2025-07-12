import { test, expect } from '@playwright/test';
import { login, logout } from '../helpers/auth.js';

test.describe('ログイン機能テスト', () => {
  test('正常なログイン', async ({ page }) => {
    await login(page);
    
    // ダッシュボードが表示されることを確認
    await expect(page).toHaveTitle('ダッシュボード');
    await expect(page.locator('nav.navbar.app-fixed-navbar')).toBeVisible();
  });

  test('間違ったパスワードでのログイン失敗', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('textbox', { name: 'ユーザー名' }).fill('admin');
    await page.getByRole('textbox', { name: 'パスワード' }).fill('wrongpassword');
    await page.getByRole('button', { name: 'ログイン' }).click();
    
    // エラーメッセージが表示されることを確認
    await expect(page.locator('#validationMessage')).toBeVisible();
    await expect(page.locator('#validationMessage')).toContainText('無効なユーザー名またはパスワード');
  });

  test('空のフィールドでのログイン失敗', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('button', { name: 'ログイン' }).click();
    
    // バリデーションエラーまたはエラーメッセージが表示されることを確認
    await expect(page.locator('#validationMessage')).toBeVisible();
    await expect(page.locator('#validationMessage')).toContainText('ユーザー名とパスワードを入力してください');
  });

  test('ログアウト機能', async ({ page }) => {
    // まずログイン
    await login(page);
    
    // ログアウト
    await logout(page);
    
    // ログインページに戻ることを確認
    await expect(page.getByRole('textbox', { name: 'ユーザー名' }).first()).toBeVisible();
  });
});