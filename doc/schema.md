# F-RevoCRM データベーススキーマドキュメント

## データベース情報

- **生成日時:** 2025-07-12 12:32:00
- **データベース:** frevocrm
- **総テーブル数:** 518
- **アクティブモジュール数:** 43

## 目次

1. [モジュール](#modules)
2. [データベーステーブル](#database-tables)
3. [テーブル詳細](#table-details)

## モジュール

| モジュール | タブID | 親モジュール | エンティティタイプ | カスタム |
|--------|--------|--------|-------------|--------|
| Accounts | 6 | Sales | Yes | No |
| Assets | 43 | Inventory | Yes | No |
| Calendar | 9 | Tools | Yes | No |
| Campaigns | 26 | Marketing | Yes | No |
| Contacts | 4 | Sales | Yes | No |
| CustomerPortal | 45 | None | No | No |
| Dailyreports | 49 | Sales | Yes | Yes |
| Dashboard | 1 | Analytics | No | No |
| Documents | 8 | Tools | Yes | No |
| Emails | 10 | Tools | Yes | No |
| EmailTemplates | 47 | Tools | No | Yes |
| Faq | 15 | Support | Yes | No |
| HelpDesk | 13 | Support | Yes | No |
| Home | 3 | None | No | No |
| Import | 30 | None | No | Yes |
| Invoice | 23 | Sales | Yes | No |
| Leads | 7 | Sales | Yes | No |
| MailManager | 32 | Tools | No | Yes |
| Mobile | 36 | None | No | Yes |
| ModComments | 37 | None | Yes | No |
| ModTracker | 31 | None | No | No |
| PDFTemplates | 48 | Tools | No | Yes |
| Portal | 27 | Tools | No | No |
| Potentials | 2 | Sales | Yes | No |
| PriceBooks | 19 | Inventory | Yes | No |
| Products | 14 | Inventory | Yes | No |
| Project | 41 | Support | Yes | No |
| ProjectMilestone | 39 | Support | Yes | No |
| ProjectTask | 40 | Support | Yes | No |
| PurchaseOrder | 21 | Inventory | Yes | No |
| Quotes | 20 | Sales | Yes | No |
| RecycleBin | 38 | Tools | No | No |
| Reports | 25 | Analytics | No | No |
| Rss | 24 | Tools | No | No |
| SalesOrder | 22 | Sales | Yes | No |
| ServiceContracts | 34 | Support | Yes | No |
| Services | 35 | Inventory | Yes | No |
| SMSNotifier | 42 | Sales | Yes | No |
| Users | 29 | None | No | No |
| Vendors | 18 | Inventory | Yes | No |
| Webforms | 44 | None | No | No |
| Webmails | 28 | None | Yes | No |
| WSAPP | 33 | None | No | Yes |

## データベーステーブル

| テーブル名 | カラム数 | エンジン | 文字セット |
|------------|---------|--------|---------|
| vtiger_account | 34 | Unknown | Unknown |
| vtiger_accountbillads | 7 | Unknown | Unknown |
| vtiger_accountrating | 4 | Unknown | Unknown |
| vtiger_accountscf | 1 | Unknown | Unknown |
| vtiger_accountshipads | 7 | Unknown | Unknown |
| vtiger_accounttype | 6 | Unknown | Unknown |
| vtiger_accounttype_seq | 1 | Unknown | Unknown |
| vtiger_actionmapping | 3 | Unknown | Unknown |
| vtiger_activity | 32 | Unknown | Unknown |
| vtiger_activity_recurring_info | 2 | Unknown | Unknown |
| vtiger_activity_reminder | 4 | Unknown | Unknown |
| vtiger_activity_reminder_popup | 6 | Unknown | Unknown |
| vtiger_activity_view | 4 | Unknown | Unknown |
| vtiger_activity_view_seq | 1 | Unknown | Unknown |
| vtiger_activitycf | 1 | Unknown | Unknown |
| vtiger_activityproductrel | 2 | Unknown | Unknown |
| vtiger_activitytype | 6 | Unknown | Unknown |
| vtiger_activitytype_seq | 1 | Unknown | Unknown |
| vtiger_announcement | 4 | Unknown | Unknown |
| vtiger_app2tab | 4 | Unknown | Unknown |
| vtiger_assets | 26 | Unknown | Unknown |
| vtiger_assetscf | 1 | Unknown | Unknown |
| vtiger_assetstatus | 6 | Unknown | Unknown |
| vtiger_assetstatus_seq | 1 | Unknown | Unknown |
| vtiger_asterisk | 5 | Unknown | Unknown |
| vtiger_asteriskextensions | 3 | Unknown | Unknown |
| vtiger_asteriskincomingcalls | 7 | Unknown | Unknown |
| vtiger_asteriskincomingevents | 10 | Unknown | Unknown |
| vtiger_attachments | 7 | Unknown | Unknown |
| vtiger_attachmentsfolder | 5 | Unknown | Unknown |
| vtiger_attachmentsfolder_seq | 1 | Unknown | Unknown |
| vtiger_audit_trial | 6 | Unknown | Unknown |
| vtiger_blocks | 11 | Unknown | Unknown |
| vtiger_blocks_seq | 1 | Unknown | Unknown |
| vtiger_calendar_default_activitytypes | 6 | Unknown | Unknown |
| vtiger_calendar_default_activitytypes_seq | 1 | Unknown | Unknown |
| vtiger_calendar_user_activitytypes | 6 | Unknown | Unknown |
| vtiger_calendar_user_activitytypes_seq | 1 | Unknown | Unknown |
| vtiger_calendarsharedtype | 4 | Unknown | Unknown |
| vtiger_calendarsharedtype_seq | 1 | Unknown | Unknown |
| vtiger_callduration | 4 | Unknown | Unknown |
| vtiger_callduration_seq | 1 | Unknown | Unknown |
| vtiger_campaign | 33 | Unknown | Unknown |
| vtiger_campaignaccountrel | 3 | Unknown | Unknown |
| vtiger_campaigncontrel | 3 | Unknown | Unknown |
| vtiger_campaignleadrel | 3 | Unknown | Unknown |
| vtiger_campaignrelstatus | 5 | Unknown | Unknown |
| vtiger_campaignrelstatus_seq | 1 | Unknown | Unknown |
| vtiger_campaignscf | 1 | Unknown | Unknown |
| vtiger_campaignstatus | 6 | Unknown | Unknown |
| vtiger_campaignstatus_seq | 1 | Unknown | Unknown |
| vtiger_campaigntype | 6 | Unknown | Unknown |
| vtiger_campaigntype_seq | 1 | Unknown | Unknown |
| vtiger_carrier | 6 | Unknown | Unknown |
| vtiger_carrier_seq | 1 | Unknown | Unknown |
| vtiger_cntactivityrel | 2 | Unknown | Unknown |
| vtiger_contactaddress | 13 | Unknown | Unknown |
| vtiger_contactdetails | 37 | Unknown | Unknown |
| vtiger_contactscf | 1 | Unknown | Unknown |
| vtiger_contactsubdetails | 9 | Unknown | Unknown |
| vtiger_contpotentialrel | 2 | Unknown | Unknown |
| vtiger_contract_priority | 6 | Unknown | Unknown |
| vtiger_contract_priority_seq | 1 | Unknown | Unknown |
| vtiger_contract_status | 6 | Unknown | Unknown |
| vtiger_contract_status_seq | 1 | Unknown | Unknown |
| vtiger_contract_type | 6 | Unknown | Unknown |
| vtiger_contract_type_seq | 1 | Unknown | Unknown |
| vtiger_convertleadmapping | 6 | Unknown | Unknown |
| vtiger_convertpotentialmapping | 4 | Unknown | Unknown |
| vtiger_crmentity | 16 | Unknown | Unknown |
| vtiger_crmentity_seq | 1 | Unknown | Unknown |
| vtiger_crmentity_user_field | 3 | Unknown | Unknown |
| vtiger_crmentityrel | 4 | Unknown | Unknown |
| vtiger_crmsetup | 2 | Unknown | Unknown |
| vtiger_cron_task | 10 | Unknown | Unknown |
| vtiger_currencies | 4 | Unknown | Unknown |
| vtiger_currencies_seq | 1 | Unknown | Unknown |
| vtiger_currency | 4 | Unknown | Unknown |
| vtiger_currency_decimal_separator | 4 | Unknown | Unknown |
| vtiger_currency_decimal_separator_seq | 1 | Unknown | Unknown |
| vtiger_currency_grouping_pattern | 4 | Unknown | Unknown |
| vtiger_currency_grouping_pattern_seq | 1 | Unknown | Unknown |
| vtiger_currency_grouping_separator | 4 | Unknown | Unknown |
| vtiger_currency_grouping_separator_seq | 1 | Unknown | Unknown |
| vtiger_currency_info | 8 | Unknown | Unknown |
| vtiger_currency_info_seq | 1 | Unknown | Unknown |
| vtiger_currency_symbol_placement | 4 | Unknown | Unknown |
| vtiger_currency_symbol_placement_seq | 1 | Unknown | Unknown |
| vtiger_customaction | 4 | Unknown | Unknown |
| vtiger_customerdetails | 4 | Unknown | Unknown |
| vtiger_customerportal_fields | 3 | Unknown | Unknown |
| vtiger_customerportal_prefs | 3 | Unknown | Unknown |
| vtiger_customerportal_relatedmoduleinfo | 2 | Unknown | Unknown |
| vtiger_customerportal_settings | 8 | Unknown | Unknown |
| vtiger_customerportal_tabs | 5 | Unknown | Unknown |
| vtiger_customview | 7 | Unknown | Unknown |
| vtiger_customview_seq | 1 | Unknown | Unknown |
| vtiger_cv2group | 2 | Unknown | Unknown |
| vtiger_cv2role | 2 | Unknown | Unknown |
| vtiger_cv2rs | 2 | Unknown | Unknown |
| vtiger_cv2users | 2 | Unknown | Unknown |
| vtiger_cvadvfilter | 7 | Unknown | Unknown |
| vtiger_cvadvfilter_grouping | 4 | Unknown | Unknown |
| vtiger_cvcolumnlist | 3 | Unknown | Unknown |
| vtiger_cvstdfilter | 5 | Unknown | Unknown |
| vtiger_dailyreports | 19 | Unknown | Unknown |
| vtiger_dailyreportscf | 1 | Unknown | Unknown |
| vtiger_dailyreportsstatus | 6 | Unknown | Unknown |
| vtiger_dailyreportsstatus_seq | 1 | Unknown | Unknown |
| vtiger_dashboard_tabs | 7 | Unknown | Unknown |
| vtiger_datashare_grp2grp | 4 | Unknown | Unknown |
| vtiger_datashare_grp2role | 4 | Unknown | Unknown |
| vtiger_datashare_grp2rs | 4 | Unknown | Unknown |
| vtiger_datashare_module_rel | 3 | Unknown | Unknown |
| vtiger_datashare_relatedmodule_permission | 3 | Unknown | Unknown |
| vtiger_datashare_relatedmodules | 3 | Unknown | Unknown |
| vtiger_datashare_relatedmodules_seq | 1 | Unknown | Unknown |
| vtiger_datashare_role2group | 4 | Unknown | Unknown |
| vtiger_datashare_role2role | 4 | Unknown | Unknown |
| vtiger_datashare_role2rs | 4 | Unknown | Unknown |
| vtiger_datashare_rs2grp | 4 | Unknown | Unknown |
| vtiger_datashare_rs2role | 4 | Unknown | Unknown |
| vtiger_datashare_rs2rs | 4 | Unknown | Unknown |
| vtiger_date_format | 4 | Unknown | Unknown |
| vtiger_date_format_seq | 1 | Unknown | Unknown |
| vtiger_dayoftheweek | 4 | Unknown | Unknown |
| vtiger_dayoftheweek_seq | 1 | Unknown | Unknown |
| vtiger_def_org_field | 4 | Unknown | Unknown |
| vtiger_def_org_share | 4 | Unknown | Unknown |
| vtiger_def_org_share_seq | 1 | Unknown | Unknown |
| vtiger_default_record_view | 4 | Unknown | Unknown |
| vtiger_default_record_view_seq | 1 | Unknown | Unknown |
| vtiger_defaultactivitytype | 5 | Unknown | Unknown |
| vtiger_defaultactivitytype_seq | 1 | Unknown | Unknown |
| vtiger_defaultcalendarview | 4 | Unknown | Unknown |
| vtiger_defaultcalendarview_seq | 1 | Unknown | Unknown |
| vtiger_defaultcv | 3 | Unknown | Unknown |
| vtiger_defaulteventstatus | 5 | Unknown | Unknown |
| vtiger_defaulteventstatus_seq | 1 | Unknown | Unknown |
| vtiger_defaultlandingpage | 6 | Unknown | Unknown |
| vtiger_defaultlandingpage_seq | 1 | Unknown | Unknown |
| vtiger_duration_minutes | 5 | Unknown | Unknown |
| vtiger_duration_minutes_seq | 1 | Unknown | Unknown |
| vtiger_durationhrs | 4 | Unknown | Unknown |
| vtiger_durationmins | 4 | Unknown | Unknown |
| vtiger_email_access | 4 | Unknown | Unknown |
| vtiger_email_track | 4 | Unknown | Unknown |
| vtiger_emaildetails | 8 | Unknown | Unknown |
| vtiger_emails_recipientprefs | 4 | Unknown | Unknown |
| vtiger_emailslookup | 4 | Unknown | Unknown |
| vtiger_emailtemplates | 10 | Unknown | Unknown |
| vtiger_emailtemplates_seq | 1 | Unknown | Unknown |
| vtiger_entityname | 6 | Unknown | Unknown |
| vtiger_eventhandler_module | 3 | Unknown | Unknown |
| vtiger_eventhandler_module_seq | 1 | Unknown | Unknown |
| vtiger_eventhandlers | 7 | Unknown | Unknown |
| vtiger_eventhandlers_seq | 1 | Unknown | Unknown |
| vtiger_eventstatus | 6 | Unknown | Unknown |
| vtiger_eventstatus_seq | 1 | Unknown | Unknown |
| vtiger_expectedresponse | 6 | Unknown | Unknown |
| vtiger_expectedresponse_seq | 1 | Unknown | Unknown |
| vtiger_faq | 19 | Unknown | Unknown |
| vtiger_faqcategories | 6 | Unknown | Unknown |
| vtiger_faqcategories_seq | 1 | Unknown | Unknown |
| vtiger_faqcf | 1 | Unknown | Unknown |
| vtiger_faqcomments | 4 | Unknown | Unknown |
| vtiger_faqstatus | 6 | Unknown | Unknown |
| vtiger_faqstatus_seq | 1 | Unknown | Unknown |
| vtiger_feedback | 2 | Unknown | Unknown |
| vtiger_field | 24 | Unknown | Unknown |
| vtiger_field_seq | 1 | Unknown | Unknown |
| vtiger_fieldmodulerel | 5 | Unknown | Unknown |
| vtiger_freetagged_objects | 5 | Unknown | Unknown |
| vtiger_freetags | 5 | Unknown | Unknown |
| vtiger_freetags_seq | 1 | Unknown | Unknown |
| vtiger_glacct | 6 | Unknown | Unknown |
| vtiger_glacct_seq | 1 | Unknown | Unknown |
| vtiger_google_event_calendar_mapping | 3 | Unknown | Unknown |
| vtiger_google_oauth2 | 4 | Unknown | Unknown |
| vtiger_google_sync_fieldmapping | 5 | Unknown | Unknown |
| vtiger_google_sync_settings | 5 | Unknown | Unknown |
| vtiger_group2grouprel | 2 | Unknown | Unknown |
| vtiger_group2role | 2 | Unknown | Unknown |
| vtiger_group2rs | 2 | Unknown | Unknown |
| vtiger_groups | 3 | Unknown | Unknown |
| vtiger_home_layout | 2 | Unknown | Unknown |
| vtiger_homedashbd | 3 | Unknown | Unknown |
| vtiger_homedefault | 4 | Unknown | Unknown |
| vtiger_homemodule | 5 | Unknown | Unknown |
| vtiger_homemoduleflds | 2 | Unknown | Unknown |
| vtiger_homereportchart | 3 | Unknown | Unknown |
| vtiger_homerss | 3 | Unknown | Unknown |
| vtiger_homestuff | 6 | Unknown | Unknown |
| vtiger_homestuff_seq | 1 | Unknown | Unknown |
| vtiger_hour_format | 4 | Unknown | Unknown |
| vtiger_hour_format_seq | 1 | Unknown | Unknown |
| vtiger_import_locks | 5 | Unknown | Unknown |
| vtiger_import_maps | 10 | Unknown | Unknown |
| vtiger_import_queue | 10 | Unknown | Unknown |
| vtiger_industry | 6 | Unknown | Unknown |
| vtiger_industry_seq | 1 | Unknown | Unknown |
| vtiger_inventory_tandc | 3 | Unknown | Unknown |
| vtiger_inventory_tandc_seq | 1 | Unknown | Unknown |
| vtiger_inventorycharges | 9 | Unknown | Unknown |
| vtiger_inventorychargesrel | 2 | Unknown | Unknown |
| vtiger_inventorynotification | 6 | Unknown | Unknown |
| vtiger_inventorynotification_seq | 1 | Unknown | Unknown |
| vtiger_inventoryproductrel | 20 | Unknown | Unknown |
| vtiger_inventoryproductrel_seq | 1 | Unknown | Unknown |
| vtiger_inventoryshippingrel | 4 | Unknown | Unknown |
| vtiger_inventorysubproductrel | 4 | Unknown | Unknown |
| vtiger_inventorytaxinfo | 9 | Unknown | Unknown |
| vtiger_inventorytaxinfo_seq | 1 | Unknown | Unknown |
| vtiger_invitees | 3 | Unknown | Unknown |
| vtiger_invoice | 46 | Unknown | Unknown |
| vtiger_invoice_recurring_info | 7 | Unknown | Unknown |
| vtiger_invoicebillads | 7 | Unknown | Unknown |
| vtiger_invoicecf | 1 | Unknown | Unknown |
| vtiger_invoiceshipads | 7 | Unknown | Unknown |
| vtiger_invoicestatus | 6 | Unknown | Unknown |
| vtiger_invoicestatus_seq | 1 | Unknown | Unknown |
| vtiger_invoicestatushistory | 6 | Unknown | Unknown |
| vtiger_language | 8 | Unknown | Unknown |
| vtiger_language_rules | 6 | Unknown | Unknown |
| vtiger_language_seq | 1 | Unknown | Unknown |
| vtiger_lead_view | 4 | Unknown | Unknown |
| vtiger_lead_view_seq | 1 | Unknown | Unknown |
| vtiger_leadaddress | 11 | Unknown | Unknown |
| vtiger_leaddetails | 48 | Unknown | Unknown |
| vtiger_leadscf | 1 | Unknown | Unknown |
| vtiger_leadsource | 6 | Unknown | Unknown |
| vtiger_leadsource_seq | 1 | Unknown | Unknown |
| vtiger_leadstage | 4 | Unknown | Unknown |
| vtiger_leadstatus | 6 | Unknown | Unknown |
| vtiger_leadstatus_seq | 1 | Unknown | Unknown |
| vtiger_leadsubdetails | 5 | Unknown | Unknown |
| vtiger_links | 11 | Unknown | Unknown |
| vtiger_links_seq | 1 | Unknown | Unknown |
| vtiger_loginhistory | 7 | Unknown | Unknown |
| vtiger_mail_accounts | 17 | Unknown | Unknown |
| vtiger_mailer_queue | 10 | Unknown | Unknown |
| vtiger_mailer_queueattachments | 5 | Unknown | Unknown |
| vtiger_mailer_queueinfo | 4 | Unknown | Unknown |
| vtiger_mailmanager_mailattachments | 7 | Unknown | Unknown |
| vtiger_mailmanager_mailrecord | 18 | Unknown | Unknown |
| vtiger_mailmanager_mailrel | 3 | Unknown | Unknown |
| vtiger_mailscanner | 14 | Unknown | Unknown |
| vtiger_mailscanner_actions | 6 | Unknown | Unknown |
| vtiger_mailscanner_folders | 6 | Unknown | Unknown |
| vtiger_mailscanner_ids | 4 | Unknown | Unknown |
| vtiger_mailscanner_ruleactions | 2 | Unknown | Unknown |
| vtiger_mailscanner_rules | 13 | Unknown | Unknown |
| vtiger_manufacturer | 6 | Unknown | Unknown |
| vtiger_manufacturer_seq | 1 | Unknown | Unknown |
| vtiger_mobile_alerts | 5 | Unknown | Unknown |
| vtiger_modcomments | 21 | Unknown | Unknown |
| vtiger_modcommentscf | 1 | Unknown | Unknown |
| vtiger_modentity_num | 6 | Unknown | Unknown |
| vtiger_modentity_num_seq | 1 | Unknown | Unknown |
| vtiger_modtracker_basic | 6 | Unknown | Unknown |
| vtiger_modtracker_detail | 4 | Unknown | Unknown |
| vtiger_modtracker_relations | 4 | Unknown | Unknown |
| vtiger_modtracker_tabs | 2 | Unknown | Unknown |
| vtiger_module_dashboard_widgets | 10 | Unknown | Unknown |
| vtiger_no_of_currency_decimals | 4 | Unknown | Unknown |
| vtiger_no_of_currency_decimals_seq | 1 | Unknown | Unknown |
| vtiger_notebook_contents | 3 | Unknown | Unknown |
| vtiger_notes | 24 | Unknown | Unknown |
| vtiger_notescf | 1 | Unknown | Unknown |
| vtiger_notificationscheduler | 7 | Unknown | Unknown |
| vtiger_notificationscheduler_seq | 1 | Unknown | Unknown |
| vtiger_opportunity_type | 6 | Unknown | Unknown |
| vtiger_opportunity_type_seq | 1 | Unknown | Unknown |
| vtiger_opportunitystage | 5 | Unknown | Unknown |
| vtiger_org_share_action2tab | 2 | Unknown | Unknown |
| vtiger_org_share_action_mapping | 2 | Unknown | Unknown |
| vtiger_organizationdetails | 13 | Unknown | Unknown |
| vtiger_organizationdetails_seq | 1 | Unknown | Unknown |
| vtiger_othereventduration | 4 | Unknown | Unknown |
| vtiger_othereventduration_seq | 1 | Unknown | Unknown |
| vtiger_parenttab | 4 | Unknown | Unknown |
| vtiger_parenttabrel | 3 | Unknown | Unknown |
| vtiger_payment_duration | 5 | Unknown | Unknown |
| vtiger_payment_duration_seq | 1 | Unknown | Unknown |
| vtiger_pdftemplates | 10 | Unknown | Unknown |
| vtiger_pdftemplates_seq | 1 | Unknown | Unknown |
| vtiger_pdftemplatescf | 1 | Unknown | Unknown |
| vtiger_picklist | 2 | Unknown | Unknown |
| vtiger_picklist_dependency | 7 | Unknown | Unknown |
| vtiger_picklist_seq | 1 | Unknown | Unknown |
| vtiger_picklist_transitions | 3 | Unknown | Unknown |
| vtiger_picklistvalues_seq | 1 | Unknown | Unknown |
| vtiger_pobillads | 7 | Unknown | Unknown |
| vtiger_portal | 6 | Unknown | Unknown |
| vtiger_portalinfo | 9 | Unknown | Unknown |
| vtiger_poshipads | 7 | Unknown | Unknown |
| vtiger_postatus | 6 | Unknown | Unknown |
| vtiger_postatus_seq | 1 | Unknown | Unknown |
| vtiger_postatushistory | 6 | Unknown | Unknown |
| vtiger_potential | 42 | Unknown | Unknown |
| vtiger_potentialscf | 1 | Unknown | Unknown |
| vtiger_potstagehistory | 8 | Unknown | Unknown |
| vtiger_pricebook | 17 | Unknown | Unknown |
| vtiger_pricebookcf | 1 | Unknown | Unknown |
| vtiger_pricebookproductrel | 4 | Unknown | Unknown |
| vtiger_priority | 4 | Unknown | Unknown |
| vtiger_productcategory | 6 | Unknown | Unknown |
| vtiger_productcategory_seq | 1 | Unknown | Unknown |
| vtiger_productcf | 1 | Unknown | Unknown |
| vtiger_productcurrencyrel | 4 | Unknown | Unknown |
| vtiger_products | 47 | Unknown | Unknown |
| vtiger_producttaxrel | 4 | Unknown | Unknown |
| vtiger_profile | 4 | Unknown | Unknown |
| vtiger_profile2field | 5 | Unknown | Unknown |
| vtiger_profile2globalpermissions | 3 | Unknown | Unknown |
| vtiger_profile2standardpermissions | 4 | Unknown | Unknown |
| vtiger_profile2tab | 3 | Unknown | Unknown |
| vtiger_profile2utility | 4 | Unknown | Unknown |
| vtiger_profile_seq | 1 | Unknown | Unknown |
| vtiger_progress | 6 | Unknown | Unknown |
| vtiger_progress_seq | 1 | Unknown | Unknown |
| vtiger_project | 27 | Unknown | Unknown |
| vtiger_projectcf | 1 | Unknown | Unknown |
| vtiger_projectmilestone | 18 | Unknown | Unknown |
| vtiger_projectmilestonecf | 1 | Unknown | Unknown |
| vtiger_projectmilestonetype | 6 | Unknown | Unknown |
| vtiger_projectmilestonetype_seq | 1 | Unknown | Unknown |
| vtiger_projectpriority | 6 | Unknown | Unknown |
| vtiger_projectpriority_seq | 1 | Unknown | Unknown |
| vtiger_projectstatus | 6 | Unknown | Unknown |
| vtiger_projectstatus_seq | 1 | Unknown | Unknown |
| vtiger_projecttask | 24 | Unknown | Unknown |
| vtiger_projecttask_status_color | 3 | Unknown | Unknown |
| vtiger_projecttaskcf | 1 | Unknown | Unknown |
| vtiger_projecttaskpriority | 6 | Unknown | Unknown |
| vtiger_projecttaskpriority_seq | 1 | Unknown | Unknown |
| vtiger_projecttaskprogress | 6 | Unknown | Unknown |
| vtiger_projecttaskprogress_seq | 1 | Unknown | Unknown |
| vtiger_projecttaskstatus | 6 | Unknown | Unknown |
| vtiger_projecttaskstatus_seq | 1 | Unknown | Unknown |
| vtiger_projecttasktype | 6 | Unknown | Unknown |
| vtiger_projecttasktype_seq | 1 | Unknown | Unknown |
| vtiger_projecttype | 6 | Unknown | Unknown |
| vtiger_projecttype_seq | 1 | Unknown | Unknown |
| vtiger_purchaseorder | 42 | Unknown | Unknown |
| vtiger_purchaseordercf | 1 | Unknown | Unknown |
| vtiger_quotes | 38 | Unknown | Unknown |
| vtiger_quotesbillads | 7 | Unknown | Unknown |
| vtiger_quotescf | 1 | Unknown | Unknown |
| vtiger_quotesshipads | 7 | Unknown | Unknown |
| vtiger_quotestage | 6 | Unknown | Unknown |
| vtiger_quotestage_seq | 1 | Unknown | Unknown |
| vtiger_quotestagehistory | 6 | Unknown | Unknown |
| vtiger_rating | 6 | Unknown | Unknown |
| vtiger_rating_seq | 1 | Unknown | Unknown |
| vtiger_recurring_frequency | 5 | Unknown | Unknown |
| vtiger_recurring_frequency_seq | 1 | Unknown | Unknown |
| vtiger_recurringevents | 7 | Unknown | Unknown |
| vtiger_recurringtype | 5 | Unknown | Unknown |
| vtiger_recurringtype_seq | 1 | Unknown | Unknown |
| vtiger_relatedlists | 11 | Unknown | Unknown |
| vtiger_relatedlists_rb | 6 | Unknown | Unknown |
| vtiger_relatedlists_seq | 1 | Unknown | Unknown |
| vtiger_relcriteria | 7 | Unknown | Unknown |
| vtiger_relcriteria_grouping | 4 | Unknown | Unknown |
| vtiger_reminder_interval | 4 | Unknown | Unknown |
| vtiger_reminder_interval_seq | 1 | Unknown | Unknown |
| vtiger_report | 11 | Unknown | Unknown |
| vtiger_report_sharegroups | 2 | Unknown | Unknown |
| vtiger_report_sharerole | 2 | Unknown | Unknown |
| vtiger_report_sharers | 2 | Unknown | Unknown |
| vtiger_report_shareusers | 2 | Unknown | Unknown |
| vtiger_reportdatefilter | 5 | Unknown | Unknown |
| vtiger_reportfilters | 2 | Unknown | Unknown |
| vtiger_reportfolder | 4 | Unknown | Unknown |
| vtiger_reportgroupbycolumn | 4 | Unknown | Unknown |
| vtiger_reportmodules | 3 | Unknown | Unknown |
| vtiger_reportsharing | 3 | Unknown | Unknown |
| vtiger_reportsortcol | 4 | Unknown | Unknown |
| vtiger_reportsterm | 6 | Unknown | Unknown |
| vtiger_reportsterm_seq | 1 | Unknown | Unknown |
| vtiger_reportsummary | 3 | Unknown | Unknown |
| vtiger_reporttype | 2 | Unknown | Unknown |
| vtiger_role | 5 | Unknown | Unknown |
| vtiger_role2picklist | 4 | Unknown | Unknown |
| vtiger_role2profile | 2 | Unknown | Unknown |
| vtiger_role_seq | 1 | Unknown | Unknown |
| vtiger_rollupcomments_settings | 4 | Unknown | Unknown |
| vtiger_rowheight | 4 | Unknown | Unknown |
| vtiger_rowheight_seq | 1 | Unknown | Unknown |
| vtiger_rss | 5 | Unknown | Unknown |
| vtiger_sales_stage | 6 | Unknown | Unknown |
| vtiger_sales_stage_seq | 1 | Unknown | Unknown |
| vtiger_salesmanactivityrel | 2 | Unknown | Unknown |
| vtiger_salesmanattachmentsrel | 2 | Unknown | Unknown |
| vtiger_salesmanticketrel | 2 | Unknown | Unknown |
| vtiger_salesorder | 45 | Unknown | Unknown |
| vtiger_salesordercf | 1 | Unknown | Unknown |
| vtiger_salutationtype | 6 | Unknown | Unknown |
| vtiger_salutationtype_seq | 1 | Unknown | Unknown |
| vtiger_scheduled_reports | 5 | Unknown | Unknown |
| vtiger_schedulereports | 11 | Unknown | Unknown |
| vtiger_seactivityrel | 2 | Unknown | Unknown |
| vtiger_seactivityrel_seq | 1 | Unknown | Unknown |
| vtiger_seattachmentsrel | 2 | Unknown | Unknown |
| vtiger_selectcolumn | 3 | Unknown | Unknown |
| vtiger_selectquery | 3 | Unknown | Unknown |
| vtiger_selectquery_seq | 1 | Unknown | Unknown |
| vtiger_senotesrel | 2 | Unknown | Unknown |
| vtiger_seproductsrel | 4 | Unknown | Unknown |
| vtiger_service | 29 | Unknown | Unknown |
| vtiger_service_usageunit | 6 | Unknown | Unknown |
| vtiger_service_usageunit_seq | 1 | Unknown | Unknown |
| vtiger_servicecategory | 6 | Unknown | Unknown |
| vtiger_servicecategory_seq | 1 | Unknown | Unknown |
| vtiger_servicecf | 1 | Unknown | Unknown |
| vtiger_servicecontracts | 28 | Unknown | Unknown |
| vtiger_servicecontractscf | 1 | Unknown | Unknown |
| vtiger_seticketsrel | 2 | Unknown | Unknown |
| vtiger_settings_blocks | 3 | Unknown | Unknown |
| vtiger_settings_blocks_seq | 1 | Unknown | Unknown |
| vtiger_settings_field | 9 | Unknown | Unknown |
| vtiger_settings_field_seq | 1 | Unknown | Unknown |
| vtiger_sharedcalendar | 2 | Unknown | Unknown |
| vtiger_shareduserinfo | 4 | Unknown | Unknown |
| vtiger_shippingtaxinfo | 9 | Unknown | Unknown |
| vtiger_shippingtaxinfo_seq | 1 | Unknown | Unknown |
| vtiger_shorturls | 7 | Unknown | Unknown |
| vtiger_smsnotifier | 3 | Unknown | Unknown |
| vtiger_smsnotifier_servers | 6 | Unknown | Unknown |
| vtiger_smsnotifier_status | 7 | Unknown | Unknown |
| vtiger_smsnotifiercf | 1 | Unknown | Unknown |
| vtiger_soapservice | 3 | Unknown | Unknown |
| vtiger_sobillads | 7 | Unknown | Unknown |
| vtiger_soshipads | 7 | Unknown | Unknown |
| vtiger_sostatus | 6 | Unknown | Unknown |
| vtiger_sostatus_seq | 1 | Unknown | Unknown |
| vtiger_sostatushistory | 6 | Unknown | Unknown |
| vtiger_sqltimelog | 6 | Unknown | Unknown |
| vtiger_start_hour | 4 | Unknown | Unknown |
| vtiger_start_hour_seq | 1 | Unknown | Unknown |
| vtiger_status | 4 | Unknown | Unknown |
| vtiger_status_seq | 1 | Unknown | Unknown |
| vtiger_systems | 9 | Unknown | Unknown |
| vtiger_tab | 17 | Unknown | Unknown |
| vtiger_tab_info | 3 | Unknown | Unknown |
| vtiger_taskpriority | 6 | Unknown | Unknown |
| vtiger_taskpriority_seq | 1 | Unknown | Unknown |
| vtiger_taskstatus | 6 | Unknown | Unknown |
| vtiger_taskstatus_seq | 1 | Unknown | Unknown |
| vtiger_taxclass | 4 | Unknown | Unknown |
| vtiger_taxclass_seq | 1 | Unknown | Unknown |
| vtiger_taxregions | 2 | Unknown | Unknown |
| vtiger_ticketcategories | 6 | Unknown | Unknown |
| vtiger_ticketcategories_seq | 1 | Unknown | Unknown |
| vtiger_ticketcf | 2 | Unknown | Unknown |
| vtiger_ticketcomments | 6 | Unknown | Unknown |
| vtiger_ticketpriorities | 6 | Unknown | Unknown |
| vtiger_ticketpriorities_seq | 1 | Unknown | Unknown |
| vtiger_ticketseverities | 6 | Unknown | Unknown |
| vtiger_ticketseverities_seq | 1 | Unknown | Unknown |
| vtiger_ticketstatus | 6 | Unknown | Unknown |
| vtiger_ticketstatus_seq | 1 | Unknown | Unknown |
| vtiger_time_zone | 4 | Unknown | Unknown |
| vtiger_time_zone_seq | 1 | Unknown | Unknown |
| vtiger_tmp_read_group_rel_sharing_per | 4 | Unknown | Unknown |
| vtiger_tmp_read_group_sharing_per | 3 | Unknown | Unknown |
| vtiger_tmp_read_user_rel_sharing_per | 4 | Unknown | Unknown |
| vtiger_tmp_read_user_sharing_per | 3 | Unknown | Unknown |
| vtiger_tmp_write_group_rel_sharing_per | 4 | Unknown | Unknown |
| vtiger_tmp_write_group_sharing_per | 3 | Unknown | Unknown |
| vtiger_tmp_write_user_rel_sharing_per | 4 | Unknown | Unknown |
| vtiger_tmp_write_user_sharing_per | 3 | Unknown | Unknown |
| vtiger_tracker | 5 | Unknown | Unknown |
| vtiger_tracking_unit | 6 | Unknown | Unknown |
| vtiger_tracking_unit_seq | 1 | Unknown | Unknown |
| vtiger_troubletickets | 28 | Unknown | Unknown |
| vtiger_usageunit | 6 | Unknown | Unknown |
| vtiger_usageunit_seq | 1 | Unknown | Unknown |
| vtiger_user2mergefields | 4 | Unknown | Unknown |
| vtiger_user2role | 2 | Unknown | Unknown |
| vtiger_user_module_preferences | 3 | Unknown | Unknown |
| vtiger_users | 73 | Unknown | Unknown |
| vtiger_users2group | 2 | Unknown | Unknown |
| vtiger_users_last_import | 5 | Unknown | Unknown |
| vtiger_users_seq | 1 | Unknown | Unknown |
| vtiger_vendor | 26 | Unknown | Unknown |
| vtiger_vendorcf | 1 | Unknown | Unknown |
| vtiger_vendorcontactrel | 2 | Unknown | Unknown |
| vtiger_version | 3 | Unknown | Unknown |
| vtiger_version_seq | 1 | Unknown | Unknown |
| vtiger_visibility | 5 | Unknown | Unknown |
| vtiger_visibility_seq | 1 | Unknown | Unknown |
| vtiger_webform_file_fields | 5 | Unknown | Unknown |
| vtiger_webforms | 12 | Unknown | Unknown |
| vtiger_webforms_field | 8 | Unknown | Unknown |
| vtiger_wordtemplates | 10 | Unknown | Unknown |
| vtiger_ws_entity | 5 | Unknown | Unknown |
| vtiger_ws_entity_fieldtype | 4 | Unknown | Unknown |
| vtiger_ws_entity_fieldtype_seq | 1 | Unknown | Unknown |
| vtiger_ws_entity_name | 4 | Unknown | Unknown |
| vtiger_ws_entity_referencetype | 2 | Unknown | Unknown |
| vtiger_ws_entity_seq | 1 | Unknown | Unknown |
| vtiger_ws_entity_tables | 2 | Unknown | Unknown |
| vtiger_ws_fieldinfo | 3 | Unknown | Unknown |
| vtiger_ws_fieldtype | 3 | Unknown | Unknown |
| vtiger_ws_operation | 6 | Unknown | Unknown |
| vtiger_ws_operation_parameters | 4 | Unknown | Unknown |
| vtiger_ws_operation_seq | 1 | Unknown | Unknown |
| vtiger_ws_referencetype | 2 | Unknown | Unknown |
| vtiger_ws_userauthtoken | 3 | Unknown | Unknown |
| vtiger_wsapp | 4 | Unknown | Unknown |
| vtiger_wsapp_handlerdetails | 3 | Unknown | Unknown |
| vtiger_wsapp_logs_basic | 13 | Unknown | Unknown |
| vtiger_wsapp_logs_details | 9 | Unknown | Unknown |
| vtiger_wsapp_queuerecords | 4 | Unknown | Unknown |
| vtiger_wsapp_recordmapping | 7 | Unknown | Unknown |
| vtiger_wsapp_sync_state | 4 | Unknown | Unknown |

## モジュール詳細

### Accounts

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| accountname | Account Name | vtiger_account | accountname | 2 | V~M | LBL_ACCOUNT_INFORMATION |
| account_no | Account No | vtiger_account | account_no | 4 | V~O | LBL_ACCOUNT_INFORMATION |
| website | Website | vtiger_account | website | 17 | V~O | LBL_ACCOUNT_INFORMATION |
| phone | Phone | vtiger_account | phone | 11 | V~O | LBL_ACCOUNT_INFORMATION |
| tickersymbol | Ticker Symbol | vtiger_account | tickersymbol | 1 | V~O | LBL_ACCOUNT_INFORMATION |
| fax | Fax | vtiger_account | fax | 11 | V~O | LBL_ACCOUNT_INFORMATION |
| account_id | Member Of | vtiger_account | parentid | 51 | I~O | LBL_ACCOUNT_INFORMATION |
| otherphone | Other Phone | vtiger_account | otherphone | 11 | V~O | LBL_ACCOUNT_INFORMATION |
| employees | Employees | vtiger_account | employees | 7 | I~O | LBL_ACCOUNT_INFORMATION |
| email1 | Email | vtiger_account | email1 | 13 | E~O | LBL_ACCOUNT_INFORMATION |
| email2 | Other Email | vtiger_account | email2 | 13 | E~O | LBL_ACCOUNT_INFORMATION |
| ownership | Ownership | vtiger_account | ownership | 1 | V~O | LBL_ACCOUNT_INFORMATION |
| industry | industry | vtiger_account | industry | 15 | V~O | LBL_ACCOUNT_INFORMATION |
| rating | Rating | vtiger_account | rating | 15 | V~O | LBL_ACCOUNT_INFORMATION |
| accounttype | Type | vtiger_account | account_type | 15 | V~O | LBL_ACCOUNT_INFORMATION |
| siccode | SIC Code | vtiger_account | siccode | 1 | V~O | LBL_ACCOUNT_INFORMATION |
| emailoptout | Email Opt Out | vtiger_account | emailoptout | 56 | C~O | LBL_ACCOUNT_INFORMATION |
| annual_revenue | Annual Revenue | vtiger_account | annualrevenue | 71 | N~O | LBL_ACCOUNT_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_ACCOUNT_INFORMATION |
| notify_owner | Notify Owner | vtiger_account | notify_owner | 56 | C~O | LBL_ACCOUNT_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_ACCOUNT_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_ACCOUNT_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_ACCOUNT_INFORMATION |
| isconvertedfromlead | Is Converted From Lead | vtiger_account | isconvertedfromlead | 56 | C~O | LBL_ACCOUNT_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_ACCOUNT_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_ACCOUNT_INFORMATION |
| tags | tags | vtiger_account | tags | 1 | V~O | LBL_ACCOUNT_INFORMATION |
| last_action_date | last_action_date | vtiger_account | last_action_date | 5 | D~O | LBL_ACCOUNT_INFORMATION |
| bill_country | Billing Country | vtiger_accountbillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_country | Shipping Country | vtiger_accountshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_code | Billing Code | vtiger_accountbillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_code | Shipping Code | vtiger_accountshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_state | Billing State | vtiger_accountbillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_state | Shipping State | vtiger_accountshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_city | Billing City | vtiger_accountbillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_city | Shipping City | vtiger_accountshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_street | Billing Address | vtiger_accountbillads | bill_street | 21 | V~O | LBL_ADDRESS_INFORMATION |
| ship_street | Shipping Address | vtiger_accountshipads | ship_street | 21 | V~O | LBL_ADDRESS_INFORMATION |
| bill_pobox | Billing Po Box | vtiger_accountbillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_pobox | Shipping Po Box | vtiger_accountshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_account
- vtiger_crmentity
- vtiger_accountbillads
- vtiger_accountshipads
- vtiger_campaignrelstatus
- vtiger_crmentity_user_field

### Assets

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| asset_no | Asset No | vtiger_assets | asset_no | 4 | V~O | LBL_ASSET_INFORMATION |
| product | Product Name | vtiger_assets | product | 10 | V~M | LBL_ASSET_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_ASSET_INFORMATION |
| serialnumber | Serial Number | vtiger_assets | serialnumber | 2 | V~M | LBL_ASSET_INFORMATION |
| datesold | Date Sold | vtiger_assets | datesold | 5 | D~M~OTH~GE~datesold~Date Sold | LBL_ASSET_INFORMATION |
| dateinservice | Date in Service | vtiger_assets | dateinservice | 5 | D~M~OTH~GE~dateinservice~Date in Service | LBL_ASSET_INFORMATION |
| assetstatus | Status | vtiger_assets | assetstatus | 15 | V~M | LBL_ASSET_INFORMATION |
| tagnumber | Tag Number | vtiger_assets | tagnumber | 2 | V~O | LBL_ASSET_INFORMATION |
| invoiceid | Invoice Name | vtiger_assets | invoiceid | 10 | V~O | LBL_ASSET_INFORMATION |
| shippingmethod | Shipping Method | vtiger_assets | shippingmethod | 2 | V~O | LBL_ASSET_INFORMATION |
| shippingtrackingnumber | Shipping Tracking Number | vtiger_assets | shippingtrackingnumber | 2 | V~O | LBL_ASSET_INFORMATION |
| assetname | Asset Name | vtiger_assets | assetname | 1 | V~M | LBL_ASSET_INFORMATION |
| account | Customer Name | vtiger_assets | account | 10 | V~M | LBL_ASSET_INFORMATION |
| contact | Contact Name | vtiger_assets | contact | 10 | V~O | LBL_ASSET_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_ASSET_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_ASSET_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_ASSET_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_ASSET_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_ASSET_INFORMATION |
| tags | tags | vtiger_assets | tags | 1 | V~O | LBL_ASSET_INFORMATION |
| description | Notes | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_assets
- vtiger_crmentity
- vtiger_crmentity_user_field

### Calendar

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| subject | Subject | vtiger_activity | subject | 2 | V~M | LBL_TASK_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_TASK_INFORMATION |
| date_start | Start Date &amp; Time | vtiger_activity | date_start | 6 | DT~M~time_start | LBL_TASK_INFORMATION |
| time_start | Time Start | vtiger_activity | time_start | 2 | T~M | LBL_TASK_INFORMATION |
| time_end | End Time | vtiger_activity | time_end | 2 | T~O | LBL_TASK_INFORMATION |
| due_date | Due Date | vtiger_activity | due_date | 23 | D~M~OTH~GE~date_start~Start Date &amp; Time | LBL_TASK_INFORMATION |
| recurringtype | Recurrence | vtiger_activity | recurringtype | 16 | O~O | LBL_TASK_INFORMATION |
| parent_id | Related To | vtiger_seactivityrel | crmid | 66 | I~O | LBL_TASK_INFORMATION |
| contact_id | Contact Name | vtiger_cntactivityrel | contactid | 57 | I~O | LBL_TASK_INFORMATION |
| taskstatus | Status | vtiger_activity | status | 15 | V~M | LBL_TASK_INFORMATION |
| eventstatus | Status | vtiger_activity | eventstatus | 15 | V~O | LBL_TASK_INFORMATION |
| taskpriority | Priority | vtiger_activity | priority | 15 | V~O | LBL_TASK_INFORMATION |
| sendnotification | Send Notification | vtiger_activity | sendnotification | 56 | C~O | LBL_TASK_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_TASK_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_TASK_INFORMATION |
| activitytype | Activity Type | vtiger_activity | activitytype | 15 | V~O | LBL_TASK_INFORMATION |
| visibility | Visibility | vtiger_activity | visibility | 16 | V~O | LBL_TASK_INFORMATION |
| duration_hours | Duration | vtiger_activity | duration_hours | 63 | T~O | LBL_TASK_INFORMATION |
| duration_minutes | Duration Minutes | vtiger_activity | duration_minutes | 16 | T~O | LBL_TASK_INFORMATION |
| location | Location | vtiger_activity | location | 1 | V~O | LBL_TASK_INFORMATION |
| notime | No Time | vtiger_activity | notime | 56 | C~O | LBL_TASK_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_TASK_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_TASK_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_TASK_INFORMATION |
| tags | tags | vtiger_activity | tags | 1 | V~O | LBL_TASK_INFORMATION |
| reminder_time | Send Reminder | vtiger_activity_reminder | reminder_time | 30 | I~O | LBL_REMINDER_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_activity
- vtiger_crmentity
- vtiger_seactivityrel
- vtiger_cntactivityrel
- vtiger_activity_reminder
- vtiger_crmentity_user_field

### Campaigns

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| campaignname | Campaign Name | vtiger_campaign | campaignname | 2 | V~M | LBL_CAMPAIGN_INFORMATION |
| campaign_no | Campaign No | vtiger_campaign | campaign_no | 4 | V~O | LBL_CAMPAIGN_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_CAMPAIGN_INFORMATION |
| campaignstatus | Campaign Status | vtiger_campaign | campaignstatus | 15 | V~O | LBL_CAMPAIGN_INFORMATION |
| campaigntype | Campaign Type | vtiger_campaign | campaigntype | 15 | V~O | LBL_CAMPAIGN_INFORMATION |
| product_id | Product | vtiger_campaign | product_id | 59 | I~O | LBL_CAMPAIGN_INFORMATION |
| targetaudience | Target Audience | vtiger_campaign | targetaudience | 1 | V~O | LBL_CAMPAIGN_INFORMATION |
| closingdate | Expected Close Date | vtiger_campaign | closingdate | 23 | D~M | LBL_CAMPAIGN_INFORMATION |
| sponsor | Sponsor | vtiger_campaign | sponsor | 1 | V~O | LBL_CAMPAIGN_INFORMATION |
| targetsize | TargetSize | vtiger_campaign | targetsize | 1 | I~O | LBL_CAMPAIGN_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CAMPAIGN_INFORMATION |
| numsent | Num Sent | vtiger_campaign | numsent | 9 | N~O | LBL_CAMPAIGN_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CAMPAIGN_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CAMPAIGN_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_CAMPAIGN_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_CAMPAIGN_INFORMATION |
| tags | tags | vtiger_campaign | tags | 1 | V~O | LBL_CAMPAIGN_INFORMATION |
| budgetcost | Budget Cost | vtiger_campaign | budgetcost | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS |
| actualcost | Actual Cost | vtiger_campaign | actualcost | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS |
| expectedresponse | Expected Response | vtiger_campaign | expectedresponse | 15 | V~O | LBL_EXPECTATIONS_AND_ACTUALS |
| expectedrevenue | Expected Revenue | vtiger_campaign | expectedrevenue | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS |
| expectedsalescount | Expected Sales Count | vtiger_campaign | expectedsalescount | 1 | I~O | LBL_EXPECTATIONS_AND_ACTUALS |
| actualsalescount | Actual Sales Count | vtiger_campaign | actualsalescount | 1 | I~O | LBL_EXPECTATIONS_AND_ACTUALS |
| expectedresponsecount | Expected Response Count | vtiger_campaign | expectedresponsecount | 1 | I~O | LBL_EXPECTATIONS_AND_ACTUALS |
| actualresponsecount | Actual Response Count | vtiger_campaign | actualresponsecount | 1 | I~O | LBL_EXPECTATIONS_AND_ACTUALS |
| expectedroi | Expected ROI | vtiger_campaign | expectedroi | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS |
| actualroi | Actual ROI | vtiger_campaign | actualroi | 71 | N~O | LBL_EXPECTATIONS_AND_ACTUALS |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_campaign
- vtiger_crmentity
- vtiger_campaignrelstatus
- vtiger_crmentity_user_field

### Contacts

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| salutationtype | Salutation | vtiger_contactdetails | salutation | 55 | V~O | LBL_CONTACT_INFORMATION |
| lastname | Last Name | vtiger_contactdetails | lastname | 255 | V~M | LBL_CONTACT_INFORMATION |
| contact_no | Contact Id | vtiger_contactdetails | contact_no | 4 | V~O | LBL_CONTACT_INFORMATION |
| firstname | First Name | vtiger_contactdetails | firstname | 55 | V~O | LBL_CONTACT_INFORMATION |
| phone | Office Phone | vtiger_contactdetails | phone | 11 | V~O | LBL_CONTACT_INFORMATION |
| account_id | Account Name | vtiger_contactdetails | accountid | 51 | I~O | LBL_CONTACT_INFORMATION |
| mobile | Mobile | vtiger_contactdetails | mobile | 11 | V~O | LBL_CONTACT_INFORMATION |
| leadsource | Lead Source | vtiger_contactsubdetails | leadsource | 15 | V~O | LBL_CONTACT_INFORMATION |
| homephone | Home Phone | vtiger_contactsubdetails | homephone | 11 | V~O | LBL_CONTACT_INFORMATION |
| title | Title | vtiger_contactdetails | title | 1 | V~O | LBL_CONTACT_INFORMATION |
| otherphone | Other Phone | vtiger_contactsubdetails | otherphone | 11 | V~O | LBL_CONTACT_INFORMATION |
| department | Department | vtiger_contactdetails | department | 1 | V~O | LBL_CONTACT_INFORMATION |
| fax | Fax | vtiger_contactdetails | fax | 11 | V~O | LBL_CONTACT_INFORMATION |
| email | Email | vtiger_contactdetails | email | 13 | E~O | LBL_CONTACT_INFORMATION |
| birthday | Birthdate | vtiger_contactsubdetails | birthday | 5 | D~O | LBL_CONTACT_INFORMATION |
| assistant | Assistant | vtiger_contactsubdetails | assistant | 1 | V~O | LBL_CONTACT_INFORMATION |
| contact_id | Reports To | vtiger_contactdetails | reportsto | 57 | V~O | LBL_CONTACT_INFORMATION |
| assistantphone | Assistant Phone | vtiger_contactsubdetails | assistantphone | 11 | V~O | LBL_CONTACT_INFORMATION |
| secondaryemail | Secondary Email | vtiger_contactdetails | secondaryemail | 13 | E~O | LBL_CONTACT_INFORMATION |
| emailoptout | Email Opt Out | vtiger_contactdetails | emailoptout | 56 | C~O | LBL_CONTACT_INFORMATION |
| donotcall | Do Not Call | vtiger_contactdetails | donotcall | 56 | C~O | LBL_CONTACT_INFORMATION |
| reference | Reference | vtiger_contactdetails | reference | 56 | C~O | LBL_CONTACT_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_CONTACT_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CONTACT_INFORMATION |
| notify_owner | Notify Owner | vtiger_contactdetails | notify_owner | 56 | C~O | LBL_CONTACT_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CONTACT_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CONTACT_INFORMATION |
| isconvertedfromlead | Is Converted From Lead | vtiger_contactdetails | isconvertedfromlead | 56 | C~O | LBL_CONTACT_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_CONTACT_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_CONTACT_INFORMATION |
| tags | tags | vtiger_contactdetails | tags | 1 | V~O | LBL_CONTACT_INFORMATION |
| last_action_date | last_action_date | vtiger_contactdetails | last_action_date | 5 | D~O | LBL_CONTACT_INFORMATION |
| portal | Portal User | vtiger_customerdetails | portal | 56 | C~O | LBL_CUSTOMER_PORTAL_INFORMATION |
| support_start_date | Support Start Date | vtiger_customerdetails | support_start_date | 5 | D~O | LBL_CUSTOMER_PORTAL_INFORMATION |
| support_end_date | Support End Date | vtiger_customerdetails | support_end_date | 5 | D~O~OTH~GE~support_start_date~Support Start Date | LBL_CUSTOMER_PORTAL_INFORMATION |
| mailingcountry | Mailing Country | vtiger_contactaddress | mailingcountry | 1 | V~O | LBL_ADDRESS_INFORMATION |
| othercountry | Other Country | vtiger_contactaddress | othercountry | 1 | V~O | LBL_ADDRESS_INFORMATION |
| mailingzip | Mailing Zip | vtiger_contactaddress | mailingzip | 1 | V~O | LBL_ADDRESS_INFORMATION |
| otherzip | Other Zip | vtiger_contactaddress | otherzip | 1 | V~O | LBL_ADDRESS_INFORMATION |
| mailingstate | Mailing State | vtiger_contactaddress | mailingstate | 1 | V~O | LBL_ADDRESS_INFORMATION |
| otherstate | Other State | vtiger_contactaddress | otherstate | 1 | V~O | LBL_ADDRESS_INFORMATION |
| mailingcity | Mailing City | vtiger_contactaddress | mailingcity | 1 | V~O | LBL_ADDRESS_INFORMATION |
| othercity | Other City | vtiger_contactaddress | othercity | 1 | V~O | LBL_ADDRESS_INFORMATION |
| mailingstreet | Mailing Street | vtiger_contactaddress | mailingstreet | 21 | V~O | LBL_ADDRESS_INFORMATION |
| otherstreet | Other Street | vtiger_contactaddress | otherstreet | 21 | V~O | LBL_ADDRESS_INFORMATION |
| mailingpobox | Mailing Po Box | vtiger_contactaddress | mailingpobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| otherpobox | Other Po Box | vtiger_contactaddress | otherpobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |
| imagename | Contact Image | vtiger_contactdetails | imagename | 69 | V~O | LBL_IMAGE_INFORMATION |

#### 関連テーブル

- vtiger_contactdetails
- vtiger_contactsubdetails
- vtiger_crmentity
- vtiger_customerdetails
- vtiger_contactaddress
- vtiger_campaignrelstatus
- vtiger_crmentity_user_field

### CustomerPortal

### Dailyreports

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| dailyreportsname | LBL_SUBJECT | vtiger_dailyreports | dailyreportsname | 2 | V~M | LBL_DAYILYREPORTS_INFORMATION |
| reportsterm | LBL_DAILY_WEEKLY_REPORT | vtiger_dailyreports | reportsterm | 15 | V~M | LBL_DAYILYREPORTS_INFORMATION |
| ReportsDate | LBL_SUBMISSION_DATE | vtiger_dailyreports | reportsdate | 23 | D~M | LBL_DAYILYREPORTS_INFORMATION |
| dailyreportsstatus | LBL_STATUS | vtiger_dailyreports | dailyreportsstatus | 15 | V~M | LBL_DAYILYREPORTS_INFORMATION |
| reports_to_id | LBL_WHERE_TO_SUBMIT | vtiger_dailyreports | reports_to_id | 10 | V~M | LBL_DAYILYREPORTS_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_DAYILYREPORTS_INFORMATION |
| dailyreportscomment | LBL_COMMENT | vtiger_dailyreports | dailyreportscomment | 21 | V~O | LBL_DAYILYREPORTS_INFORMATION |
| createdtime | LBL_CREATE_DATETIME | vtiger_crmentity | createdtime | 70 | DT~O | LBL_DAYILYREPORTS_INFORMATION |
| modifiedtime | LBL_UPDATE_DATETIME | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_DAYILYREPORTS_INFORMATION |
| tags | tags | vtiger_dailyreports | tags | 1 | V~O | LBL_DAYILYREPORTS_INFORMATION |

#### 関連テーブル

- vtiger_dailyreports
- vtiger_crmentity

### Dashboard

### Documents

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| notes_title | Title | vtiger_notes | title | 2 | V~M | LBL_NOTE_INFORMATION |
| folderid | Folder Name | vtiger_notes | folderid | 26 | V~O | LBL_NOTE_INFORMATION |
| note_no | Document No | vtiger_notes | note_no | 4 | V~O | LBL_NOTE_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_NOTE_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_NOTE_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_NOTE_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_NOTE_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_NOTE_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_NOTE_INFORMATION |
| tags | tags | vtiger_notes | tags | 1 | V~O | LBL_NOTE_INFORMATION |
| notecontent | Note | vtiger_notes | notecontent | 19 | V~O | LBL_DESCRIPTION |
| filelocationtype | Download Type | vtiger_notes | filelocationtype | 27 | V~O | LBL_FILE_INFORMATION |
| filestatus | Active | vtiger_notes | filestatus | 56 | V~O | LBL_FILE_INFORMATION |
| filename | File Name | vtiger_notes | filename | 28 | V~O | LBL_FILE_INFORMATION |
| filesize | File Size | vtiger_notes | filesize | 1 | I~O | LBL_FILE_INFORMATION |
| filetype | File Type | vtiger_notes | filetype | 1 | V~O | LBL_FILE_INFORMATION |
| fileversion | Version | vtiger_notes | fileversion | 1 | V~O | LBL_FILE_INFORMATION |
| filedownloadcount | Download Count | vtiger_notes | filedownloadcount | 1 | I~O | LBL_FILE_INFORMATION |

#### 関連テーブル

- vtiger_notes
- vtiger_crmentity
- vtiger_crmentity_user_field

### Emails

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| date_start | Date &amp; Time Sent | vtiger_activity | date_start | 6 | DT~M~time_start~Time Start | LBL_EMAIL_INFORMATION |
| from_email | From | vtiger_emaildetails | from_email | 12 | V~M | LBL_EMAIL_INFORMATION |
| parent_type | Sales Enity Module | vtiger_activity | semodule | 2 |  | LBL_EMAIL_INFORMATION |
| saved_toid | To | vtiger_emaildetails | to_email | 8 | V~M | LBL_EMAIL_INFORMATION |
| activitytype | Activtiy Type | vtiger_activity | activitytype | 2 | V~O | LBL_EMAIL_INFORMATION |
| ccmail | CC | vtiger_emaildetails | cc_email | 8 | V~O | LBL_EMAIL_INFORMATION |
| bccmail | BCC | vtiger_emaildetails | bcc_email | 8 | V~O | LBL_EMAIL_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_EMAIL_INFORMATION |
| parent_id | Parent ID | vtiger_emaildetails | idlists | 357 | V~O | LBL_EMAIL_INFORMATION |
| email_flag | Email Flag | vtiger_emaildetails | email_flag | 16 | V~O | LBL_EMAIL_INFORMATION |
| access_count | Access Count | vtiger_email_track | access_count | 25 | I~O | LBL_EMAIL_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_EMAIL_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_EMAIL_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_EMAIL_INFORMATION |
| click_count | Click Count | vtiger_email_track | click_count | 25 | I~O | LBL_EMAIL_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_EMAIL_INFORMATION |
| tags | tags | vtiger_activity | tags | 1 | V~O | LBL_EMAIL_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | Emails_Block1 |
| subject | Subject | vtiger_activity | subject | 2 | V~M | Emails_Block2 |
| filename | Attachment | vtiger_attachments | name | 61 | V~O | Emails_Block2 |
| time_start | Time Start | vtiger_activity | time_start | 2 | T~O | Emails_Block2 |
| description | Description | vtiger_crmentity | description | 19 | V~O | Emails_Block3 |

#### 関連テーブル

- vtiger_activity
- vtiger_crmentity
- vtiger_attachments
- vtiger_email_track
- vtiger_emaildetails
- vtiger_crmentity_user_field

### EmailTemplates

### Faq

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| product_id | Product Name | vtiger_faq | product_id | 59 | I~O | LBL_FAQ_INFORMATION |
| faq_no | Faq No | vtiger_faq | faq_no | 4 | V~O | LBL_FAQ_INFORMATION |
| faqstatus | Status | vtiger_faq | status | 15 | V~M | LBL_FAQ_INFORMATION |
| faqcategories | Category | vtiger_faq | category | 15 | V~O | LBL_FAQ_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_FAQ_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_FAQ_INFORMATION |
| question | Question | vtiger_faq | question | 20 | V~M | LBL_FAQ_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_FAQ_INFORMATION |
| faq_answer | Answer | vtiger_faq | answer | 20 | V~M | LBL_FAQ_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_FAQ_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_FAQ_INFORMATION |
| tags | tags | vtiger_faq | tags | 1 | V~O | LBL_FAQ_INFORMATION |
| comments | Add Comment | vtiger_faqcomments | comments | 19 | V~O | LBL_COMMENT_INFORMATION |

#### 関連テーブル

- vtiger_faq
- vtiger_faqcomments
- vtiger_crmentity
- vtiger_crmentity_user_field

### HelpDesk

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| ticket_title | Title | vtiger_troubletickets | title | 22 | V~M | LBL_TICKET_INFORMATION |
| parent_id | Related To | vtiger_troubletickets | parent_id | 10 | I~O | LBL_TICKET_INFORMATION |
| contact_id | Contact Name | vtiger_troubletickets | contact_id | 10 | V~O | LBL_TICKET_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_TICKET_INFORMATION |
| product_id | Product Name | vtiger_troubletickets | product_id | 59 | I~O | LBL_TICKET_INFORMATION |
| ticketpriorities | Priority | vtiger_troubletickets | priority | 15 | V~M | LBL_TICKET_INFORMATION |
| ticketstatus | Status | vtiger_troubletickets | status | 15 | V~M | LBL_TICKET_INFORMATION |
| ticketseverities | Severity | vtiger_troubletickets | severity | 15 | V~O | LBL_TICKET_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_TICKET_INFORMATION |
| hours | Hours | vtiger_troubletickets | hours | 1 | N~O | LBL_TICKET_INFORMATION |
| days | Days | vtiger_troubletickets | days | 1 | N~O | LBL_TICKET_INFORMATION |
| ticketcategories | Category | vtiger_troubletickets | category | 15 | V~O | LBL_TICKET_INFORMATION |
| update_log | Update History | vtiger_troubletickets | update_log | 19 | V~O | LBL_TICKET_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_TICKET_INFORMATION |
| ticket_no | Ticket No | vtiger_troubletickets | ticket_no | 4 | V~O | LBL_TICKET_INFORMATION |
| from_portal | From Portal | vtiger_ticketcf | from_portal | 56 | C~O | LBL_TICKET_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_TICKET_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_TICKET_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_TICKET_INFORMATION |
| tags | tags | vtiger_troubletickets | tags | 1 | V~O | LBL_TICKET_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |
| solution | Solution | vtiger_troubletickets | solution | 19 | V~O | LBL_TICKET_RESOLUTION |
| comments | Add Comment | vtiger_ticketcomments | comments | 19 | V~O | LBL_COMMENTS |

#### 関連テーブル

- vtiger_troubletickets
- vtiger_crmentity
- vtiger_ticketcf
- vtiger_ticketcomments
- vtiger_crmentity_user_field

### Home

### Import

### Invoice

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| subject | Subject | vtiger_invoice | subject | 2 | V~M | LBL_INVOICE_INFORMATION |
| salesorder_id | Sales Order | vtiger_invoice | salesorderid | 80 | I~O | LBL_INVOICE_INFORMATION |
| invoice_no | Invoice No | vtiger_invoice | invoice_no | 4 | V~O | LBL_INVOICE_INFORMATION |
| customerno | Customer No | vtiger_invoice | customerno | 1 | V~O | LBL_INVOICE_INFORMATION |
| contact_id | Contact Name | vtiger_invoice | contactid | 57 | I~O | LBL_INVOICE_INFORMATION |
| invoicedate | Invoice Date | vtiger_invoice | invoicedate | 5 | D~O | LBL_INVOICE_INFORMATION |
| duedate | Due Date | vtiger_invoice | duedate | 5 | D~O | LBL_INVOICE_INFORMATION |
| vtiger_purchaseorder | Purchase Order | vtiger_invoice | purchaseorder | 1 | V~O | LBL_INVOICE_INFORMATION |
| txtAdjustment | Adjustment | vtiger_invoice | adjustment | 72 | NN~O | LBL_INVOICE_INFORMATION |
| exciseduty | Excise Duty | vtiger_invoice | exciseduty | 1 | N~O | LBL_INVOICE_INFORMATION |
| hdnSubTotal | Sub Total | vtiger_invoice | subtotal | 72 | N~O | LBL_INVOICE_INFORMATION |
| salescommission | Sales Commission | vtiger_invoice | salescommission | 1 | N~O | LBL_INVOICE_INFORMATION |
| hdnGrandTotal | Total | vtiger_invoice | total | 72 | N~O | LBL_INVOICE_INFORMATION |
| hdnTaxType | Tax Type | vtiger_invoice | taxtype | 16 | V~O | LBL_INVOICE_INFORMATION |
| account_id | Account Name | vtiger_invoice | accountid | 73 | I~M | LBL_INVOICE_INFORMATION |
| invoicestatus | Status | vtiger_invoice | invoicestatus | 15 | V~O | LBL_INVOICE_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_INVOICE_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_INVOICE_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_INVOICE_INFORMATION |
| currency_id | Currency | vtiger_invoice | currency_id | 117 | I~O | LBL_INVOICE_INFORMATION |
| conversion_rate | Conversion Rate | vtiger_invoice | conversion_rate | 1 | N~O | LBL_INVOICE_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_INVOICE_INFORMATION |
| pre_tax_total | Pre Tax Total | vtiger_invoice | pre_tax_total | 72 | N~O | LBL_INVOICE_INFORMATION |
| received | Received | vtiger_invoice | received | 72 | N~O | LBL_INVOICE_INFORMATION |
| balance | Balance | vtiger_invoice | balance | 72 | N~O | LBL_INVOICE_INFORMATION |
| potential_id | Potential Name | vtiger_invoice | potential_id | 10 | I~O | LBL_INVOICE_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_INVOICE_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_INVOICE_INFORMATION |
| tags | tags | vtiger_invoice | tags | 1 | V~O | LBL_INVOICE_INFORMATION |
| bill_country | Billing Country | vtiger_invoicebillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_country | Shipping Country | vtiger_invoiceshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_code | Billing Code | vtiger_invoicebillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_code | Shipping Code | vtiger_invoiceshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_state | Billing State | vtiger_invoicebillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_state | Shipping State | vtiger_invoiceshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_city | Billing City | vtiger_invoicebillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_city | Shipping City | vtiger_invoiceshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_street | Billing Address | vtiger_invoicebillads | bill_street | 24 | V~M | LBL_ADDRESS_INFORMATION |
| ship_street | Shipping Address | vtiger_invoiceshipads | ship_street | 24 | V~M | LBL_ADDRESS_INFORMATION |
| bill_pobox | Billing Po Box | vtiger_invoicebillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_pobox | Shipping Po Box | vtiger_invoiceshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| hdnS_H_Amount | S&amp;H Amount | vtiger_invoice | s_h_amount | 72 | N~O | LBL_ADDRESS_INFORMATION |
| terms_conditions | Terms &amp; Conditions | vtiger_invoice | terms_conditions | 19 | V~O | LBL_TERMS_INFORMATION |
| productid | Item Name | vtiger_inventoryproductrel | productid | 10 | V~M | LBL_ITEM_DETAILS |
| quantity | Quantity | vtiger_inventoryproductrel | quantity | 7 | N~O | LBL_ITEM_DETAILS |
| listprice | List Price | vtiger_inventoryproductrel | listprice | 71 | N~O | LBL_ITEM_DETAILS |
| comment | Item Comment | vtiger_inventoryproductrel | comment | 19 | V~O | LBL_ITEM_DETAILS |
| discount_amount | Item Discount Amount | vtiger_inventoryproductrel | discount_amount | 71 | N~O | LBL_ITEM_DETAILS |
| discount_percent | Item Discount Percent | vtiger_inventoryproductrel | discount_percent | 7 | V~O | LBL_ITEM_DETAILS |
| tax1 | VAT | vtiger_inventoryproductrel | tax1 | 83 | V~O | LBL_ITEM_DETAILS |
| tax2 | Sales | vtiger_inventoryproductrel | tax2 | 83 | V~O | LBL_ITEM_DETAILS |
| tax3 | Service | vtiger_inventoryproductrel | tax3 | 83 | V~O | LBL_ITEM_DETAILS |
| hdnS_H_Percent | S&amp;H Percent | vtiger_invoice | s_h_percent | 1 | N~O | LBL_ITEM_DETAILS |
| hdnDiscountAmount | Discount Amount | vtiger_invoice | discount_amount | 72 | N~O | LBL_ITEM_DETAILS |
| hdnDiscountPercent | Discount Percent | vtiger_invoice | discount_percent | 1 | N~O | LBL_ITEM_DETAILS |
| image | Image | vtiger_inventoryproductrel | image | 56 | V~O | LBL_ITEM_DETAILS |
| purchase_cost | Purchase Cost | vtiger_inventoryproductrel | purchase_cost | 71 | N~O | LBL_ITEM_DETAILS |
| margin | Margin | vtiger_inventoryproductrel | margin | 71 | N~O | LBL_ITEM_DETAILS |
| region_id | Tax Region | vtiger_invoice | region_id | 16 | N~O | LBL_ITEM_DETAILS |
| usageunit | LBL_USAGE_UNIT | vtiger_inventoryproductrel | usageunit | 1 | V~O~LE~200 | LBL_ITEM_DETAILS |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS |
| tax4 | LBL_CONSUMPTION_TAX | vtiger_inventoryproductrel | tax4 | 83 | V~O | LBL_ITEM_DETAILS |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_invoice
- vtiger_crmentity
- vtiger_invoicebillads
- vtiger_invoiceshipads
- vtiger_inventoryproductrel
- vtiger_crmentity_user_field

### Leads

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| salutationtype | Salutation | vtiger_leaddetails | salutation | 55 | V~O | LBL_LEAD_INFORMATION |
| lastname | Last Name | vtiger_leaddetails | lastname | 255 | V~M | LBL_LEAD_INFORMATION |
| lead_no | Lead No | vtiger_leaddetails | lead_no | 4 | V~O | LBL_LEAD_INFORMATION |
| firstname | First Name | vtiger_leaddetails | firstname | 55 | V~O | LBL_LEAD_INFORMATION |
| phone | Phone | vtiger_leadaddress | phone | 11 | V~O | LBL_LEAD_INFORMATION |
| company | Company | vtiger_leaddetails | company | 2 | V~O | LBL_LEAD_INFORMATION |
| mobile | Mobile | vtiger_leadaddress | mobile | 11 | V~O | LBL_LEAD_INFORMATION |
| designation | Designation | vtiger_leaddetails | designation | 1 | V~O | LBL_LEAD_INFORMATION |
| fax | Fax | vtiger_leadaddress | fax | 11 | V~O | LBL_LEAD_INFORMATION |
| leadsource | Lead Source | vtiger_leaddetails | leadsource | 15 | V~O | LBL_LEAD_INFORMATION |
| email | Email | vtiger_leaddetails | email | 13 | E~O | LBL_LEAD_INFORMATION |
| industry | Industry | vtiger_leaddetails | industry | 15 | V~O | LBL_LEAD_INFORMATION |
| website | Website | vtiger_leadsubdetails | website | 17 | V~O | LBL_LEAD_INFORMATION |
| annualrevenue | Annual Revenue | vtiger_leaddetails | annualrevenue | 71 | N~O | LBL_LEAD_INFORMATION |
| leadstatus | Lead Status | vtiger_leaddetails | leadstatus | 15 | V~O | LBL_LEAD_INFORMATION |
| noofemployees | No Of Employees | vtiger_leaddetails | noofemployees | 1 | I~O | LBL_LEAD_INFORMATION |
| rating | Rating | vtiger_leaddetails | rating | 15 | V~O | LBL_LEAD_INFORMATION |
| secondaryemail | Secondary Email | vtiger_leaddetails | secondaryemail | 13 | E~O | LBL_LEAD_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_LEAD_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_LEAD_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_LEAD_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_LEAD_INFORMATION |
| emailoptout | Email Opt Out | vtiger_leaddetails | emailoptout | 56 | C~O | LBL_LEAD_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_LEAD_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_LEAD_INFORMATION |
| tags | tags | vtiger_leaddetails | tags | 1 | V~O | LBL_LEAD_INFORMATION |
| last_action_date | last_action_date | vtiger_leaddetails | last_action_date | 5 | D~O | LBL_LEAD_INFORMATION |
| country | Country | vtiger_leadaddress | country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| code | Postal Code | vtiger_leadaddress | code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| state | State | vtiger_leadaddress | state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| city | City | vtiger_leadaddress | city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| lane | Street | vtiger_leadaddress | lane | 21 | V~O | LBL_ADDRESS_INFORMATION |
| pobox | Po Box | vtiger_leadaddress | pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_leaddetails
- vtiger_leadaddress
- vtiger_leadsubdetails
- vtiger_crmentity
- vtiger_campaignrelstatus
- vtiger_crmentity_user_field

### MailManager

### Mobile

### ModComments

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| commentcontent | Comment | vtiger_modcomments | commentcontent | 19 | V~M | LBL_MODCOMMENTS_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_MODCOMMENTS_INFORMATION |
| customer | Customer | vtiger_modcomments | customer | 10 | V~O | LBL_MODCOMMENTS_INFORMATION |
| userid | UserId | vtiger_modcomments | userid | 10 | V~O | LBL_MODCOMMENTS_INFORMATION |
| reasontoedit | ReasonToEdit | vtiger_modcomments | reasontoedit | 19 | V~O | LBL_MODCOMMENTS_INFORMATION |
| is_private | Is Private | vtiger_modcomments | is_private | 7 | I~O | LBL_MODCOMMENTS_INFORMATION |
| filename | Attachment | vtiger_modcomments | filename | 61 | V~O | LBL_MODCOMMENTS_INFORMATION |
| related_email_id | Related Email Id | vtiger_modcomments | related_email_id | 1 | I~O | LBL_MODCOMMENTS_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_OTHER_INFORMATION |
| related_to | Related To | vtiger_modcomments | related_to | 10 | V~M | LBL_OTHER_INFORMATION |
| creator | Creator | vtiger_crmentity | smcreatorid | 52 | V~O | LBL_OTHER_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_OTHER_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_OTHER_INFORMATION |
| parent_comments | Related To Comments | vtiger_modcomments | parent_comments | 10 | V~O | LBL_OTHER_INFORMATION |

#### 関連テーブル

- vtiger_modcomments
- vtiger_crmentity

### ModTracker

### PDFTemplates

### Portal

### Potentials

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| potentialname | Potential Name | vtiger_potential | potentialname | 2 | V~M | LBL_OPPORTUNITY_INFORMATION |
| potential_no | Potential No | vtiger_potential | potential_no | 4 | V~O | LBL_OPPORTUNITY_INFORMATION |
| related_to | Related To | vtiger_potential | related_to | 10 | V~O | LBL_OPPORTUNITY_INFORMATION |
| contact_id | Contact Name | vtiger_potential | contact_id | 10 | V~O | LBL_OPPORTUNITY_INFORMATION |
| amount | Amount | vtiger_potential | amount | 71 | N~O | LBL_OPPORTUNITY_INFORMATION |
| opportunity_type | Type | vtiger_potential | potentialtype | 15 | V~O | LBL_OPPORTUNITY_INFORMATION |
| closingdate | Expected Close Date | vtiger_potential | closingdate | 23 | D~M | LBL_OPPORTUNITY_INFORMATION |
| leadsource | Lead Source | vtiger_potential | leadsource | 15 | V~O | LBL_OPPORTUNITY_INFORMATION |
| nextstep | Next Step | vtiger_potential | nextstep | 1 | V~O | LBL_OPPORTUNITY_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_OPPORTUNITY_INFORMATION |
| sales_stage | Sales Stage | vtiger_potential | sales_stage | 15 | V~M | LBL_OPPORTUNITY_INFORMATION |
| campaignid | Campaign Source | vtiger_potential | campaignid | 58 | N~O | LBL_OPPORTUNITY_INFORMATION |
| probability | Probability | vtiger_potential | probability | 9 | N~O | LBL_OPPORTUNITY_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_OPPORTUNITY_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_OPPORTUNITY_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_OPPORTUNITY_INFORMATION |
| forecast_amount | Forecast Amount | vtiger_potential | forecast_amount | 71 | N~O | LBL_OPPORTUNITY_INFORMATION |
| isconvertedfromlead | Is Converted From Lead | vtiger_potential | isconvertedfromlead | 56 | C~O | LBL_OPPORTUNITY_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_OPPORTUNITY_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_OPPORTUNITY_INFORMATION |
| tags | tags | vtiger_potential | tags | 1 | V~O | LBL_OPPORTUNITY_INFORMATION |
| last_action_date | last_action_date | vtiger_potential | last_action_date | 5 | D~O | LBL_OPPORTUNITY_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_potential
- vtiger_crmentity
- vtiger_crmentity_user_field

### PriceBooks

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| bookname | Price Book Name | vtiger_pricebook | bookname | 2 | V~M | LBL_PRICEBOOK_INFORMATION |
| active | Active | vtiger_pricebook | active | 56 | C~O | LBL_PRICEBOOK_INFORMATION |
| pricebook_no | PriceBook No | vtiger_pricebook | pricebook_no | 4 | V~O | LBL_PRICEBOOK_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_PRICEBOOK_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_PRICEBOOK_INFORMATION |
| currency_id | Currency | vtiger_pricebook | currency_id | 117 | I~M | LBL_PRICEBOOK_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_PRICEBOOK_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PRICEBOOK_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PRICEBOOK_INFORMATION |
| tags | tags | vtiger_pricebook | tags | 1 | V~O | LBL_PRICEBOOK_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_pricebook
- vtiger_crmentity
- vtiger_crmentity_user_field

### Products

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| productname | Product Name | vtiger_products | productname | 2 | V~M | LBL_PRODUCT_INFORMATION |
| product_no | Product No | vtiger_products | product_no | 4 | V~O | LBL_PRODUCT_INFORMATION |
| discontinued | Product Active | vtiger_products | discontinued | 56 | V~O | LBL_PRODUCT_INFORMATION |
| productcode | Part Number | vtiger_products | productcode | 1 | V~O | LBL_PRODUCT_INFORMATION |
| sales_start_date | Sales Start Date | vtiger_products | sales_start_date | 5 | D~O | LBL_PRODUCT_INFORMATION |
| manufacturer | Manufacturer | vtiger_products | manufacturer | 15 | V~O | LBL_PRODUCT_INFORMATION |
| productcategory | Product Category | vtiger_products | productcategory | 15 | V~O | LBL_PRODUCT_INFORMATION |
| start_date | Support Start Date | vtiger_products | start_date | 5 | D~O | LBL_PRODUCT_INFORMATION |
| sales_end_date | Sales End Date | vtiger_products | sales_end_date | 5 | D~O~OTH~GE~sales_start_date~Sales Start Date | LBL_PRODUCT_INFORMATION |
| expiry_date | Support Expiry Date | vtiger_products | expiry_date | 5 | D~O~OTH~GE~start_date~Start Date | LBL_PRODUCT_INFORMATION |
| vendor_id | Vendor Name | vtiger_products | vendor_id | 75 | I~O | LBL_PRODUCT_INFORMATION |
| website | Website | vtiger_products | website | 17 | V~O | LBL_PRODUCT_INFORMATION |
| vendor_part_no | Vendor PartNo | vtiger_products | vendor_part_no | 1 | V~O | LBL_PRODUCT_INFORMATION |
| mfr_part_no | Mfr PartNo | vtiger_products | mfr_part_no | 1 | V~O | LBL_PRODUCT_INFORMATION |
| productsheet | Product Sheet | vtiger_products | productsheet | 1 | V~O | LBL_PRODUCT_INFORMATION |
| serial_no | Serial No | vtiger_products | serialno | 1 | V~O | LBL_PRODUCT_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_PRODUCT_INFORMATION |
| glacct | GL Account | vtiger_products | glacct | 15 | V~O | LBL_PRODUCT_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_PRODUCT_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_PRODUCT_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PRODUCT_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PRODUCT_INFORMATION |
| tags | tags | vtiger_products | tags | 1 | V~O | LBL_PRODUCT_INFORMATION |
| unit_price | Unit Price | vtiger_products | unit_price | 72 | N~O | LBL_PRICING_INFORMATION |
| commissionrate | Commission Rate | vtiger_products | commissionrate | 9 | N~O | LBL_PRICING_INFORMATION |
| taxclass | Taxes | vtiger_products | taxclass | 83 | V~O | LBL_PRICING_INFORMATION |
| purchase_cost | Purchase Cost | vtiger_products | purchase_cost | 71 | N~O | LBL_PRICING_INFORMATION |
| reducedtaxrate | Reduced TaxRate | vtiger_products | reducedtaxrate | 56 | C~O | LBL_PRICING_INFORMATION |
| usageunit | Usage Unit | vtiger_products | usageunit | 15 | V~O | LBL_STOCK_INFORMATION |
| qty_per_unit | Qty/Unit | vtiger_products | qty_per_unit | 1 | N~O | LBL_STOCK_INFORMATION |
| qtyinstock | Qty In Stock | vtiger_products | qtyinstock | 1 | NN~O | LBL_STOCK_INFORMATION |
| reorderlevel | Reorder Level | vtiger_products | reorderlevel | 1 | I~O | LBL_STOCK_INFORMATION |
| assigned_user_id | Handler | vtiger_crmentity | smownerid | 53 | V~M | LBL_STOCK_INFORMATION |
| qtyindemand | Qty In Demand | vtiger_products | qtyindemand | 1 | I~O | LBL_STOCK_INFORMATION |
| imagename | Product Image | vtiger_products | imagename | 69 | V~O | LBL_IMAGE_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_products
- vtiger_crmentity
- vtiger_crmentity_user_field

### Project

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| projectname | Project Name | vtiger_project | projectname | 2 | V~M | LBL_PROJECT_INFORMATION |
| project_no | Project No | vtiger_project | project_no | 4 | V~O | LBL_PROJECT_INFORMATION |
| startdate | Start Date | vtiger_project | startdate | 23 | D~O | LBL_PROJECT_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_PROJECT_INFORMATION |
| targetenddate | Target End Date | vtiger_project | targetenddate | 23 | D~O~OTH~GE~startdate~Start Date | LBL_PROJECT_INFORMATION |
| actualenddate | Actual End Date | vtiger_project | actualenddate | 23 | D~O~OTH~GE~startdate~Start Date | LBL_PROJECT_INFORMATION |
| projectstatus | Status | vtiger_project | projectstatus | 15 | V~O | LBL_PROJECT_INFORMATION |
| projecttype | Type | vtiger_project | projecttype | 15 | V~O | LBL_PROJECT_INFORMATION |
| linktoaccountscontacts | Related to | vtiger_project | linktoaccountscontacts | 10 | V~O | LBL_PROJECT_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PROJECT_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PROJECT_INFORMATION |
| tags | tags | vtiger_project | tags | 1 | V~O | LBL_PROJECT_INFORMATION |
| isconvertedfrompotential | Is Converted From Opportunity | vtiger_project | isconvertedfrompotential | 56 | C~O | LBL_PROJECT_INFORMATION |
| potentialid | Potential Name | vtiger_project | potentialid | 10 | I~O | LBL_PROJECT_INFORMATION |
| targetbudget | Target Budget | vtiger_project | targetbudget | 7 | V~O | LBL_CUSTOM_INFORMATION |
| projecturl | Project Url | vtiger_project | projecturl | 17 | V~O | LBL_CUSTOM_INFORMATION |
| projectpriority | Priority | vtiger_project | projectpriority | 15 | V~O | LBL_CUSTOM_INFORMATION |
| progress | Progress | vtiger_project | progress | 15 | V~O | LBL_CUSTOM_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CUSTOM_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CUSTOM_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CUSTOM_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_project
- vtiger_crmentity
- vtiger_crmentity_user_field

### ProjectMilestone

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| projectmilestonename | Project Milestone Name | vtiger_projectmilestone | projectmilestonename | 2 | V~M | LBL_PROJECT_MILESTONE_INFORMATION |
| projectmilestone_no | Project Milestone No | vtiger_projectmilestone | projectmilestone_no | 4 | V~O | LBL_PROJECT_MILESTONE_INFORMATION |
| projectid | Related to | vtiger_projectmilestone | projectid | 10 | V~M | LBL_PROJECT_MILESTONE_INFORMATION |
| projectmilestonedate | Milestone Date | vtiger_projectmilestone | projectmilestonedate | 5 | D~O | LBL_PROJECT_MILESTONE_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_PROJECT_MILESTONE_INFORMATION |
| projectmilestonetype | Type | vtiger_projectmilestone | projectmilestonetype | 15 | V~O | LBL_PROJECT_MILESTONE_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PROJECT_MILESTONE_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PROJECT_MILESTONE_INFORMATION |
| tags | tags | vtiger_projectmilestone | tags | 1 | V~O | LBL_PROJECT_MILESTONE_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CUSTOM_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CUSTOM_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CUSTOM_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_projectmilestone
- vtiger_crmentity
- vtiger_crmentity_user_field

### ProjectTask

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| projecttaskname | Project Task Name | vtiger_projecttask | projecttaskname | 2 | V~M | LBL_PROJECT_TASK_INFORMATION |
| projecttask_no | Project Task No | vtiger_projecttask | projecttask_no | 4 | V~O | LBL_PROJECT_TASK_INFORMATION |
| projecttaskpriority | Priority | vtiger_projecttask | projecttaskpriority | 15 | V~O | LBL_PROJECT_TASK_INFORMATION |
| projecttasktype | Type | vtiger_projecttask | projecttasktype | 15 | V~O | LBL_PROJECT_TASK_INFORMATION |
| projecttasknumber | Project Task Number | vtiger_projecttask | projecttasknumber | 7 | I~O | LBL_PROJECT_TASK_INFORMATION |
| projectid | Related to | vtiger_projecttask | projectid | 10 | V~M | LBL_PROJECT_TASK_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_PROJECT_TASK_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PROJECT_TASK_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PROJECT_TASK_INFORMATION |
| tags | tags | vtiger_projecttask | tags | 1 | V~O | LBL_PROJECT_TASK_INFORMATION |
| projecttaskstatus | Status | vtiger_projecttask | projecttaskstatus | 15 | V~O | LBL_PROJECT_TASK_INFORMATION |
| projecttaskprogress | Progress | vtiger_projecttask | projecttaskprogress | 15 | V~O | LBL_CUSTOM_INFORMATION |
| projecttaskhours | Worked Hours | vtiger_projecttask | projecttaskhours | 7 | V~O | LBL_CUSTOM_INFORMATION |
| startdate | Start Date | vtiger_projecttask | startdate | 5 | D~O | LBL_CUSTOM_INFORMATION |
| enddate | End Date | vtiger_projecttask | enddate | 5 | D~O~OTH~GE~startdate~Start Date | LBL_CUSTOM_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_CUSTOM_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_CUSTOM_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_CUSTOM_INFORMATION |
| description | description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_projecttask
- vtiger_crmentity
- vtiger_crmentity_user_field

### PurchaseOrder

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| subject | Subject | vtiger_purchaseorder | subject | 2 | V~M | LBL_PO_INFORMATION |
| purchaseorder_no | PurchaseOrder No | vtiger_purchaseorder | purchaseorder_no | 4 | V~O | LBL_PO_INFORMATION |
| vendor_id | Vendor Name | vtiger_purchaseorder | vendorid | 81 | I~M | LBL_PO_INFORMATION |
| requisition_no | Requisition No | vtiger_purchaseorder | requisition_no | 1 | V~O | LBL_PO_INFORMATION |
| tracking_no | Tracking Number | vtiger_purchaseorder | tracking_no | 1 | V~O | LBL_PO_INFORMATION |
| contact_id | Contact Name | vtiger_purchaseorder | contactid | 57 | I~O | LBL_PO_INFORMATION |
| duedate | Due Date | vtiger_purchaseorder | duedate | 5 | D~O | LBL_PO_INFORMATION |
| carrier | Carrier | vtiger_purchaseorder | carrier | 15 | V~O | LBL_PO_INFORMATION |
| txtAdjustment | Adjustment | vtiger_purchaseorder | adjustment | 72 | NN~O | LBL_PO_INFORMATION |
| salescommission | Sales Commission | vtiger_purchaseorder | salescommission | 1 | N~O | LBL_PO_INFORMATION |
| exciseduty | Excise Duty | vtiger_purchaseorder | exciseduty | 1 | N~O | LBL_PO_INFORMATION |
| hdnGrandTotal | Total | vtiger_purchaseorder | total | 72 | N~O | LBL_PO_INFORMATION |
| hdnS_H_Amount | S&amp;H Amount | vtiger_purchaseorder | s_h_amount | 72 | N~O | LBL_PO_INFORMATION |
| hdnTaxType | Tax Type | vtiger_purchaseorder | taxtype | 16 | V~O | LBL_PO_INFORMATION |
| hdnSubTotal | Sub Total | vtiger_purchaseorder | subtotal | 72 | N~O | LBL_PO_INFORMATION |
| postatus | Status | vtiger_purchaseorder | postatus | 15 | V~M | LBL_PO_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_PO_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_PO_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_PO_INFORMATION |
| currency_id | Currency | vtiger_purchaseorder | currency_id | 117 | I~O | LBL_PO_INFORMATION |
| conversion_rate | Conversion Rate | vtiger_purchaseorder | conversion_rate | 1 | N~O | LBL_PO_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_PO_INFORMATION |
| pre_tax_total | Pre Tax Total | vtiger_purchaseorder | pre_tax_total | 72 | N~O | LBL_PO_INFORMATION |
| paid | Paid | vtiger_purchaseorder | paid | 72 | N~O | LBL_PO_INFORMATION |
| balance | Balance | vtiger_purchaseorder | balance | 72 | N~O | LBL_PO_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_PO_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_PO_INFORMATION |
| tags | tags | vtiger_purchaseorder | tags | 1 | V~O | LBL_PO_INFORMATION |
| bill_country | Billing Country | vtiger_pobillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_country | Shipping Country | vtiger_poshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_code | Billing Code | vtiger_pobillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_code | Shipping Code | vtiger_poshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_state | Billing State | vtiger_pobillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_state | Shipping State | vtiger_poshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_city | Billing City | vtiger_pobillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_city | Shipping City | vtiger_poshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_street | Billing Address | vtiger_pobillads | bill_street | 24 | V~M | LBL_ADDRESS_INFORMATION |
| ship_street | Shipping Address | vtiger_poshipads | ship_street | 24 | V~M | LBL_ADDRESS_INFORMATION |
| bill_pobox | Billing Po Box | vtiger_pobillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_pobox | Shipping Po Box | vtiger_poshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| terms_conditions | Terms &amp; Conditions | vtiger_purchaseorder | terms_conditions | 19 | V~O | LBL_TERMS_INFORMATION |
| productid | Item Name | vtiger_inventoryproductrel | productid | 10 | V~M | LBL_ITEM_DETAILS |
| quantity | Quantity | vtiger_inventoryproductrel | quantity | 7 | N~O | LBL_ITEM_DETAILS |
| listprice | List Price | vtiger_inventoryproductrel | listprice | 71 | N~O | LBL_ITEM_DETAILS |
| comment | Item Comment | vtiger_inventoryproductrel | comment | 19 | V~O | LBL_ITEM_DETAILS |
| discount_amount | Item Discount Amount | vtiger_inventoryproductrel | discount_amount | 71 | N~O | LBL_ITEM_DETAILS |
| discount_percent | Item Discount Percent | vtiger_inventoryproductrel | discount_percent | 7 | V~O | LBL_ITEM_DETAILS |
| tax1 | VAT | vtiger_inventoryproductrel | tax1 | 83 | V~O | LBL_ITEM_DETAILS |
| tax2 | Sales | vtiger_inventoryproductrel | tax2 | 83 | V~O | LBL_ITEM_DETAILS |
| tax3 | Service | vtiger_inventoryproductrel | tax3 | 83 | V~O | LBL_ITEM_DETAILS |
| hdnS_H_Percent | S&amp;H Percent | vtiger_purchaseorder | s_h_percent | 1 | N~O | LBL_ITEM_DETAILS |
| hdnDiscountAmount | Discount Amount | vtiger_purchaseorder | discount_amount | 72 | N~O | LBL_ITEM_DETAILS |
| hdnDiscountPercent | Discount Percent | vtiger_purchaseorder | discount_percent | 1 | N~O | LBL_ITEM_DETAILS |
| image | Image | vtiger_inventoryproductrel | image | 56 | V~O | LBL_ITEM_DETAILS |
| region_id | Tax Region | vtiger_purchaseorder | region_id | 16 | N~O | LBL_ITEM_DETAILS |
| usageunit | LBL_USAGE_UNIT | vtiger_inventoryproductrel | usageunit | 1 | V~O~LE~200 | LBL_ITEM_DETAILS |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS |
| tax4 | LBL_CONSUMPTION_TAX | vtiger_inventoryproductrel | tax4 | 83 | V~O | LBL_ITEM_DETAILS |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_purchaseorder
- vtiger_crmentity
- vtiger_pobillads
- vtiger_poshipads
- vtiger_inventoryproductrel
- vtiger_crmentity_user_field

### Quotes

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| subject | Subject | vtiger_quotes | subject | 2 | V~M | LBL_QUOTE_INFORMATION |
| potential_id | Potential Name | vtiger_quotes | potentialid | 76 | I~O | LBL_QUOTE_INFORMATION |
| quote_no | Quote No | vtiger_quotes | quote_no | 4 | V~O | LBL_QUOTE_INFORMATION |
| quotestage | Quote Stage | vtiger_quotes | quotestage | 15 | V~M | LBL_QUOTE_INFORMATION |
| validtill | Valid Till | vtiger_quotes | validtill | 5 | D~O | LBL_QUOTE_INFORMATION |
| contact_id | Contact Name | vtiger_quotes | contactid | 57 | V~O | LBL_QUOTE_INFORMATION |
| carrier | Carrier | vtiger_quotes | carrier | 15 | V~O | LBL_QUOTE_INFORMATION |
| hdnSubTotal | Sub Total | vtiger_quotes | subtotal | 72 | N~O | LBL_QUOTE_INFORMATION |
| shipping | Shipping | vtiger_quotes | shipping | 1 | V~O | LBL_QUOTE_INFORMATION |
| assigned_user_id1 | Inventory Manager | vtiger_quotes | inventorymanager | 77 | I~O | LBL_QUOTE_INFORMATION |
| hdnS_H_Amount | S&amp;H Amount | vtiger_quotes | s_h_amount | 72 | N~O | LBL_QUOTE_INFORMATION |
| hdnTaxType | Tax Type | vtiger_quotes | taxtype | 16 | V~O | LBL_QUOTE_INFORMATION |
| hdnGrandTotal | Total | vtiger_quotes | total | 72 | N~O | LBL_QUOTE_INFORMATION |
| account_id | Account Name | vtiger_quotes | accountid | 73 | I~M | LBL_QUOTE_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_QUOTE_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_QUOTE_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_QUOTE_INFORMATION |
| txtAdjustment | Adjustment | vtiger_quotes | adjustment | 72 | NN~O | LBL_QUOTE_INFORMATION |
| currency_id | Currency | vtiger_quotes | currency_id | 117 | I~O | LBL_QUOTE_INFORMATION |
| conversion_rate | Conversion Rate | vtiger_quotes | conversion_rate | 1 | N~O | LBL_QUOTE_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_QUOTE_INFORMATION |
| pre_tax_total | Pre Tax Total | vtiger_quotes | pre_tax_total | 72 | N~O | LBL_QUOTE_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_QUOTE_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_QUOTE_INFORMATION |
| tags | tags | vtiger_quotes | tags | 1 | V~O | LBL_QUOTE_INFORMATION |
| bill_country | Billing Country | vtiger_quotesbillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_country | Shipping Country | vtiger_quotesshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_code | Billing Code | vtiger_quotesbillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_code | Shipping Code | vtiger_quotesshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_state | Billing State | vtiger_quotesbillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_state | Shipping State | vtiger_quotesshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_city | Billing City | vtiger_quotesbillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_city | Shipping City | vtiger_quotesshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_street | Billing Address | vtiger_quotesbillads | bill_street | 24 | V~M | LBL_ADDRESS_INFORMATION |
| ship_street | Shipping Address | vtiger_quotesshipads | ship_street | 24 | V~M | LBL_ADDRESS_INFORMATION |
| bill_pobox | Billing Po Box | vtiger_quotesbillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_pobox | Shipping Po Box | vtiger_quotesshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| terms_conditions | Terms &amp; Conditions | vtiger_quotes | terms_conditions | 19 | V~O | LBL_TERMS_INFORMATION |
| productid | Item Name | vtiger_inventoryproductrel | productid | 10 | V~M | LBL_ITEM_DETAILS |
| quantity | Quantity | vtiger_inventoryproductrel | quantity | 7 | N~O | LBL_ITEM_DETAILS |
| listprice | List Price | vtiger_inventoryproductrel | listprice | 71 | N~O | LBL_ITEM_DETAILS |
| comment | Item Comment | vtiger_inventoryproductrel | comment | 19 | V~O | LBL_ITEM_DETAILS |
| discount_amount | Item Discount Amount | vtiger_inventoryproductrel | discount_amount | 71 | N~O | LBL_ITEM_DETAILS |
| discount_percent | Item Discount Percent | vtiger_inventoryproductrel | discount_percent | 7 | V~O | LBL_ITEM_DETAILS |
| tax1 | VAT | vtiger_inventoryproductrel | tax1 | 83 | V~O | LBL_ITEM_DETAILS |
| tax2 | Sales | vtiger_inventoryproductrel | tax2 | 83 | V~O | LBL_ITEM_DETAILS |
| tax3 | Service | vtiger_inventoryproductrel | tax3 | 83 | V~O | LBL_ITEM_DETAILS |
| hdnS_H_Percent | S&amp;H Percent | vtiger_quotes | s_h_percent | 1 | N~O | LBL_ITEM_DETAILS |
| hdnDiscountAmount | Discount Amount | vtiger_quotes | discount_amount | 72 | N~O | LBL_ITEM_DETAILS |
| hdnDiscountPercent | Discount Percent | vtiger_quotes | discount_percent | 1 | N~O | LBL_ITEM_DETAILS |
| image | Image | vtiger_inventoryproductrel | image | 56 | V~O | LBL_ITEM_DETAILS |
| purchase_cost | Purchase Cost | vtiger_inventoryproductrel | purchase_cost | 71 | N~O | LBL_ITEM_DETAILS |
| margin | Margin | vtiger_inventoryproductrel | margin | 71 | N~O | LBL_ITEM_DETAILS |
| region_id | Tax Region | vtiger_quotes | region_id | 16 | N~O | LBL_ITEM_DETAILS |
| usageunit | LBL_USAGE_UNIT | vtiger_inventoryproductrel | usageunit | 1 | V~O~LE~200 | LBL_ITEM_DETAILS |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS |
| tax4 | LBL_CONSUMPTION_TAX | vtiger_inventoryproductrel | tax4 | 83 | V~O | LBL_ITEM_DETAILS |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_quotes
- vtiger_crmentity
- vtiger_quotesbillads
- vtiger_quotesshipads
- vtiger_inventoryproductrel
- vtiger_crmentity_user_field

### RecycleBin

### Reports

### Rss

### SalesOrder

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| subject | Subject | vtiger_salesorder | subject | 2 | V~M | LBL_SO_INFORMATION |
| potential_id | Potential Name | vtiger_salesorder | potentialid | 76 | I~O | LBL_SO_INFORMATION |
| customerno | Customer No | vtiger_salesorder | customerno | 1 | V~O | LBL_SO_INFORMATION |
| salesorder_no | SalesOrder No | vtiger_salesorder | salesorder_no | 4 | V~O | LBL_SO_INFORMATION |
| quote_id | Quote Name | vtiger_salesorder | quoteid | 78 | I~O | LBL_SO_INFORMATION |
| vtiger_purchaseorder | Purchase Order | vtiger_salesorder | purchaseorder | 1 | V~O | LBL_SO_INFORMATION |
| contact_id | Contact Name | vtiger_salesorder | contactid | 57 | I~O | LBL_SO_INFORMATION |
| duedate | Due Date | vtiger_salesorder | duedate | 5 | D~O | LBL_SO_INFORMATION |
| carrier | Carrier | vtiger_salesorder | carrier | 15 | V~O | LBL_SO_INFORMATION |
| pending | Pending | vtiger_salesorder | pending | 1 | V~O | LBL_SO_INFORMATION |
| sostatus | Status | vtiger_salesorder | sostatus | 15 | V~M | LBL_SO_INFORMATION |
| txtAdjustment | Adjustment | vtiger_salesorder | adjustment | 72 | NN~O | LBL_SO_INFORMATION |
| salescommission | Sales Commission | vtiger_salesorder | salescommission | 1 | N~O | LBL_SO_INFORMATION |
| exciseduty | Excise Duty | vtiger_salesorder | exciseduty | 1 | N~O | LBL_SO_INFORMATION |
| hdnGrandTotal | Total | vtiger_salesorder | total | 72 | N~O | LBL_SO_INFORMATION |
| hdnSubTotal | Sub Total | vtiger_salesorder | subtotal | 72 | N~O | LBL_SO_INFORMATION |
| hdnTaxType | Tax Type | vtiger_salesorder | taxtype | 16 | V~O | LBL_SO_INFORMATION |
| hdnS_H_Amount | S&amp;H Amount | vtiger_salesorder | s_h_amount | 72 | N~O | LBL_SO_INFORMATION |
| account_id | Account Name | vtiger_salesorder | accountid | 73 | I~M | LBL_SO_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_SO_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_SO_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_SO_INFORMATION |
| currency_id | Currency | vtiger_salesorder | currency_id | 117 | I~O | LBL_SO_INFORMATION |
| conversion_rate | Conversion Rate | vtiger_salesorder | conversion_rate | 1 | N~O | LBL_SO_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_SO_INFORMATION |
| pre_tax_total | Pre Tax Total | vtiger_salesorder | pre_tax_total | 72 | N~O | LBL_SO_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_SO_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_SO_INFORMATION |
| tags | tags | vtiger_salesorder | tags | 1 | V~O | LBL_SO_INFORMATION |
| enable_recurring | Enable Recurring | vtiger_salesorder | enable_recurring | 56 | C~O | Recurring Invoice Information |
| recurring_frequency | Frequency | vtiger_invoice_recurring_info | recurring_frequency | 16 | V~O | Recurring Invoice Information |
| start_period | Start Period | vtiger_invoice_recurring_info | start_period | 5 | D~O | Recurring Invoice Information |
| end_period | End Period | vtiger_invoice_recurring_info | end_period | 5 | D~O~OTH~G~start_period~Start Period | Recurring Invoice Information |
| payment_duration | Payment Duration | vtiger_invoice_recurring_info | payment_duration | 16 | V~O | Recurring Invoice Information |
| invoicestatus | Invoice Status | vtiger_invoice_recurring_info | invoice_status | 15 | V~M | Recurring Invoice Information |
| last_recurring_date | Next Invoice Date | vtiger_invoice_recurring_info | last_recurring_date | 5 | D~O | Recurring Invoice Information |
| bill_country | Billing Country | vtiger_sobillads | bill_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_country | Shipping Country | vtiger_soshipads | ship_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_code | Billing Code | vtiger_sobillads | bill_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_code | Shipping Code | vtiger_soshipads | ship_code | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_state | Billing State | vtiger_sobillads | bill_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_state | Shipping State | vtiger_soshipads | ship_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_city | Billing City | vtiger_sobillads | bill_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_city | Shipping City | vtiger_soshipads | ship_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| bill_street | Billing Address | vtiger_sobillads | bill_street | 24 | V~M | LBL_ADDRESS_INFORMATION |
| ship_street | Shipping Address | vtiger_soshipads | ship_street | 24 | V~M | LBL_ADDRESS_INFORMATION |
| bill_pobox | Billing Po Box | vtiger_sobillads | bill_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| ship_pobox | Shipping Po Box | vtiger_soshipads | ship_pobox | 1 | V~O | LBL_ADDRESS_INFORMATION |
| productid | Item Name | vtiger_inventoryproductrel | productid | 10 | V~M | LBL_ITEM_DETAILS |
| quantity | Quantity | vtiger_inventoryproductrel | quantity | 7 | N~O | LBL_ITEM_DETAILS |
| listprice | List Price | vtiger_inventoryproductrel | listprice | 71 | N~O | LBL_ITEM_DETAILS |
| comment | Item Comment | vtiger_inventoryproductrel | comment | 19 | V~O | LBL_ITEM_DETAILS |
| discount_amount | Item Discount Amount | vtiger_inventoryproductrel | discount_amount | 71 | N~O | LBL_ITEM_DETAILS |
| discount_percent | Item Discount Percent | vtiger_inventoryproductrel | discount_percent | 7 | V~O | LBL_ITEM_DETAILS |
| tax1 | VAT | vtiger_inventoryproductrel | tax1 | 83 | V~O | LBL_ITEM_DETAILS |
| tax2 | Sales | vtiger_inventoryproductrel | tax2 | 83 | V~O | LBL_ITEM_DETAILS |
| tax3 | Service | vtiger_inventoryproductrel | tax3 | 83 | V~O | LBL_ITEM_DETAILS |
| hdnS_H_Percent | S&amp;H Percent | vtiger_salesorder | s_h_percent | 1 | N~O | LBL_ITEM_DETAILS |
| hdnDiscountAmount | Discount Amount | vtiger_salesorder | discount_amount | 72 | N~O | LBL_ITEM_DETAILS |
| hdnDiscountPercent | Discount Percent | vtiger_salesorder | discount_percent | 1 | N~O | LBL_ITEM_DETAILS |
| image | Image | vtiger_inventoryproductrel | image | 56 | V~O | LBL_ITEM_DETAILS |
| purchase_cost | Purchase Cost | vtiger_inventoryproductrel | purchase_cost | 71 | N~O | LBL_ITEM_DETAILS |
| margin | Margin | vtiger_inventoryproductrel | margin | 71 | N~O | LBL_ITEM_DETAILS |
| region_id | Tax Region | vtiger_salesorder | region_id | 16 | N~O | LBL_ITEM_DETAILS |
| usageunit | LBL_USAGE_UNIT | vtiger_inventoryproductrel | usageunit | 1 | V~O~LE~200 | LBL_ITEM_DETAILS |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS |
| reducedtaxrate | LBL_ELIGIBLE_FOR_REDUCED_TAX_RATE | vtiger_inventoryproductrel | reducedtaxrate | 56 | C~O | LBL_ITEM_DETAILS |
| tax4 | LBL_CONSUMPTION_TAX | vtiger_inventoryproductrel | tax4 | 83 | V~O | LBL_ITEM_DETAILS |
| terms_conditions | Terms &amp; Conditions | vtiger_salesorder | terms_conditions | 19 | V~O | LBL_TERMS_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_salesorder
- vtiger_crmentity
- vtiger_sobillads
- vtiger_soshipads
- vtiger_invoice_recurring_info
- vtiger_inventoryproductrel
- vtiger_crmentity_user_field

### ServiceContracts

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| subject | Subject | vtiger_servicecontracts | subject | 1 | V~M | LBL_SERVICE_CONTRACT_INFORMATION |
| contract_no | Contract No | vtiger_servicecontracts | contract_no | 4 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| sc_related_to | Related to | vtiger_servicecontracts | sc_related_to | 10 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_SERVICE_CONTRACT_INFORMATION |
| contract_type | Type | vtiger_servicecontracts | contract_type | 15 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| tracking_unit | Tracking Unit | vtiger_servicecontracts | tracking_unit | 15 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| start_date | Start Date | vtiger_servicecontracts | start_date | 5 | D~O | LBL_SERVICE_CONTRACT_INFORMATION |
| total_units | Total Units | vtiger_servicecontracts | total_units | 7 | NN~O | LBL_SERVICE_CONTRACT_INFORMATION |
| due_date | Due date | vtiger_servicecontracts | due_date | 23 | D~O | LBL_SERVICE_CONTRACT_INFORMATION |
| used_units | Used Units | vtiger_servicecontracts | used_units | 7 | NN~O | LBL_SERVICE_CONTRACT_INFORMATION |
| end_date | End Date | vtiger_servicecontracts | end_date | 5 | D~O | LBL_SERVICE_CONTRACT_INFORMATION |
| contract_status | Status | vtiger_servicecontracts | contract_status | 15 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| planned_duration | Planned Duration | vtiger_servicecontracts | planned_duration | 1 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| contract_priority | Priority | vtiger_servicecontracts | priority | 15 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| actual_duration | Actual Duration | vtiger_servicecontracts | actual_duration | 1 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| progress | Progress | vtiger_servicecontracts | progress | 9 | N~O~2~2 | LBL_SERVICE_CONTRACT_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_SERVICE_CONTRACT_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_SERVICE_CONTRACT_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_SERVICE_CONTRACT_INFORMATION |
| tags | tags | vtiger_servicecontracts | tags | 1 | V~O | LBL_SERVICE_CONTRACT_INFORMATION |

#### 関連テーブル

- vtiger_crmentity
- vtiger_servicecontracts
- vtiger_crmentity_user_field

### Services

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| servicename | Service Name | vtiger_service | servicename | 2 | V~M | LBL_SERVICE_INFORMATION |
| service_no | Service No | vtiger_service | service_no | 4 | V~O | LBL_SERVICE_INFORMATION |
| service_usageunit | Usage Unit | vtiger_service | service_usageunit | 15 | V~O | LBL_SERVICE_INFORMATION |
| discontinued | Service Active | vtiger_service | discontinued | 56 | V~O | LBL_SERVICE_INFORMATION |
| qty_per_unit | No of Units | vtiger_service | qty_per_unit | 1 | N~O | LBL_SERVICE_INFORMATION |
| website | Website | vtiger_service | website | 17 | V~O | LBL_SERVICE_INFORMATION |
| servicecategory | Service Category | vtiger_service | servicecategory | 15 | V~O | LBL_SERVICE_INFORMATION |
| assigned_user_id | Owner | vtiger_crmentity | smownerid | 53 | I~O | LBL_SERVICE_INFORMATION |
| sales_start_date | Sales Start Date | vtiger_service | sales_start_date | 5 | D~O | LBL_SERVICE_INFORMATION |
| sales_end_date | Sales End Date | vtiger_service | sales_end_date | 5 | D~O~OTH~GE~sales_start_date~Sales Start Date | LBL_SERVICE_INFORMATION |
| start_date | Support Start Date | vtiger_service | start_date | 5 | D~O | LBL_SERVICE_INFORMATION |
| expiry_date | Support Expiry Date | vtiger_service | expiry_date | 5 | D~O~OTH~GE~start_date~Start Date | LBL_SERVICE_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_SERVICE_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_SERVICE_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_SERVICE_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_SERVICE_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_SERVICE_INFORMATION |
| tags | tags | vtiger_service | tags | 1 | V~O | LBL_SERVICE_INFORMATION |
| unit_price | Price | vtiger_service | unit_price | 72 | N~O | LBL_PRICING_INFORMATION |
| commissionrate | Commission Rate | vtiger_service | commissionrate | 9 | N~O | LBL_PRICING_INFORMATION |
| taxclass | Taxes | vtiger_service | taxclass | 83 | V~O | LBL_PRICING_INFORMATION |
| purchase_cost | Purchase Cost | vtiger_service | purchase_cost | 71 | N~O | LBL_PRICING_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_service
- vtiger_crmentity
- vtiger_crmentity_user_field

### SMSNotifier

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| message | message | vtiger_smsnotifier | message | 21 | V~M | LBL_SMSNOTIFIER_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_SMSNOTIFIER_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_SMSNOTIFIER_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_SMSNOTIFIER_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_SMSNOTIFIER_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_SMSNOTIFIER_INFORMATION |

#### 関連テーブル

- vtiger_crmentity
- vtiger_smsnotifier

### Users

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| user_name | User Name | vtiger_users | user_name | 106 | V~M | LBL_USERLOGIN_ROLE |
| email1 | Email | vtiger_users | email1 | 104 | E~M | LBL_USERLOGIN_ROLE |
| last_name | Last Name | vtiger_users | last_name | 2 | V~M | LBL_USERLOGIN_ROLE |
| first_name | First Name | vtiger_users | first_name | 1 | V~O | LBL_USERLOGIN_ROLE |
| user_password | Password | vtiger_users | user_password | 99 | P~M | LBL_USERLOGIN_ROLE |
| confirm_password | Confirm Password | vtiger_users | confirm_password | 99 | P~M | LBL_USERLOGIN_ROLE |
| is_admin | Admin | vtiger_users | is_admin | 156 | V~O | LBL_USERLOGIN_ROLE |
| roleid | Role | vtiger_user2role | roleid | 98 | V~M | LBL_USERLOGIN_ROLE |
| lead_view | Default Lead View | vtiger_users | lead_view | 16 | V~O | LBL_USERLOGIN_ROLE |
| status | Status | vtiger_users | status | 115 | V~O | LBL_USERLOGIN_ROLE |
| end_hour | Day ends at | vtiger_users | end_hour | 116 | V~O | LBL_USERLOGIN_ROLE |
| is_owner | Account Owner | vtiger_users | is_owner | 1 | V~O | LBL_USERLOGIN_ROLE |
| dayoftheweek | Starting Day of the week | vtiger_users | dayoftheweek | 16 | V~O | LBL_CALENDAR_SETTINGS |
| start_hour | Day starts at | vtiger_users | start_hour | 16 | V~O | LBL_CALENDAR_SETTINGS |
| date_format | Date Format | vtiger_users | date_format | 16 | V~O | LBL_CALENDAR_SETTINGS |
| hour_format | Calendar Hour Format | vtiger_users | hour_format | 16 | V~O | LBL_CALENDAR_SETTINGS |
| time_zone | Time Zone | vtiger_users | time_zone | 16 | V~O | LBL_CALENDAR_SETTINGS |
| activity_view | Default Activity View | vtiger_users | activity_view | 16 | V~O | LBL_CALENDAR_SETTINGS |
| callduration | Default Call Duration | vtiger_users | callduration | 16 | V~O | LBL_CALENDAR_SETTINGS |
| othereventduration | Other Event Duration | vtiger_users | othereventduration | 16 | V~O | LBL_CALENDAR_SETTINGS |
| defaulteventstatus | Default Event Status | vtiger_users | defaulteventstatus | 15 | V~O | LBL_CALENDAR_SETTINGS |
| defaultactivitytype | Default Activity Type | vtiger_users | defaultactivitytype | 15 | V~O | LBL_CALENDAR_SETTINGS |
| reminder_interval | Reminder Interval | vtiger_users | reminder_interval | 16 | V~O | LBL_CALENDAR_SETTINGS |
| calendarsharedtype | Calendar Shared Type | vtiger_users | calendarsharedtype | 16 | V~O | LBL_CALENDAR_SETTINGS |
| hidecompletedevents | LBL_HIDE_COMPLETED_EVENTS | vtiger_users | hidecompletedevents | 56 | C~O | LBL_CALENDAR_SETTINGS |
| defaultcalendarview | Default Calendar View | vtiger_users | defaultcalendarview | 16 | V~O | LBL_CALENDAR_SETTINGS |
| currency_id | Currency | vtiger_users | currency_id | 117 | I~O | LBL_CURRENCY_CONFIGURATION |
| currency_grouping_pattern | Digit Grouping Pattern | vtiger_users | currency_grouping_pattern | 16 | V~O | LBL_CURRENCY_CONFIGURATION |
| currency_decimal_separator | Decimal Separator | vtiger_users | currency_decimal_separator | 16 | V~O | LBL_CURRENCY_CONFIGURATION |
| currency_grouping_separator | Digit Grouping Separator | vtiger_users | currency_grouping_separator | 16 | V~O | LBL_CURRENCY_CONFIGURATION |
| currency_symbol_placement | Symbol Placement | vtiger_users | currency_symbol_placement | 16 | V~O | LBL_CURRENCY_CONFIGURATION |
| no_of_currency_decimals | Number Of Currency Decimals | vtiger_users | no_of_currency_decimals | 16 | V~O | LBL_CURRENCY_CONFIGURATION |
| truncate_trailing_zeros | Truncate Trailing Zeros | vtiger_users | truncate_trailing_zeros | 56 | V~O | LBL_CURRENCY_CONFIGURATION |
| title | Title | vtiger_users | title | 1 | V~O | LBL_MORE_INFORMATION |
| phone_fax | Fax | vtiger_users | phone_fax | 11 | V~O | LBL_MORE_INFORMATION |
| department | Department | vtiger_users | department | 1 | V~O | LBL_MORE_INFORMATION |
| email2 | Other Email | vtiger_users | email2 | 13 | E~O | LBL_MORE_INFORMATION |
| phone_work | Office Phone | vtiger_users | phone_work | 11 | V~O | LBL_MORE_INFORMATION |
| secondaryemail | Secondary Email | vtiger_users | secondaryemail | 13 | E~O | LBL_MORE_INFORMATION |
| phone_mobile | Mobile | vtiger_users | phone_mobile | 11 | V~O | LBL_MORE_INFORMATION |
| reports_to_id | Reports To | vtiger_users | reports_to_id | 101 | V~O | LBL_MORE_INFORMATION |
| phone_home | Home Phone | vtiger_users | phone_home | 11 | V~O | LBL_MORE_INFORMATION |
| phone_other | Other Phone | vtiger_users | phone_other | 11 | V~O | LBL_MORE_INFORMATION |
| signature | Signature | vtiger_users | signature | 21 | V~O | LBL_MORE_INFORMATION |
| description | Documents | vtiger_users | description | 21 | V~O | LBL_MORE_INFORMATION |
| internal_mailer | INTERNAL_MAIL_COMPOSER | vtiger_users | internal_mailer | 56 | V~O | LBL_MORE_INFORMATION |
| theme | Theme | vtiger_users | theme | 31 | V~O | LBL_MORE_INFORMATION |
| language | Language | vtiger_users | language | 32 | V~O | LBL_MORE_INFORMATION |
| default_record_view | Default Record View | vtiger_users | default_record_view | 16 | V~O | LBL_MORE_INFORMATION |
| leftpanelhide | Left Panel Hide | vtiger_users | leftpanelhide | 56 | V~O | LBL_MORE_INFORMATION |
| rowheight | Row Height | vtiger_users | rowheight | 16 | V~O | LBL_MORE_INFORMATION |
| defaultlandingpage | Default Landing Page | vtiger_users | defaultlandingpage | 32 | V~O | LBL_MORE_INFORMATION |
| userlabel | User Label | vtiger_users | userlabel | 1 | V~O | LBL_MORE_INFORMATION |
| address_country | Country | vtiger_users | address_country | 1 | V~O | LBL_ADDRESS_INFORMATION |
| address_postalcode | Postal Code | vtiger_users | address_postalcode | 1 | V~O | LBL_ADDRESS_INFORMATION |
| address_state | State | vtiger_users | address_state | 1 | V~O | LBL_ADDRESS_INFORMATION |
| address_city | City | vtiger_users | address_city | 1 | V~O | LBL_ADDRESS_INFORMATION |
| address_street | Street Address | vtiger_users | address_street | 21 | V~O | LBL_ADDRESS_INFORMATION |
| imagename | User Image | vtiger_users | imagename | 105 | V~O | LBL_USER_IMAGE_INFORMATION |
| accesskey | Webservice Access Key | vtiger_users | accesskey | 3 | V~O | LBL_USER_ADV_OPTIONS |

#### 関連テーブル

- vtiger_users
- vtiger_user2role

### Vendors

#### フィールド

| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |
|------------|-------|-------|--------|---------|-----------|-------|
| vendorname | Vendor Name | vtiger_vendor | vendorname | 2 | V~M | LBL_VENDOR_INFORMATION |
| vendor_no | Vendor No | vtiger_vendor | vendor_no | 4 | V~O | LBL_VENDOR_INFORMATION |
| email | Email | vtiger_vendor | email | 13 | E~O | LBL_VENDOR_INFORMATION |
| phone | Phone | vtiger_vendor | phone | 1 | V~O | LBL_VENDOR_INFORMATION |
| glacct | GL Account | vtiger_vendor | glacct | 15 | V~O | LBL_VENDOR_INFORMATION |
| website | Website | vtiger_vendor | website | 17 | V~O | LBL_VENDOR_INFORMATION |
| createdtime | Created Time | vtiger_crmentity | createdtime | 70 | DT~O | LBL_VENDOR_INFORMATION |
| category | Category | vtiger_vendor | category | 1 | V~O | LBL_VENDOR_INFORMATION |
| modifiedtime | Modified Time | vtiger_crmentity | modifiedtime | 70 | DT~O | LBL_VENDOR_INFORMATION |
| modifiedby | Last Modified By | vtiger_crmentity | modifiedby | 52 | V~O | LBL_VENDOR_INFORMATION |
| assigned_user_id | Assigned To | vtiger_crmentity | smownerid | 53 | V~M | LBL_VENDOR_INFORMATION |
| source | Source | vtiger_crmentity | source | 1 | V~O | LBL_VENDOR_INFORMATION |
| starred | starred | vtiger_crmentity_user_field | starred | 56 | C~O | LBL_VENDOR_INFORMATION |
| tags | tags | vtiger_vendor | tags | 1 | V~O | LBL_VENDOR_INFORMATION |
| country | Country | vtiger_vendor | country | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION |
| postalcode | Postal Code | vtiger_vendor | postalcode | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION |
| state | State | vtiger_vendor | state | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION |
| city | City | vtiger_vendor | city | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION |
| street | Street | vtiger_vendor | street | 21 | V~O | LBL_VENDOR_ADDRESS_INFORMATION |
| pobox | Po Box | vtiger_vendor | pobox | 1 | V~O | LBL_VENDOR_ADDRESS_INFORMATION |
| description | Description | vtiger_crmentity | description | 19 | V~O | LBL_DESCRIPTION_INFORMATION |

#### 関連テーブル

- vtiger_vendor
- vtiger_crmentity
- vtiger_crmentity_user_field

### Webforms

### Webmails

### WSAPP

## テーブル詳細

### vtiger_account

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , ,  |

### vtiger_accountbillads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_accountrating

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_accountscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_accountshipads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_accounttype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_accounttype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_actionmapping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_activity

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , , , , , , , , , ,  |

### vtiger_activity_recurring_info

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_activity_reminder

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_activity_reminder_popup

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_activity_view

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_activity_view_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_activitycf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_activityproductrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_activitytype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_activitytype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_announcement

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_app2tab

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_assets

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , , ,  |

### vtiger_assetscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_assetstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_assetstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_asterisk

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_asteriskextensions

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_asteriskincomingcalls

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_asteriskincomingevents

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_attachments

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_attachmentsfolder

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_attachmentsfolder_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_audit_trial

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_blocks

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_blocks_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_calendar_default_activitytypes

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_calendar_default_activitytypes_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_calendar_user_activitytypes

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_calendar_user_activitytypes_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_calendarsharedtype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_calendarsharedtype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_callduration

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_callduration_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_campaign

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , ,  |

### vtiger_campaignaccountrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_campaigncontrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_campaignleadrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_campaignrelstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_campaignrelstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_campaignscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_campaignstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_campaignstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_campaigntype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_campaigntype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_carrier

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_carrier_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_cntactivityrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_contactaddress

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_contactdetails

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , ,  |

### vtiger_contactscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_contactsubdetails

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_contpotentialrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_contract_priority

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_contract_priority_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_contract_status

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_contract_status_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_contract_type

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_contract_type_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_convertleadmapping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_convertpotentialmapping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_crmentity

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , ,  |

### vtiger_crmentity_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_crmentity_user_field

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_crmentityrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_crmsetup

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_cron_task

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_currencies

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_currencies_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_currency

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_currency_decimal_separator

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_currency_decimal_separator_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_currency_grouping_pattern

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_currency_grouping_pattern_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_currency_grouping_separator

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_currency_grouping_separator_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_currency_info

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_currency_info_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_currency_symbol_placement

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_currency_symbol_placement_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_customaction

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_customerdetails

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_customerportal_fields

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_customerportal_prefs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_customerportal_relatedmoduleinfo

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_customerportal_settings

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_customerportal_tabs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_customview

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_customview_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_cv2group

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_cv2role

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_cv2rs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_cv2users

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_cvadvfilter

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_cvadvfilter_grouping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_cvcolumnlist

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_cvstdfilter

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_dailyreports

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , ,  |

### vtiger_dailyreportscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_dailyreportsstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_dailyreportsstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_dashboard_tabs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_datashare_grp2grp

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_grp2role

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_grp2rs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_module_rel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_datashare_relatedmodule_permission

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_datashare_relatedmodules

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_relatedmodules_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_datashare_role2group

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_role2role

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_role2rs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_rs2grp

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_rs2role

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_datashare_rs2rs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_date_format

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_date_format_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_dayoftheweek

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_dayoftheweek_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_def_org_field

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , ,  |

### vtiger_def_org_share

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_def_org_share_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_default_record_view

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_default_record_view_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_defaultactivitytype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_defaultactivitytype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_defaultcalendarview

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_defaultcalendarview_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_defaultcv

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_defaulteventstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_defaulteventstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_defaultlandingpage

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_defaultlandingpage_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_duration_minutes

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_duration_minutes_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_durationhrs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_durationmins

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_email_access

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_email_track

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_emaildetails

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_emails_recipientprefs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_emailslookup

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_emailtemplates

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_emailtemplates_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_entityname

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_eventhandler_module

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_eventhandler_module_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_eventhandlers

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_eventhandlers_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_eventstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_eventstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_expectedresponse

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_expectedresponse_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_faq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , ,  |

### vtiger_faqcategories

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_faqcategories_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_faqcf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_faqcomments

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_faqstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_faqstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_feedback

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_field

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_field_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_fieldmodulerel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_freetagged_objects

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , ,  |

### vtiger_freetags

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_freetags_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_glacct

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_glacct_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_google_event_calendar_mapping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_google_oauth2

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_google_sync_fieldmapping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_google_sync_settings

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_group2grouprel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_group2role

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_group2rs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_groups

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_home_layout

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_homedashbd

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_homedefault

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_homemodule

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_homemoduleflds

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_homereportchart

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_homerss

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_homestuff

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_homestuff_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_hour_format

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_hour_format_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_import_locks

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_import_maps

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_import_queue

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_industry

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_industry_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_inventory_tandc

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_inventory_tandc_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_inventorycharges

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_inventorychargesrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_inventorynotification

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_inventorynotification_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_inventoryproductrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_inventoryproductrel_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_inventoryshippingrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_inventorysubproductrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_inventorytaxinfo

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_inventorytaxinfo_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_invitees

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_invoice

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , ,  |

### vtiger_invoice_recurring_info

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_invoicebillads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_invoicecf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_invoiceshipads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_invoicestatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_invoicestatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_invoicestatushistory

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_language

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_language_rules

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_language_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_lead_view

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_lead_view_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_leadaddress

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_leaddetails

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , ,  |

### vtiger_leadscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_leadsource

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_leadsource_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_leadstage

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_leadstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_leadstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_leadsubdetails

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_links

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_links_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_loginhistory

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_mail_accounts

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_mailer_queue

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_mailer_queueattachments

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_mailer_queueinfo

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_mailmanager_mailattachments

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_mailmanager_mailrecord

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_mailmanager_mailrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_mailscanner

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_mailscanner_actions

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_mailscanner_folders

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_mailscanner_ids

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_mailscanner_ruleactions

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_mailscanner_rules

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_manufacturer

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_manufacturer_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_mobile_alerts

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_modcomments

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , , , ,  |

### vtiger_modcommentscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_modentity_num

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_modentity_num_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_modtracker_basic

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_modtracker_detail

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_modtracker_relations

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_modtracker_tabs

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_module_dashboard_widgets

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_no_of_currency_decimals

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_no_of_currency_decimals_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_notebook_contents

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_notes

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , ,  |

### vtiger_notescf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_notificationscheduler

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_notificationscheduler_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_opportunity_type

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_opportunity_type_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_opportunitystage

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_org_share_action2tab

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_org_share_action_mapping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_organizationdetails

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_organizationdetails_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_othereventduration

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_othereventduration_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_parenttab

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_parenttabrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_payment_duration

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_payment_duration_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_pdftemplates

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_pdftemplates_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_pdftemplatescf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_picklist

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_picklist_dependency

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_picklist_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_picklist_transitions

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_picklistvalues_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_pobillads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_portal

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_portalinfo

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_poshipads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_postatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_postatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_postatushistory

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_potential

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , , , ,  |

### vtiger_potentialscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_potstagehistory

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_pricebook

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_pricebookcf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_pricebookproductrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_priority

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_productcategory

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_productcategory_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_productcf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_productcurrencyrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_products

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_producttaxrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_profile

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_profile2field

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , ,  |

### vtiger_profile2globalpermissions

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_profile2standardpermissions

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , ,  |

### vtiger_profile2tab

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_profile2utility

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , ,  |

### vtiger_profile_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_progress

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_progress_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_project

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , ,  |

### vtiger_projectcf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projectmilestone

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , ,  |

### vtiger_projectmilestonecf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projectmilestonetype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projectmilestonetype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_projectpriority

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projectpriority_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_projectstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projectstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_projecttask

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , ,  |

### vtiger_projecttask_status_color

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projecttaskcf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projecttaskpriority

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projecttaskpriority_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_projecttaskprogress

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projecttaskprogress_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_projecttaskstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projecttaskstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_projecttasktype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projecttasktype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_projecttype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_projecttype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_purchaseorder

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , ,  |

### vtiger_purchaseordercf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_quotes

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , ,  |

### vtiger_quotesbillads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_quotescf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_quotesshipads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_quotestage

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_quotestage_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_quotestagehistory

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_rating

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_rating_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_recurring_frequency

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_recurring_frequency_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_recurringevents

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_recurringtype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_recurringtype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_relatedlists

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_relatedlists_rb

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_relatedlists_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_relcriteria

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_relcriteria_grouping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_reminder_interval

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_reminder_interval_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_report

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_report_sharegroups

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_report_sharerole

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_report_sharers

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_report_shareusers

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_reportdatefilter

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_reportfilters

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_reportfolder

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_reportgroupbycolumn

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_reportmodules

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_reportsharing

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_reportsortcol

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_reportsterm

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_reportsterm_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_reportsummary

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_reporttype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_role

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_role2picklist

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_role2profile

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_role_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_rollupcomments_settings

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_rowheight

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_rowheight_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_rss

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_sales_stage

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_sales_stage_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_salesmanactivityrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_salesmanattachmentsrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_salesmanticketrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_salesorder

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , ,  |

### vtiger_salesordercf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_salutationtype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_salutationtype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_scheduled_reports

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_schedulereports

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_seactivityrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_seactivityrel_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_seattachmentsrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , ,  |

### vtiger_selectcolumn

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_selectquery

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_selectquery_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_senotesrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_seproductsrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_service

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_service_usageunit

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_service_usageunit_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_servicecategory

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_servicecategory_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_servicecf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_servicecontracts

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , ,  |

### vtiger_servicecontractscf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_seticketsrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_settings_blocks

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_settings_blocks_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_settings_field

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_settings_field_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_sharedcalendar

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_shareduserinfo

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_shippingtaxinfo

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_shippingtaxinfo_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_shorturls

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_smsnotifier

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_smsnotifier_servers

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_smsnotifier_status

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_smsnotifiercf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_soapservice

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_sobillads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_soshipads

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_sostatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_sostatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_sostatushistory

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_sqltimelog

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_start_hour

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_start_hour_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_status

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_status_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_systems

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_tab

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_tab_info

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_taskpriority

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_taskpriority_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_taskstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_taskstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_taxclass

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_taxclass_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_taxregions

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ticketcategories

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ticketcategories_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_ticketcf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ticketcomments

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_ticketpriorities

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ticketpriorities_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_ticketseverities

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ticketseverities_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_ticketstatus

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ticketstatus_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_time_zone

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_time_zone_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_tmp_read_group_rel_sharing_per

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_tmp_read_group_sharing_per

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_tmp_read_user_rel_sharing_per

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_tmp_read_user_sharing_per

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_tmp_write_group_rel_sharing_per

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_tmp_write_group_sharing_per

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_tmp_write_user_rel_sharing_per

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_tmp_write_user_sharing_per

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_tracker

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_tracking_unit

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_tracking_unit_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_troubletickets

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , , , , , ,  |

### vtiger_usageunit

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_usageunit_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_user2mergefields

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_user2role

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_user_module_preferences

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_users

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_users2group

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , ,  |

### vtiger_users_last_import

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_users_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_vendor

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , , , , ,  |

### vtiger_vendorcf

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_vendorcontactrel

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_version

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_version_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_visibility

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_visibility_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_webform_file_fields

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_webforms

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_webforms_field

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , , ,  |

### vtiger_wordtemplates

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ws_entity

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ws_entity_fieldtype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_ws_entity_fieldtype_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_ws_entity_name

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ws_entity_referencetype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_ws_entity_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_ws_entity_tables

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_ws_fieldinfo

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ws_fieldtype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_ws_operation

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_ws_operation_parameters

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_ws_operation_seq

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |

### vtiger_ws_referencetype

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | ,  |

### vtiger_ws_userauthtoken

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique | , ,  |

### vtiger_wsapp

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_wsapp_handlerdetails

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_wsapp_logs_basic

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_wsapp_logs_details

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_wsapp_queuerecords

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

### vtiger_wsapp_recordmapping

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |

### vtiger_wsapp_sync_state

#### カラム

| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |
|--------|------|------|-----|---------|-------|
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |
|  |  | No |  | None |  |

#### インデックス

| インデックス名 | タイプ | カラム |
|------------|------|----------|
|  | Unique |  |


---
*UpdateDBSchema.phpツールによって生成*
