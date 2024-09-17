import { expect, type Page } from "@playwright/test";
import { FrBaseModule } from "./frBaseModule";
import { generateRandomString, url } from "../utils/util";
import { dontTestFieldsName, getFieldValue } from "../utils/field";

export class FrTest extends FrBaseModule {
  constructor(public moduleName: string, sessionName: string) {
    super(moduleName, sessionName);
  }

  /**
   * レコードが正常に作成されたことを確認するテスト
   */
  async testRecordCreate(page: Page) {
    // ページ遷移
    const createUrl = this.getCreateUrl();
    await page.goto(createUrl);
    await page.waitForLoadState("domcontentloaded");

    // 値の登録
    const valuesArray: string[] = [];
    const hash = generateRandomString(8);
    const moduleInfo = await this.getDescribe();
    if (moduleInfo) {
      for (const [_key, fieldObj] of Object.entries(moduleInfo.fields)) {
        if (dontTestFieldsName(fieldObj)) {
          continue;
        }

        const normalValue =  await getFieldValue(fieldObj, hash) || ''

        // 共通化というか、インプットのところを何とかする
        if (fieldObj.type.name === "text") {
          await page.fill(
            `textarea[name="${fieldObj.name}"]`,
            `${normalValue}`
          );
        } else if (fieldObj.type.name === "date") {
          await page.fill(
            `input[name="${fieldObj.name}"]`,
            `${normalValue}`
          );
          await page.click(`input[name="${fieldObj.name}"]`);
        } else if (fieldObj.type.name === "picklist") {
          await page.selectOption(`select[name=${fieldObj.name}]`, normalValue);
        } else if (fieldObj.type.name === "boolean") {
          await page.check(`input[type="checkbox"][name="${fieldObj.name}"]`);
        } else {
          await page.fill(
            `input[name="${fieldObj.name}"]`,
            `${normalValue}`
          );
        }

        // 値を保持しておく
        if(fieldObj.type.name !== "boolean" && fieldObj.type.name !== "picklist"){
          valuesArray.push(normalValue);
        }else if(fieldObj.type.name === "picklist"){
          if(fieldObj.type.picklistValues?.[0]?.label){
            valuesArray.push(fieldObj.type.picklistValues?.[0]?.label);
          }
        }
      }
    }

    // 保存ボタンをクリックして保存
    await page.click("text=保存");
    await page.waitForLoadState("networkidle");

    // 現在のURLを取得
    const currentUrl = page.url();
    await page.goto(`${currentUrl}&mode=showDetailViewByMode&requestMode=full`);
    await page.waitForLoadState("networkidle");
    // hashがあるかどうかチェックする
    expect(page.locator(`text=${hash}`).first()).toBeVisible();

    valuesArray.forEach(async (value) => {
      expect(page.locator(`text=${value}`).first()).toBeVisible();
    });
  }
}
