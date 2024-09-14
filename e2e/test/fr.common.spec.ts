import { test } from "@playwright/test";
import { FrTest } from "../model/FrTest";

test.beforeAll(async () => {});

test.describe.serial("F-RevoCRMの全体的なテスト", async () => {
  const modules = ["Accounts", "Contacts"];

  for (const module of modules) {
    // モジュールを動的に扱うクラスマップを作成
    const moduleMap: Record<string, typeof FrTest> = {
      Accounts: FrTest,
      Contacts: FrTest,
    };

    test(`モジュール: ${module}`, async ({ page }) => {
      const ModuleClass = moduleMap[module]; // モジュール名に対応するクラスを取得
      if (!ModuleClass) {
        throw new Error(`モジュール ${module} が見つかりません`);
      }

      // 動的にインスタンスを生成
      const testModuleModel = await ModuleClass.init(module);
      if (!testModuleModel) {
        throw new Error("Module initialization failed");
      }

      // インスタンスのメソッドを実行
      await testModuleModel.testCreate(page);
    });
  }
});
