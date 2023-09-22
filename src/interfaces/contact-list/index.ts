import { GetQueryInterface } from 'interfaces';

export interface ContactListInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ContactListGetQueryInterface extends GetQueryInterface {
  id?: string;
}
