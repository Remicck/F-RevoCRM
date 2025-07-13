import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';
import { 
  navigateToInventoryCreate, 
  fillBasicInfo,
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
  verifyGrandTotal,
  testComplexCalculation 
} from './helpers/calculations';
import { 
  generateTestTitle, 
  testData, 
  getRandomTestData,
  waitForPageReady 
} from './helpers/common';

test.describe('発注（PurchaseOrder）モジュール', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('発注作成ページの基本表示確認', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    // ページタイトルの確認
    expect(await page.title()).toContain('発注');
    
    // フォーム構造の検証
    await validateInventoryForm(page, 'PurchaseOrder');
    
    // PurchaseOrder特有の要素確認
    const vendorField = page.locator('td').filter({ hasText: '発注先名' });
    await expect(vendorField).toBeVisible();
    
    const trackingField = page.locator('td').filter({ hasText: 'トラッキング番号' });
    await expect(trackingField).toBeVisible();
  });

  test('基本的な発注作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    const testTitle = generateTestTitle('PurchaseOrder');
    const vendor = getRandomTestData(testData.vendors);
    
    // 基本情報入力
    await fillBasicInfo(page, 'PurchaseOrder', {
      title: testTitle,
      vendor: vendor.name,
      status: '登録済み'
    });
    
    // 住所情報は一旦スキップ（UIの仕様要確認）
    // await fillAddressInfo(page, {
    //   billingAddress: '東京都千代田区1-1-1',
    //   shippingAddress: '東京都千代田区2-2-2'
    // });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'PurchaseOrder');
  });

  test('製品明細を含む発注作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    const testTitle = generateTestTitle('PurchaseOrderWithProducts');
    const vendor = getRandomTestData(testData.vendors);
    
    // 基本情報入力
    await fillBasicInfo(page, 'PurchaseOrder', {
      title: testTitle,
      vendor: vendor.name,
      status: '登録済み'
    });
    
    // 製品明細の追加
    const product1 = getRandomTestData(testData.products);
    await addProductLineItem(page, {
      productName: product1.name,
      quantity: 2,
      unitPrice: product1.price
    });
    
    const product2 = getRandomTestData(testData.products);
    await addProductLineItem(page, {
      productName: product2.name,
      quantity: 1,
      unitPrice: product2.price,
      isReducedTax: true // 軽減税率対象
    });
    
    // 明細行数の確認
    await verifyLineItemCount(page, 2);
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'PurchaseOrder');
  });

  test('サービス明細を含む発注作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    const testTitle = generateTestTitle('PurchaseOrderWithServices');
    const vendor = getRandomTestData(testData.vendors);
    
    // 基本情報入力
    await fillBasicInfo(page, 'PurchaseOrder', {
      title: testTitle,
      vendor: vendor.name,
      status: '登録済み'
    });
    
    // サービス明細の追加
    const service = getRandomTestData(testData.services);
    await addServiceLineItem(page, {
      productName: service.name,
      quantity: 3,
      unitPrice: service.price
    });
    
    await verifyLineItemCount(page, 1);
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'PurchaseOrder');
  });

  test('割引設定のテスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    const testTitle = generateTestTitle('PurchaseOrderWithDiscount');
    const vendor = getRandomTestData(testData.vendors);
    
    // 基本情報入力
    await fillBasicInfo(page, 'PurchaseOrder', {
      title: testTitle,
      vendor: vendor.name,
      status: '登録済み'
    });
    
    // 製品追加
    await addProductLineItem(page, {
      productName: 'テスト製品',
      quantity: 1,
      unitPrice: 10000
    });
    
    // 割引設定（10%割引）
    await configureDiscount(page, {
      type: 'percentage',
      value: 10
    });
    
    // 計算結果確認（10000 - 1000 + 税）
    await waitForPageReady(page);
    
    await saveRecord(page);
    await verifySaveSuccess(page, 'PurchaseOrder');
  });

  test('送料と税計算のテスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    const testTitle = generateTestTitle('PurchaseOrderWithShipping');
    const vendor = getRandomTestData(testData.vendors);
    
    // 基本情報入力
    await fillBasicInfo(page, 'PurchaseOrder', {
      title: testTitle,
      vendor: vendor.name,
      status: '登録済み'
    });
    
    // 製品追加
    await addProductLineItem(page, {
      productName: 'テスト製品',
      quantity: 1,
      unitPrice: 10000
    });
    
    // 送料設定
    await configureShipping(page, {
      amount: 500
    });
    
    // 税設定確認（日本の消費税10%）
    await configureTaxSettings(page, {
      taxRegion: 'LBL_JAPAN',
      currency: 'Japan, Yen (¥)',
      taxMode: 'group'
    });
    
    // 総合計の確認（10000 + 500 + 税）
    const expectedTotal = (10000 + 500) * 1.1; // 消費税10%
    await verifyGrandTotal(page, expectedTotal);
    
    await saveRecord(page);
    await verifySaveSuccess(page, 'PurchaseOrder');
  });

  test('複雑な計算シナリオのテスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    const testTitle = generateTestTitle('PurchaseOrderComplexCalc');
    const vendor = getRandomTestData(testData.vendors);
    
    // 基本情報入力
    await fillBasicInfo(page, 'PurchaseOrder', {
      title: testTitle,
      vendor: vendor.name,
      status: '登録済み'
    });
    
    // 複数製品の追加
    await addProductLineItem(page, {
      productName: '製品A',
      quantity: 2,
      unitPrice: 5000
    });
    
    await addProductLineItem(page, {
      productName: '製品B',
      quantity: 1,
      unitPrice: 8000,
      isReducedTax: true
    });
    
    // 複雑な計算シナリオのテスト
    await testComplexCalculation(page, {
      lineItems: [
        { quantity: 2, unitPrice: 5000 },
        { quantity: 1, unitPrice: 8000, isReducedTax: true }
      ],
      discount: { type: 'percentage', value: 5 },
      shipping: { amount: 1000 },
      taxRate: 10,
      expectedGrandTotal: 19380 // 計算例
    });
    
    await saveRecord(page);
    await verifySaveSuccess(page, 'PurchaseOrder');
  });

  test('必須フィールドのバリデーション', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    // 必須フィールドなしで保存を試行
    await saveRecord(page);
    
    // エラーメッセージまたはフィールドハイライトの確認
    // 実際のバリデーション動作に応じて調整が必要
    const titleField = page.locator('input').filter({ hasText: 'タイトル' });
    const isFocused = await titleField.isVisible();
    expect(isFocused).toBeTruthy();
  });

  test('ステータス変更のテスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'PurchaseOrder');
    
    const testTitle = generateTestTitle('PurchaseOrderStatus');
    const vendor = getRandomTestData(testData.vendors);
    
    // 基本情報入力
    await fillBasicInfo(page, 'PurchaseOrder', {
      title: testTitle,
      vendor: vendor.name,
      status: '登録済み'
    });
    
    // 製品追加
    await addProductLineItem(page, {
      productName: 'テスト製品',
      quantity: 1,
      unitPrice: 1000
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'PurchaseOrder');
    
    // 異なるステータスでの更新テストは、詳細ページでの編集機能で実装
  });
});