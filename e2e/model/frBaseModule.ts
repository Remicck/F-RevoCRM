import type { FieldListType } from "./types/frBase";

export class FrBaseModule {
  moduleName: string;
  fieldList: FieldListType[];

  constructor(moduleName: string) {
    this.moduleName = moduleName;
    this.fieldList = this.getFieldList();
  }

  /**
   * モジュール名を取得する
   */
  getModuleName() {
    return this.moduleName;
  }

  /**
   * モジュール名に対応するフィールドリストを取得する
   */
  private getFieldList(): FieldListType[] {
    return [
      {
        fieldName: "accountname",
        fieldLabel: "顧客企業名",
      },
      {
        fieldName: "email1",
        fieldLabel: "メールアドレス",
      },
    ];
  }
}
