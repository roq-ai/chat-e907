import axios from 'axios';
import queryString from 'query-string';
import { MediaFilesInterface, MediaFilesGetQueryInterface } from 'interfaces/media-files';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMediaFiles = async (
  query?: MediaFilesGetQueryInterface,
): Promise<PaginatedInterface<MediaFilesInterface>> => {
  const response = await axios.get('/api/media-files', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMediaFiles = async (mediaFiles: MediaFilesInterface) => {
  const response = await axios.post('/api/media-files', mediaFiles);
  return response.data;
};

export const updateMediaFilesById = async (id: string, mediaFiles: MediaFilesInterface) => {
  const response = await axios.put(`/api/media-files/${id}`, mediaFiles);
  return response.data;
};

export const getMediaFilesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/media-files/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMediaFilesById = async (id: string) => {
  const response = await axios.delete(`/api/media-files/${id}`);
  return response.data;
};
