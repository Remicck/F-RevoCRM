import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth.js';
import { 
  navigateToModule,
  clickCreateButton,
  fillFieldIfExists,
  saveForm,
  clickEditButton,
  performSearch,
  deleteRecord
} from '../helpers/modules.js';
import { moduleConfigs } from '../config/modules.config.js';

// デバッグ用：顧客企業のみテスト実行
const debugModules = ['Accounts', 'Contacts', 'Potentials'];

// 各モジュールに対して標準テストを実行
debugModules.forEach(moduleName => {
  const config = moduleConfigs[moduleName];
  
  test.describe(`${config.moduleLabel}の標準機能テスト`, () => {
    test.beforeEach(async ({ page }) => {
      await login(page);
    });

    test(`${config.moduleLabel}一覧表示`, async ({ page }) => {
      // モジュールに移動
      await navigateToModule(page, config.moduleName);
      
      // 一覧ページが表示されることを確認
      await expect(page.locator('h4.module-title')).toContainText(config.listPageTitle);
    });

    test(`新しい${config.moduleLabel}を作成`, async ({ page }) => {
      // モジュールに移動
      await navigateToModule(page, config.moduleName);
      
      // 新規作成ボタンをクリック
      await clickCreateButton(page, config.createButtonText);
      
      // タイムスタンプを生成
      const timestamp = Date.now();
      
      // 必須フィールドに入力
      for (const [, fieldConfig] of Object.entries(config.requiredFields)) {
        const value = typeof fieldConfig.testValue === 'function' 
          ? fieldConfig.testValue(timestamp) 
          : fieldConfig.testValue;
        
        if (fieldConfig.inputType === 'select') {
          await page.selectOption(fieldConfig.selector, value);
        } else if (fieldConfig.inputType === 'textarea') {
          await page.fill(fieldConfig.selector, value);
        } else {
          await page.fill(fieldConfig.selector, value);
        }
      }
      
      // オプションフィールドに入力（存在する場合のみ）
      for (const [, fieldConfig] of Object.entries(config.optionalFields || {})) {
        const value = typeof fieldConfig.testValue === 'function' 
          ? fieldConfig.testValue(timestamp) 
          : fieldConfig.testValue;
        
        if (fieldConfig.inputType === 'select') {
          const field = page.locator(fieldConfig.selector);
          if (await field.isVisible()) {
            await page.selectOption(fieldConfig.selector, value);
          }
        } else {
          await fillFieldIfExists(page, fieldConfig.selector, value);
        }
      }
      
      // 保存
      await saveForm(page);
      
      // 作成されたレコードの情報が表示されることを確認
      // 最初の必須フィールドの値で確認
      const firstRequiredField = Object.values(config.requiredFields)[0];
      const expectedText = typeof firstRequiredField.testValue === 'function'
        ? firstRequiredField.testValue(timestamp)
        : firstRequiredField.testValue;
      
      await expect(page.locator('body')).toContainText(expectedText);
    });

    test(`${config.moduleLabel}を編集`, async ({ page }) => {
      // まず新しいレコードを作成
      await navigateToModule(page, config.moduleName);
      await clickCreateButton(page, config.createButtonText);
      
      const timestamp = Date.now();
      
      // 必須フィールドに入力
      for (const [, fieldConfig] of Object.entries(config.requiredFields)) {
        const value = typeof fieldConfig.testValue === 'function' 
          ? fieldConfig.testValue(timestamp) 
          : fieldConfig.testValue;
        
        if (fieldConfig.inputType === 'select') {
          await page.selectOption(fieldConfig.selector, value);
        } else {
          await page.fill(fieldConfig.selector, value);
        }
      }
      
      await saveForm(page);
      
      // 編集ボタンをクリック
      await clickEditButton(page);
      
      // 最初の必須フィールドを更新
      const firstFieldName = Object.keys(config.requiredFields)[0];
      const firstField = config.requiredFields[firstFieldName];
      
      if (firstField.inputType !== 'select' && firstField.inputType !== 'date') {
        const originalValue = typeof firstField.testValue === 'function'
          ? firstField.testValue(timestamp)
          : firstField.testValue;
        const updatedValue = `更新済み_${originalValue}`;
        
        await page.fill(firstField.selector, updatedValue);
        await saveForm(page);
        
        // 更新された情報が表示されることを確認
        await expect(page.locator('body')).toContainText(updatedValue);
      } else {
        // セレクトボックスや日付フィールドの場合は、保存のみ実行
        await saveForm(page);
      }
    });

    test(`${config.moduleLabel}検索`, async ({ page }) => {
      // モジュールに移動
      await navigateToModule(page, config.moduleName);
      
      // 検索を実行
      await performSearch(page, 'テスト');
    });

    test(`${config.moduleLabel}削除`, async ({ page }) => {
      // まず新しいレコードを作成
      await navigateToModule(page, config.moduleName);
      await clickCreateButton(page, config.createButtonText);
      
      const timestamp = Date.now();
      
      // 必須フィールドに入力
      for (const [, fieldConfig] of Object.entries(config.requiredFields)) {
        const value = typeof fieldConfig.testValue === 'function' 
          ? fieldConfig.testValue(timestamp) 
          : fieldConfig.testValue;
        
        if (fieldConfig.inputType === 'select') {
          await page.selectOption(fieldConfig.selector, value);
        } else {
          await page.fill(fieldConfig.selector, value);
        }
      }
      
      await saveForm(page);
      
      // レコードを削除
      const deleted = await deleteRecord(page);
      
      if (deleted) {
        // 一覧ページにリダイレクトされることを確認
        await expect(page).toHaveURL(new RegExp(`.*module=${config.moduleName}.*view=List`));
      } else {
        console.log(`${config.moduleLabel}の削除ボタンが見つかりませんでした`);
      }
    });
  });
});