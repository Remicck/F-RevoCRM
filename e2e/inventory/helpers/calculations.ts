/**
 * 金額計算・税計算関連のヘルパー関数
 */
import { Page, expect } from '@playwright/test';

export interface TaxConfiguration {
  taxRegion?: string; // 課税対象地域
  currency?: string;  // 通貨
  taxMode?: 'individual' | 'group'; // 個別 or グループ
}

export interface DiscountConfiguration {
  type: 'none' | 'percentage' | 'amount';
  value?: number;
}

export interface ShippingConfiguration {
  amount: number;
}

export interface AdjustmentConfiguration {
  type: 'addition' | 'deduction';
  amount: number;
}

/**
 * 課税設定の構成
 */
export async function configureTaxSettings(page: Page, config: TaxConfiguration) {
  // 課税対象地域の設定
  if (config.taxRegion) {
    const taxRegionDropdown = page.locator('select').filter({ hasText: '課税対象地域' });
    await taxRegionDropdown.selectOption({ label: config.taxRegion });
  }
  
  // 通貨の設定
  if (config.currency) {
    const currencyDropdown = page.locator('select').filter({ hasText: '通貨' });
    await currencyDropdown.selectOption({ label: config.currency });
  }
  
  // 消費税モードの設定
  if (config.taxMode) {
    const taxModeDropdown = page.locator('select').filter({ hasText: '消費税' });
    const modeLabel = config.taxMode === 'individual' ? '個別' : 'グループ';
    await taxModeDropdown.selectOption({ label: modeLabel });
  }
  
  // 設定が反映されるまで待機
  await page.waitForTimeout(1000);
}

/**
 * 値引き設定
 */
export async function configureDiscount(page: Page, config: DiscountConfiguration) {
  // 値引き種別リンクをクリック
  const discountLink = page.locator('a').filter({ hasText: '値引き種別' });
  await discountLink.click();
  
  // 割引タイプを選択
  switch (config.type) {
    case 'none':
      await page.getByRole('radio', { name: '割引なし' }).check();
      break;
    case 'percentage':
      await page.getByRole('radio', { name: '% 価格' }).check();
      if (config.value) {
        await page.locator('input').filter({ hasText: '%' }).fill(config.value.toString());
      }
      break;
    case 'amount':
      await page.getByRole('radio', { name: '金額指定割引' }).check();
      // 金額入力フィールドの設定が必要
      break;
  }
  
  // 保存ボタンをクリック
  await page.getByRole('button', { name: '保存' }).click();
  
  // 計算が更新されるまで待機
  await page.waitForTimeout(1000);
}

/**
 * 送料設定
 */
export async function configureShipping(page: Page, config: ShippingConfiguration) {
  // 送料リンクをクリック
  const shippingLink = page.locator('a').filter({ hasText: '送料' });
  await shippingLink.click();
  
  // 送料金額を入力
  const shippingAmountField = page.locator('input').filter({ hasText: '送料と取扱手数料' });
  await shippingAmountField.clear();
  await shippingAmountField.fill(config.amount.toString());
  
  // 保存ボタンをクリック
  await page.getByRole('button', { name: '保存' }).click();
  
  // 計算が更新されるまで待機
  await page.waitForTimeout(1000);
}

/**
 * 消費税設定
 */
export async function configureTax(page: Page, taxRate: number) {
  // 消費税リンクをクリック
  const taxLink = page.locator('a').filter({ hasText: '消費税' });
  await taxLink.click();
  
  // 税率を入力
  const taxRateField = page.locator('input').filter({ hasText: '%' }).first();
  await taxRateField.clear();
  await taxRateField.fill(taxRate.toString());
  
  // 保存ボタンをクリック
  await page.getByRole('button', { name: '保存' }).click();
  
  // 計算が更新されるまで待機
  await page.waitForTimeout(1000);
}

/**
 * 調整額設定
 */
export async function configureAdjustment(page: Page, config: AdjustmentConfiguration) {
  // 調整タイプを選択
  if (config.type === 'addition') {
    await page.getByRole('radio', { name: '追加' }).check();
  } else {
    await page.getByRole('radio', { name: '控除' }).check();
  }
  
  // 調整金額を入力
  const adjustmentField = page.locator('input').filter({ hasText: '調整' });
  await adjustmentField.clear();
  await adjustmentField.fill(config.amount.toString());
  
  // 計算が更新されるまで待機
  await page.waitForTimeout(1000);
}

