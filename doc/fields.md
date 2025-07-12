# F-RevoCRM フィールドドキュメント

## フィールド情報

- **生成日時:** 2025-07-12 12:31:58
- **総フィールド数:** 840
- **アクティブモジュール数:** 43
- **カスタムフィールド数:** 3

## 目次

1. [フィールド統計](#field-statistics)
2. [UIタイプリファレンス](#ui-types-reference)
3. [モジュールフィールド](#module-fields)

## フィールド統計

### システムフィールド vs カスタムフィールド

- **システムフィールド:** 837
- **カスタムフィールド:** 3

### 最も使用されているUIタイプ

| UIタイプ | 説明 | 使用数 |
|---------|-------------|-------|
| 1 | Text Field | 201 |
| 56 | Checkbox | 63 |
| 15 | Picklist | 60 |
| 70 | Time Field | 54 |
| 16 | Multi-select Picklist | 40 |
| 19 | Text Area | 36 |
| 2 | Text Field | 32 |
| 5 | Date Field | 30 |
| 72 | Currency | 30 |
| 52 | User (uitype 52) | 27 |

### フィールド数が最も多いテーブル

| テーブル名 | フィールド数 |
|------------|-------------|
| vtiger_crmentity | 152 |
| vtiger_inventoryproductrel | 62 |
| vtiger_users | 59 |
| vtiger_activity | 40 |
| vtiger_invoice | 29 |
| vtiger_products | 29 |
| vtiger_salesorder | 29 |
| vtiger_purchaseorder | 27 |
| vtiger_quotes | 24 |
| vtiger_crmentity_user_field | 24 |

## UIタイプリファレンス

| UIタイプ | 説明 | 使用数 | テーブル |
|---------|-------------|-------------|--------|
| 1 | Text Field | 201 | vtiger_account,vtiger_accountbillads,vtiger_accoun... |
| 10 | Related To (uitype 10) | 23 | vtiger_assets,vtiger_dailyreports,vtiger_inventory... |
| 101 | User Name | 1 | vtiger_users |
| 104 | Unknown UI Type | 1 | vtiger_users |
| 105 | Unknown UI Type | 1 | vtiger_users |
| 106 | Unknown UI Type | 1 | vtiger_users |
| 11 | Phone Number | 17 | vtiger_account,vtiger_contactdetails,vtiger_contac... |
| 115 | Country Picklist | 1 | vtiger_users |
| 116 | Unknown UI Type | 1 | vtiger_users |
| 117 | Currency List | 6 | vtiger_invoice,vtiger_pricebook,vtiger_purchaseord... |
| 12 | Unknown UI Type | 1 | vtiger_emaildetails |
| 13 | Email Field | 9 | vtiger_account,vtiger_contactdetails,vtiger_leadde... |
| 15 | Picklist | 60 | vtiger_account,vtiger_activity,vtiger_assets,vtige... |
| 156 | Unknown UI Type | 1 | vtiger_users |
| 16 | Multi-select Picklist | 40 | vtiger_activity,vtiger_campaignrelstatus,vtiger_em... |
| 17 | Website/URL | 6 | vtiger_account,vtiger_leadsubdetails,vtiger_produc... |
| 19 | Text Area | 36 | vtiger_crmentity,vtiger_faqcomments,vtiger_invento... |
| 2 | Text Field | 32 | vtiger_account,vtiger_activity,vtiger_assets,vtige... |
| 20 | Long Text Area | 2 | vtiger_faq |
| 21 | Text Area | 11 | vtiger_accountbillads,vtiger_accountshipads,vtiger... |
| 22 | Text Area | 1 | vtiger_troubletickets |
| 23 | Date Field | 9 | vtiger_activity,vtiger_campaign,vtiger_dailyreport... |
| 24 | Date & Time | 8 | vtiger_invoicebillads,vtiger_invoiceshipads,vtiger... |
| 25 | Date & Time | 2 | vtiger_email_track |
| 255 | Unknown UI Type | 2 | vtiger_contactdetails,vtiger_leaddetails |
| 26 | Related To (uitype 26) | 1 | vtiger_notes |
| 27 | File Upload | 1 | vtiger_notes |
| 28 | File Upload | 1 | vtiger_notes |
| 3 | Number Field | 1 | vtiger_users |
| 30 | Unknown UI Type | 2 | vtiger_activity_reminder |
| 31 | Unknown UI Type | 1 | vtiger_users |
| 32 | Unknown UI Type | 2 | vtiger_users |
| 357 | Unknown UI Type | 1 | vtiger_emaildetails |
| 4 | Phone Number | 21 | vtiger_account,vtiger_assets,vtiger_campaign,vtige... |
| 5 | Date Field | 30 | vtiger_account,vtiger_assets,vtiger_contactdetails... |
| 51 | Related To (uitype 51) | 2 | vtiger_account,vtiger_contactdetails |
| 52 | User (uitype 52) | 27 | vtiger_activity,vtiger_crmentity |
| 53 | Related To (uitype 53) | 25 | vtiger_crmentity |
| 55 | Date & Time | 4 | vtiger_contactdetails,vtiger_leaddetails |
| 56 | Checkbox | 63 | vtiger_account,vtiger_activity,vtiger_contactdetai... |
| 57 | Contact Name | 7 | vtiger_cntactivityrel,vtiger_contactdetails,vtiger... |
| 58 | Campaign | 1 | vtiger_potential |
| 59 | Related To (uitype 59) | 3 | vtiger_campaign,vtiger_faq,vtiger_troubletickets |
| 6 | Time Field | 3 | vtiger_activity |
| 61 | File Upload | 2 | vtiger_attachments,vtiger_modcomments |
| 63 | Starrating | 2 | vtiger_activity |
| 66 | Related To (uitype 66) | 2 | vtiger_seactivityrel |
| 69 | Image | 2 | vtiger_contactdetails,vtiger_products |
| 7 | Decimal Field | 15 | vtiger_account,vtiger_inventoryproductrel,vtiger_m... |
| 70 | Time Field | 54 | vtiger_crmentity |
| 71 | Currency | 25 | vtiger_account,vtiger_campaign,vtiger_inventorypro... |
| 72 | Currency | 30 | vtiger_invoice,vtiger_products,vtiger_purchaseorde... |
| 73 | Related To (uitype 73) | 3 | vtiger_invoice,vtiger_quotes,vtiger_salesorder |
| 75 | Vendor Name | 1 | vtiger_products |
| 76 | Potential Name | 2 | vtiger_quotes,vtiger_salesorder |
| 77 | Related To (uitype 77) | 1 | vtiger_quotes |
| 78 | Related To (uitype 78) | 1 | vtiger_salesorder |
| 8 | Email Field | 3 | vtiger_emaildetails |
| 80 | Skype ID | 1 | vtiger_invoice |
| 81 | Vendor Name | 1 | vtiger_purchaseorder |
| 83 | Unknown UI Type | 18 | vtiger_inventoryproductrel,vtiger_products,vtiger_... |
| 9 | Percent Field | 5 | vtiger_campaign,vtiger_potential,vtiger_products,v... |
| 98 | Role | 1 | vtiger_user2role |
| 99 | Password | 2 | vtiger_users |

## モジュールフィールド

### Accounts (Tab ID: 6)

**親モジュール:** Sales | **フィールド数:** 41

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| accountname | Account Name | vtiger_account | accountname | 2 | V~M | LBL_ACCOUNT_INFORMATION | 1 |
| account_no | Account No | vtiger_account | account_no | 4 | V~O | LBL_ACCOUNT_INFORMATION | 2 |
| website | Website | vtiger_account | website | 17 | V~O | LBL_ACCOUNT_INFORMATION | 3 |
| phone | Phone | vtiger_account | phone | 11 | V~O | LBL_ACCOUNT_INFORMATION | 4 |
| tickersymbol | Ticker Symbol | vtiger_account | tickersymbol | 1 | V~O | LBL_ACCOUNT_INFORMATION | 5 |
| fax | Fax | vtiger_account | fax | 11 | V~O | LBL_ACCOUNT_INFORMATION | 6 |
| account_id | Member Of | vtiger_account | parentid | 51 | I~O | LBL_ACCOUNT_INFORMATION | 7 |
| otherphone | Other Phone | vtiger_account | otherphone | 11 | V~O | LBL_ACCOUNT_INFORMATION | 8 |
| employees | Employees | vtiger_account | employees | 7 | I~O | LBL_ACCOUNT_INFORMATION | 9 |
| email1 | Email | vtiger_account | email1 | 13 | E~O | LBL_ACCOUNT_INFORMATION | 10 |
| email2 | Other Email | vtiger_account | email2 | 13 | E~O | LBL_ACCOUNT_INFORMATION | 11 |
| ownership | Ownership | vtiger_account | ownership | 1 | V~O | LBL_ACCOUNT_INFORMATION | 12 |
| industry | industry | vtiger_account | industry | 15 | V~O | LBL_ACCOUNT_INFORMATION | 13 |
| rating | Rating | vtiger_account | rating | 15 | V~O | LBL_ACCOUNT_INFORMATION | 14 |
| accounttype | Type | vtiger_account | account_type | 15 | V~O | LBL_ACCOUNT_INFORMATION | 15 |
| siccode | SIC Code | vtiger_account | siccode | 1 | V~O | LBL_ACCOUNT_INFORMATION | 16 |
| emailoptout | Email Opt Out | vtiger_account | emailoptout | 56 | C~O | LBL_ACCOUNT_INFORMATION | 17 |
| annual_revenue | Annual Revenue | vtiger_account | annualrevenue | 71 | N~O | LBL_ACCOUNT_INFORMATION | 18 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_ACCOUNT_INFORMATION | 19 |
| notify_owner | Notify Owner | vtiger_account | notify_owner | 56 | C~O | LBL_ACCOUNT_INFORMATION | 20 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_ACCOUNT_INFORMATION | 21 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_ACCOUNT_INFORMATION | 22 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_ACCOUNT_INFORMATION | 23 |
| isconvertedfromlead | Is Converted From Lead | vtiger_account | isconvertedfromlead | 56 | C~O | LBL_ACCOUNT_INFORMATION | 24 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_ACCOUNT_INFORMATION | 25 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_ACCOUNT_INFORMATION | 26 |
| tags | tags | vtiger_account | tags | 1 | V~O | LBL_ACCOUNT_INFORMATION | 27 |
| last_action_date | last_action_date | vtiger_account | last_action_date | 5 | D~O | LBL_ACCOUNT_INFORMATION | 28 |
| bill_country | Billing Country | vtiger_accountbillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 1 |
| ship_country | Shipping Country | vtiger_accountshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 2 |
| bill_code | Billing Code | vtiger_accountbillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 3 |
| ship_code | Shipping Code | vtiger_accountshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 4 |
| bill_state | Billing State | vtiger_accountbillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 5 |
| ship_state | Shipping State | vtiger_accountshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 6 |
| bill_city | Billing City | vtiger_accountbillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 7 |
| ship_city | Shipping City | vtiger_accountshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 8 |
| bill_street | Billing Address | vtiger_accountbillads | bill_street | 21 | V~O | LBL_ADDRESS_INFORMATION | 9 |
| ship_street | Shipping Address | vtiger_accountshipads | ship_street | 21 | V~O | LBL_ADDRESS_INFORMATION | 10 |
| bill_pobox | Billing Po Box | vtiger_accountbillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 11 |
| ship_pobox | Shipping Po Box | vtiger_accountshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 12 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_ACCOUNT_INFORMATION:** accountname, account_no, website, phone, tickersymbol, fax, account_id, otherphone, employees, email1, email2, ownership, industry, rating, accounttype, siccode, emailoptout, annual_revenue, assigned_user_id, notify_owner, modifiedtime, createdtime, modifiedby, isconvertedfromlead, source, starred, tags, last_action_date

**LBL_ADDRESS_INFORMATION:** bill_country, ship_country, bill_code, ship_code, bill_state, ship_state, bill_city, ship_city, bill_street, ship_street, bill_pobox, ship_pobox

**LBL_DESCRIPTION_INFORMATION:** description

### Assets (Tab ID: 43)

**親モジュール:** Inventory | **フィールド数:** 21

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| asset_no | Asset No | vtiger_assets | asset_no | 4 | V~O | LBL_ASSET_INFORMATION | 2 |
| product | Product Name | vtiger_assets | product | 10 | V~M | LBL_ASSET_INFORMATION | 3 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_ASSET_INFORMATION | 4 |
| serialnumber | Serial Number | vtiger_assets | serialnumber | 2 | V~M | LBL_ASSET_INFORMATION | 4 |
| datesold | Date Sold | vtiger_assets | datesold | 5 | D~M~OTH~GE~datesold~Date Sold | LBL_ASSET_INFORMATION | 5 |
| dateinservice | Date in Service | vtiger_assets | dateinservice | 5 | D~M~OTH~GE~dateinservice~Date in Service | LBL_ASSET_INFORMATION | 6 |
| assetstatus | Status | vtiger_assets | assetstatus | 15 | V~M | LBL_ASSET_INFORMATION | 7 |
| tagnumber | Tag Number | vtiger_assets | tagnumber | 2 | V~O | LBL_ASSET_INFORMATION | 8 |
| invoiceid | Invoice Name | vtiger_assets | invoiceid | 10 | V~O | LBL_ASSET_INFORMATION | 9 |
| shippingmethod | Shipping Method | vtiger_assets | shippingmethod | 2 | V~O | LBL_ASSET_INFORMATION | 10 |
| shippingtrackingnumber | Shipping Tracking Number | vtiger_assets | shippingtrackingnumber | 2 | V~O | LBL_ASSET_INFORMATION | 11 |
| assetname | Asset Name | vtiger_assets | assetname | 1 | V~M | LBL_ASSET_INFORMATION | 12 |
| account | Customer Name | vtiger_assets | account | 10 | V~M | LBL_ASSET_INFORMATION | 13 |
| contact | Contact Name | vtiger_assets | contact | 10 | V~O | LBL_ASSET_INFORMATION | 14 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_ASSET_INFORMATION | 14 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_ASSET_INFORMATION | 15 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_ASSET_INFORMATION | 16 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_ASSET_INFORMATION | 17 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_ASSET_INFORMATION | 18 |
| tags | tags | vtiger_assets | tags | 1 | V~O | LBL_ASSET_INFORMATION | 19 |
| description | Notes | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_ASSET_INFORMATION:** asset_no, product, assigned_user_id, serialnumber, datesold, dateinservice, assetstatus, tagnumber, invoiceid, shippingmethod, shippingtrackingnumber, assetname, account, contact, createdtime, modifiedtime, modifiedby, source, starred, tags

**LBL_DESCRIPTION_INFORMATION:** description

### Calendar (Tab ID: 9)

**親モジュール:** Tools | **フィールド数:** 27

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| subject | Subject | vtiger_activity | subject | 2 | V~M | LBL_TASK_INFORMATION | 1 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_TASK_INFORMATION | 2 |
| date_start | Start Date &amp; Time | vtiger_activity | date_start | 6 | DT~M~time_start | LBL_TASK_INFORMATION | 3 |
| time_start | Time Start | vtiger_activity | time_start | 2 | T~M | LBL_TASK_INFORMATION | 4 |
| time_end | End Time | vtiger_activity | time_end | 2 | T~O | LBL_TASK_INFORMATION | 4 |
| due_date | Due Date | vtiger_activity | due_date | 23 | D~M~OTH~GE~date_start~Start Date &amp; Time | LBL_TASK_INFORMATION | 5 |
| recurringtype | Recurrence | vtiger_activity | recurringtype | 16 | O~O | LBL_TASK_INFORMATION | 6 |
| parent_id | Related To | vtiger_seactivityrel | crmid | 66 | I~O | LBL_TASK_INFORMATION | 7 |
| contact_id | Contact Name | vtiger_cntactivityrel | contactid | 57 | I~O | LBL_TASK_INFORMATION | 8 |
| taskstatus | Status | vtiger_activity | status | 15 | V~M | LBL_TASK_INFORMATION | 8 |
| eventstatus | Status | vtiger_activity | eventstatus | 15 | V~O | LBL_TASK_INFORMATION | 9 |
| taskpriority | Priority | vtiger_activity | priority | 15 | V~O | LBL_TASK_INFORMATION | 10 |
| sendnotification | Send Notification | vtiger_activity | sendnotification | 56 | C~O | LBL_TASK_INFORMATION | 11 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_TASK_INFORMATION | 14 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_TASK_INFORMATION | 15 |
| activitytype | Activity Type | vtiger_activity | activitytype | 15 | V~O | LBL_TASK_INFORMATION | 16 |
| visibility | Visibility | vtiger_activity | visibility | 16 | V~O | LBL_TASK_INFORMATION | 17 |
| duration_hours | Duration | vtiger_activity | duration_hours | 63 | T~O | LBL_TASK_INFORMATION | 17 |
| duration_minutes | Duration Minutes | vtiger_activity | duration_minutes | 16 | T~O | LBL_TASK_INFORMATION | 18 |
| location | Location | vtiger_activity | location | 1 | V~O | LBL_TASK_INFORMATION | 19 |
| notime | No Time | vtiger_activity | notime | 56 | C~O | LBL_TASK_INFORMATION | 20 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_TASK_INFORMATION | 22 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_TASK_INFORMATION | 23 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_TASK_INFORMATION | 24 |
| tags | tags | vtiger_activity | tags | 1 | V~O | LBL_TASK_INFORMATION | 25 |
| reminder_time | Send Reminder | vtiger_activity_reminder | reminder_time | 30 | I~O | LBL_REMINDER_INFORMATION | 1 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_TASK_INFORMATION:** subject, assigned_user_id, date_start, time_start, time_end, due_date, recurringtype, parent_id, contact_id, taskstatus, eventstatus, taskpriority, sendnotification, createdtime, modifiedtime, activitytype, visibility, duration_hours, duration_minutes, location, notime, modifiedby, source, starred, tags

**LBL_REMINDER_INFORMATION:** reminder_time

**LBL_DESCRIPTION_INFORMATION:** description

### Campaigns (Tab ID: 26)

**親モジュール:** Marketing | **フィールド数:** 28

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| campaignname | Campaign Name | vtiger_campaign | campaignname | 2 | V~M | LBL_CAMPAIGN_INFORMATION | 1 |
| campaign_no | Campaign No | vtiger_campaign | campaign_no | 4 | V~O | LBL_CAMPAIGN_INFORMATION | 2 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_CAMPAIGN_INFORMATION | 3 |
| campaignstatus | Campaign Status | vtiger_campaign | campaignstatus | 15 | V~O | LBL_CAMPAIGN_INFORMATION | 4 |
| campaigntype | Campaign Type | vtiger_campaign | campaigntype | 15 | V~O | LBL_CAMPAIGN_INFORMATION | 5 |
| product_id | Product | vtiger_campaign | product_id | 59 | I~O | LBL_CAMPAIGN_INFORMATION | 6 |
| targetaudience | Target Audience | vtiger_campaign | targetaudience | 1 | V~O | LBL_CAMPAIGN_INFORMATION | 7 |
| closingdate | Expected Close Date | vtiger_campaign | closingdate | 23 | D~M | LBL_CAMPAIGN_INFORMATION | 8 |
| sponsor | Sponsor | vtiger_campaign | sponsor | 1 | V~O | LBL_CAMPAIGN_INFORMATION | 9 |
| targetsize | TargetSize | vtiger_campaign | targetsize | 1 | I~O | LBL_CAMPAIGN_INFORMATION | 10 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CAMPAIGN_INFORMATION | 11 |
| numsent | Num Sent | vtiger_campaign | numsent | 9 | N~O | LBL_CAMPAIGN_INFORMATION | 12 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CAMPAIGN_INFORMATION | 13 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CAMPAIGN_INFORMATION | 16 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_CAMPAIGN_INFORMATION | 17 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_CAMPAIGN_INFORMATION | 18 |
| tags | tags | vtiger_campaign | tags | 1 | V~O | LBL_CAMPAIGN_INFORMATION | 19 |
| budgetcost | Budget Cost | vtiger_campaign | budgetcost | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS | 1 |
| actualcost | Actual Cost | vtiger_campaign | actualcost | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS | 2 |
| expectedresponse | Expected Response | vtiger_campaign | expectedresponse | 15 | V~O | LBL_EXPECTATIONS_AND_ACTUALS | 3 |
| expectedrevenue | Expected Revenue | vtiger_campaign | expectedrevenue | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS | 4 |
| expectedsalescount | Expected Sales Count | vtiger_campaign | expectedsalescount | 1 | I~O | LBL_EXPECTATIONS_AND_ACTUALS | 5 |
| actualsalescount | Actual Sales Count | vtiger_campaign | actualsalescount | 1 | I~O | LBL_EXPECTATIONS_AND_ACTUALS | 6 |
| expectedresponsecount | Expected Response Count | vtiger_campaign | expectedresponsecount | 1 | I~O | LBL_EXPECTATIONS_AND_ACTUALS | 7 |
| actualresponsecount | Actual Response Count | vtiger_campaign | actualresponsecount | 1 | I~O | LBL_EXPECTATIONS_AND_ACTUALS | 8 |
| expectedroi | Expected ROI | vtiger_campaign | expectedroi | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS | 9 |
| actualroi | Actual ROI | vtiger_campaign | actualroi | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS | 10 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_CAMPAIGN_INFORMATION:** campaignname, campaign_no, assigned_user_id, campaignstatus, campaigntype, product_id, targetaudience, closingdate, sponsor, targetsize, createdtime, numsent, modifiedtime, modifiedby, source, starred, tags

**LBL_EXPECTATIONS_AND_ACTUALS:** budgetcost, actualcost, expectedresponse, expectedrevenue, expectedsalescount, actualsalescount, expectedresponsecount, actualresponsecount, expectedroi, actualroi

**LBL_DESCRIPTION_INFORMATION:** description

### Contacts (Tab ID: 4)

**親モジュール:** Sales | **フィールド数:** 49

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| salutationtype | Salutation | vtiger_contactdetails | salutation | 55 | V~O | LBL_CONTACT_INFORMATION | 1 |
| lastname | Last Name | vtiger_contactdetails | lastname | 255 | V~M | LBL_CONTACT_INFORMATION | 2 |
| contact_no | Contact Id | vtiger_contactdetails | contact_no | 4 | V~O | LBL_CONTACT_INFORMATION | 3 |
| firstname | First Name | vtiger_contactdetails | firstname | 55 | V~O | LBL_CONTACT_INFORMATION | 4 |
| phone | Office Phone | vtiger_contactdetails | phone | 11 | V~O | LBL_CONTACT_INFORMATION | 5 |
| account_id | Account Name | vtiger_contactdetails | accountid | 51 | I~O | LBL_CONTACT_INFORMATION | 6 |
| mobile | Mobile | vtiger_contactdetails | mobile | 11 | V~O | LBL_CONTACT_INFORMATION | 7 |
| leadsource | Lead Source | vtiger_contactsubdetails | leadsource | 15 | V~O | LBL_CONTACT_INFORMATION | 8 |
| homephone | Home Phone | vtiger_contactsubdetails | homephone | 11 | V~O | LBL_CONTACT_INFORMATION | 9 |
| title | Title | vtiger_contactdetails | title | 1 | V~O | LBL_CONTACT_INFORMATION | 10 |
| otherphone | Other Phone | vtiger_contactsubdetails | otherphone | 11 | V~O | LBL_CONTACT_INFORMATION | 11 |
| department | Department | vtiger_contactdetails | department | 1 | V~O | LBL_CONTACT_INFORMATION | 12 |
| fax | Fax | vtiger_contactdetails | fax | 11 | V~O | LBL_CONTACT_INFORMATION | 13 |
| email | Email | vtiger_contactdetails | email | 13 | E~O | LBL_CONTACT_INFORMATION | 15 |
| birthday | Birthdate | vtiger_contactsubdetails | birthday | 5 | D~O | LBL_CONTACT_INFORMATION | 16 |
| assistant | Assistant | vtiger_contactsubdetails | assistant | 1 | V~O | LBL_CONTACT_INFORMATION | 17 |
| contact_id | Reports To | vtiger_contactdetails | reportsto | 57 | V~O | LBL_CONTACT_INFORMATION | 18 |
| assistantphone | Assistant Phone | vtiger_contactsubdetails | assistantphone | 11 | V~O | LBL_CONTACT_INFORMATION | 19 |
| secondaryemail | Secondary Email | vtiger_contactdetails | secondaryemail | 13 | E~O | LBL_CONTACT_INFORMATION | 20 |
| emailoptout | Email Opt Out | vtiger_contactdetails | emailoptout | 56 | C~O | LBL_CONTACT_INFORMATION | 21 |
| donotcall | Do Not Call | vtiger_contactdetails | donotcall | 56 | C~O | LBL_CONTACT_INFORMATION | 22 |
| reference | Reference | vtiger_contactdetails | reference | 56 | C~O | LBL_CONTACT_INFORMATION | 23 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_CONTACT_INFORMATION | 24 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CONTACT_INFORMATION | 25 |
| notify_owner | Notify Owner | vtiger_contactdetails | notify_owner | 56 | C~O | LBL_CONTACT_INFORMATION | 26 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CONTACT_INFORMATION | 27 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CONTACT_INFORMATION | 28 |
| isconvertedfromlead | Is Converted From Lead | vtiger_contactdetails | isconvertedfromlead | 56 | C~O | LBL_CONTACT_INFORMATION | 29 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_CONTACT_INFORMATION | 30 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_CONTACT_INFORMATION | 31 |
| tags | tags | vtiger_contactdetails | tags | 1 | V~O | LBL_CONTACT_INFORMATION | 32 |
| last_action_date | last_action_date | vtiger_contactdetails | last_action_date | 5 | D~O | LBL_CONTACT_INFORMATION | 33 |
| portal | Portal User | vtiger_customerdetails | portal | 56 | C~O | LBL_CUSTOMER_PORTAL_INFORMATION | 1 |
| support_start_date | Support Start Date | vtiger_customerdetails | support_start_date | 5 | D~O | LBL_CUSTOMER_PORTAL_INFORMATION | 2 |
| support_end_date | Support End Date | vtiger_customerdetails | support_end_date | 5 | D~O~OTH~GE~support_start_date~Support Start Date | LBL_CUSTOMER_PORTAL_INFORMATION | 3 |
| mailingcountry | Mailing Country | vtiger_contactaddress | mailingcountry | 1 | V~O | LBL_ADDRESS_INFORMATION | 1 |
| othercountry | Other Country | vtiger_contactaddress | othercountry | 1 | V~O | LBL_ADDRESS_INFORMATION | 2 |
| mailingzip | Mailing Zip | vtiger_contactaddress | mailingzip | 1 | V~O | LBL_ADDRESS_INFORMATION | 3 |
| otherzip | Other Zip | vtiger_contactaddress | otherzip | 1 | V~O | LBL_ADDRESS_INFORMATION | 4 |
| mailingstate | Mailing State | vtiger_contactaddress | mailingstate | 1 | V~O | LBL_ADDRESS_INFORMATION | 5 |
| otherstate | Other State | vtiger_contactaddress | otherstate | 1 | V~O | LBL_ADDRESS_INFORMATION | 6 |
| mailingcity | Mailing City | vtiger_contactaddress | mailingcity | 1 | V~O | LBL_ADDRESS_INFORMATION | 7 |
| othercity | Other City | vtiger_contactaddress | othercity | 1 | V~O | LBL_ADDRESS_INFORMATION | 8 |
| mailingstreet | Mailing Street | vtiger_contactaddress | mailingstreet | 21 | V~O | LBL_ADDRESS_INFORMATION | 9 |
| otherstreet | Other Street | vtiger_contactaddress | otherstreet | 21 | V~O | LBL_ADDRESS_INFORMATION | 10 |
| mailingpobox | Mailing Po Box | vtiger_contactaddress | mailingpobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 11 |
| otherpobox | Other Po Box | vtiger_contactaddress | otherpobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 12 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |
| imagename | Contact Image | vtiger_contactdetails | imagename | 69 | V~O | LBL_IMAGE_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_CONTACT_INFORMATION:** salutationtype, lastname, contact_no, firstname, phone, account_id, mobile, leadsource, homephone, title, otherphone, department, fax, email, birthday, assistant, contact_id, assistantphone, secondaryemail, emailoptout, donotcall, reference, assigned_user_id, createdtime, notify_owner, modifiedtime, modifiedby, isconvertedfromlead, source, starred, tags, last_action_date

**LBL_CUSTOMER_PORTAL_INFORMATION:** portal, support_start_date, support_end_date

**LBL_ADDRESS_INFORMATION:** mailingcountry, othercountry, mailingzip, otherzip, mailingstate, otherstate, mailingcity, othercity, mailingstreet, otherstreet, mailingpobox, otherpobox

**LBL_DESCRIPTION_INFORMATION:** description

**LBL_IMAGE_INFORMATION:** imagename

### Dailyreports (Tab ID: 49)

**親モジュール:** Sales | **フィールド数:** 10

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| dailyreportsname | LBL_SUBJECT | vtiger_dailyreports | dailyreportsname | 2 | V~M | LBL_DAYILYREPORTS_INFORMATION | 1 |
| reportsterm | LBL_DAILY_WEEKLY_REPORT | vtiger_dailyreports | reportsterm | 15 | V~M | LBL_DAYILYREPORTS_INFORMATION | 2 |
| ReportsDate | LBL_SUBMISSION_DATE | vtiger_dailyreports | reportsdate | 23 | D~M | LBL_DAYILYREPORTS_INFORMATION | 3 |
| dailyreportsstatus | LBL_STATUS | vtiger_dailyreports | dailyreportsstatus | 15 | V~M | LBL_DAYILYREPORTS_INFORMATION | 4 |
| reports_to_id | LBL_WHERE_TO_SUBMIT | vtiger_dailyreports | reports_to_id | 10 | V~M | LBL_DAYILYREPORTS_INFORMATION | 5 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_DAYILYREPORTS_INFORMATION | 6 |
| dailyreportscomment | LBL_COMMENT | vtiger_dailyreports | dailyreportscomment | 21 | V~O | LBL_DAYILYREPORTS_INFORMATION | 7 |
| createdtime | LBL_CREATE_DATETIME | vtiger_crmentity | createdtime | 70 | DT~O | LBL_DAYILYREPORTS_INFORMATION | 8 |
| modifiedtime | LBL_UPDATE_DATETIME | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_DAYILYREPORTS_INFORMATION | 9 |
| tags | tags | vtiger_dailyreports | tags | 1 | V~O | LBL_DAYILYREPORTS_INFORMATION | 10 |

### Documents (Tab ID: 8)

**親モジュール:** Tools | **フィールド数:** 18

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| notes_title | Title | vtiger_notes | title | 2 | V~M | LBL_NOTE_INFORMATION | 1 |
| folderid | Folder Name | vtiger_notes | folderid | 26 | V~O | LBL_NOTE_INFORMATION | 2 |
| note_no | Document No | vtiger_notes | note_no | 4 | V~O | LBL_NOTE_INFORMATION | 3 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_NOTE_INFORMATION | 4 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_NOTE_INFORMATION | 5 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_NOTE_INFORMATION | 6 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_NOTE_INFORMATION | 12 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_NOTE_INFORMATION | 13 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_NOTE_INFORMATION | 14 |
| tags | tags | vtiger_notes | tags | 1 | V~O | LBL_NOTE_INFORMATION | 15 |
| notecontent | Note | vtiger_notes | notecontent | 19 | V~O | LBL_DESCRIPTION | 1 |
| filelocationtype | Download Type | vtiger_notes | filelocationtype | 27 | V~O | LBL_FILE_INFORMATION | 1 |
| filestatus | Active | vtiger_notes | filestatus | 56 | V~O | LBL_FILE_INFORMATION | 2 |
| filename | File Name | vtiger_notes | filename | 28 | V~O | LBL_FILE_INFORMATION | 3 |
| filesize | File Size | vtiger_notes | filesize | 1 | I~O | LBL_FILE_INFORMATION | 4 |
| filetype | File Type | vtiger_notes | filetype | 1 | V~O | LBL_FILE_INFORMATION | 5 |
| fileversion | Version | vtiger_notes | fileversion | 1 | V~O | LBL_FILE_INFORMATION | 6 |
| filedownloadcount | Download Count | vtiger_notes | filedownloadcount | 1 | I~O | LBL_FILE_INFORMATION | 7 |

#### ブロック別フィールド

**LBL_NOTE_INFORMATION:** notes_title, folderid, note_no, assigned_user_id, createdtime, modifiedtime, modifiedby, source, starred, tags

**LBL_DESCRIPTION:** notecontent

**LBL_FILE_INFORMATION:** filelocationtype, filestatus, filename, filesize, filetype, fileversion, filedownloadcount

### Emails (Tab ID: 10)

**親モジュール:** Tools | **フィールド数:** 22

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| date_start | Date &amp; Time Sent | vtiger_activity | date_start | 6 | DT~M~time_start~Time Start | LBL_EMAIL_INFORMATION | 1 |
| from_email | From | vtiger_emaildetails | from_email | 12 | V~M | LBL_EMAIL_INFORMATION | 1 |
| parent_type | Sales Enity Module | vtiger_activity | semodule | 2 |  | LBL_EMAIL_INFORMATION | 2 |
| saved_toid | To | vtiger_emaildetails | to_email | 8 | V~M | LBL_EMAIL_INFORMATION | 2 |
| activitytype | Activtiy Type | vtiger_activity | activitytype | 2 | V~O | LBL_EMAIL_INFORMATION | 3 |
| ccmail | CC | vtiger_emaildetails | cc_email | 8 | V~O | LBL_EMAIL_INFORMATION | 3 |
| bccmail | BCC | vtiger_emaildetails | bcc_email | 8 | V~O | LBL_EMAIL_INFORMATION | 4 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_EMAIL_INFORMATION | 5 |
| parent_id | Parent ID | vtiger_emaildetails | idlists | 357 | V~O | LBL_EMAIL_INFORMATION | 5 |
| email_flag | Email Flag | vtiger_emaildetails | email_flag | 16 | V~O | LBL_EMAIL_INFORMATION | 6 |
| access_count | Access Count | vtiger_email_track | access_count | 25 | I~O | LBL_EMAIL_INFORMATION | 6 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_EMAIL_INFORMATION | 11 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_EMAIL_INFORMATION | 12 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_EMAIL_INFORMATION | 13 |
| click_count | Click Count | vtiger_email_track | click_count | 25 | I~O | LBL_EMAIL_INFORMATION | 14 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_EMAIL_INFORMATION | 15 |
| tags | tags | vtiger_activity | tags | 1 | V~O | LBL_EMAIL_INFORMATION | 16 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | Emails_Block1 | 10 |
| subject | Subject | vtiger_activity | subject | 2 | V~M | Emails_Block2 | 1 |
| filename | Attachment | vtiger_attachments | name | 61 | V~O | Emails_Block2 | 2 |
| time_start | Time Start | vtiger_activity | time_start | 2 | T~O | Emails_Block2 | 9 |
| description | Description | vtiger_crmentity | description | 19 | V~O | Emails_Block3 | 1 |

#### ブロック別フィールド

**LBL_EMAIL_INFORMATION:** date_start, from_email, parent_type, saved_toid, activitytype, ccmail, bccmail, assigned_user_id, parent_id, email_flag, access_count, modifiedtime, modifiedby, source, click_count, starred, tags

**Emails_Block1:** createdtime

**Emails_Block2:** subject, filename, time_start

**Emails_Block3:** description

### Faq (Tab ID: 15)

**親モジュール:** Support | **フィールド数:** 13

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| product_id | Product Name | vtiger_faq | product_id | 59 | I~O | LBL_FAQ_INFORMATION | 1 |
| faq_no | Faq No | vtiger_faq | faq_no | 4 | V~O | LBL_FAQ_INFORMATION | 2 |
| faqstatus | Status | vtiger_faq | status | 15 | V~M | LBL_FAQ_INFORMATION | 3 |
| faqcategories | Category | vtiger_faq | category | 15 | V~O | LBL_FAQ_INFORMATION | 4 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_FAQ_INFORMATION | 5 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_FAQ_INFORMATION | 6 |
| question | Question | vtiger_faq | question | 20 | V~M | LBL_FAQ_INFORMATION | 7 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_FAQ_INFORMATION | 7 |
| faq_answer | Answer | vtiger_faq | answer | 20 | V~M | LBL_FAQ_INFORMATION | 8 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_FAQ_INFORMATION | 9 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_FAQ_INFORMATION | 10 |
| tags | tags | vtiger_faq | tags | 1 | V~O | LBL_FAQ_INFORMATION | 11 |
| comments | Add Comment | vtiger_faqcomments | comments | 19 | V~O | LBL_COMMENT_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_FAQ_INFORMATION:** product_id, faq_no, faqstatus, faqcategories, createdtime, modifiedtime, question, modifiedby, faq_answer, source, starred, tags

**LBL_COMMENT_INFORMATION:** comments

### HelpDesk (Tab ID: 13)

**親モジュール:** Support | **フィールド数:** 23

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| ticket_title | Title | vtiger_troubletickets | title | 22 | V~M | LBL_TICKET_INFORMATION | 1 |
| parent_id | Related To | vtiger_troubletickets | parent_id | 10 | I~O | LBL_TICKET_INFORMATION | 2 |
| contact_id | Contact Name | vtiger_troubletickets | contact_id | 10 | V~O | LBL_TICKET_INFORMATION | 3 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_TICKET_INFORMATION | 5 |
| product_id | Product Name | vtiger_troubletickets | product_id | 59 | I~O | LBL_TICKET_INFORMATION | 6 |
| ticketpriorities | Priority | vtiger_troubletickets | priority | 15 | V~M | LBL_TICKET_INFORMATION | 7 |
| ticketstatus | Status | vtiger_troubletickets | status | 15 | V~M | LBL_TICKET_INFORMATION | 8 |
| ticketseverities | Severity | vtiger_troubletickets | severity | 15 | V~O | LBL_TICKET_INFORMATION | 9 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_TICKET_INFORMATION | 10 |
| hours | Hours | vtiger_troubletickets | hours | 1 | N~O | LBL_TICKET_INFORMATION | 10 |
| days | Days | vtiger_troubletickets | days | 1 | N~O | LBL_TICKET_INFORMATION | 11 |
| ticketcategories | Category | vtiger_troubletickets | category | 15 | V~O | LBL_TICKET_INFORMATION | 11 |
| update_log | Update History | vtiger_troubletickets | update_log | 19 | V~O | LBL_TICKET_INFORMATION | 12 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_TICKET_INFORMATION | 13 |
| ticket_no | Ticket No | vtiger_troubletickets | ticket_no | 4 | V~O | LBL_TICKET_INFORMATION | 14 |
| from_portal | From Portal | vtiger_ticketcf | from_portal | 56 | C~O | LBL_TICKET_INFORMATION | 14 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_TICKET_INFORMATION | 17 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_TICKET_INFORMATION | 18 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_TICKET_INFORMATION | 19 |
| tags | tags | vtiger_troubletickets | tags | 1 | V~O | LBL_TICKET_INFORMATION | 20 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |
| solution | Solution | vtiger_troubletickets | solution | 19 | V~O | LBL_TICKET_RESOLUTION | 1 |
| comments | Add Comment | vtiger_ticketcomments | comments | 19 | V~O | LBL_COMMENTS | 1 |

#### ブロック別フィールド

**LBL_TICKET_INFORMATION:** ticket_title, parent_id, contact_id, assigned_user_id, product_id, ticketpriorities, ticketstatus, ticketseverities, createdtime, hours, days, ticketcategories, update_log, modifiedtime, ticket_no, from_portal, modifiedby, source, starred, tags

**LBL_DESCRIPTION_INFORMATION:** description

**LBL_TICKET_RESOLUTION:** solution

**LBL_COMMENTS:** comments

### Invoice (Tab ID: 23)

**親モジュール:** Sales | **フィールド数:** 64

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| subject | Subject | vtiger_invoice | subject | 2 | V~M | LBL_INVOICE_INFORMATION | 1 |
| salesorder_id | Sales Order | vtiger_invoice | salesorderid | 80 | I~O | LBL_INVOICE_INFORMATION | 2 |
| invoice_no | Invoice No | vtiger_invoice | invoice_no | 4 | V~O | LBL_INVOICE_INFORMATION | 3 |
| customerno | Customer No | vtiger_invoice | customerno | 1 | V~O | LBL_INVOICE_INFORMATION | 3 |
| contact_id | Contact Name | vtiger_invoice | contactid | 57 | I~O | LBL_INVOICE_INFORMATION | 4 |
| invoicedate | Invoice Date | vtiger_invoice | invoicedate | 5 | D~O | LBL_INVOICE_INFORMATION | 5 |
| duedate | Due Date | vtiger_invoice | duedate | 5 | D~O | LBL_INVOICE_INFORMATION | 6 |
| vtiger_purchaseorder | Purchase Order | vtiger_invoice | purchaseorder | 1 | V~O | LBL_INVOICE_INFORMATION | 8 |
| txtAdjustment | Adjustment | vtiger_invoice | adjustment | 72 | NN~O | LBL_INVOICE_INFORMATION | 9 |
| exciseduty | Excise Duty | vtiger_invoice | exciseduty | 1 | N~O | LBL_INVOICE_INFORMATION | 11 |
| hdnSubTotal | Sub Total | vtiger_invoice | subtotal | 72 | N~O | LBL_INVOICE_INFORMATION | 12 |
| salescommission | Sales Commission | vtiger_invoice | salescommission | 1 | N~O | LBL_INVOICE_INFORMATION | 13 |
| hdnGrandTotal | Total | vtiger_invoice | total | 72 | N~O | LBL_INVOICE_INFORMATION | 13 |
| hdnTaxType | Tax Type | vtiger_invoice | taxtype | 16 | V~O | LBL_INVOICE_INFORMATION | 13 |
| account_id | Account Name | vtiger_invoice | accountid | 73 | I~M | LBL_INVOICE_INFORMATION | 14 |
| invoicestatus | Status | vtiger_invoice | invoicestatus | 15 | V~O | LBL_INVOICE_INFORMATION | 15 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_INVOICE_INFORMATION | 16 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_INVOICE_INFORMATION | 17 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_INVOICE_INFORMATION | 18 |
| currency_id | Currency | vtiger_invoice | currency_id | 117 | I~O | LBL_INVOICE_INFORMATION | 19 |
| conversion_rate | Conversion Rate | vtiger_invoice | conversion_rate | 1 | N~O | LBL_INVOICE_INFORMATION | 20 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_INVOICE_INFORMATION | 22 |
| pre_tax_total | Pre Tax Total | vtiger_invoice | pre_tax_total | 72 | N~O | LBL_INVOICE_INFORMATION | 23 |
| received | Received | vtiger_invoice | received | 72 | N~O | LBL_INVOICE_INFORMATION | 24 |
| balance | Balance | vtiger_invoice | balance | 72 | N~O | LBL_INVOICE_INFORMATION | 25 |
| potential_id | Potential Name | vtiger_invoice | potential_id | 10 | I~O | LBL_INVOICE_INFORMATION | 26 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_INVOICE_INFORMATION | 27 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_INVOICE_INFORMATION | 28 |
| tags | tags | vtiger_invoice | tags | 1 | V~O | LBL_INVOICE_INFORMATION | 29 |
| bill_country | Billing Country | vtiger_invoicebillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 1 |
| ship_country | Shipping Country | vtiger_invoiceshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 2 |
| bill_code | Billing Code | vtiger_invoicebillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 3 |
| ship_code | Shipping Code | vtiger_invoiceshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 4 |
| bill_state | Billing State | vtiger_invoicebillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 5 |
| ship_state | Shipping State | vtiger_invoiceshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 6 |
| bill_city | Billing City | vtiger_invoicebillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 7 |
| ship_city | Shipping City | vtiger_invoiceshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 8 |
| bill_street | Billing Address | vtiger_invoicebillads | bill_street | 24 | V~M | LBL_ADDRESS_INFORMATION | 9 |
| ship_street | Shipping Address | vtiger_invoiceshipads | ship_street | 24 | V~M | LBL_ADDRESS_INFORMATION | 10 |
| bill_pobox | Billing Po Box | vtiger_invoicebillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 11 |
| ship_pobox | Shipping Po Box | vtiger_invoiceshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 12 |
| hdnS_H_Amount | S&amp;H Amount | vtiger_invoice | s_h_amount | 72 | N~O | LBL_ADDRESS_INFORMATION | 14 |
| terms_conditions | Terms &amp; Conditions | vtiger_invoice | terms_conditions | 19 | V~O | LBL_TERMS_INFORMATION | 1 |
| productid | Item Name | vtiger_inventoryproductrel | productid | 10 | V~M | LBL_ITEM_DETAILS | 1 |
| quantity | Quantity | vtiger_inventoryproductrel | quantity | 7 | N~O | LBL_ITEM_DETAILS | 2 |
| listprice | List Price | vtiger_inventoryproductrel | listprice | 71 | N~O | LBL_ITEM_DETAILS | 3 |
| comment | Item Comment | vtiger_inventoryproductrel | comment | 19 | V~O | LBL_ITEM_DETAILS | 4 |
| discount_amount | Item Discount Amount | vtiger_inventoryproductrel | discount_amount | 71 | N~O | LBL_ITEM_DETAILS | 5 |
| discount_percent | Item Discount Percent | vtiger_inventoryproductrel | discount_percent | 7 | V~O | LBL_ITEM_DETAILS | 6 |
| tax1 | VAT | vtiger_inventoryproductrel | tax1 | 83 | V~O | LBL_ITEM_DETAILS | 7 |
| tax2 | Sales | vtiger_inventoryproductrel | tax2 | 83 | V~O | LBL_ITEM_DETAILS | 8 |
| tax3 | Service | vtiger_inventoryproductrel | tax3 | 83 | V~O | LBL_ITEM_DETAILS | 9 |
| hdnS_H_Percent | S&amp;H Percent | vtiger_invoice | s_h_percent | 1 | N~O | LBL_ITEM_DETAILS | 10 |
| hdnDiscountAmount | Discount Amount | vtiger_invoice | discount_amount | 72 | N~O | LBL_ITEM_DETAILS | 13 |
| hdnDiscountPercent | Discount Percent | vtiger_invoice | discount_percent | 1 | N~O | LBL_ITEM_DETAILS | 13 |
| image | Image | vtiger_inventoryproductrel | image | 56 | V~O | LBL_ITEM_DETAILS | 14 |
| purchase_cost | Purchase Cost | vtiger_inventoryproductrel | purchase_cost | 71 | N~O | LBL_ITEM_DETAILS | 15 |
| margin | Margin | vtiger_inventoryproductrel | margin | 71 | N~O | LBL_ITEM_DETAILS | 16 |
| region_id | Tax Region | vtiger_invoice | region_id | 16 | N~O | LBL_ITEM_DETAILS | 17 |
| usageunit | LBL_USAGE_UNIT | vtiger_inventoryproductrel | usageunit | 1 | V~O~LE~200 | LBL_ITEM_DETAILS | 18 |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS | 19 |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS | 20 |
| tax4 | LBL_CONSUMPTION_TAX | vtiger_inventoryproductrel | tax4 | 83 | V~O | LBL_ITEM_DETAILS | 21 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_INVOICE_INFORMATION:** subject, salesorder_id, invoice_no, customerno, contact_id, invoicedate, duedate, vtiger_purchaseorder, txtAdjustment, exciseduty, hdnSubTotal, salescommission, hdnGrandTotal, hdnTaxType, account_id, invoicestatus, assigned_user_id, createdtime, modifiedtime, currency_id, conversion_rate, modifiedby, pre_tax_total, received, balance, potential_id, source, starred, tags

**LBL_ADDRESS_INFORMATION:** bill_country, ship_country, bill_code, ship_code, bill_state, ship_state, bill_city, ship_city, bill_street, ship_street, bill_pobox, ship_pobox, hdnS_H_Amount

**LBL_TERMS_INFORMATION:** terms_conditions

**LBL_ITEM_DETAILS:** productid, quantity, listprice, comment, discount_amount, discount_percent, tax1, tax2, tax3, hdnS_H_Percent, hdnDiscountAmount, hdnDiscountPercent, image, purchase_cost, margin, region_id, usageunit, reducedtaxrate, reducedtaxrate, tax4

**LBL_DESCRIPTION_INFORMATION:** description

### Leads (Tab ID: 7)

**親モジュール:** Sales | **フィールド数:** 34

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| salutationtype | Salutation | vtiger_leaddetails | salutation | 55 | V~O | LBL_LEAD_INFORMATION | 1 |
| lastname | Last Name | vtiger_leaddetails | lastname | 255 | V~M | LBL_LEAD_INFORMATION | 2 |
| lead_no | Lead No | vtiger_leaddetails | lead_no | 4 | V~O | LBL_LEAD_INFORMATION | 3 |
| firstname | First Name | vtiger_leaddetails | firstname | 55 | V~O | LBL_LEAD_INFORMATION | 4 |
| phone | Phone | vtiger_leadaddress | phone | 11 | V~O | LBL_LEAD_INFORMATION | 5 |
| company | Company | vtiger_leaddetails | company | 2 | V~O | LBL_LEAD_INFORMATION | 6 |
| mobile | Mobile | vtiger_leadaddress | mobile | 11 | V~O | LBL_LEAD_INFORMATION | 7 |
| designation | Designation | vtiger_leaddetails | designation | 1 | V~O | LBL_LEAD_INFORMATION | 8 |
| fax | Fax | vtiger_leadaddress | fax | 11 | V~O | LBL_LEAD_INFORMATION | 9 |
| leadsource | Lead Source | vtiger_leaddetails | leadsource | 15 | V~O | LBL_LEAD_INFORMATION | 10 |
| email | Email | vtiger_leaddetails | email | 13 | E~O | LBL_LEAD_INFORMATION | 11 |
| industry | Industry | vtiger_leaddetails | industry | 15 | V~O | LBL_LEAD_INFORMATION | 12 |
| website | Website | vtiger_leadsubdetails | website | 17 | V~O | LBL_LEAD_INFORMATION | 13 |
| annualrevenue | Annual Revenue | vtiger_leaddetails | annualrevenue | 71 | N~O | LBL_LEAD_INFORMATION | 14 |
| leadstatus | Lead Status | vtiger_leaddetails | leadstatus | 15 | V~O | LBL_LEAD_INFORMATION | 15 |
| noofemployees | No Of Employees | vtiger_leaddetails | noofemployees | 1 | I~O | LBL_LEAD_INFORMATION | 16 |
| rating | Rating | vtiger_leaddetails | rating | 15 | V~O | LBL_LEAD_INFORMATION | 17 |
| secondaryemail | Secondary Email | vtiger_leaddetails | secondaryemail | 13 | E~O | LBL_LEAD_INFORMATION | 18 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_LEAD_INFORMATION | 19 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_LEAD_INFORMATION | 20 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_LEAD_INFORMATION | 21 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_LEAD_INFORMATION | 23 |
| emailoptout | Email Opt Out | vtiger_leaddetails | emailoptout | 56 | C~O | LBL_LEAD_INFORMATION | 24 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_LEAD_INFORMATION | 25 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_LEAD_INFORMATION | 26 |
| tags | tags | vtiger_leaddetails | tags | 1 | V~O | LBL_LEAD_INFORMATION | 27 |
| last_action_date | last_action_date | vtiger_leaddetails | last_action_date | 5 | D~O | LBL_LEAD_INFORMATION | 28 |
| country | Country | vtiger_leadaddress | country | 1 | V~O | LBL_ADDRESS_INFORMATION | 1 |
| code | Postal Code | vtiger_leadaddress | code | 1 | V~O | LBL_ADDRESS_INFORMATION | 2 |
| state | State | vtiger_leadaddress | state | 1 | V~O | LBL_ADDRESS_INFORMATION | 3 |
| city | City | vtiger_leadaddress | city | 1 | V~O | LBL_ADDRESS_INFORMATION | 4 |
| lane | Street | vtiger_leadaddress | lane | 21 | V~O | LBL_ADDRESS_INFORMATION | 5 |
| pobox | Po Box | vtiger_leadaddress | pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 6 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_LEAD_INFORMATION:** salutationtype, lastname, lead_no, firstname, phone, company, mobile, designation, fax, leadsource, email, industry, website, annualrevenue, leadstatus, noofemployees, rating, secondaryemail, assigned_user_id, modifiedtime, createdtime, modifiedby, emailoptout, source, starred, tags, last_action_date

**LBL_ADDRESS_INFORMATION:** country, code, state, city, lane, pobox

**LBL_DESCRIPTION_INFORMATION:** description

### ModComments (Tab ID: 37)

**親モジュール:** なし | **フィールド数:** 14

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| commentcontent | Comment | vtiger_modcomments | commentcontent | 19 | V~M | LBL_MODCOMMENTS_INFORMATION | 4 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_MODCOMMENTS_INFORMATION | 5 |
| customer | Customer | vtiger_modcomments | customer | 10 | V~O | LBL_MODCOMMENTS_INFORMATION | 6 |
| userid | UserId | vtiger_modcomments | userid | 10 | V~O | LBL_MODCOMMENTS_INFORMATION | 7 |
| reasontoedit | ReasonToEdit | vtiger_modcomments | reasontoedit | 19 | V~O | LBL_MODCOMMENTS_INFORMATION | 8 |
| is_private | Is Private | vtiger_modcomments | is_private | 7 | I~O | LBL_MODCOMMENTS_INFORMATION | 9 |
| filename | Attachment | vtiger_modcomments | filename | 61 | V~O | LBL_MODCOMMENTS_INFORMATION | 10 |
| related_email_id | Related Email Id | vtiger_modcomments | related_email_id | 1 | I~O | LBL_MODCOMMENTS_INFORMATION | 11 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_OTHER_INFORMATION | 1 |
| related_to | Related To | vtiger_modcomments | related_to | 10 | V~M | LBL_OTHER_INFORMATION | 2 |
| creator | Creator | vtiger_crmentity | smcreatorid | 52 | V~O | LBL_OTHER_INFORMATION | 4 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_OTHER_INFORMATION | 5 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_OTHER_INFORMATION | 6 |
| parent_comments | Related To Comments | vtiger_modcomments | parent_comments | 10 | V~O | LBL_OTHER_INFORMATION | 7 |

#### ブロック別フィールド

**LBL_MODCOMMENTS_INFORMATION:** commentcontent, source, customer, userid, reasontoedit, is_private, filename, related_email_id

**LBL_OTHER_INFORMATION:** assigned_user_id, related_to, creator, createdtime, modifiedtime, parent_comments

### Potentials (Tab ID: 2)

**親モジュール:** Sales | **フィールド数:** 23

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| potentialname | Potential Name | vtiger_potential | potentialname | 2 | V~M | LBL_OPPORTUNITY_INFORMATION | 1 |
| potential_no | Potential No | vtiger_potential | potential_no | 4 | V~O | LBL_OPPORTUNITY_INFORMATION | 2 |
| related_to | Related To | vtiger_potential | related_to | 10 | V~O | LBL_OPPORTUNITY_INFORMATION | 3 |
| contact_id | Contact Name | vtiger_potential | contact_id | 10 | V~O | LBL_OPPORTUNITY_INFORMATION | 4 |
| amount | Amount | vtiger_potential | amount | 71 | N~O | LBL_OPPORTUNITY_INFORMATION | 5 |
| opportunity_type | Type | vtiger_potential | potentialtype | 15 | V~O | LBL_OPPORTUNITY_INFORMATION | 7 |
| closingdate | Expected Close Date | vtiger_potential | closingdate | 23 | D~M | LBL_OPPORTUNITY_INFORMATION | 8 |
| leadsource | Lead Source | vtiger_potential | leadsource | 15 | V~O | LBL_OPPORTUNITY_INFORMATION | 9 |
| nextstep | Next Step | vtiger_potential | nextstep | 1 | V~O | LBL_OPPORTUNITY_INFORMATION | 10 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_OPPORTUNITY_INFORMATION | 11 |
| sales_stage | Sales Stage | vtiger_potential | sales_stage | 15 | V~M | LBL_OPPORTUNITY_INFORMATION | 12 |
| campaignid | Campaign Source | vtiger_potential | campaignid | 58 | N~O | LBL_OPPORTUNITY_INFORMATION | 13 |
| probability | Probability | vtiger_potential | probability | 9 | N~O | LBL_OPPORTUNITY_INFORMATION | 14 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_OPPORTUNITY_INFORMATION | 15 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_OPPORTUNITY_INFORMATION | 16 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_OPPORTUNITY_INFORMATION | 17 |
| forecast_amount | Forecast Amount | vtiger_potential | forecast_amount | 71 | N~O | LBL_OPPORTUNITY_INFORMATION | 18 |
| isconvertedfromlead | Is Converted From Lead | vtiger_potential | isconvertedfromlead | 56 | C~O | LBL_OPPORTUNITY_INFORMATION | 19 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_OPPORTUNITY_INFORMATION | 20 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_OPPORTUNITY_INFORMATION | 21 |
| tags | tags | vtiger_potential | tags | 1 | V~O | LBL_OPPORTUNITY_INFORMATION | 22 |
| last_action_date | last_action_date | vtiger_potential | last_action_date | 5 | D~O | LBL_OPPORTUNITY_INFORMATION | 23 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_OPPORTUNITY_INFORMATION:** potentialname, potential_no, related_to, contact_id, amount, opportunity_type, closingdate, leadsource, nextstep, assigned_user_id, sales_stage, campaignid, probability, modifiedtime, createdtime, modifiedby, forecast_amount, isconvertedfromlead, source, starred, tags, last_action_date

**LBL_DESCRIPTION_INFORMATION:** description

### PriceBooks (Tab ID: 19)

**親モジュール:** Inventory | **フィールド数:** 11

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| bookname | Price Book Name | vtiger_pricebook | bookname | 2 | V~M | LBL_PRICEBOOK_INFORMATION | 1 |
| active | Active | vtiger_pricebook | active | 56 | C~O | LBL_PRICEBOOK_INFORMATION | 2 |
| pricebook_no | PriceBook No | vtiger_pricebook | pricebook_no | 4 | V~O | LBL_PRICEBOOK_INFORMATION | 3 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_PRICEBOOK_INFORMATION | 4 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_PRICEBOOK_INFORMATION | 5 |
| currency_id | Currency | vtiger_pricebook | currency_id | 117 | I~M | LBL_PRICEBOOK_INFORMATION | 5 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_PRICEBOOK_INFORMATION | 7 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PRICEBOOK_INFORMATION | 8 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PRICEBOOK_INFORMATION | 9 |
| tags | tags | vtiger_pricebook | tags | 1 | V~O | LBL_PRICEBOOK_INFORMATION | 10 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_PRICEBOOK_INFORMATION:** bookname, active, pricebook_no, createdtime, modifiedtime, currency_id, modifiedby, source, starred, tags

**LBL_DESCRIPTION_INFORMATION:** description

### Products (Tab ID: 14)

**親モジュール:** Inventory | **フィールド数:** 36

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| productname | Product Name | vtiger_products | productname | 2 | V~M | LBL_PRODUCT_INFORMATION | 1 |
| product_no | Product No | vtiger_products | product_no | 4 | V~O | LBL_PRODUCT_INFORMATION | 2 |
| discontinued | Product Active | vtiger_products | discontinued | 56 | V~O | LBL_PRODUCT_INFORMATION | 3 |
| productcode | Part Number | vtiger_products | productcode | 1 | V~O | LBL_PRODUCT_INFORMATION | 4 |
| sales_start_date | Sales Start Date | vtiger_products | sales_start_date | 5 | D~O | LBL_PRODUCT_INFORMATION | 5 |
| manufacturer | Manufacturer | vtiger_products | manufacturer | 15 | V~O | LBL_PRODUCT_INFORMATION | 6 |
| productcategory | Product Category | vtiger_products | productcategory | 15 | V~O | LBL_PRODUCT_INFORMATION | 6 |
| start_date | Support Start Date | vtiger_products | start_date | 5 | D~O | LBL_PRODUCT_INFORMATION | 7 |
| sales_end_date | Sales End Date | vtiger_products | sales_end_date | 5 | D~O~OTH~GE~sales_start_date~Sales Start Date | LBL_PRODUCT_INFORMATION | 8 |
| expiry_date | Support Expiry Date | vtiger_products | expiry_date | 5 | D~O~OTH~GE~start_date~Start Date | LBL_PRODUCT_INFORMATION | 10 |
| vendor_id | Vendor Name | vtiger_products | vendor_id | 75 | I~O | LBL_PRODUCT_INFORMATION | 13 |
| website | Website | vtiger_products | website | 17 | V~O | LBL_PRODUCT_INFORMATION | 14 |
| vendor_part_no | Vendor PartNo | vtiger_products | vendor_part_no | 1 | V~O | LBL_PRODUCT_INFORMATION | 15 |
| mfr_part_no | Mfr PartNo | vtiger_products | mfr_part_no | 1 | V~O | LBL_PRODUCT_INFORMATION | 16 |
| productsheet | Product Sheet | vtiger_products | productsheet | 1 | V~O | LBL_PRODUCT_INFORMATION | 17 |
| serial_no | Serial No | vtiger_products | serialno | 1 | V~O | LBL_PRODUCT_INFORMATION | 18 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_PRODUCT_INFORMATION | 19 |
| glacct | GL Account | vtiger_products | glacct | 15 | V~O | LBL_PRODUCT_INFORMATION | 20 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_PRODUCT_INFORMATION | 21 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_PRODUCT_INFORMATION | 22 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PRODUCT_INFORMATION | 23 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PRODUCT_INFORMATION | 24 |
| tags | tags | vtiger_products | tags | 1 | V~O | LBL_PRODUCT_INFORMATION | 25 |
| unit_price | Unit Price | vtiger_products | unit_price | 72 | N~O | LBL_PRICING_INFORMATION | 1 |
| commissionrate | Commission Rate | vtiger_products | commissionrate | 9 | N~O | LBL_PRICING_INFORMATION | 2 |
| taxclass | Taxes | vtiger_products | taxclass | 83 | V~O | LBL_PRICING_INFORMATION | 4 |
| purchase_cost | Purchase Cost | vtiger_products | purchase_cost | 71 | N~O | LBL_PRICING_INFORMATION | 5 |
| reducedtaxrate | Reduced TaxRate | vtiger_products | reducedtaxrate | 56 | C~O | LBL_PRICING_INFORMATION | 6 |
| usageunit | Usage Unit | vtiger_products | usageunit | 15 | V~O | LBL_STOCK_INFORMATION | 1 |
| qty_per_unit | Qty/Unit | vtiger_products | qty_per_unit | 1 | N~O | LBL_STOCK_INFORMATION | 2 |
| qtyinstock | Qty In Stock | vtiger_products | qtyinstock | 1 | NN~O | LBL_STOCK_INFORMATION | 3 |
| reorderlevel | Reorder Level | vtiger_products | reorderlevel | 1 | I~O | LBL_STOCK_INFORMATION | 4 |
| assigned_user_id | Handler | vtiger_crmentity | smownerid | 53 | V~M | LBL_STOCK_INFORMATION | 5 |
| qtyindemand | Qty In Demand | vtiger_products | qtyindemand | 1 | I~O | LBL_STOCK_INFORMATION | 6 |
| imagename | Product Image | vtiger_products | imagename | 69 | V~O | LBL_IMAGE_INFORMATION | 1 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_PRODUCT_INFORMATION:** productname, product_no, discontinued, productcode, sales_start_date, manufacturer, productcategory, start_date, sales_end_date, expiry_date, vendor_id, website, vendor_part_no, mfr_part_no, productsheet, serial_no, createdtime, glacct, modifiedtime, modifiedby, source, starred, tags

**LBL_PRICING_INFORMATION:** unit_price, commissionrate, taxclass, purchase_cost, reducedtaxrate

**LBL_STOCK_INFORMATION:** usageunit, qty_per_unit, qtyinstock, reorderlevel, assigned_user_id, qtyindemand

**LBL_IMAGE_INFORMATION:** imagename

**LBL_DESCRIPTION_INFORMATION:** description

### Project (Tab ID: 41)

**親モジュール:** Support | **フィールド数:** 22

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| projectname | Project Name | vtiger_project | projectname | 2 | V~M | LBL_PROJECT_INFORMATION | 1 |
| project_no | Project No | vtiger_project | project_no | 4 | V~O | LBL_PROJECT_INFORMATION | 2 |
| startdate | Start Date | vtiger_project | startdate | 23 | D~O | LBL_PROJECT_INFORMATION | 3 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_PROJECT_INFORMATION | 4 |
| targetenddate | Target End Date | vtiger_project | targetenddate | 23 | D~O~OTH~GE~startdate~Start Date | LBL_PROJECT_INFORMATION | 5 |
| actualenddate | Actual End Date | vtiger_project | actualenddate | 23 | D~O~OTH~GE~startdate~Start Date | LBL_PROJECT_INFORMATION | 6 |
| projectstatus | Status | vtiger_project | projectstatus | 15 | V~O | LBL_PROJECT_INFORMATION | 7 |
| projecttype | Type | vtiger_project | projecttype | 15 | V~O | LBL_PROJECT_INFORMATION | 8 |
| linktoaccountscontacts | Related to | vtiger_project | linktoaccountscontacts | 10 | V~O | LBL_PROJECT_INFORMATION | 9 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PROJECT_INFORMATION | 10 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PROJECT_INFORMATION | 11 |
| tags | tags | vtiger_project | tags | 1 | V~O | LBL_PROJECT_INFORMATION | 12 |
| isconvertedfrompotential | Is Converted From Opportunity | vtiger_project | isconvertedfrompotential | 56 | C~O | LBL_PROJECT_INFORMATION | 13 |
| potentialid | Potential Name | vtiger_project | potentialid | 10 | I~O | LBL_PROJECT_INFORMATION | 14 |
| targetbudget | Target Budget | vtiger_project | targetbudget | 7 | V~O | LBL_CUSTOM_INFORMATION | 1 |
| projecturl | Project Url | vtiger_project | projecturl | 17 | V~O | LBL_CUSTOM_INFORMATION | 2 |
| projectpriority | Priority | vtiger_project | projectpriority | 15 | V~O | LBL_CUSTOM_INFORMATION | 3 |
| progress | Progress | vtiger_project | progress | 15 | V~O | LBL_CUSTOM_INFORMATION | 4 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CUSTOM_INFORMATION | 5 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CUSTOM_INFORMATION | 6 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CUSTOM_INFORMATION | 7 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_PROJECT_INFORMATION:** projectname, project_no, startdate, assigned_user_id, targetenddate, actualenddate, projectstatus, projecttype, linktoaccountscontacts, source, starred, tags, isconvertedfrompotential, potentialid

**LBL_CUSTOM_INFORMATION:** targetbudget, projecturl, projectpriority, progress, createdtime, modifiedtime, modifiedby

**LBL_DESCRIPTION_INFORMATION:** description

#### カスタムフィールド (1)

- **project_no** (Project No) - UIタイプ: 4

### ProjectMilestone (Tab ID: 39)

**親モジュール:** Support | **フィールド数:** 13

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| projectmilestonename | Project Milestone Name | vtiger_projectmilestone | projectmilestonename | 2 | V~M | LBL_PROJECT_MILESTONE_INFORMATION | 1 |
| projectmilestone_no | Project Milestone No | vtiger_projectmilestone | projectmilestone_no | 4 | V~O | LBL_PROJECT_MILESTONE_INFORMATION | 2 |
| projectid | Related to | vtiger_projectmilestone | projectid | 10 | V~M | LBL_PROJECT_MILESTONE_INFORMATION | 4 |
| projectmilestonedate | Milestone Date | vtiger_projectmilestone | projectmilestonedate | 5 | D~O | LBL_PROJECT_MILESTONE_INFORMATION | 5 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_PROJECT_MILESTONE_INFORMATION | 6 |
| projectmilestonetype | Type | vtiger_projectmilestone | projectmilestonetype | 15 | V~O | LBL_PROJECT_MILESTONE_INFORMATION | 7 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PROJECT_MILESTONE_INFORMATION | 8 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PROJECT_MILESTONE_INFORMATION | 9 |
| tags | tags | vtiger_projectmilestone | tags | 1 | V~O | LBL_PROJECT_MILESTONE_INFORMATION | 10 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CUSTOM_INFORMATION | 1 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CUSTOM_INFORMATION | 2 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CUSTOM_INFORMATION | 3 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_PROJECT_MILESTONE_INFORMATION:** projectmilestonename, projectmilestone_no, projectid, projectmilestonedate, assigned_user_id, projectmilestonetype, source, starred, tags

**LBL_CUSTOM_INFORMATION:** createdtime, modifiedtime, modifiedby

**LBL_DESCRIPTION_INFORMATION:** description

#### カスタムフィールド (1)

- **projectmilestone_no** (Project Milestone No) - UIタイプ: 4

### ProjectTask (Tab ID: 40)

**親モジュール:** Support | **フィールド数:** 19

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| projecttaskname | Project Task Name | vtiger_projecttask | projecttaskname | 2 | V~M | LBL_PROJECT_TASK_INFORMATION | 1 |
| projecttask_no | Project Task No | vtiger_projecttask | projecttask_no | 4 | V~O | LBL_PROJECT_TASK_INFORMATION | 2 |
| projecttaskpriority | Priority | vtiger_projecttask | projecttaskpriority | 15 | V~O | LBL_PROJECT_TASK_INFORMATION | 3 |
| projecttasktype | Type | vtiger_projecttask | projecttasktype | 15 | V~O | LBL_PROJECT_TASK_INFORMATION | 4 |
| projecttasknumber | Project Task Number | vtiger_projecttask | projecttasknumber | 7 | I~O | LBL_PROJECT_TASK_INFORMATION | 5 |
| projectid | Related to | vtiger_projecttask | projectid | 10 | V~M | LBL_PROJECT_TASK_INFORMATION | 6 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_PROJECT_TASK_INFORMATION | 7 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PROJECT_TASK_INFORMATION | 8 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PROJECT_TASK_INFORMATION | 9 |
| tags | tags | vtiger_projecttask | tags | 1 | V~O | LBL_PROJECT_TASK_INFORMATION | 10 |
| projecttaskstatus | Status | vtiger_projecttask | projecttaskstatus | 15 | V~O | LBL_PROJECT_TASK_INFORMATION | 11 |
| projecttaskprogress | Progress | vtiger_projecttask | projecttaskprogress | 15 | V~O | LBL_CUSTOM_INFORMATION | 1 |
| projecttaskhours | Worked Hours | vtiger_projecttask | projecttaskhours | 7 | V~O | LBL_CUSTOM_INFORMATION | 2 |
| startdate | Start Date | vtiger_projecttask | startdate | 5 | D~O | LBL_CUSTOM_INFORMATION | 3 |
| enddate | End Date | vtiger_projecttask | enddate | 5 | D~O~OTH~GE~startdate~Start Date | LBL_CUSTOM_INFORMATION | 4 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CUSTOM_INFORMATION | 5 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CUSTOM_INFORMATION | 6 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CUSTOM_INFORMATION | 7 |
| description | description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_PROJECT_TASK_INFORMATION:** projecttaskname, projecttask_no, projecttaskpriority, projecttasktype, projecttasknumber, projectid, assigned_user_id, source, starred, tags, projecttaskstatus

**LBL_CUSTOM_INFORMATION:** projecttaskprogress, projecttaskhours, startdate, enddate, createdtime, modifiedtime, modifiedby

**LBL_DESCRIPTION_INFORMATION:** description

#### カスタムフィールド (1)

- **projecttask_no** (Project Task No) - UIタイプ: 4

### PurchaseOrder (Tab ID: 21)

**親モジュール:** Inventory | **フィールド数:** 60

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| subject | Subject | vtiger_purchaseorder | subject | 2 | V~M | LBL_PO_INFORMATION | 1 |
| purchaseorder_no | PurchaseOrder No | vtiger_purchaseorder | purchaseorder_no | 4 | V~O | LBL_PO_INFORMATION | 2 |
| vendor_id | Vendor Name | vtiger_purchaseorder | vendorid | 81 | I~M | LBL_PO_INFORMATION | 3 |
| requisition_no | Requisition No | vtiger_purchaseorder | requisition_no | 1 | V~O | LBL_PO_INFORMATION | 4 |
| tracking_no | Tracking Number | vtiger_purchaseorder | tracking_no | 1 | V~O | LBL_PO_INFORMATION | 5 |
| contact_id | Contact Name | vtiger_purchaseorder | contactid | 57 | I~O | LBL_PO_INFORMATION | 6 |
| duedate | Due Date | vtiger_purchaseorder | duedate | 5 | D~O | LBL_PO_INFORMATION | 7 |
| carrier | Carrier | vtiger_purchaseorder | carrier | 15 | V~O | LBL_PO_INFORMATION | 8 |
| txtAdjustment | Adjustment | vtiger_purchaseorder | adjustment | 72 | NN~O | LBL_PO_INFORMATION | 10 |
| salescommission | Sales Commission | vtiger_purchaseorder | salescommission | 1 | N~O | LBL_PO_INFORMATION | 11 |
| exciseduty | Excise Duty | vtiger_purchaseorder | exciseduty | 1 | N~O | LBL_PO_INFORMATION | 12 |
| hdnGrandTotal | Total | vtiger_purchaseorder | total | 72 | N~O | LBL_PO_INFORMATION | 13 |
| hdnS_H_Amount | S&amp;H Amount | vtiger_purchaseorder | s_h_amount | 72 | N~O | LBL_PO_INFORMATION | 14 |
| hdnTaxType | Tax Type | vtiger_purchaseorder | taxtype | 16 | V~O | LBL_PO_INFORMATION | 14 |
| hdnSubTotal | Sub Total | vtiger_purchaseorder | subtotal | 72 | N~O | LBL_PO_INFORMATION | 14 |
| postatus | Status | vtiger_purchaseorder | postatus | 15 | V~M | LBL_PO_INFORMATION | 15 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_PO_INFORMATION | 16 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_PO_INFORMATION | 17 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_PO_INFORMATION | 18 |
| currency_id | Currency | vtiger_purchaseorder | currency_id | 117 | I~O | LBL_PO_INFORMATION | 19 |
| conversion_rate | Conversion Rate | vtiger_purchaseorder | conversion_rate | 1 | N~O | LBL_PO_INFORMATION | 20 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_PO_INFORMATION | 22 |
| pre_tax_total | Pre Tax Total | vtiger_purchaseorder | pre_tax_total | 72 | N~O | LBL_PO_INFORMATION | 23 |
| paid | Paid | vtiger_purchaseorder | paid | 72 | N~O | LBL_PO_INFORMATION | 24 |
| balance | Balance | vtiger_purchaseorder | balance | 72 | N~O | LBL_PO_INFORMATION | 25 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PO_INFORMATION | 26 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PO_INFORMATION | 27 |
| tags | tags | vtiger_purchaseorder | tags | 1 | V~O | LBL_PO_INFORMATION | 28 |
| bill_country | Billing Country | vtiger_pobillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 1 |
| ship_country | Shipping Country | vtiger_poshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 2 |
| bill_code | Billing Code | vtiger_pobillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 3 |
| ship_code | Shipping Code | vtiger_poshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 4 |
| bill_state | Billing State | vtiger_pobillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 5 |
| ship_state | Shipping State | vtiger_poshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 6 |
| bill_city | Billing City | vtiger_pobillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 7 |
| ship_city | Shipping City | vtiger_poshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 8 |
| bill_street | Billing Address | vtiger_pobillads | bill_street | 24 | V~M | LBL_ADDRESS_INFORMATION | 9 |
| ship_street | Shipping Address | vtiger_poshipads | ship_street | 24 | V~M | LBL_ADDRESS_INFORMATION | 10 |
| bill_pobox | Billing Po Box | vtiger_pobillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 11 |
| ship_pobox | Shipping Po Box | vtiger_poshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 12 |
| terms_conditions | Terms &amp; Conditions | vtiger_purchaseorder | terms_conditions | 19 | V~O | LBL_TERMS_INFORMATION | 1 |
| productid | Item Name | vtiger_inventoryproductrel | productid | 10 | V~M | LBL_ITEM_DETAILS | 1 |
| quantity | Quantity | vtiger_inventoryproductrel | quantity | 7 | N~O | LBL_ITEM_DETAILS | 2 |
| listprice | List Price | vtiger_inventoryproductrel | listprice | 71 | N~O | LBL_ITEM_DETAILS | 3 |
| comment | Item Comment | vtiger_inventoryproductrel | comment | 19 | V~O | LBL_ITEM_DETAILS | 4 |
| discount_amount | Item Discount Amount | vtiger_inventoryproductrel | discount_amount | 71 | N~O | LBL_ITEM_DETAILS | 5 |
| discount_percent | Item Discount Percent | vtiger_inventoryproductrel | discount_percent | 7 | V~O | LBL_ITEM_DETAILS | 6 |
| tax1 | VAT | vtiger_inventoryproductrel | tax1 | 83 | V~O | LBL_ITEM_DETAILS | 7 |
| tax2 | Sales | vtiger_inventoryproductrel | tax2 | 83 | V~O | LBL_ITEM_DETAILS | 8 |
| tax3 | Service | vtiger_inventoryproductrel | tax3 | 83 | V~O | LBL_ITEM_DETAILS | 9 |
| hdnS_H_Percent | S&amp;H Percent | vtiger_purchaseorder | s_h_percent | 1 | N~O | LBL_ITEM_DETAILS | 10 |
| hdnDiscountAmount | Discount Amount | vtiger_purchaseorder | discount_amount | 72 | N~O | LBL_ITEM_DETAILS | 14 |
| hdnDiscountPercent | Discount Percent | vtiger_purchaseorder | discount_percent | 1 | N~O | LBL_ITEM_DETAILS | 14 |
| image | Image | vtiger_inventoryproductrel | image | 56 | V~O | LBL_ITEM_DETAILS | 15 |
| region_id | Tax Region | vtiger_purchaseorder | region_id | 16 | N~O | LBL_ITEM_DETAILS | 16 |
| usageunit | LBL_USAGE_UNIT | vtiger_inventoryproductrel | usageunit | 1 | V~O~LE~200 | LBL_ITEM_DETAILS | 17 |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS | 18 |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS | 19 |
| tax4 | LBL_CONSUMPTION_TAX | vtiger_inventoryproductrel | tax4 | 83 | V~O | LBL_ITEM_DETAILS | 20 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_PO_INFORMATION:** subject, purchaseorder_no, vendor_id, requisition_no, tracking_no, contact_id, duedate, carrier, txtAdjustment, salescommission, exciseduty, hdnGrandTotal, hdnS_H_Amount, hdnTaxType, hdnSubTotal, postatus, assigned_user_id, createdtime, modifiedtime, currency_id, conversion_rate, modifiedby, pre_tax_total, paid, balance, source, starred, tags

**LBL_ADDRESS_INFORMATION:** bill_country, ship_country, bill_code, ship_code, bill_state, ship_state, bill_city, ship_city, bill_street, ship_street, bill_pobox, ship_pobox

**LBL_TERMS_INFORMATION:** terms_conditions

**LBL_ITEM_DETAILS:** productid, quantity, listprice, comment, discount_amount, discount_percent, tax1, tax2, tax3, hdnS_H_Percent, hdnDiscountAmount, hdnDiscountPercent, image, region_id, usageunit, reducedtaxrate, reducedtaxrate, tax4

**LBL_DESCRIPTION_INFORMATION:** description

### Quotes (Tab ID: 20)

**親モジュール:** Sales | **フィールド数:** 59

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| subject | Subject | vtiger_quotes | subject | 2 | V~M | LBL_QUOTE_INFORMATION | 1 |
| potential_id | Potential Name | vtiger_quotes | potentialid | 76 | I~O | LBL_QUOTE_INFORMATION | 2 |
| quote_no | Quote No | vtiger_quotes | quote_no | 4 | V~O | LBL_QUOTE_INFORMATION | 3 |
| quotestage | Quote Stage | vtiger_quotes | quotestage | 15 | V~M | LBL_QUOTE_INFORMATION | 4 |
| validtill | Valid Till | vtiger_quotes | validtill | 5 | D~O | LBL_QUOTE_INFORMATION | 5 |
| contact_id | Contact Name | vtiger_quotes | contactid | 57 | V~O | LBL_QUOTE_INFORMATION | 6 |
| carrier | Carrier | vtiger_quotes | carrier | 15 | V~O | LBL_QUOTE_INFORMATION | 8 |
| hdnSubTotal | Sub Total | vtiger_quotes | subtotal | 72 | N~O | LBL_QUOTE_INFORMATION | 9 |
| shipping | Shipping | vtiger_quotes | shipping | 1 | V~O | LBL_QUOTE_INFORMATION | 10 |
| assigned_user_id1 | Inventory Manager | vtiger_quotes | inventorymanager | 77 | I~O | LBL_QUOTE_INFORMATION | 11 |
| hdnS_H_Amount | S&amp;H Amount | vtiger_quotes | s_h_amount | 72 | N~O | LBL_QUOTE_INFORMATION | 14 |
| hdnTaxType | Tax Type | vtiger_quotes | taxtype | 16 | V~O | LBL_QUOTE_INFORMATION | 14 |
| hdnGrandTotal | Total | vtiger_quotes | total | 72 | N~O | LBL_QUOTE_INFORMATION | 14 |
| account_id | Account Name | vtiger_quotes | accountid | 73 | I~M | LBL_QUOTE_INFORMATION | 16 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_QUOTE_INFORMATION | 17 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_QUOTE_INFORMATION | 18 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_QUOTE_INFORMATION | 19 |
| txtAdjustment | Adjustment | vtiger_quotes | adjustment | 72 | NN~O | LBL_QUOTE_INFORMATION | 20 |
| currency_id | Currency | vtiger_quotes | currency_id | 117 | I~O | LBL_QUOTE_INFORMATION | 20 |
| conversion_rate | Conversion Rate | vtiger_quotes | conversion_rate | 1 | N~O | LBL_QUOTE_INFORMATION | 21 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_QUOTE_INFORMATION | 22 |
| pre_tax_total | Pre Tax Total | vtiger_quotes | pre_tax_total | 72 | N~O | LBL_QUOTE_INFORMATION | 23 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_QUOTE_INFORMATION | 24 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_QUOTE_INFORMATION | 25 |
| tags | tags | vtiger_quotes | tags | 1 | V~O | LBL_QUOTE_INFORMATION | 26 |
| bill_country | Billing Country | vtiger_quotesbillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 1 |
| ship_country | Shipping Country | vtiger_quotesshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 2 |
| bill_code | Billing Code | vtiger_quotesbillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 3 |
| ship_code | Shipping Code | vtiger_quotesshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 4 |
| bill_state | Billing State | vtiger_quotesbillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 5 |
| ship_state | Shipping State | vtiger_quotesshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 6 |
| bill_city | Billing City | vtiger_quotesbillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 7 |
| ship_city | Shipping City | vtiger_quotesshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 8 |
| bill_street | Billing Address | vtiger_quotesbillads | bill_street | 24 | V~M | LBL_ADDRESS_INFORMATION | 9 |
| ship_street | Shipping Address | vtiger_quotesshipads | ship_street | 24 | V~M | LBL_ADDRESS_INFORMATION | 10 |
| bill_pobox | Billing Po Box | vtiger_quotesbillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 11 |
| ship_pobox | Shipping Po Box | vtiger_quotesshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 12 |
| terms_conditions | Terms &amp; Conditions | vtiger_quotes | terms_conditions | 19 | V~O | LBL_TERMS_INFORMATION | 1 |
| productid | Item Name | vtiger_inventoryproductrel | productid | 10 | V~M | LBL_ITEM_DETAILS | 1 |
| quantity | Quantity | vtiger_inventoryproductrel | quantity | 7 | N~O | LBL_ITEM_DETAILS | 2 |
| listprice | List Price | vtiger_inventoryproductrel | listprice | 71 | N~O | LBL_ITEM_DETAILS | 3 |
| comment | Item Comment | vtiger_inventoryproductrel | comment | 19 | V~O | LBL_ITEM_DETAILS | 4 |
| discount_amount | Item Discount Amount | vtiger_inventoryproductrel | discount_amount | 71 | N~O | LBL_ITEM_DETAILS | 5 |
| discount_percent | Item Discount Percent | vtiger_inventoryproductrel | discount_percent | 7 | V~O | LBL_ITEM_DETAILS | 6 |
| tax1 | VAT | vtiger_inventoryproductrel | tax1 | 83 | V~O | LBL_ITEM_DETAILS | 7 |
| tax2 | Sales | vtiger_inventoryproductrel | tax2 | 83 | V~O | LBL_ITEM_DETAILS | 8 |
| tax3 | Service | vtiger_inventoryproductrel | tax3 | 83 | V~O | LBL_ITEM_DETAILS | 9 |
| hdnS_H_Percent | S&amp;H Percent | vtiger_quotes | s_h_percent | 1 | N~O | LBL_ITEM_DETAILS | 10 |
| hdnDiscountAmount | Discount Amount | vtiger_quotes | discount_amount | 72 | N~O | LBL_ITEM_DETAILS | 14 |
| hdnDiscountPercent | Discount Percent | vtiger_quotes | discount_percent | 1 | N~O | LBL_ITEM_DETAILS | 14 |
| image | Image | vtiger_inventoryproductrel | image | 56 | V~O | LBL_ITEM_DETAILS | 15 |
| purchase_cost | Purchase Cost | vtiger_inventoryproductrel | purchase_cost | 71 | N~O | LBL_ITEM_DETAILS | 16 |
| margin | Margin | vtiger_inventoryproductrel | margin | 71 | N~O | LBL_ITEM_DETAILS | 17 |
| region_id | Tax Region | vtiger_quotes | region_id | 16 | N~O | LBL_ITEM_DETAILS | 18 |
| usageunit | LBL_USAGE_UNIT | vtiger_inventoryproductrel | usageunit | 1 | V~O~LE~200 | LBL_ITEM_DETAILS | 19 |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS | 20 |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS | 21 |
| tax4 | LBL_CONSUMPTION_TAX | vtiger_inventoryproductrel | tax4 | 83 | V~O | LBL_ITEM_DETAILS | 22 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_QUOTE_INFORMATION:** subject, potential_id, quote_no, quotestage, validtill, contact_id, carrier, hdnSubTotal, shipping, assigned_user_id1, hdnS_H_Amount, hdnTaxType, hdnGrandTotal, account_id, assigned_user_id, createdtime, modifiedtime, txtAdjustment, currency_id, conversion_rate, modifiedby, pre_tax_total, source, starred, tags

**LBL_ADDRESS_INFORMATION:** bill_country, ship_country, bill_code, ship_code, bill_state, ship_state, bill_city, ship_city, bill_street, ship_street, bill_pobox, ship_pobox

**LBL_TERMS_INFORMATION:** terms_conditions

**LBL_ITEM_DETAILS:** productid, quantity, listprice, comment, discount_amount, discount_percent, tax1, tax2, tax3, hdnS_H_Percent, hdnDiscountAmount, hdnDiscountPercent, image, purchase_cost, margin, region_id, usageunit, reducedtaxrate, reducedtaxrate, tax4

**LBL_DESCRIPTION_INFORMATION:** description

### SalesOrder (Tab ID: 22)

**親モジュール:** Sales | **フィールド数:** 70

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| subject | Subject | vtiger_salesorder | subject | 2 | V~M | LBL_SO_INFORMATION | 1 |
| potential_id | Potential Name | vtiger_salesorder | potentialid | 76 | I~O | LBL_SO_INFORMATION | 2 |
| customerno | Customer No | vtiger_salesorder | customerno | 1 | V~O | LBL_SO_INFORMATION | 3 |
| salesorder_no | SalesOrder No | vtiger_salesorder | salesorder_no | 4 | V~O | LBL_SO_INFORMATION | 4 |
| quote_id | Quote Name | vtiger_salesorder | quoteid | 78 | I~O | LBL_SO_INFORMATION | 5 |
| vtiger_purchaseorder | Purchase Order | vtiger_salesorder | purchaseorder | 1 | V~O | LBL_SO_INFORMATION | 5 |
| contact_id | Contact Name | vtiger_salesorder | contactid | 57 | I~O | LBL_SO_INFORMATION | 6 |
| duedate | Due Date | vtiger_salesorder | duedate | 5 | D~O | LBL_SO_INFORMATION | 8 |
| carrier | Carrier | vtiger_salesorder | carrier | 15 | V~O | LBL_SO_INFORMATION | 9 |
| pending | Pending | vtiger_salesorder | pending | 1 | V~O | LBL_SO_INFORMATION | 10 |
| sostatus | Status | vtiger_salesorder | sostatus | 15 | V~M | LBL_SO_INFORMATION | 11 |
| txtAdjustment | Adjustment | vtiger_salesorder | adjustment | 72 | NN~O | LBL_SO_INFORMATION | 12 |
| salescommission | Sales Commission | vtiger_salesorder | salescommission | 1 | N~O | LBL_SO_INFORMATION | 13 |
| exciseduty | Excise Duty | vtiger_salesorder | exciseduty | 1 | N~O | LBL_SO_INFORMATION | 13 |
| hdnGrandTotal | Total | vtiger_salesorder | total | 72 | N~O | LBL_SO_INFORMATION | 14 |
| hdnSubTotal | Sub Total | vtiger_salesorder | subtotal | 72 | N~O | LBL_SO_INFORMATION | 15 |
| hdnTaxType | Tax Type | vtiger_salesorder | taxtype | 16 | V~O | LBL_SO_INFORMATION | 15 |
| hdnS_H_Amount | S&amp;H Amount | vtiger_salesorder | s_h_amount | 72 | N~O | LBL_SO_INFORMATION | 15 |
| account_id | Account Name | vtiger_salesorder | accountid | 73 | I~M | LBL_SO_INFORMATION | 16 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_SO_INFORMATION | 17 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_SO_INFORMATION | 18 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_SO_INFORMATION | 19 |
| currency_id | Currency | vtiger_salesorder | currency_id | 117 | I~O | LBL_SO_INFORMATION | 20 |
| conversion_rate | Conversion Rate | vtiger_salesorder | conversion_rate | 1 | N~O | LBL_SO_INFORMATION | 21 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_SO_INFORMATION | 22 |
| pre_tax_total | Pre Tax Total | vtiger_salesorder | pre_tax_total | 72 | N~O | LBL_SO_INFORMATION | 23 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_SO_INFORMATION | 24 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_SO_INFORMATION | 25 |
| tags | tags | vtiger_salesorder | tags | 1 | V~O | LBL_SO_INFORMATION | 26 |
| enable_recurring | Enable Recurring | vtiger_salesorder | enable_recurring | 56 | C~O | Recurring Invoice Information | 1 |
| recurring_frequency | Frequency | vtiger_invoice_recurring_info | recurring_frequency | 16 | V~O | Recurring Invoice Information | 2 |
| start_period | Start Period | vtiger_invoice_recurring_info | start_period | 5 | D~O | Recurring Invoice Information | 3 |
| end_period | End Period | vtiger_invoice_recurring_info | end_period | 5 | D~O~OTH~G~start_period~Start Period | Recurring Invoice Information | 4 |
| payment_duration | Payment Duration | vtiger_invoice_recurring_info | payment_duration | 16 | V~O | Recurring Invoice Information | 5 |
| invoicestatus | Invoice Status | vtiger_invoice_recurring_info | invoice_status | 15 | V~M | Recurring Invoice Information | 6 |
| last_recurring_date | Next Invoice Date | vtiger_invoice_recurring_info | last_recurring_date | 5 | D~O | Recurring Invoice Information | 7 |
| bill_country | Billing Country | vtiger_sobillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 1 |
| ship_country | Shipping Country | vtiger_soshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 2 |
| bill_code | Billing Code | vtiger_sobillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 3 |
| ship_code | Shipping Code | vtiger_soshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION | 4 |
| bill_state | Billing State | vtiger_sobillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 5 |
| ship_state | Shipping State | vtiger_soshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 6 |
| bill_city | Billing City | vtiger_sobillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 7 |
| ship_city | Shipping City | vtiger_soshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 8 |
| bill_street | Billing Address | vtiger_sobillads | bill_street | 24 | V~M | LBL_ADDRESS_INFORMATION | 9 |
| ship_street | Shipping Address | vtiger_soshipads | ship_street | 24 | V~M | LBL_ADDRESS_INFORMATION | 10 |
| bill_pobox | Billing Po Box | vtiger_sobillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 11 |
| ship_pobox | Shipping Po Box | vtiger_soshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION | 12 |
| productid | Item Name | vtiger_inventoryproductrel | productid | 10 | V~M | LBL_ITEM_DETAILS | 1 |
| quantity | Quantity | vtiger_inventoryproductrel | quantity | 7 | N~O | LBL_ITEM_DETAILS | 2 |
| listprice | List Price | vtiger_inventoryproductrel | listprice | 71 | N~O | LBL_ITEM_DETAILS | 3 |
| comment | Item Comment | vtiger_inventoryproductrel | comment | 19 | V~O | LBL_ITEM_DETAILS | 4 |
| discount_amount | Item Discount Amount | vtiger_inventoryproductrel | discount_amount | 71 | N~O | LBL_ITEM_DETAILS | 5 |
| discount_percent | Item Discount Percent | vtiger_inventoryproductrel | discount_percent | 7 | V~O | LBL_ITEM_DETAILS | 6 |
| tax1 | VAT | vtiger_inventoryproductrel | tax1 | 83 | V~O | LBL_ITEM_DETAILS | 7 |
| tax2 | Sales | vtiger_inventoryproductrel | tax2 | 83 | V~O | LBL_ITEM_DETAILS | 8 |
| tax3 | Service | vtiger_inventoryproductrel | tax3 | 83 | V~O | LBL_ITEM_DETAILS | 9 |
| hdnS_H_Percent | S&amp;H Percent | vtiger_salesorder | s_h_percent | 1 | N~O | LBL_ITEM_DETAILS | 10 |
| hdnDiscountAmount | Discount Amount | vtiger_salesorder | discount_amount | 72 | N~O | LBL_ITEM_DETAILS | 15 |
| hdnDiscountPercent | Discount Percent | vtiger_salesorder | discount_percent | 1 | N~O | LBL_ITEM_DETAILS | 15 |
| image | Image | vtiger_inventoryproductrel | image | 56 | V~O | LBL_ITEM_DETAILS | 16 |
| purchase_cost | Purchase Cost | vtiger_inventoryproductrel | purchase_cost | 71 | N~O | LBL_ITEM_DETAILS | 17 |
| margin | Margin | vtiger_inventoryproductrel | margin | 71 | N~O | LBL_ITEM_DETAILS | 18 |
| region_id | Tax Region | vtiger_salesorder | region_id | 16 | N~O | LBL_ITEM_DETAILS | 19 |
| usageunit | LBL_USAGE_UNIT | vtiger_inventoryproductrel | usageunit | 1 | V~O~LE~200 | LBL_ITEM_DETAILS | 20 |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS | 21 |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS | 22 |
| tax4 | LBL_CONSUMPTION_TAX | vtiger_inventoryproductrel | tax4 | 83 | V~O | LBL_ITEM_DETAILS | 23 |
| terms_conditions | Terms &amp; Conditions | vtiger_salesorder | terms_conditions | 19 | V~O | LBL_TERMS_INFORMATION | 1 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_SO_INFORMATION:** subject, potential_id, customerno, salesorder_no, quote_id, vtiger_purchaseorder, contact_id, duedate, carrier, pending, sostatus, txtAdjustment, salescommission, exciseduty, hdnGrandTotal, hdnSubTotal, hdnTaxType, hdnS_H_Amount, account_id, assigned_user_id, createdtime, modifiedtime, currency_id, conversion_rate, modifiedby, pre_tax_total, source, starred, tags

**Recurring Invoice Information:** enable_recurring, recurring_frequency, start_period, end_period, payment_duration, invoicestatus, last_recurring_date

**LBL_ADDRESS_INFORMATION:** bill_country, ship_country, bill_code, ship_code, bill_state, ship_state, bill_city, ship_city, bill_street, ship_street, bill_pobox, ship_pobox

**LBL_ITEM_DETAILS:** productid, quantity, listprice, comment, discount_amount, discount_percent, tax1, tax2, tax3, hdnS_H_Percent, hdnDiscountAmount, hdnDiscountPercent, image, purchase_cost, margin, region_id, usageunit, reducedtaxrate, reducedtaxrate, tax4

**LBL_TERMS_INFORMATION:** terms_conditions

**LBL_DESCRIPTION_INFORMATION:** description

### ServiceContracts (Tab ID: 34)

**親モジュール:** Support | **フィールド数:** 22

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| subject | Subject | vtiger_servicecontracts | subject | 1 | V~M | LBL_SERVICE_CONTRACT_INFORMATION | 1 |
| contract_no | Contract No | vtiger_servicecontracts | contract_no | 4 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 2 |
| sc_related_to | Related to | vtiger_servicecontracts | sc_related_to | 10 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 3 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_SERVICE_CONTRACT_INFORMATION | 4 |
| contract_type | Type | vtiger_servicecontracts | contract_type | 15 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 5 |
| tracking_unit | Tracking Unit | vtiger_servicecontracts | tracking_unit | 15 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 6 |
| start_date | Start Date | vtiger_servicecontracts | start_date | 5 | D~O | LBL_SERVICE_CONTRACT_INFORMATION | 7 |
| total_units | Total Units | vtiger_servicecontracts | total_units | 7 | NN~O | LBL_SERVICE_CONTRACT_INFORMATION | 8 |
| due_date | Due date | vtiger_servicecontracts | due_date | 23 | D~O | LBL_SERVICE_CONTRACT_INFORMATION | 9 |
| used_units | Used Units | vtiger_servicecontracts | used_units | 7 | NN~O | LBL_SERVICE_CONTRACT_INFORMATION | 10 |
| end_date | End Date | vtiger_servicecontracts | end_date | 5 | D~O | LBL_SERVICE_CONTRACT_INFORMATION | 11 |
| contract_status | Status | vtiger_servicecontracts | contract_status | 15 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 12 |
| planned_duration | Planned Duration | vtiger_servicecontracts | planned_duration | 1 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 13 |
| contract_priority | Priority | vtiger_servicecontracts | priority | 15 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 14 |
| actual_duration | Actual Duration | vtiger_servicecontracts | actual_duration | 1 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 15 |
| progress | Progress | vtiger_servicecontracts | progress | 9 | N~O~2~2 | LBL_SERVICE_CONTRACT_INFORMATION | 16 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 17 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_SERVICE_CONTRACT_INFORMATION | 17 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_SERVICE_CONTRACT_INFORMATION | 18 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 19 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_SERVICE_CONTRACT_INFORMATION | 20 |
| tags | tags | vtiger_servicecontracts | tags | 1 | V~O | LBL_SERVICE_CONTRACT_INFORMATION | 21 |

### Services (Tab ID: 35)

**親モジュール:** Inventory | **フィールド数:** 23

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| servicename | Service Name | vtiger_service | servicename | 2 | V~M | LBL_SERVICE_INFORMATION | 1 |
| service_no | Service No | vtiger_service | service_no | 4 | V~O | LBL_SERVICE_INFORMATION | 2 |
| service_usageunit | Usage Unit | vtiger_service | service_usageunit | 15 | V~O | LBL_SERVICE_INFORMATION | 3 |
| discontinued | Service Active | vtiger_service | discontinued | 56 | V~O | LBL_SERVICE_INFORMATION | 4 |
| qty_per_unit | No of Units | vtiger_service | qty_per_unit | 1 | N~O | LBL_SERVICE_INFORMATION | 5 |
| website | Website | vtiger_service | website | 17 | V~O | LBL_SERVICE_INFORMATION | 6 |
| servicecategory | Service Category | vtiger_service | servicecategory | 15 | V~O | LBL_SERVICE_INFORMATION | 7 |
| assigned_user_id | Owner | vtiger_crmentity | smownerid | 53 | I~O | LBL_SERVICE_INFORMATION | 8 |
| sales_start_date | Sales Start Date | vtiger_service | sales_start_date | 5 | D~O | LBL_SERVICE_INFORMATION | 9 |
| sales_end_date | Sales End Date | vtiger_service | sales_end_date | 5 | D~O~OTH~GE~sales_start_date~Sales Start Date | LBL_SERVICE_INFORMATION | 10 |
| start_date | Support Start Date | vtiger_service | start_date | 5 | D~O | LBL_SERVICE_INFORMATION | 11 |
| expiry_date | Support Expiry Date | vtiger_service | expiry_date | 5 | D~O~OTH~GE~start_date~Start Date | LBL_SERVICE_INFORMATION | 12 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_SERVICE_INFORMATION | 13 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_SERVICE_INFORMATION | 14 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_SERVICE_INFORMATION | 16 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_SERVICE_INFORMATION | 17 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_SERVICE_INFORMATION | 18 |
| tags | tags | vtiger_service | tags | 1 | V~O | LBL_SERVICE_INFORMATION | 19 |
| unit_price | Price | vtiger_service | unit_price | 72 | N~O | LBL_PRICING_INFORMATION | 1 |
| commissionrate | Commission Rate | vtiger_service | commissionrate | 9 | N~O | LBL_PRICING_INFORMATION | 2 |
| taxclass | Taxes | vtiger_service | taxclass | 83 | V~O | LBL_PRICING_INFORMATION | 4 |
| purchase_cost | Purchase Cost | vtiger_service | purchase_cost | 71 | N~O | LBL_PRICING_INFORMATION | 5 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_SERVICE_INFORMATION:** servicename, service_no, service_usageunit, discontinued, qty_per_unit, website, servicecategory, assigned_user_id, sales_start_date, sales_end_date, start_date, expiry_date, createdtime, modifiedtime, modifiedby, source, starred, tags

**LBL_PRICING_INFORMATION:** unit_price, commissionrate, taxclass, purchase_cost

**LBL_DESCRIPTION_INFORMATION:** description

### SMSNotifier (Tab ID: 42)

**親モジュール:** Sales | **フィールド数:** 6

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| message | message | vtiger_smsnotifier | message | 21 | V~M | LBL_SMSNOTIFIER_INFORMATION | 1 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_SMSNOTIFIER_INFORMATION | 2 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_SMSNOTIFIER_INFORMATION | 5 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_SMSNOTIFIER_INFORMATION | 6 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_SMSNOTIFIER_INFORMATION | 7 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_SMSNOTIFIER_INFORMATION | 8 |

### Users (Tab ID: 29)

**親モジュール:** なし | **フィールド数:** 60

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| user_name | User Name | vtiger_users | user_name | 106 | V~M | LBL_USERLOGIN_ROLE | 1 |
| email1 | Email | vtiger_users | email1 | 104 | E~M | LBL_USERLOGIN_ROLE | 2 |
| last_name | Last Name | vtiger_users | last_name | 2 | V~M | LBL_USERLOGIN_ROLE | 3 |
| first_name | First Name | vtiger_users | first_name | 1 | V~O | LBL_USERLOGIN_ROLE | 4 |
| user_password | Password | vtiger_users | user_password | 99 | P~M | LBL_USERLOGIN_ROLE | 5 |
| confirm_password | Confirm Password | vtiger_users | confirm_password | 99 | P~M | LBL_USERLOGIN_ROLE | 6 |
| is_admin | Admin | vtiger_users | is_admin | 156 | V~O | LBL_USERLOGIN_ROLE | 7 |
| roleid | Role | vtiger_user2role | roleid | 98 | V~M | LBL_USERLOGIN_ROLE | 8 |
| lead_view | Default Lead View | vtiger_users | lead_view | 16 | V~O | LBL_USERLOGIN_ROLE | 9 |
| status | Status | vtiger_users | status | 115 | V~O | LBL_USERLOGIN_ROLE | 10 |
| end_hour | Day ends at | vtiger_users | end_hour | 116 | V~O | LBL_USERLOGIN_ROLE | 11 |
| is_owner | Account Owner | vtiger_users | is_owner | 1 | V~O | LBL_USERLOGIN_ROLE | 12 |
| dayoftheweek | Starting Day of the week | vtiger_users | dayoftheweek | 16 | V~O | LBL_CALENDAR_SETTINGS | 1 |
| start_hour | Day starts at | vtiger_users | start_hour | 16 | V~O | LBL_CALENDAR_SETTINGS | 2 |
| date_format | Date Format | vtiger_users | date_format | 16 | V~O | LBL_CALENDAR_SETTINGS | 3 |
| hour_format | Calendar Hour Format | vtiger_users | hour_format | 16 | V~O | LBL_CALENDAR_SETTINGS | 4 |
| time_zone | Time Zone | vtiger_users | time_zone | 16 | V~O | LBL_CALENDAR_SETTINGS | 5 |
| activity_view | Default Activity View | vtiger_users | activity_view | 16 | V~O | LBL_CALENDAR_SETTINGS | 6 |
| callduration | Default Call Duration | vtiger_users | callduration | 16 | V~O | LBL_CALENDAR_SETTINGS | 7 |
| othereventduration | Other Event Duration | vtiger_users | othereventduration | 16 | V~O | LBL_CALENDAR_SETTINGS | 8 |
| defaulteventstatus | Default Event Status | vtiger_users | defaulteventstatus | 15 | V~O | LBL_CALENDAR_SETTINGS | 9 |
| defaultactivitytype | Default Activity Type | vtiger_users | defaultactivitytype | 15 | V~O | LBL_CALENDAR_SETTINGS | 10 |
| reminder_interval | Reminder Interval | vtiger_users | reminder_interval | 16 | V~O | LBL_CALENDAR_SETTINGS | 11 |
| calendarsharedtype | Calendar Shared Type | vtiger_users | calendarsharedtype | 16 | V~O | LBL_CALENDAR_SETTINGS | 12 |
| hidecompletedevents | LBL_HIDE_COMPLETED_EVENTS | vtiger_users | hidecompletedevents | 56 | C~O | LBL_CALENDAR_SETTINGS | 13 |
| defaultcalendarview | Default Calendar View | vtiger_users | defaultcalendarview | 16 | V~O | LBL_CALENDAR_SETTINGS | 14 |
| currency_id | Currency | vtiger_users | currency_id | 117 | I~O | LBL_CURRENCY_CONFIGURATION | 1 |
| currency_grouping_pattern | Digit Grouping Pattern | vtiger_users | currency_grouping_pattern | 16 | V~O | LBL_CURRENCY_CONFIGURATION | 2 |
| currency_decimal_separator | Decimal Separator | vtiger_users | currency_decimal_separator | 16 | V~O | LBL_CURRENCY_CONFIGURATION | 3 |
| currency_grouping_separator | Digit Grouping Separator | vtiger_users | currency_grouping_separator | 16 | V~O | LBL_CURRENCY_CONFIGURATION | 4 |
| currency_symbol_placement | Symbol Placement | vtiger_users | currency_symbol_placement | 16 | V~O | LBL_CURRENCY_CONFIGURATION | 5 |
| no_of_currency_decimals | Number Of Currency Decimals | vtiger_users | no_of_currency_decimals | 16 | V~O | LBL_CURRENCY_CONFIGURATION | 6 |
| truncate_trailing_zeros | Truncate Trailing Zeros | vtiger_users | truncate_trailing_zeros | 56 | V~O | LBL_CURRENCY_CONFIGURATION | 7 |
| title | Title | vtiger_users | title | 1 | V~O | LBL_MORE_INFORMATION | 1 |
| phone_fax | Fax | vtiger_users | phone_fax | 11 | V~O | LBL_MORE_INFORMATION | 2 |
| department | Department | vtiger_users | department | 1 | V~O | LBL_MORE_INFORMATION | 3 |
| email2 | Other Email | vtiger_users | email2 | 13 | E~O | LBL_MORE_INFORMATION | 4 |
| phone_work | Office Phone | vtiger_users | phone_work | 11 | V~O | LBL_MORE_INFORMATION | 5 |
| secondaryemail | Secondary Email | vtiger_users | secondaryemail | 13 | E~O | LBL_MORE_INFORMATION | 6 |
| phone_mobile | Mobile | vtiger_users | phone_mobile | 11 | V~O | LBL_MORE_INFORMATION | 7 |
| reports_to_id | Reports To | vtiger_users | reports_to_id | 101 | V~O | LBL_MORE_INFORMATION | 8 |
| phone_home | Home Phone | vtiger_users | phone_home | 11 | V~O | LBL_MORE_INFORMATION | 9 |
| phone_other | Other Phone | vtiger_users | phone_other | 11 | V~O | LBL_MORE_INFORMATION | 11 |
| signature | Signature | vtiger_users | signature | 21 | V~O | LBL_MORE_INFORMATION | 13 |
| description | Documents | vtiger_users | description | 21 | V~O | LBL_MORE_INFORMATION | 14 |
| internal_mailer | INTERNAL_MAIL_COMPOSER | vtiger_users | internal_mailer | 56 | V~O | LBL_MORE_INFORMATION | 15 |
| theme | Theme | vtiger_users | theme | 31 | V~O | LBL_MORE_INFORMATION | 16 |
| language | Language | vtiger_users | language | 32 | V~O | LBL_MORE_INFORMATION | 17 |
| default_record_view | Default Record View | vtiger_users | default_record_view | 16 | V~O | LBL_MORE_INFORMATION | 18 |
| leftpanelhide | Left Panel Hide | vtiger_users | leftpanelhide | 56 | V~O | LBL_MORE_INFORMATION | 19 |
| rowheight | Row Height | vtiger_users | rowheight | 16 | V~O | LBL_MORE_INFORMATION | 20 |
| defaultlandingpage | Default Landing Page | vtiger_users | defaultlandingpage | 32 | V~O | LBL_MORE_INFORMATION | 21 |
| userlabel | User Label | vtiger_users | userlabel | 1 | V~O | LBL_MORE_INFORMATION | 22 |
| address_country | Country | vtiger_users | address_country | 1 | V~O | LBL_ADDRESS_INFORMATION | 1 |
| address_postalcode | Postal Code | vtiger_users | address_postalcode | 1 | V~O | LBL_ADDRESS_INFORMATION | 2 |
| address_state | State | vtiger_users | address_state | 1 | V~O | LBL_ADDRESS_INFORMATION | 3 |
| address_city | City | vtiger_users | address_city | 1 | V~O | LBL_ADDRESS_INFORMATION | 4 |
| address_street | Street Address | vtiger_users | address_street | 21 | V~O | LBL_ADDRESS_INFORMATION | 5 |
| imagename | User Image | vtiger_users | imagename | 105 | V~O | LBL_USER_IMAGE_INFORMATION | 10 |
| accesskey | Webservice Access Key | vtiger_users | accesskey | 3 | V~O | LBL_USER_ADV_OPTIONS | 2 |

#### ブロック別フィールド

**LBL_USERLOGIN_ROLE:** user_name, email1, last_name, first_name, user_password, confirm_password, is_admin, roleid, lead_view, status, end_hour, is_owner

**LBL_CALENDAR_SETTINGS:** dayoftheweek, start_hour, date_format, hour_format, time_zone, activity_view, callduration, othereventduration, defaulteventstatus, defaultactivitytype, reminder_interval, calendarsharedtype, hidecompletedevents, defaultcalendarview

**LBL_CURRENCY_CONFIGURATION:** currency_id, currency_grouping_pattern, currency_decimal_separator, currency_grouping_separator, currency_symbol_placement, no_of_currency_decimals, truncate_trailing_zeros

**LBL_MORE_INFORMATION:** title, phone_fax, department, email2, phone_work, secondaryemail, phone_mobile, reports_to_id, phone_home, phone_other, signature, description, internal_mailer, theme, language, default_record_view, leftpanelhide, rowheight, defaultlandingpage, userlabel

**LBL_ADDRESS_INFORMATION:** address_country, address_postalcode, address_state, address_city, address_street

**LBL_USER_IMAGE_INFORMATION:** imagename

**LBL_USER_ADV_OPTIONS:** accesskey

### Vendors (Tab ID: 18)

**親モジュール:** Inventory | **フィールド数:** 21

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |
|------------|-------|-------|--------|---------|-----------|-------|-----|
| vendorname | Vendor Name | vtiger_vendor | vendorname | 2 | V~M | LBL_VENDOR_INFORMATION | 1 |
| vendor_no | Vendor No | vtiger_vendor | vendor_no | 4 | V~O | LBL_VENDOR_INFORMATION | 2 |
| email | Email | vtiger_vendor | email | 13 | E~O | LBL_VENDOR_INFORMATION | 3 |
| phone | Phone | vtiger_vendor | phone | 1 | V~O | LBL_VENDOR_INFORMATION | 4 |
| glacct | GL Account | vtiger_vendor | glacct | 15 | V~O | LBL_VENDOR_INFORMATION | 5 |
| website | Website | vtiger_vendor | website | 17 | V~O | LBL_VENDOR_INFORMATION | 6 |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_VENDOR_INFORMATION | 7 |
| category | Category | vtiger_vendor | category | 1 | V~O | LBL_VENDOR_INFORMATION | 8 |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_VENDOR_INFORMATION | 9 |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_VENDOR_INFORMATION | 12 |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_VENDOR_INFORMATION | 13 |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_VENDOR_INFORMATION | 14 |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_VENDOR_INFORMATION | 15 |
| tags | tags | vtiger_vendor | tags | 1 | V~O | LBL_VENDOR_INFORMATION | 16 |
| country | Country | vtiger_vendor | country | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION | 1 |
| postalcode | Postal Code | vtiger_vendor | postalcode | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION | 2 |
| state | State | vtiger_vendor | state | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION | 3 |
| city | City | vtiger_vendor | city | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION | 4 |
| street | Street | vtiger_vendor | street | 21 | V~O | LBL_VENDOR_ADDRESS_INFORMATION | 5 |
| pobox | Po Box | vtiger_vendor | pobox | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION | 6 |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION | 1 |

#### ブロック別フィールド

**LBL_VENDOR_INFORMATION:** vendorname, vendor_no, email, phone, glacct, website, createdtime, category, modifiedtime, modifiedby, assigned_user_id, source, starred, tags

**LBL_VENDOR_ADDRESS_INFORMATION:** country, postalcode, state, city, street, pobox

**LBL_DESCRIPTION_INFORMATION:** description


---
*UpdateFields.phpツールによって生成*
