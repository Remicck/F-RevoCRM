/**
 * Inventory系テスト共通のユーティリティ関数とデータ
 */
import { Page } from '@playwright/test';

/**
 * テスト用のサンプルデータ
 */
export const testData = {
  products: [
    { name: 'テスト商品_1752359996512', price: 10000, unit: '個' },
    { name: 'テスト商品_1752319286108', price: 10000, unit: 'セット' },
    { name: '更新済み_テスト商品_1752359997224', price: 0, unit: '台' }
  ],
  services: [
    { name: 'コンサルティングサービス', price: 10000, unit: '時間' },
    { name: 'サポートサービス', price: 5000, unit: '月' },
    { name: 'メンテナンスサービス', price: 3000, unit: '回' }
  ],
  organizations: [
    { name: 'テスト株式会社' },
    { name: '株式会社サンプル' },
    { name: 'テスト商事株式会社' }
  ],
  vendors: [
    { name: 'テスト発注先A' },
    { name: 'サンプル発注先B' },
    { name: '発注先テスト商事' }
  ],
  contacts: [
    { name: '田中太郎' },
    { name: '佐藤花子' },
    { name: '鈴木次郎' }
  ]
};

/**
 * 日付文字列の生成（今日の日付ベース）
 */
export function generateTestDate(daysOffset: number = 0): string {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

/**
 * ランダムなテストデータの取得
 */
export function getRandomTestData<T>(dataArray: T[]): T {
  const randomIndex = Math.floor(Math.random() * dataArray.length);
  return dataArray[randomIndex];
}

/**
 * ユニークなテスト識別子の生成
 */
export function generateTestId(): string {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  return `test_${timestamp}_${random}`;
}

/**
 * テスト用タイトルの生成
 */
export function generateTestTitle(moduleName: string): string {
  const testId = generateTestId();
  return `${moduleName}_${testId}`;
}

/**
 * 金額の表示形式を数値に変換
 */
export function parseAmount(amountText: string): number {
  // カンマ、通貨記号、空白を除去して数値に変換
  const cleaned = amountText.replace(/[,¥$\s]/g, '');
  return parseFloat(cleaned) || 0;
}

/**
 * 数値を金額表示形式に変換
 */
export function formatAmount(amount: number): string {
  return amount.toLocaleString('ja-JP');
}

/**
 * ページ読み込み完了の待機
 */
export async function waitForPageReady(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000); // 追加の安全マージン
}

/**
 * モーダルダイアログの閉じるボタンをクリック
 */
export async function closeModal(page: Page) {
  const closeButton = page.locator('button').filter({ hasText: 'キャンセル' }).or(
    page.locator('button').filter({ hasText: '閉じる' })
  );
  
  if (await closeButton.isVisible()) {
    await closeButton.click();
    await waitForPageReady(page);
  }
}

/**
 * エラーメッセージの確認
 */
export async function checkForErrors(page: Page): Promise<string[]> {
  const errors: string[] = [];
  
  // 一般的なエラーメッセージの要素を確認
  const errorSelectors = [
    '.alert-danger',
    '.error',
    '.validation-error',
    '[class*="error"]'
  ];
  
  for (const selector of errorSelectors) {
    const errorElements = page.locator(selector);
    const count = await errorElements.count();
    
    for (let i = 0; i < count; i++) {
      const errorText = await errorElements.nth(i).textContent();
      if (errorText && errorText.trim()) {
        errors.push(errorText.trim());
      }
    }
  }
  
  return errors;
}

/**
 * 必須フィールドの検証
 */
export async function validateRequiredFields(page: Page, fields: string[]): Promise<string[]> {
  const missingFields: string[] = [];
  
  for (const fieldName of fields) {
    const fieldElement = page.locator(`input[required]`).filter({ hasText: fieldName }).or(
      page.locator(`select[required]`).filter({ hasText: fieldName })
    );
    
    if (await fieldElement.count() === 0) {
      missingFields.push(fieldName);
    }
  }
  
  return missingFields;
}

/**
 * フォームの送信前バリデーション
 */
export async function validateFormBeforeSubmit(page: Page): Promise<boolean> {
  // JavaScriptのフォームバリデーションを実行
  const isValid = await page.evaluate(() => {
    const forms = document.querySelectorAll('form');
    for (const form of forms) {
      if (!form.checkValidity()) {
        return false;
      }
    }
    return true;
  });
  
  return isValid;
}

/**
 * レスポンシブデザインのテスト
 */
export async function testResponsiveLayout(page: Page, viewportSizes: Array<{ width: number; height: number }>) {
  for (const size of viewportSizes) {
    await page.setViewportSize(size);
    await waitForPageReady(page);
    
    // レイアウトの基本的な確認
    const mainContent = page.locator('main, .content, #content');
    await mainContent.waitFor({ state: 'visible' });
  }
}

/**
 * キーボードナビゲーションのテスト
 */
export async function testKeyboardNavigation(page: Page) {
  // Tabキーでフォーカス移動をテスト
  await page.keyboard.press('Tab');
  
  // フォーカスされた要素が表示されているかチェック
  const focusedElement = page.locator(':focus');
  await focusedElement.waitFor({ state: 'visible' });
  
  return true;
}

/**
 * 印刷プレビューのテスト
 */
export async function testPrintPreview(page: Page) {
  // 印刷用CSSの適用をテスト
  await page.emulateMedia({ media: 'print' });
  await waitForPageReady(page);
  
  // 画面表示に戻す
  await page.emulateMedia({ media: 'screen' });
  await waitForPageReady(page);
}

/**
 * ファイルダウンロードのテスト準備
 */
export async function prepareForDownload(page: Page) {
  // ダウンロード処理の監視を開始
  const downloadPromise = page.waitForEvent('download');
  return downloadPromise;
}

/**
 * テスト実行時間の計測
 */
export class TestTimer {
  private startTime: number;
  
  constructor() {
    this.startTime = Date.now();
  }
  
  elapsed(): number {
    return Date.now() - this.startTime;
  }
  
  reset(): void {
    this.startTime = Date.now();
  }
}