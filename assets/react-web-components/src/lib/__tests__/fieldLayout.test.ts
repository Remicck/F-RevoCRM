import { describe, it, expect } from "vitest";
import { isFullWidthFormField } from "../fieldLayout";

describe("isFullWidthFormField (#1677)", () => {
  it("TextArea(uitype 19/21) は全幅", () => {
    expect(isFullWidthFormField({ uitype: "19" })).toBe(true);
    expect(isFullWidthFormField({ uitype: "21" })).toBe(true);
    expect(isFullWidthFormField({ uitype: 19 })).toBe(true);
  });

  it("picklist columns=2 は全幅（表示方式に依存しない）", () => {
    expect(
      isFullWidthFormField({
        uitype: "33",
        picklistDisplay: { columns: 2 },
      }),
    ).toBe(true);
    // dropdown 相当（effectiveStyle を見ずに columns だけで判定）
    expect(
      isFullWidthFormField({
        uitype: "15",
        picklistDisplay: { columns: 2 },
      }),
    ).toBe(true);
  });

  it("columns=1 や picklistDisplay 無しは全幅でない", () => {
    expect(
      isFullWidthFormField({ uitype: "33", picklistDisplay: { columns: 1 } }),
    ).toBe(false);
    expect(isFullWidthFormField({ uitype: "33" })).toBe(false);
    expect(isFullWidthFormField({ uitype: "2" })).toBe(false);
    expect(isFullWidthFormField({})).toBe(false);
  });
});
