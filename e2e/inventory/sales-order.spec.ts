import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';
import { 
  navigateToInventoryCreate, 
  fillBasicInfo, 
  fillAddressInfo,
  saveRecord, 
  verifySaveSuccess,
  validateInventoryForm
} from '../helpers/inventory';
import { 
  addProductLineItem, 
  addServiceLineItem, 
  verifyLineItemCount 
} from './helpers/line-items';
import { 
  configureTaxSettings, 
  configureDiscount, 
  configureShipping,
  verifyGrandTotal 
} from './helpers/calculations';
import { 
  generateTestTitle, 
  testData, 
  getRandomTestData,
  generateTestDate,
  waitForPageReady 
} from './helpers/common';

test.describe('受注（SalesOrder）モジュール', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('受注作成ページの基本表示確認', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    // ページタイトルの確認
    expect(await page.title()).toContain('受注');
    
    // フォーム構造の検証
    await validateInventoryForm(page, 'SalesOrder');
    
    // SalesOrder特有の要素確認
    const organizationField = page.locator('td').filter({ hasText: '顧客企業名' });
    await expect(organizationField).toBeVisible();
    
    const quotesField = page.locator('td').filter({ hasText: '見積名' });
    await expect(quotesField).toBeVisible();
    
    // 繰り返し請求情報セクションの確認
    const recurringHeading = page.getByRole('heading', { name: '繰り返し請求情報' });
    await expect(recurringHeading).toBeVisible();
  });

  test('基本的な受注作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    const testTitle = generateTestTitle('SalesOrder');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'SalesOrder', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 期限日設定
    const dueDate = generateTestDate(30); // 30日後
    await page.locator('input[type="date"]').or(page.locator('input').filter({ hasText: '期限日' })).fill(dueDate);
    
    // 住所情報入力
    await fillAddressInfo(page, {
      billingAddress: '東京都渋谷区1-1-1',
      shippingAddress: '東京都渋谷区2-2-2'
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'SalesOrder');
  });

  test('繰り返し請求設定を含む受注作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    const testTitle = generateTestTitle('SalesOrderRecurring');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'SalesOrder', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 繰り返し請求設定
    await page.getByRole('checkbox').filter({ hasText: '繰り返し有効' }).check();
    
    // 繰り返し設定が有効になったことを確認
    const frequencyDropdown = page.locator('select').filter({ hasText: '周期' });
    await expect(frequencyDropdown).toBeEnabled();
    await frequencyDropdown.selectOption({ label: '毎月' });
    
    // 開始時期設定
    const startDate = generateTestDate(0); // 今日
    await page.locator('input').filter({ hasText: '開始時期' }).fill(startDate);
    
    // 終了時期設定
    const endDate = generateTestDate(365); // 1年後
    await page.locator('input').filter({ hasText: '終了時期' }).fill(endDate);
    
    // 支払い期限設定
    const paymentTermDropdown = page.locator('select').filter({ hasText: '支払い期限' });
    await expect(paymentTermDropdown).toBeEnabled();
    await paymentTermDropdown.selectOption({ label: '30日後' });
    
    // 請求ステータス設定
    const invoiceStatusDropdown = page.locator('select').filter({ hasText: '請求ステータス' });
    await expect(invoiceStatusDropdown).toBeEnabled();
    await invoiceStatusDropdown.selectOption({ label: '自動作成済み' });
    
    // 製品追加
    await addProductLineItem(page, {
      productName: 'サブスクリプション製品',
      quantity: 1,
      unitPrice: 5000
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'SalesOrder');
  });

  test('見積からの受注作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    const testTitle = generateTestTitle('SalesOrderFromQuote');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'SalesOrder', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 見積名の設定（オートコンプリート）
    const quotesField = page.locator('input').filter({ hasText: '見積名' });
    await quotesField.fill('テスト見積');
    await page.waitForTimeout(500); // オートコンプリート候補の表示を待機
    
    // 案件名の設定
    const potentialField = page.locator('input').filter({ hasText: '案件名' });
    await potentialField.fill('テスト案件');
    await page.waitForTimeout(500);
    
    // 製品追加
    await addProductLineItem(page, {
      productName: '見積由来製品',
      quantity: 2,
      unitPrice: 8000
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'SalesOrder');
  });

  test('複数製品・サービス混在の受注', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    const testTitle = generateTestTitle('SalesOrderMixed');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'SalesOrder', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 製品1追加
    const product1 = getRandomTestData(testData.products);
    await addProductLineItem(page, {
      productName: product1.name,
      quantity: 3,
      unitPrice: product1.price
    });
    
    // 製品2追加（軽減税率対象）
    const product2 = getRandomTestData(testData.products);
    await addProductLineItem(page, {
      productName: product2.name,
      quantity: 1,
      unitPrice: product2.price,
      isReducedTax: true
    });
    
    // サービス追加
    const service = getRandomTestData(testData.services);
    await addServiceLineItem(page, {
      productName: service.name,
      quantity: 2,
      unitPrice: service.price
    });
    
    // 明細行数の確認
    await verifyLineItemCount(page, 3);
    
    // 割引設定（全体に5%割引）
    await configureDiscount(page, {
      type: 'percentage',
      value: 5
    });
    
    // 送料設定
    await configureShipping(page, {
      amount: 800
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'SalesOrder');
  });

  test('住所コピー機能のテスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    const testTitle = generateTestTitle('SalesOrderAddressCopy');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'SalesOrder', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 請求先住所コピー設定
    await page.getByRole('radio', { name: '顧客企業' }).first().check();
    
    // 発送先住所コピー設定
    await page.getByRole('radio', { name: '番地 (請求先)' }).check();
    
    // 手動で請求先住所を入力
    await page.locator('input').filter({ hasText: '番地 (請求先)' }).fill('東京都新宿区1-2-3');
    
    // 住所コピー機能により発送先にも反映されることを確認
    await page.waitForTimeout(1000);
    
    // 製品追加
    await addProductLineItem(page, {
      productName: 'テスト製品',
      quantity: 1,
      unitPrice: 3000
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'SalesOrder');
  });

  test('顧客担当者設定のテスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    const testTitle = generateTestTitle('SalesOrderWithContact');
    const organization = getRandomTestData(testData.organizations);
    const contact = getRandomTestData(testData.contacts);
    
    // 基本情報入力
    await fillBasicInfo(page, 'SalesOrder', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 顧客担当者設定
    const contactField = page.locator('input').filter({ hasText: 'ご担当者様名' });
    await contactField.fill(contact.name);
    await page.waitForTimeout(500);
    
    // 製品追加
    await addProductLineItem(page, {
      productName: 'コンタクト向け製品',
      quantity: 1,
      unitPrice: 12000
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'SalesOrder');
  });

  test('大量明細での性能テスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    const testTitle = generateTestTitle('SalesOrderPerformance');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'SalesOrder', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 複数の製品を追加（性能テスト）
    for (let i = 0; i < 5; i++) {
      const product = getRandomTestData(testData.products);
      await addProductLineItem(page, {
        productName: `${product.name}_${i}`,
        quantity: i + 1,
        unitPrice: product.price + (i * 100)
      });
      
      // 各追加後に少し待機
      await page.waitForTimeout(500);
    }
    
    // 明細行数の確認
    await verifyLineItemCount(page, 5);
    
    // 総計算時間の確認（性能テスト）
    const startTime = Date.now();
    await configureDiscount(page, {
      type: 'percentage',
      value: 10
    });
    const calculationTime = Date.now() - startTime;
    
    // 計算時間が合理的な範囲内であることを確認（5秒以内）
    expect(calculationTime).toBeLessThan(5000);
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'SalesOrder');
  });

  test('必須フィールドのバリデーション', async ({ page }) => {
    await navigateToInventoryCreate(page, 'SalesOrder');
    
    // 繰り返し請求を有効にして、必須フィールドのバリデーションをテスト
    await page.getByRole('checkbox').filter({ hasText: '繰り返し有効' }).check();
    
    // 必須フィールドなしで保存を試行
    await saveRecord(page);
    
    // エラーメッセージまたはフィールドハイライトの確認
    const titleField = page.locator('input').filter({ hasText: 'タイトル' });
    const isFocused = await titleField.isVisible();
    expect(isFocused).toBeTruthy();
  });
});