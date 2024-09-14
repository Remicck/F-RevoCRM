import { expect, type Page } from "@playwright/test";
import { FrBaseModule } from "./FrBaseModule";
import { generateRandomString, url } from "../utils/util";

export class FrTest extends FrBaseModule {
  constructor(public moduleName: string, sessionName: string) {
    super(moduleName, sessionName);
  }

  dontTestFieldsName(fieldName: string){
    const dontTestFields = [
      'tags',
    ]
    if(dontTestFields.includes(fieldName)){
      return true;
    }
    return false;
  }

  // 新規作成のテスト
  async testCreate(page: Page) {
    const createUrl = this.getCreateUrl();
    await page.goto(createUrl);
    await page.waitForLoadState("domcontentloaded");

    const hash = generateRandomString(8);
    const moduleInfo = await this.getDescribe();
    console.log('moduleinfo', moduleInfo);
    if (moduleInfo) {
      for (const [_key, fieldObj] of Object.entries(moduleInfo.fields)) {
        if (fieldObj.type.name !== "string" || fieldObj.editable === false || this.dontTestFieldsName(fieldObj.name)) {
          continue;
        }
        await page.fill(`input[name="${fieldObj.name}"]`, `${fieldObj.label}${hash}`);
      }
    }

    // 保存ボタンをクリック
    await page.click("text=保存");
    await page.waitForLoadState("networkidle");

    // リストへ遷移
    await page.goto(
      url(`index.php?module=${this.moduleName}&view=List`)
    );

    expect(page.locator(`text=${hash}`).first()).toBeVisible();
  }
}