/**
 * 合計金額の確認
 */
export async function verifySubtotal(page: Page, expectedAmount: number) {
  const subtotalRow = page.locator('tr').filter({ hasText: '合計' });
  const amountCell = subtotalRow.locator('td').last();
  const actualAmount = await amountCell.textContent();
  
  expect(parseFloat(actualAmount || '0')).toBe(expectedAmount);
}

/**
 * 税引き前の合計の確認
 */
export async function verifyPreTaxTotal(page: Page, expectedAmount: number) {
  const preTaxRow = page.locator('tr').filter({ hasText: '税引き前の合計' });
  const amountCell = preTaxRow.locator('td').last();
  const actualAmount = await amountCell.textContent();
  
  expect(parseFloat(actualAmount || '0')).toBe(expectedAmount);
}

/**
 * 総合計の確認
 */
export async function verifyGrandTotal(page: Page, expectedAmount: number) {
  const grandTotalRow = page.locator('tr').filter({ hasText: '総合計' });
  const amountCell = grandTotalRow.locator('td').last();
  const actualAmount = await amountCell.textContent();
  
  expect(parseFloat(actualAmount || '0')).toBe(expectedAmount);
}

/**
 * 税額の確認
 */
export async function verifyTaxAmount(page: Page, expectedAmount: number) {
  const taxRow = page.locator('tr').filter({ hasText: '消費税' });
  const amountCell = taxRow.locator('td').last();
  const actualAmount = await amountCell.textContent();
  
  expect(parseFloat(actualAmount || '0')).toBe(expectedAmount);
}

/**
 * 送料の確認
 */
export async function verifyShippingAmount(page: Page, expectedAmount: number) {
  const shippingRow = page.locator('tr').filter({ hasText: '送料' });
  const amountCell = shippingRow.locator('td').last();
  const actualAmount = await amountCell.textContent();
  
  expect(parseFloat(actualAmount || '0')).toBe(expectedAmount);
}

/**
 * 割引額の確認
 */
export async function verifyDiscountAmount(page: Page, expectedAmount: number) {
  const discountRow = page.locator('tr').filter({ hasText: '値引き種別' });
  const amountCell = discountRow.locator('td').last();
  const actualAmount = await amountCell.textContent();
  
  expect(parseFloat(actualAmount || '0')).toBe(expectedAmount);
}

/**
 * 複雑な計算シナリオのテスト
 */
export async function testComplexCalculation(page: Page, scenario: {
  lineItems: Array<{ quantity: number; unitPrice: number; isReducedTax?: boolean; }>;
  discount?: DiscountConfiguration;
  shipping?: ShippingConfiguration;
  taxRate?: number;
  adjustment?: AdjustmentConfiguration;
  expectedGrandTotal: number;
}) {
  // 各明細の小計計算
  let subtotal = 0;
  scenario.lineItems.forEach(item => {
    subtotal += item.quantity * item.unitPrice;
  });
  
  // 割引計算
  let discountAmount = 0;
  if (scenario.discount) {
    if (scenario.discount.type === 'percentage' && scenario.discount.value) {
      discountAmount = subtotal * (scenario.discount.value / 100);
    } else if (scenario.discount.type === 'amount' && scenario.discount.value) {
      discountAmount = scenario.discount.value;
    }
  }
  
  // 送料
  const shippingAmount = scenario.shipping?.amount || 0;
  
  // 税引き前合計
  const preTaxTotal = subtotal - discountAmount + shippingAmount;
  
  // 消費税計算
  const taxRate = scenario.taxRate || 10;
  const taxAmount = preTaxTotal * (taxRate / 100);
  
  // 調整額
  const adjustmentAmount = scenario.adjustment?.amount || 0;
  const adjustmentSign = scenario.adjustment?.type === 'deduction' ? -1 : 1;
  
  // 総合計
  const expectedGrandTotal = preTaxTotal + taxAmount + (adjustmentAmount * adjustmentSign);
  
  // 各金額の確認
  await verifySubtotal(page, subtotal);
  await verifyPreTaxTotal(page, preTaxTotal);
  await verifyTaxAmount(page, taxAmount);
  await verifyGrandTotal(page, expectedGrandTotal);
  
  // シナリオで指定された期待値との比較
  expect(expectedGrandTotal).toBeCloseTo(scenario.expectedGrandTotal, 2);
}