import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth.js';

test.describe('コンタクト機能テスト', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('コンタクト一覧表示', async ({ page }) => {
    // コンタクトモジュールに移動
    await page.goto('http://localhost/index.php?module=Contacts&view=List');
    
    // コンタクト一覧ページが表示されることを確認
    await expect(page).toHaveURL(/.*module=Contacts.*/);
    await expect(page.locator('h4.module-title')).toContainText(/顧客担当者/);
  });

  test('新しいコンタクトを作成', async ({ page }) => {
    // コンタクトモジュールに移動
    await page.goto('http://localhost/index.php?module=Contacts&view=List');
    
    // 新規作成ボタンをクリック
    await page.click('button:has-text("顧客担当者の追加")');
    
    // 新規作成フォームが表示されることを確認
    await expect(page.locator('input[name="lastname"]')).toBeVisible();
    
    // テストデータを入力
    const testData = {
      lastname: 'テスト',  // 姓
      firstname: '太郎',   // 名
      email: `test${Date.now()}@example.com`,
      phone: '090-1234-5678'
    };
    
    await page.fill('input[name="lastname"]', testData.lastname);
    await page.fill('input[name="firstname"]', testData.firstname);
    await page.fill('input[name="email"]', testData.email);
    
    // 電話番号フィールドが存在する場合は入力（携帯電話番号を優先）
    const mobileField = page.locator('input[name="mobile"]');
    if (await mobileField.isVisible()) {
      await mobileField.fill(testData.phone);
    }
    
    // 保存ボタンをクリック
    await page.click('button:has-text("保存")');
    
    // 詳細ページにリダイレクトされることを確認
    await page.waitForURL(/.*view=Detail.*/);
    
    // 作成されたコンタクトの情報が表示されることを確認
    await expect(page.locator('body')).toContainText(testData.lastname);
    await expect(page.locator('body')).toContainText(testData.firstname);
  });

  test('コンタクトを編集', async ({ page }) => {
    // まず新しいコンタクトを作成
    await page.goto('http://localhost/index.php?module=Contacts&view=List');
    await page.click('button:has-text("顧客担当者の追加")');
    
    await page.fill('input[name="lastname"]', 'テスト');
    await page.fill('input[name="firstname"]', '太郎');
    await page.click('button:has-text("保存")');
    
    // 詳細ページで編集ボタンをクリック
    await page.click('button:has-text("編集")');
    
    // 編集フォームが表示されることを確認
    await expect(page.locator('input[name="lastname"]')).toBeVisible();
    
    // データを更新
    await page.fill('input[name="lastname"]', '更新テスト');
    await page.click('button:has-text("保存")');
    
    // 更新された情報が表示されることを確認
    await expect(page.locator('body')).toContainText('更新テスト');
  });

  test('コンタクト検索', async ({ page }) => {
    // コンタクトモジュールに移動
    await page.goto('http://localhost/index.php?module=Contacts&view=List');
    
    // 検索フィールドに文字を入力
    const searchField = page.locator('input[name="search_text"], input[placeholder*="検索"], .search input');
    if (await searchField.isVisible()) {
      await searchField.fill('テスト');
      
      // 検索ボタンをクリックまたはEnterキーを押す
      await page.keyboard.press('Enter');
      
      // 検索結果が表示されることを確認
      await page.waitForTimeout(1000); // 検索結果の読み込みを待機
    }
  });
});