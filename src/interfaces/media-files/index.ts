import { GetQueryInterface } from 'interfaces';

export interface MediaFilesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MediaFilesGetQueryInterface extends GetQueryInterface {
  id?: string;
}
