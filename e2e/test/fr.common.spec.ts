import { test } from "@playwright/test";
import { FrTest } from "../model/FrTest";
import { readFileSync } from "fs";
import { sessionNameFile } from "../auth.setup";

const modules = ["Accounts", "Contacts"];
const moduleMap: Record<string, typeof FrTest> = {
  Accounts: FrTest,
  Contacts: FrTest,
};

test.beforeAll(async () => {
});

for (const module of modules) {
  test.describe.serial(`モジュール: ${module}`, () => {
    let testModuleModel: FrTest | null;

    test.beforeAll(async () => {
      const ModuleClass = moduleMap[module];
      const sessionName = readFileSync(sessionNameFile, 'utf-8')
      testModuleModel = await ModuleClass.init(module, sessionName);
      if (!testModuleModel) {
        console.log('testModuleModel', testModuleModel);
        throw new Error("Module initialization failed");
      }
    });

    test(`レコード新規作成`, async ({ page }) => {
      // ここではすでに初期化されているため、nullチェックは不要
      await testModuleModel!.testRecordCreate(page);
    });

    test('レコード編集', async ({ page }) => {
      // ここではすでに初期化されているため、nullチェックは不要
      await testModuleModel!.testRecordEdit(page);
    });
  });
}