import { frgetDescribe, frgetListTypes, login } from "./fetcher";
import { FRDescribeType } from "./types/frBase";

export class FrBaseModule {
  moduleName: string;
  sessionName: string;
  listTypes: {
    isEntity: boolean;
    label: string;
    singular: string;
  }[];
  moduleInfo: FRDescribeType;
  baseUrl: string = "http://localhost/";

  constructor(moduleName: string, sessionName: string) {
    this.moduleName = moduleName;
    this.sessionName = sessionName;
  }

  /**
   * 初期化処理
   * 継承先から使われることを想定して、ジェネリクス型で継承先のクラスを返す用に設定
   */
  public static async init<T extends FrBaseModule>(this: new (moduleName: string, sessionName: string) => T, moduleName: string): Promise<T | false> {
    // loginさせたものを渡す
    const response = await login(process.env.E2E_USER_NAME || '', process.env.E2E_USER_ACCESSKEY || '');
    if (!response) {
      return false;
    }
    const sessionName = response.sessionName;
    return new this(moduleName, sessionName);
  };

  /**
   * モジュール名を取得する
   */
  getModuleName() {
    return this.moduleName;
  }

  /**********************************
   * TEST用
   *********************************/
  getCreateUrl() {
    return `${this.baseUrl}index.php?module=${this.moduleName}&view=Edit&app=MARKETING`;
  }


  /**********************************
   * API
   *********************************/

  /**
   * Module一覧を取得する
   */
  async fetchAllListTypes() {
    if(this.listTypes?.[this.moduleName]){
      return this.listTypes;
    }

    const response = await frgetListTypes(this.sessionName);
    if (!response) {
      return false;
    }
   
    Object.keys(this.listTypes).forEach((key) => {
      this.listTypes[key] = this.listTypes[key];
    });

    return this.listTypes;
  }

  /**
   * モジュール詳細を取得する
   */
  async getDescribe() {
    if (this.moduleInfo) {
      return this.moduleInfo;
    }

    const response = await frgetDescribe(this.sessionName, this.moduleName);
    if (!response) {
      return false;
    }
    this.moduleInfo = response;

    return this.moduleInfo;
  }
}
