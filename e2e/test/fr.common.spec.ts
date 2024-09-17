import { expect, test } from "@playwright/test";
import { FrTest } from "../model/FrTest";

const modules = ["Accounts", "Contacts"];
const moduleMap: Record<string, typeof FrTest> = {
  Accounts: FrTest,
  Contacts: FrTest,
};

for (const module of modules) {
  test.describe.serial(`モジュール: ${module}`, async () => {
    let testModuleModel: FrTest | null;

    test.beforeAll(async () => {
      const ModuleClass = moduleMap[module];
      testModuleModel = await ModuleClass.init(module);
    });

    test(`レコード新規作成`, async ({ page }) => {
      if (!testModuleModel) {
        console.log('testModuleModel', testModuleModel);
        throw new Error("Module initialization failed");
      }
      await testModuleModel.testRecordCreate(page);
    });
  });
}
