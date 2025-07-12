import { test, expect, type Page } from '@playwright/test';
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
import { moduleConfigs, type ModuleConfig, type FieldConfig } from '../config/modules.config.js';

// デバッグ用：顧客企業のみテスト実行
const debugModules: string[] = ['Accounts', 'Contacts', 'Potentials'];

// 各モジュールに対して標準テストを実行
debugModules.forEach((moduleName: string) => {
  const config: ModuleConfig | undefined = moduleConfigs[moduleName];
  if (!config) {
    throw new Error(`Module config not found for: ${moduleName}`);
  }
  
  test.describe(`${config.moduleLabel}の標準機能テスト`, () => {
    test.beforeEach(async ({ page }: { page: Page }) => {
      await login(page);
    });

    test(`${config.moduleLabel}一覧表示`, async ({ page }: { page: Page }) => {
      // モジュールに移動
      await navigateToModule(page, config.moduleName);
      
      // 一覧ページが表示されることを確認
      await expect(page.locator('h4.module-title')).toContainText(config.listPageTitle);
    });

    test(`新しい${config.moduleLabel}を作成`, async ({ page }: { page: Page }) => {
      // モジュールに移動
      await navigateToModule(page, config.moduleName);
      
      // 新規作成ボタンをクリック
      await clickCreateButton(page, config.createButtonText);
      
      // タイムスタンプを生成
      const timestamp: number = Date.now();
      
      // 必須フィールドに入力
      for (const [, fieldConfig] of Object.entries(config.requiredFields)) {
        const value: string = typeof fieldConfig.testValue === 'function' 
          ? fieldConfig.testValue(timestamp) 
          : (fieldConfig.testValue || '');
        
        if (fieldConfig.inputType === 'select') {
          await page.selectOption(fieldConfig.selector, value);
        } else if (fieldConfig.inputType === 'textarea') {
          await page.fill(fieldConfig.selector, value);
        } else {
          await page.fill(fieldConfig.selector, value);
        }
      }
      
      // オプションフィールドに入力（存在する場合のみ）
      if (config.optionalFields) {
        for (const [, fieldConfig] of Object.entries(config.optionalFields)) {
          const value: string = typeof fieldConfig.testValue === 'function' 
            ? fieldConfig.testValue(timestamp) 
            : (fieldConfig.testValue || '');
          
          if (fieldConfig.inputType === 'select') {
            const field = page.locator(fieldConfig.selector);
            if (await field.isVisible()) {
              await page.selectOption(fieldConfig.selector, value);
            }
          } else {
            await fillFieldIfExists(page, fieldConfig.selector, value);
          }
        }
      }
      
      // 保存
      await saveForm(page);
      
      // 作成されたレコードの情報が表示されることを確認
      // 最初の必須フィールドの値で確認
      const firstRequiredField: FieldConfig | undefined = Object.values(config.requiredFields)[0];
      if (!firstRequiredField) {
        throw new Error(`No required fields found for module: ${config.moduleName}`);
      }
      const expectedText: string = typeof firstRequiredField.testValue === 'function'
        ? firstRequiredField.testValue(timestamp)
        : (firstRequiredField.testValue || '');
      
      await expect(page.locator('body')).toContainText(expectedText);
    });

    test(`${config.moduleLabel}を編集`, async ({ page }: { page: Page }) => {
      // まず新しいレコードを作成
      await navigateToModule(page, config.moduleName);
      await clickCreateButton(page, config.createButtonText);
      
      const timestamp: number = Date.now();
      
      // 必須フィールドに入力
      for (const [, fieldConfig] of Object.entries(config.requiredFields)) {
        const value: string = typeof fieldConfig.testValue === 'function' 
          ? fieldConfig.testValue(timestamp) 
          : (fieldConfig.testValue || '');
        
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
      const firstFieldName: string | undefined = Object.keys(config.requiredFields)[0];
      if (!firstFieldName) {
        throw new Error(`No required fields found for module: ${config.moduleName}`);
      }
      const firstField: FieldConfig | undefined = config.requiredFields[firstFieldName];
      if (!firstField) {
        throw new Error(`Field config not found for: ${firstFieldName}`);
      }
      
      if (firstField.inputType !== 'select' && firstField.inputType !== 'date') {
        const originalValue: string = typeof firstField.testValue === 'function'
          ? firstField.testValue(timestamp)
          : (firstField.testValue || '');
        const updatedValue: string = `更新済み_${originalValue}`;
        
        await page.fill(firstField.selector, updatedValue);
        await saveForm(page);
        
        // 更新された情報が表示されることを確認
        await expect(page.locator('body')).toContainText(updatedValue);
      } else {
        // セレクトボックスや日付フィールドの場合は、保存のみ実行
        await saveForm(page);
      }
    });

    test(`${config.moduleLabel}検索`, async ({ page }: { page: Page }) => {
      // モジュールに移動
      await navigateToModule(page, config.moduleName);
      
      // 検索を実行
      await performSearch(page, 'テスト');
    });

    test(`${config.moduleLabel}削除`, async ({ page }: { page: Page }) => {
      // まず新しいレコードを作成
      await navigateToModule(page, config.moduleName);
      await clickCreateButton(page, config.createButtonText);
      
      const timestamp: number = Date.now();
      
      // 必須フィールドに入力
      for (const [, fieldConfig] of Object.entries(config.requiredFields)) {
        const value: string = typeof fieldConfig.testValue === 'function' 
          ? fieldConfig.testValue(timestamp) 
          : (fieldConfig.testValue || '');
        
        if (fieldConfig.inputType === 'select') {
          await page.selectOption(fieldConfig.selector, value);
        } else {
          await page.fill(fieldConfig.selector, value);
        }
      }
      
      await saveForm(page);
      
      // レコードを削除
      const deleted: boolean = await deleteRecord(page);
      
      if (deleted) {
        // 一覧ページにリダイレクトされることを確認
        await expect(page).toHaveURL(new RegExp(`.*module=${config.moduleName}.*view=List`));
      } else {
        console.log(`${config.moduleLabel}の削除ボタンが見つかりませんでした`);
      }
    });
  });
});
