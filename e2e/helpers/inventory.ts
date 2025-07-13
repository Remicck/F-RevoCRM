/**
 * Inventory系モジュール（PurchaseOrder, SalesOrder, Quotes）共通のヘルパー関数
 */
import { Page, expect } from '@playwright/test';

export interface InventoryModuleConfig {
  moduleName: 'PurchaseOrder' | 'SalesOrder' | 'Quotes';
  displayName: string;
  addButtonText: string;
  requiredFields: {
    title: string;
    organization?: string;
    vendor?: string;
    contact?: string;
    status: string;
  };
}

export const inventoryModules: Record<string, InventoryModuleConfig> = {
  PurchaseOrder: {
    moduleName: 'PurchaseOrder',
    displayName: '発注',
    addButtonText: '発注の追加',
    requiredFields: {
      title: 'タイトル',
      vendor: '発注先名',
      status: 'ステータス'
    }
  },
  SalesOrder: {
    moduleName: 'SalesOrder',
    displayName: '受注',
    addButtonText: '受注の追加',
    requiredFields: {
      title: 'タイトル',
      organization: '顧客企業名',
      status: 'ステータス'
    }
  },
  Quotes: {
    moduleName: 'Quotes',
    displayName: '見積',
    addButtonText: '見積を追加',
    requiredFields: {
      title: 'タイトル',
      organization: '顧客企業名',
      status: '見積ステージ'
    }
  }
};

/**
 * Inventory系モジュールの一覧ページに移動
 */
export async function navigateToInventoryList(page: Page, moduleName: string) {
  await page.goto(`/index.php?module=${moduleName}&view=List`);
  await page.waitForLoadState('networkidle');
}

/**
 * Inventory系モジュールの作成ページに移動
 */
export async function navigateToInventoryCreate(page: Page, moduleName: string) {
  await navigateToInventoryList(page, moduleName);
  
  const config = inventoryModules[moduleName];
  await page.getByRole('button', { name: config.addButtonText }).click();
  await page.waitForLoadState('networkidle');
}

/**
 * 基本情報セクションの必須フィールドを入力
 */
export async function fillBasicInfo(page: Page, moduleName: string, data: {
  title: string;
  organization?: string;
  vendor?: string;
  status?: string;
}) {
  const config = inventoryModules[moduleName];
  
  // タイトル入力 - テーブル行からより正確に特定
  const titleRow = page.locator('tr').filter({ hasText: `* ${config.requiredFields.title}` });
  const titleInput = titleRow.locator('input[type="text"]').first();
  await titleInput.fill(data.title);
  
  // 顧客企業名 (SalesOrder, Quotes)
  if (data.organization && config.requiredFields.organization) {
    await fillAutocompleteField(page, config.requiredFields.organization, data.organization);
  }
  
  // 発注先名 (PurchaseOrder)
  if (data.vendor && config.requiredFields.vendor) {
    await fillAutocompleteField(page, config.requiredFields.vendor, data.vendor);
  }
  
  // ステータス
  if (data.status) {
    await selectDropdownOption(page, config.requiredFields.status, data.status);
  }
}

/**
 * オートコンプリートフィールドの入力
 */
export async function fillAutocompleteField(page: Page, fieldLabel: string, value: string) {
  const fieldRow = page.locator('tr').filter({ hasText: fieldLabel });
  const textbox = fieldRow.locator('input[type="text"]').first();
  
  await textbox.fill(value);
  // オートコンプリートの候補が表示されるまで待機
  await page.waitForTimeout(500);
}

/**
 * ドロップダウンオプションの選択
 */
export async function selectDropdownOption(page: Page, fieldLabel: string, value: string) {
  const fieldRow = page.locator('tr').filter({ hasText: fieldLabel });
  const combobox = fieldRow.locator('select').first();
  
  await combobox.selectOption({ label: value });
}

/**
 * 住所情報の入力
 */
export async function fillAddressInfo(page: Page, addressData: {
  billingAddress?: string;
  shippingAddress?: string;
}) {
  if (addressData.billingAddress) {
    const billingRow = page.locator('tr').filter({ hasText: '* 番地 (請求先)' });
    const billingField = billingRow.locator('textarea').or(billingRow.locator('input[type="text"]:not([disabled])'));
    await billingField.fill(addressData.billingAddress);
  }
  
  if (addressData.shippingAddress) {
    const shippingRow = page.locator('tr').filter({ hasText: '* 番地(出荷先)' });
    const shippingField = shippingRow.locator('textarea').or(shippingRow.locator('input[type="text"]:not([disabled])'));
    await shippingField.fill(addressData.shippingAddress);
  }
}

/**
 * レコードの保存
 */
export async function saveRecord(page: Page) {
  // メインの保存ボタンを特定（type="submit"のもの）
  await page.locator('button[type="submit"].saveButton').click();
  await page.waitForLoadState('networkidle');
}

/**
 * 保存の成功確認
 */
export async function verifySaveSuccess(page: Page, moduleName: string) {
  const config = inventoryModules[moduleName];
  
  // 詳細ページまたは一覧ページに遷移していることを確認
  const currentUrl = page.url();
  expect(currentUrl).toMatch(new RegExp(`module=${moduleName}`));
  
  // 成功メッセージまたはページタイトルの確認
  expect(await page.title()).toContain(config.displayName);
}

/**
 * 項目の詳細セクションが表示されていることを確認
 */
export async function verifyItemDetailsSection(page: Page) {
  const itemDetailsHeading = page.getByRole('heading', { name: '項目の詳細' });
  await expect(itemDetailsHeading).toBeVisible();
  
  // 製品追加ボタンの存在確認
  const addProductButton = page.getByRole('button', { name: '製品を追加' });
  await expect(addProductButton).toBeVisible();
  
  // サービス追加ボタンの存在確認
  const addServiceButton = page.getByRole('button', { name: 'サービスを追加' });
  await expect(addServiceButton).toBeVisible();
}

/**
 * 計算セクションの表示確認
 */
export async function verifyCalculationSection(page: Page) {
  // 項目の詳細セクション内の計算テーブルが存在することを確認
  const calculationTable = page.locator('table').filter({ hasText: '総合計' });
  await expect(calculationTable).toBeVisible();
  
  // 製品追加ボタンが計算セクション周辺に存在することを確認
  const addProductButton = page.getByRole('button', { name: '製品を追加' });
  await expect(addProductButton).toBeVisible();
}

/**
 * Inventory系モジュール共通のバリデーション
 */
export async function validateInventoryForm(page: Page, moduleName: string) {
  const config = inventoryModules[moduleName];
  
  // 基本情報セクションの存在確認
  const basicInfoHeading = page.getByRole('heading', { name: '基本情報' });
  await expect(basicInfoHeading).toBeVisible();
  
  // 住所情報セクションの存在確認
  const addressHeading = page.getByRole('heading', { name: '住所情報' });
  await expect(addressHeading).toBeVisible();
  
  // 諸条件セクションの存在確認
  const termsHeading = page.getByRole('heading', { name: '諸条件' });
  await expect(termsHeading).toBeVisible();
  
  // 詳細情報セクションの存在確認
  const detailsHeading = page.getByRole('heading', { name: '詳細情報' });
  await expect(detailsHeading).toBeVisible();
  
  // 項目の詳細セクションの確認
  await verifyItemDetailsSection(page);
  
  // 計算セクションの確認
  await verifyCalculationSection(page);
}