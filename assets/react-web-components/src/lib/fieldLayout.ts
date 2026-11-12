/**
 * フォーム上で項目をフォーム全幅（左右2カラムぶち抜き）で配置すべきかを判定する（#1677）。
 *
 * Reactフォーム経路（QuickCreate/Calendar/Documents/LeadConvert）は
 * 2カラムのグリッドに項目を並べ、全幅項目だけラッパーに col-span-2 相当を付ける。
 * 従来は TextArea（uitype 19/21）だけが全幅だったが、#1677 で
 * picklist/multipicklist の columns=2 設定も全幅対象に加える
 * （表示方式が checkbox/radio/dropdown のいずれでも columns=2 なら全幅。
 *  これは「幅」だけの指定で、編集画面テンプレート側の isFullWidthField と対になる）。
 */
export interface FullWidthFieldLike {
  uitype?: string | number | null;
  picklistDisplay?: { columns?: number | null } | null;
}

export function isFullWidthFormField(field: FullWidthFieldLike): boolean {
  const uitype = String(field.uitype ?? "");
  // TextArea 系は従来どおり全幅
  if (uitype === "19" || uitype === "21") {
    return true;
  }
  // #1677: picklist/multipicklist の columns=2 は全幅
  return field.picklistDisplay?.columns === 2;
}
