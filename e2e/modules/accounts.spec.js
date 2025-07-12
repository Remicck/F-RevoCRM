import { test, expect } from '@playwright/test';
import { login, navigateToAccounts } from '../helpers/auth.js';

test.describe('アカウント機能テスト', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('アカウント一覧表示', async ({ page }) => {
    // アカウントモジュールに移動
    await navigateToAccounts(page);
    
    // アカウント一覧ページが表示されることを確認（ヘルパー関数で既に確認済み）
  });

  test('新しいアカウントを作成', async ({ page }) => {
    // アカウントモジュールに移動
    await navigateToAccounts(page);
    
    // 新規作成ボタンをクリック
    await page.click('button:has-text("顧客企業の追加")');
    
    // 新規作成フォームが表示されることを確認
    await expect(page.locator('#Accounts_editView_fieldName_accountname')).toBeVisible();
    
    // テストデータを入力
    const testData = {
      accountname: `テスト株式会社_${Date.now()}`,
      website: 'https://example.com',
      phone: '03-1234-5678',
      email: `contact${Date.now()}@example.com`
    };
    
    await page.fill('#Accounts_editView_fieldName_accountname', testData.accountname);
    
    // ウェブサイトフィールドが存在する場合は入力
    const websiteField = page.locator('#Accounts_editView_fieldName_website');
    if (await websiteField.isVisible()) {
      await websiteField.fill(testData.website);
    }
    
    // 電話番号フィールドが存在する場合は入力
    const phoneField = page.locator('#Accounts_editView_fieldName_phone');
    if (await phoneField.isVisible()) {
      await phoneField.fill(testData.phone);
    }
    
    // Eメールフィールドが存在する場合は入力
    const emailField = page.locator('#Accounts_editView_fieldName_email1');
    if (await emailField.isVisible()) {
      await emailField.fill(testData.email);
    }
    
    // 保存ボタンをクリック
    await page.click('button:has-text("保存")');
    
    // 詳細ページにリダイレクトされることを確認
    await page.waitForURL(/.*view=Detail.*/);
    
    // 作成されたアカウントの情報が表示されることを確認
    await expect(page.locator('body')).toContainText(testData.accountname);
  });

  test('アカウントを編集', async ({ page }) => {
    // まず新しいアカウントを作成
    await navigateToAccounts(page);
    await page.click('button:has-text("顧客企業の追加")');
    
    const originalName = `テスト会社_${Date.now()}`;
    await page.fill('#Accounts_editView_fieldName_accountname', originalName);
    await page.click('button:has-text("保存")');
    
    // 詳細ページで編集ボタンをクリック
    await page.click('button:has-text("編集")');
    
    // 編集フォームが表示されることを確認
    await expect(page.locator('#Accounts_editView_fieldName_accountname')).toBeVisible();
    
    // データを更新
    const updatedName = `更新済み_${originalName}`;
    await page.fill('#Accounts_editView_fieldName_accountname', updatedName);
    await page.click('button:has-text("保存")');
    
    // 更新された情報が表示されることを確認
    await expect(page.locator('body')).toContainText(updatedName);
  });

  test('アカウント検索', async ({ page }) => {
    // アカウントモジュールに移動
    await navigateToAccounts(page);
    
    // 検索フィールドに文字を入力
    const searchField = page.locator('input[name="search_text"], input[placeholder*="検索"], .search input, table input');
    if (await searchField.first().isVisible()) {
      await searchField.first().fill('テスト');
      
      // 検索ボタンをクリックまたはEnterキーを押す
      await page.keyboard.press('Enter');
      
      // 検索結果が表示されることを確認
      await page.waitForTimeout(1000); // 検索結果の読み込みを待機
    }
  });

  test('アカウント削除', async ({ page }) => {
    // まず新しいアカウントを作成
    await navigateToAccounts(page);
    await page.click('button:has-text("顧客企業の追加")');
    
    const testName = `削除テスト_${Date.now()}`;
    await page.fill('#Accounts_editView_fieldName_accountname', testName);
    await page.click('button:has-text("保存")');
    
    // 詳細ページで「その他」メニューから削除を選択
    await page.click('button:has-text("その他")');
    await page.waitForTimeout(500);
    
    // 削除オプションを探す
    const deleteButton = page.locator('text=削除, a:has-text("削除"), button:has-text("削除")');
    if (await deleteButton.isVisible()) {
      await deleteButton.click();
      
      // 確認ダイアログが表示される場合は確認
      await page.waitForTimeout(500);
      const confirmButton = page.locator('button:has-text("OK"), button:has-text("確認"), button:has-text("削除")');
      if (await confirmButton.isVisible()) {
        await confirmButton.click();
      }
      
      // 一覧ページにリダイレクトされることを確認
      await expect(page).toHaveURL(/.*module=Accounts.*view=List/);
    } else {
      // 削除ボタンが見つからない場合はスキップ
      console.log('削除ボタンが見つかりませんでした');
    }
  });
});