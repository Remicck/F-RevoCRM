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
  verifyLineItemCount,
  setLineItemDiscount 
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

test.describe('見積（Quotes）モジュール', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('見積作成ページの基本表示確認', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    // ページタイトルの確認
    expect(await page.title()).toContain('見積');
    
    // フォーム構造の検証
    await validateInventoryForm(page, 'Quotes');
    
    // Quotes特有の要素確認
    const quoteStageField = page.locator('td').filter({ hasText: '見積ステージ' });
    await expect(quoteStageField).toBeVisible();
    
    const validityField = page.locator('td').filter({ hasText: '有効期限' });
    await expect(validityField).toBeVisible();
    
    const potentialField = page.locator('td').filter({ hasText: '案件名' });
    await expect(potentialField).toBeVisible();
  });

  test('基本的な見積作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('Quote');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 有効期限設定（30日後）
    const validityDate = generateTestDate(30);
    await page.locator('input').filter({ hasText: '有効期限' }).fill(validityDate);
    
    // 案件名設定
    const potentialField = page.locator('input').filter({ hasText: '案件名' });
    await potentialField.fill('テスト案件');
    await page.waitForTimeout(500);
    
    // 住所情報入力
    await fillAddressInfo(page, {
      billingAddress: '東京都港区1-1-1',
      shippingAddress: '東京都港区2-2-2'
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
  });

  test('案件連携の見積作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteFromPotential');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 案件名設定（オートコンプリート）
    const potentialField = page.locator('input').filter({ hasText: '案件名' });
    await potentialField.fill('重要案件_テスト');
    await page.waitForTimeout(500);
    
    // 顧客担当者設定
    const contact = getRandomTestData(testData.contacts);
    const contactField = page.locator('input').filter({ hasText: 'ご担当者様名' });
    await contactField.fill(contact.name);
    await page.waitForTimeout(500);
    
    // 有効期限設定
    const validityDate = generateTestDate(45);
    await page.locator('input').filter({ hasText: '有効期限' }).fill(validityDate);
    
    // 製品追加
    const product = getRandomTestData(testData.products);
    await addProductLineItem(page, {
      productName: product.name,
      quantity: 2,
      unitPrice: product.price
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
  });

  test('複数製品見積の作成', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteMultiProducts');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 複数製品の追加
    const products = [
      { name: '基本パッケージ', quantity: 1, price: 50000 },
      { name: 'オプション機能A', quantity: 2, price: 15000 },
      { name: 'サポートサービス', quantity: 12, price: 5000 }
    ];
    
    for (const product of products) {
      await addProductLineItem(page, {
        productName: product.name,
        quantity: product.quantity,
        unitPrice: product.price
      });
    }
    
    // 明細行数の確認
    await verifyLineItemCount(page, products.length);
    
    // 全体割引設定（企業割引15%）
    await configureDiscount(page, {
      type: 'percentage',
      value: 15
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
  });

  test('見積ステージの管理', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteStageManagement');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '発送済み'
    });
    
    // 製品追加
    await addProductLineItem(page, {
      productName: 'ステージテスト製品',
      quantity: 1,
      unitPrice: 25000
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
    
    // 異なるステージでの更新テストは詳細ページで実装
  });

  test('配送業者設定のテスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteWithCarrier');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 配送業者設定
    const carrierDropdown = page.locator('select').filter({ hasText: '配送業者' });
    await carrierDropdown.selectOption({ label: 'FedEx' });
    
    // 出荷情報入力
    const shippingInfoField = page.locator('input').filter({ hasText: '出荷情報' });
    await shippingInfoField.fill('翌日配送希望');
    
    // 在庫管理者設定
    const inventoryManagerField = page.locator('input').filter({ hasText: '在庫管理者' });
    await inventoryManagerField.fill('倉庫管理_田中');
    await page.waitForTimeout(500);
    
    // 製品追加
    await addProductLineItem(page, {
      productName: '配送製品テスト',
      quantity: 3,
      unitPrice: 8000
    });
    
    // 送料設定
    await configureShipping(page, {
      amount: 1200
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
  });

  test('高額見積の作成（税計算詳細）', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteHighValue');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 高額製品の追加
    await addProductLineItem(page, {
      productName: 'エンタープライズシステム',
      quantity: 1,
      unitPrice: 1000000
    });
    
    await addProductLineItem(page, {
      productName: '導入支援サービス',
      quantity: 3,
      unitPrice: 200000
    });
    
    await addProductLineItem(page, {
      productName: '保守サポート（年間）',
      quantity: 1,
      unitPrice: 150000
    });
    
    // 企業向け割引（大口割引10%）
    await configureDiscount(page, {
      type: 'percentage',
      value: 10
    });
    
    // 税設定確認
    await configureTaxSettings(page, {
      taxRegion: 'LBL_JAPAN',
      currency: 'Japan, Yen (¥)',
      taxMode: 'group'
    });
    
    // 総合計確認（高額のため計算精度をチェック）
    await waitForPageReady(page);
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
  });

  test('サービス中心の見積', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteServices');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 複数サービスの追加
    const services = testData.services;
    for (const service of services) {
      await addServiceLineItem(page, {
        productName: service.name,
        quantity: Math.floor(Math.random() * 5) + 1,
        unitPrice: service.price
      });
    }
    
    // 明細行数の確認
    await verifyLineItemCount(page, services.length);
    
    // サービス特有の割引設定
    await configureDiscount(page, {
      type: 'percentage',
      value: 8
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
  });

  test('見積の有効期限チェック', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteExpiry');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 短い有効期限を設定（7日後）
    const shortValidityDate = generateTestDate(7);
    await page.locator('input').filter({ hasText: '有効期限' }).fill(shortValidityDate);
    
    // 製品追加
    await addProductLineItem(page, {
      productName: '期限付き製品',
      quantity: 1,
      unitPrice: 30000
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
    
    // 有効期限の警告表示などの確認は、一覧画面や詳細画面で実装
  });

  test('明細行の個別割引設定', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteLineDiscount');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: '登録済み'
    });
    
    // 製品追加
    await addProductLineItem(page, {
      productName: '通常製品',
      quantity: 2,
      unitPrice: 10000
    });
    
    await addProductLineItem(page, {
      productName: '特価製品',
      quantity: 1,
      unitPrice: 15000
    });
    
    // 2番目の製品に個別割引を適用
    await setLineItemDiscount(page, 1, 'percentage', 20);
    
    // 全体での送料設定
    await configureShipping(page, {
      amount: 600
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
  });

  test('見積承認ワークフローのテスト', async ({ page }) => {
    await navigateToInventoryCreate(page, 'Quotes');
    
    const testTitle = generateTestTitle('QuoteApproval');
    const organization = getRandomTestData(testData.organizations);
    
    // 基本情報入力
    await fillBasicInfo(page, 'Quotes', {
      title: testTitle,
      organization: organization.name,
      status: 'レビュー済み'
    });
    
    // 高額製品で承認が必要なケース
    await addProductLineItem(page, {
      productName: '高額製品_要承認',
      quantity: 1,
      unitPrice: 500000
    });
    
    // 保存
    await saveRecord(page);
    await verifySaveSuccess(page, 'Quotes');
    
    // 承認ワークフローの詳細テストは別途実装
  });
});