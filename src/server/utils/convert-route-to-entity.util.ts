const mapping: Record<string, string> = {
  'chat-histories': 'chat_history',
  companies: 'company',
  'contact-lists': 'contact_list',
  'group-chats': 'group_chat',
  'media-files': 'media_files',
  messages: 'message',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
