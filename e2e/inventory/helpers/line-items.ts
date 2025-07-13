/**
 * 明細行（Line Items）操作用のヘルパー関数
 */
import { Page, expect } from '@playwright/test';

export interface LineItem {
  productName: string;
  quantity: number;
  unitPrice: number;
  isReducedTax?: boolean; // 軽減税率対象
}

/**
 * 製品を明細行に追加
 */
export async function addProductLineItem(page: Page, item: LineItem) {
  // 製品を追加ボタンをクリック
  await page.getByRole('button', { name: '製品を追加' }).click();
  
  // 明細行が追加されるまで待機
  await page.waitForTimeout(1000);
  
  // ドラッグアイコンを持つ行（明細行）を取得し、最新のものを選択
  const lineItemRows = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const lineItemRow = lineItemRows.last();
  
  // 製品選択ボタンをクリックして製品ポップアップを開く
  const productButton = lineItemRow.locator('generic').filter({ hasText: '製品' }).first();
  await productButton.click();
  
  // 製品選択ポップアップが表示されるまで待機
  await page.waitForTimeout(1000);
  
  // 製品名で検索して選択（ポップアップ内で製品をクリック）
  const productCell = page.getByRole('cell', { name: item.productName });
  await productCell.click();
  
  // ポップアップが閉じるまで待機
  await page.waitForTimeout(1000);
  
  // 数量を入力（デフォルト値"1"が入っているテキストボックス）
  const quantityField = lineItemRow.locator('input[value="1"]').first();
  await quantityField.clear();
  await quantityField.fill(item.quantity.toString());
  
  // 単価を入力（"0"が入っている価格フィールド）
  const priceFields = lineItemRow.locator('input[value="0"]');
  const priceField = priceFields.first(); // 最初の0が単価フィールド
  await priceField.clear();
  await priceField.fill(item.unitPrice.toString());
  
  // 軽減税率対象の設定
  if (item.isReducedTax) {
    const reducedTaxCheckbox = lineItemRow.locator('input[type="checkbox"]');
    await reducedTaxCheckbox.check();
  }
  
  // 計算が更新されるまで待機
  await page.waitForTimeout(1000);
}

/**
 * サービスを明細行に追加
 */
export async function addServiceLineItem(page: Page, item: LineItem) {
  // サービスを追加ボタンをクリック
  await page.getByRole('button', { name: 'サービスを追加' }).click();
  
  // 明細行が追加されるまで待機
  await page.waitForTimeout(1000);
  
  // ドラッグアイコンを持つ行（明細行）を取得し、最新のものを選択
  const lineItemRows = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const lineItemRow = lineItemRows.last();
  
  // サービス選択ボタンをクリックしてサービスポップアップを開く
  const serviceButton = lineItemRow.locator('generic').filter({ hasText: '製品' }).first(); // サービスも"製品"ボタン経由
  await serviceButton.click();
  
  // サービス選択ポップアップが表示されるまで待機
  await page.waitForTimeout(1000);
  
  // サービス名で検索して選択（ポップアップ内でサービスをクリック）
  const serviceCell = page.getByRole('cell', { name: item.productName }); // productNameをサービス名として使用
  await serviceCell.click();
  
  // ポップアップが閉じるまで待機
  await page.waitForTimeout(1000);
  
  // 数量を入力（デフォルト値"1"が入っているテキストボックス）
  const quantityField = lineItemRow.locator('input[value="1"]').first();
  await quantityField.clear();
  await quantityField.fill(item.quantity.toString());
  
  // 単価を入力（"0"が入っている価格フィールド）
  const priceFields = lineItemRow.locator('input[value="0"]');
  const priceField = priceFields.first(); // 最初の0が単価フィールド
  await priceField.clear();
  await priceField.fill(item.unitPrice.toString());
  
  // 軽減税率対象の設定
  if (item.isReducedTax) {
    const reducedTaxCheckbox = lineItemRow.locator('input[type="checkbox"]');
    await reducedTaxCheckbox.check();
  }
  
  // 計算が更新されるまで待機
  await page.waitForTimeout(1000);
}

/**
 * 明細行を削除
 */
export async function removeLineItem(page: Page, itemIndex: number) {
  const lineItems = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const targetItem = lineItems.nth(itemIndex);
  
  // 削除ボタン（削除アイコン）をクリック
  const deleteButton = targetItem.locator('generic').filter({ hasText: '削除' }).first();
  if (await deleteButton.isVisible()) {
    await deleteButton.click();
  }
}

/**
 * 明細行の合計金額を確認
 */
export async function verifyLineItemTotal(page: Page, itemIndex: number, expectedTotal: number) {
  const lineItems = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const targetItem = lineItems.nth(itemIndex);
  
  // 金額セルの値を確認
  const amountCell = targetItem.locator('td').last();
  const actualAmount = await amountCell.textContent();
  
  expect(parseFloat(actualAmount || '0')).toBe(expectedTotal);
}

/**
 * 明細行の割引設定
 */
export async function setLineItemDiscount(page: Page, itemIndex: number, discountType: 'percentage' | 'amount', discountValue: number) {
  const lineItems = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const targetItem = lineItems.nth(itemIndex);
  
  // 割引リンクをクリック
  const discountLink = targetItem.locator('a').filter({ hasText: '割引額' });
  await discountLink.click();
  
  // 割引設定ポップアップで設定
  if (discountType === 'percentage') {
    await page.getByRole('radio', { name: '% 価格' }).check();
    await page.locator('input').filter({ hasText: '%' }).fill(discountValue.toString());
  } else {
    await page.getByRole('radio', { name: '金額指定割引' }).check();
    // 金額入力フィールドに値を設定
  }
  
  // 保存ボタンをクリック
  await page.getByRole('button', { name: '保存' }).click();
  
  // 計算が更新されるまで待機
  await page.waitForTimeout(1000);
}

/**
 * 使用単位の設定
 */
export async function setLineItemUnit(page: Page, itemIndex: number, unit: string) {
  const lineItems = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const targetItem = lineItems.nth(itemIndex);
  
  // 使用単位フィールドを入力（"使用単位:"の後のテキストボックス）
  const unitField = targetItem.locator('input[type="text"]').nth(1); // 2番目のテキストボックスが使用単位
  await unitField.clear();
  await unitField.fill(unit);
}

/**
 * 明細行の並び替え（ドラッグ&ドロップ）
 */
export async function reorderLineItems(page: Page, fromIndex: number, toIndex: number) {
  const lineItems = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const sourceItem = lineItems.nth(fromIndex);
  const targetItem = lineItems.nth(toIndex);
  
  // ドラッグハンドルを取得
  const dragHandle = sourceItem.locator('img[alt="ドラッグ"]');
  
  // ドラッグ&ドロップ操作
  await dragHandle.dragTo(targetItem);
  
  // 並び替えが完了するまで待機
  await page.waitForTimeout(1000);
}

/**
 * 全明細行の削除
 */
export async function clearAllLineItems(page: Page) {
  const lineItems = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const itemCount = await lineItems.count();
  
  // すべての明細行を削除
  for (let i = itemCount - 1; i >= 0; i--) {
    await removeLineItem(page, i);
    await page.waitForTimeout(500);
  }
}

/**
 * 明細行の数を確認
 */
export async function verifyLineItemCount(page: Page, expectedCount: number) {
  const lineItems = page.locator('tr').filter({ has: page.locator('img[alt="ドラッグ"]') });
  const actualCount = await lineItems.count();
  
  expect(actualCount).toBe(expectedCount);
}