interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Chat',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage chat history',
    'Manage media files',
    'Manage contact list',
    'Manage group chat',
    'Manage messages',
    'Manage users',
    'Manage companies',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9bc3edd5-1612-4138-b5d5-6bb7782667a6',
};
