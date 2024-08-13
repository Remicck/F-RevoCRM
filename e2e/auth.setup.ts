import { test as setup } from '@playwright/test';

const authFile = 'e2e/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('http://localhost/');
  // await page.getByRole('button', { name: 'Login with SimpleSAMLPHP' }).click();
  // await page.waitForLoadState('networkidle');

  await page.fill('id=username', 'admin');
  await page.fill('id=password', 'Admin1234/');
  await page.getByRole('button', { name: 'ログイン' }).click();

  await page.waitForURL('http://localhost/index.php');

  await page.context().storageState({ path: authFile });
});
