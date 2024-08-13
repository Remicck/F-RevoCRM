import { Page } from "@playwright/test";

/**
 * 指定したms秒待機する
 */
export async function waitSeconds(page: Page, ms: number) {
  await page.waitForTimeout(ms);
}

/**
 * url生成
 */
export function url(path: string) {
  return `http://localhost/${path}`;
}

/**
 * ハッシュ生成
 */
export function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  return result;
}
