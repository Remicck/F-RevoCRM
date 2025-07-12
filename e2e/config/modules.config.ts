// モジュール設定ファイル
// 各モジュールのテスト設定を定義

/** フィールドの入力タイプ */
export type FieldInputType = 'text' | 'textarea' | 'select' | 'date' | 'number' | 'checkbox';

/** テスト値を生成する関数 */
export type TestValueFunction = (timestamp?: number) => string;

/** フィールド設定 */
export interface FieldConfig {
  /** CSSセレクター */
  selector: string;
  /** 入力タイプ */
  inputType: FieldInputType;
  /** テスト用の値（固定値または関数） */
  testValue: string | TestValueFunction | null;
}

/** モジュール設定 */
export interface ModuleConfig {
  /** モジュール名 */
  moduleName: string;
  /** モジュールの表示名 */
  moduleLabel: string;
  /** 作成ボタンのテキスト */
  createButtonText: string;
  /** 一覧ページのタイトル */
  listPageTitle: RegExp;
  /** 必須フィールド */
  requiredFields: Record<string, FieldConfig>;
  /** オプションフィールド */
  optionalFields?: Record<string, FieldConfig>;
}

/** モジュール設定のコレクション */
export type ModuleConfigs = Record<string, ModuleConfig>;

export const moduleConfigs: ModuleConfigs = {
  Accounts: {
    moduleName: 'Accounts',
    moduleLabel: '顧客企業',
    createButtonText: '顧客企業の追加',
    listPageTitle: /顧客企業/,
    requiredFields: {
      accountname: {
        selector: '#Accounts_editView_fieldName_accountname',
        inputType: 'text',
        testValue: (timestamp) => `テスト株式会社_${timestamp}`
      }
    },
    optionalFields: {
      website: {
        selector: '#Accounts_editView_fieldName_website',
        inputType: 'text',
        testValue: () => 'https://example.com'
      },
      phone: {
        selector: '#Accounts_editView_fieldName_phone',
        inputType: 'text',
        testValue: () => '03-1234-5678'
      },
      email: {
        selector: '#Accounts_editView_fieldName_email1',
        inputType: 'text',
        testValue: (timestamp) => `contact${timestamp}@example.com`
      }
    }
  },
  
  Contacts: {
    moduleName: 'Contacts',
    moduleLabel: '顧客担当者',
    createButtonText: '顧客担当者の追加',
    listPageTitle: /顧客担当者/,
    requiredFields: {
      lastname: {
        selector: 'input[name="lastname"]',
        inputType: 'text',
        testValue: () => 'テスト'
      },
      firstname: {
        selector: 'input[name="firstname"]',
        inputType: 'text',
        testValue: () => '太郎'
      }
    },
    optionalFields: {
      email: {
        selector: 'input[name="email"]',
        inputType: 'text',
        testValue: (timestamp) => `test${timestamp}@example.com`
      },
      mobile: {
        selector: 'input[name="mobile"]',
        inputType: 'text',
        testValue: () => '090-1234-5678'
      }
    }
  },
  
  Leads: {
    moduleName: 'Leads',
    moduleLabel: 'リード',
    createButtonText: 'リードの追加',
    listPageTitle: /リード/,
    requiredFields: {
      lastname: {
        selector: 'input[name="lastname"]',
        inputType: 'text',
        testValue: () => 'リード'
      },
      firstname: {
        selector: 'input[name="firstname"]',
        inputType: 'text',
        testValue: () => '太郎'
      },
      company: {
        selector: 'input[name="company"]',
        inputType: 'text',
        testValue: (timestamp) => `テスト企業_${timestamp}`
      }
    },
    optionalFields: {
      email: {
        selector: 'input[name="email"]',
        inputType: 'text',
        testValue: (timestamp) => `lead${timestamp}@example.com`
      },
      phone: {
        selector: 'input[name="phone"]',
        inputType: 'text',
        testValue: () => '080-1234-5678'
      }
    }
  },
  
  Potentials: {
    moduleName: 'Potentials',
    moduleLabel: '案件',
    createButtonText: '案件の追加',
    listPageTitle: /案件/,
    requiredFields: {
      potentialname: {
        selector: 'input[name="potentialname"]',
        inputType: 'text',
        testValue: (timestamp) => `テスト案件_${timestamp}`
      },
      sales_stage: {
        selector: 'select[name="sales_stage"]',
        inputType: 'select',
        testValue: () => 'Prospecting'
      },
      closingdate: {
        selector: 'input[name="closingdate"]',
        inputType: 'date',
        testValue: () => {
          const date = new Date();
          date.setMonth(date.getMonth() + 1);
          return date.toISOString().split('T')[0]!;
        }
      }
    },
    optionalFields: {
      amount: {
        selector: 'input[name="amount"]',
        inputType: 'number',
        testValue: () => '1000000'
      }
    }
  },
  
  HelpDesk: {
    moduleName: 'HelpDesk',
    moduleLabel: 'チケット',
    createButtonText: 'チケットの追加',
    listPageTitle: /チケット/,
    requiredFields: {
      ticket_title: {
        selector: 'input[name="ticket_title"]',
        inputType: 'text',
        testValue: (timestamp) => `テストチケット_${timestamp}`
      },
      ticketstatus: {
        selector: 'select[name="ticketstatus"]',
        inputType: 'select',
        testValue: () => 'Open'
      },
      ticketpriorities: {
        selector: 'select[name="ticketpriorities"]',
        inputType: 'select',
        testValue: () => 'High'
      }
    },
    optionalFields: {
      description: {
        selector: 'textarea[name="description"]',
        inputType: 'textarea',
        testValue: () => 'これはテストチケットの説明です。'
      }
    }
  },
  
  Products: {
    moduleName: 'Products',
    moduleLabel: '製品',
    createButtonText: '製品の追加',
    listPageTitle: /製品/,
    requiredFields: {
      productname: {
        selector: 'input[name="productname"]',
        inputType: 'text',
        testValue: (timestamp) => `テスト商品_${timestamp}`
      }
    },
    optionalFields: {
      unit_price: {
        selector: 'input[name="unit_price"]',
        inputType: 'number',
        testValue: () => '10000'
      },
      qtyinstock: {
        selector: 'input[name="qtyinstock"]',
        inputType: 'number',
        testValue: () => '100'
      }
    }
  },
  
  Services: {
    moduleName: 'Services',
    moduleLabel: 'サービス',
    createButtonText: 'サービスの追加',
    listPageTitle: /サービス/,
    requiredFields: {
      servicename: {
        selector: 'input[name="servicename"]',
        inputType: 'text',
        testValue: (timestamp) => `テストサービス_${timestamp}`
      }
    },
    optionalFields: {
      unit_price: {
        selector: 'input[name="unit_price"]',
        inputType: 'number',
        testValue: () => '50000'
      }
    }
  },
  
  Project: {
    moduleName: 'Project',
    moduleLabel: 'プロジェクト',
    createButtonText: 'プロジェクトの追加',
    listPageTitle: /プロジェクト/,
    requiredFields: {
      projectname: {
        selector: 'input[name="projectname"]',
        inputType: 'text',
        testValue: (timestamp) => `テストプロジェクト_${timestamp}`
      },
      projectstatus: {
        selector: 'select[name="projectstatus"]',
        inputType: 'select',
        testValue: () => 'prospecting'
      }
    },
    optionalFields: {
      startdate: {
        selector: 'input[name="startdate"]',
        inputType: 'date',
        testValue: () => new Date().toISOString().split('T')[0]!
      },
      targetenddate: {
        selector: 'input[name="targetenddate"]',
        inputType: 'date',
        testValue: () => {
          const date = new Date();
          date.setMonth(date.getMonth() + 3);
          return date.toISOString().split('T')[0]!;
        }
      }
    }
  },
  
  Events: {
    moduleName: 'Calendar',
    moduleLabel: '活動',
    createButtonText: '活動の追加',
    listPageTitle: /活動/,
    requiredFields: {
      subject: {
        selector: 'input[name="subject"]',
        inputType: 'text',
        testValue: (timestamp) => `テストイベント_${timestamp}`
      },
      date_start: {
        selector: 'input[name="date_start"]',
        inputType: 'date',
        testValue: () => new Date().toISOString().split('T')[0]!
      },
      time_start: {
        selector: 'input[name="time_start"]',
        inputType: 'text',
        testValue: () => '10:00'
      },
      due_date: {
        selector: 'input[name="due_date"]',
        inputType: 'date',
        testValue: () => new Date().toISOString().split('T')[0]!
      },
      taskstatus: {
        selector: 'select[name="taskstatus"]',
        inputType: 'select',
        testValue: () => 'Not Started'
      }
    },
    optionalFields: {
      location: {
        selector: 'input[name="location"]',
        inputType: 'text',
        testValue: () => '会議室A'
      },
      description: {
        selector: 'textarea[name="description"]',
        inputType: 'textarea',
        testValue: () => 'テストイベントの説明'
      }
    }
  },
  
  ProjectTask: {
    moduleName: 'ProjectTask',
    moduleLabel: 'タスク',
    createButtonText: 'プロジェクトタスクの追加',
    listPageTitle: /タスク/,
    requiredFields: {
      projecttaskname: {
        selector: 'input[name="projecttaskname"]',
        inputType: 'text',
        testValue: (timestamp) => `テストタスク_${timestamp}`
      }
    },
    optionalFields: {
      projectid: {
        selector: 'select[name="projectid"]',
        inputType: 'select',
        testValue: null // プロジェクトが必要
      },
      projecttaskpriority: {
        selector: 'select[name="projecttaskpriority"]',
        inputType: 'select',
        testValue: () => 'High'
      },
      projecttasktype: {
        selector: 'select[name="projecttasktype"]',
        inputType: 'select',
        testValue: () => 'operative'
      },
      startdate: {
        selector: 'input[name="startdate"]',
        inputType: 'date',
        testValue: () => new Date().toISOString().split('T')[0]!
      },
      enddate: {
        selector: 'input[name="enddate"]',
        inputType: 'date',
        testValue: () => {
          const date = new Date();
          date.setDate(date.getDate() + 7);
          return date.toISOString().split('T')[0]!;
        }
      }
    }
  },
  
  ProjectMilestone: {
    moduleName: 'ProjectMilestone',
    moduleLabel: 'プロジェクトマイルストーン',
    createButtonText: 'プロジェクトマイルストーンの追加',
    listPageTitle: /プロジェクトマイルストーン/,
    requiredFields: {
      projectmilestonename: {
        selector: 'input[name="projectmilestonename"]',
        inputType: 'text',
        testValue: (timestamp) => `テストマイルストーン_${timestamp}`
      },
      projectid: {
        selector: 'select[name="projectid"]',
        inputType: 'select',
        testValue: null // プロジェクトが必要
      }
    },
    optionalFields: {
      projectmilestonedate: {
        selector: 'input[name="projectmilestonedate"]',
        inputType: 'date',
        testValue: () => {
          const date = new Date();
          date.setMonth(date.getMonth() + 1);
          return date.toISOString().split('T')[0]!;
        }
      },
      projectmilestonetype: {
        selector: 'select[name="projectmilestonetype"]',
        inputType: 'select',
        testValue: () => 'administrative'
      }
    }
  },
  
  Vendors: {
    moduleName: 'Vendors',
    moduleLabel: '発注先',
    createButtonText: '発注先の追加',
    listPageTitle: /発注先/,
    requiredFields: {
      vendorname: {
        selector: 'input[name="vendorname"]',
        inputType: 'text',
        testValue: (timestamp) => `テスト仕入先_${timestamp}`
      }
    },
    optionalFields: {
      email: {
        selector: 'input[name="email"]',
        inputType: 'text',
        testValue: (timestamp) => `vendor${timestamp}@example.com`
      },
      phone: {
        selector: 'input[name="phone"]',
        inputType: 'text',
        testValue: () => '03-9876-5432'
      },
      website: {
        selector: 'input[name="website"]',
        inputType: 'text',
        testValue: () => 'https://vendor-example.com'
      },
      city: {
        selector: 'input[name="city"]',
        inputType: 'text',
        testValue: () => '東京'
      }
    }
  },
  
  PriceBooks: {
    moduleName: 'PriceBooks',
    moduleLabel: '価格表',
    createButtonText: '価格表の追加',
    listPageTitle: /価格表/,
    requiredFields: {
      bookname: {
        selector: 'input[name="bookname"]',
        inputType: 'text',
        testValue: (timestamp) => `テスト価格表_${timestamp}`
      },
      currency_id: {
        selector: 'select[name="currency_id"]',
        inputType: 'select',
        testValue: () => '1' // JPY
      }
    },
    optionalFields: {
      active: {
        selector: 'input[name="active"]',
        inputType: 'checkbox',
        testValue: () => 'true'
      },
      description: {
        selector: 'textarea[name="description"]',
        inputType: 'textarea',
        testValue: () => 'テスト価格表の説明'
      }
    }
  },
  
  PurchaseOrder: {
    moduleName: 'PurchaseOrder',
    moduleLabel: '発注書',
    createButtonText: '発注書の追加',
    listPageTitle: /発注書/,
    requiredFields: {
      subject: {
        selector: 'input[name="subject"]',
        inputType: 'text',
        testValue: (timestamp) => `テスト発注書_${timestamp}`
      },
      vendor_id: {
        selector: 'select[name="vendor_id"]',
        inputType: 'select',
        testValue: null // 仕入先が必要
      },
      postatus: {
        selector: 'select[name="postatus"]',
        inputType: 'select',
        testValue: () => 'Created'
      },
      bill_street: {
        selector: 'textarea[name="bill_street"]',
        inputType: 'textarea',
        testValue: () => '東京都千代田区丸の内1-1-1'
      },
      ship_street: {
        selector: 'textarea[name="ship_street"]',
        inputType: 'textarea',
        testValue: () => '東京都千代田区丸の内1-1-1'
      }
    },
    optionalFields: {
      duedate: {
        selector: 'input[name="duedate"]',
        inputType: 'date',
        testValue: () => {
          const date = new Date();
          date.setDate(date.getDate() + 30);
          return date.toISOString().split('T')[0]!;
        }
      },
      carrier: {
        selector: 'select[name="carrier"]',
        inputType: 'select',
        testValue: () => 'FedEx'
      }
    }
  },
  
  SalesOrder: {
    moduleName: 'SalesOrder',
    moduleLabel: '受注',
    createButtonText: '受注の追加',
    listPageTitle: /受注/,
    requiredFields: {
      subject: {
        selector: 'input[name="subject"]',
        inputType: 'text',
        testValue: (timestamp) => `テスト受注_${timestamp}`
      },
      account_id: {
        selector: 'select[name="account_id"]',
        inputType: 'select',
        testValue: null // 顧客企業が必要
      },
      sostatus: {
        selector: 'select[name="sostatus"]',
        inputType: 'select',
        testValue: () => 'Created'
      },
      bill_street: {
        selector: 'textarea[name="bill_street"]',
        inputType: 'textarea',
        testValue: () => '東京都渋谷区渋谷2-15-1'
      },
      ship_street: {
        selector: 'textarea[name="ship_street"]',
        inputType: 'textarea',
        testValue: () => '東京都渋谷区渋谷2-15-1'
      }
    },
    optionalFields: {
      duedate: {
        selector: 'input[name="duedate"]',
        inputType: 'date',
        testValue: () => {
          const date = new Date();
          date.setDate(date.getDate() + 14);
          return date.toISOString().split('T')[0]!;
        }
      },
      customerno: {
        selector: 'input[name="customerno"]',
        inputType: 'text',
        testValue: (timestamp) => `CUST-${timestamp}`
      },
      carrier: {
        selector: 'select[name="carrier"]',
        inputType: 'select',
        testValue: () => 'FedEx'
      }
    }
  },
  
  Quotes: {
    moduleName: 'Quotes',
    moduleLabel: '見積',
    createButtonText: '見積の追加',
    listPageTitle: /見積/,
    requiredFields: {
      subject: {
        selector: 'input[name="subject"]',
        inputType: 'text',
        testValue: (timestamp) => `テスト見積_${timestamp}`
      },
      account_id: {
        selector: 'select[name="account_id"]',
        inputType: 'select',
        testValue: null // 顧客企業が必要
      },
      quotestage: {
        selector: 'select[name="quotestage"]',
        inputType: 'select',
        testValue: () => 'Created'
      },
      bill_street: {
        selector: 'textarea[name="bill_street"]',
        inputType: 'textarea',
        testValue: () => '東京都新宿区西新宿2-8-1'
      },
      ship_street: {
        selector: 'textarea[name="ship_street"]',
        inputType: 'textarea',
        testValue: () => '東京都新宿区西新宿2-8-1'
      }
    },
    optionalFields: {
      validtill: {
        selector: 'input[name="validtill"]',
        inputType: 'date',
        testValue: () => {
          const date = new Date();
          date.setDate(date.getDate() + 30);
          return date.toISOString().split('T')[0]!;
        }
      },
      contact_id: {
        selector: 'select[name="contact_id"]',
        inputType: 'select',
        testValue: null // 顧客担当者
      },
      carrier: {
        selector: 'select[name="carrier"]',
        inputType: 'select',
        testValue: () => 'FedEx'
      }
    }
  }
};

// テストを実行するモジュールのリスト
export const testModules: string[] = Object.keys(moduleConfigs);

// 特定のモジュールのみテストする場合は、このリストを使用
export const selectedModules: string[] = [
  'Accounts',
  'Contacts',
  'Leads',
  'Potentials',
  'HelpDesk',
  'Products',
  'Services',
  'Project',
  // 'Events',        // 特殊なのでスキップ
  // 'ProjectTask',   // 関連フィールドが必要なのでスキップ
  // 'ProjectMilestone', // 関連フィールドが必要なのでスキップ
  'Vendors',
  // 'PriceBooks',
  // 'PurchaseOrder',
  // 'SalesOrder',
  // 'Quotes'
];
