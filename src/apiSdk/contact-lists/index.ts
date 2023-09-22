import axios from 'axios';
import queryString from 'query-string';
import { ContactListInterface, ContactListGetQueryInterface } from 'interfaces/contact-list';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContactLists = async (
  query?: ContactListGetQueryInterface,
): Promise<PaginatedInterface<ContactListInterface>> => {
  const response = await axios.get('/api/contact-lists', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createContactList = async (contactList: ContactListInterface) => {
  const response = await axios.post('/api/contact-lists', contactList);
  return response.data;
};

export const updateContactListById = async (id: string, contactList: ContactListInterface) => {
  const response = await axios.put(`/api/contact-lists/${id}`, contactList);
  return response.data;
};

export const getContactListById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/contact-lists/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteContactListById = async (id: string) => {
  const response = await axios.delete(`/api/contact-lists/${id}`);
  return response.data;
};
