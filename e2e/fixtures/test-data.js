/**
 * テストデータの生成用ヘルパー
 */

export function generateContactData() {
  const timestamp = Date.now();
  return {
    firstname: 'テスト',
    lastname: `太郎_${timestamp}`,
    email: `test.${timestamp}@example.com`,
    phone: '090-1234-5678',
    mobile: '080-9876-5432'
  };
}

export function generateAccountData() {
  const timestamp = Date.now();
  return {
    accountname: `テスト株式会社_${timestamp}`,
    website: 'https://example.com',
    phone: '03-1234-5678',
    email: `contact.${timestamp}@example.com`,
    industry: 'Technology'
  };
}

export function generateLeadData() {
  const timestamp = Date.now();
  return {
    firstname: 'リード',
    lastname: `太郎_${timestamp}`,
    email: `lead.${timestamp}@example.com`,
    company: `リード会社_${timestamp}`,
    phone: '090-8765-4321'
  };
}

export function generatePotentialData() {
  const timestamp = Date.now();
  return {
    potentialname: `商談_${timestamp}`,
    amount: '1000000',
    closingdate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 30日後
  };
}