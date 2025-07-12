// モジュール共通テストヘルパー関数

/**
 * モジュールのリストページへ移動
 * @param {Page} page - Playwrightのページオブジェクト
 * @param {string} moduleName - モジュール名（例: 'Accounts', 'Contacts'）
 */
export async function navigateToModule(page, moduleName) {
  await page.goto(`http://localhost/index.php?module=${moduleName}&view=List`);
  await page.waitForURL(new RegExp(`.*module=${moduleName}.*`));
}

/**
 * 新規作成ボタンをクリック
 * @param {Page} page - Playwrightのページオブジェクト
 * @param {string} buttonText - ボタンのテキスト（例: '顧客企業の追加'）
 */
export async function clickCreateButton(page, buttonText) {
  await page.click(`button:has-text("${buttonText}")`);
  await page.waitForTimeout(500); // フォームの表示を待つ
}

/**
 * フィールドにテキストを入力（フィールドが存在する場合のみ）
 * @param {Page} page - Playwrightのページオブジェクト
 * @param {string} selector - フィールドのセレクター
 * @param {string} value - 入力する値
 * @returns {boolean} - フィールドが存在して入力できたかどうか
 */
export async function fillFieldIfExists(page, selector, value) {
  const field = page.locator(selector);
  if (await field.isVisible()) {
    await field.fill(value);
    return true;
  }
  return false;
}

/**
 * フォームを保存して詳細ページに遷移
 * @param {Page} page - Playwrightのページオブジェクト
 */
export async function saveForm(page) {
  await page.click('button:has-text("保存")');
  await page.waitForURL(/.*view=Detail.*/);
}

/**
 * 編集ボタンをクリックして編集フォームを開く
 * @param {Page} page - Playwrightのページオブジェクト
 */
export async function clickEditButton(page) {
  await page.click('button:has-text("編集")');
  await page.waitForTimeout(500); // フォームの表示を待つ
}

/**
 * 検索を実行
 * @param {Page} page - Playwrightのページオブジェクト
 * @param {string} searchText - 検索テキスト
 */
export async function performSearch(page, searchText) {
  const searchSelectors = [
    'input[name="search_text"]',
    'input[placeholder*="検索"]',
    '.search input',
    'table input'
  ];
  
  for (const selector of searchSelectors) {
    const searchField = page.locator(selector).first();
    if (await searchField.isVisible()) {
      await searchField.fill(searchText);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1000); // 検索結果の読み込みを待機
      break;
    }
  }
}

/**
 * レコードを削除
 * @param {Page} page - Playwrightのページオブジェクト
 */
export async function deleteRecord(page) {
  // その他メニューをクリック
  await page.click('button:has-text("その他")');
  await page.waitForTimeout(500);
  
  // 削除オプションを探す（より具体的なセレクター）
  const deleteSelectors = [
    'a[href*="action=Delete"]:has-text("削除")',
    'button:has-text("削除")',
    '.dropdown-menu a:has-text("削除")',
    '[data-action="delete"]'
  ];
  
  for (const selector of deleteSelectors) {
    const deleteButton = page.locator(selector);
    if (await deleteButton.isVisible()) {
      await deleteButton.click();
      
      // 確認ダイアログの処理
      await page.waitForTimeout(1000);
      const confirmSelectors = [
        'button:has-text("Yes")',
        'button:has-text("OK")',
        'button:has-text("確認")',
        'button:has-text("削除")',
        '.modal button[type="submit"]',
        '.modal .btn-primary'
      ];
      
      for (const confirmSelector of confirmSelectors) {
        const confirmButton = page.locator(confirmSelector);
        if (await confirmButton.isVisible()) {
          await confirmButton.click();
          await page.waitForTimeout(1000); // 削除処理の完了を待つ
          break;
        }
      }
      
      return true;
    }
  }
  
  return false;
}
