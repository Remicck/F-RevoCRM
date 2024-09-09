import { FrBaseModule } from "./frBaseModule";

export class FrTestModule extends FrBaseModule {
    constructor(public moduleName: string) {
        super(moduleName);
    }

    showModuleName() {
      console.log(this.moduleName);
      console.log(this.fieldList);
    }
}