import { API } from './apis';
import apiClient from './apiClient';

export const searchStation = async (keyword) => {
  const res = await apiClient.get(API.SUBWAY_SEARCH, {
    params: { keyword },
  });
  return res.data;
};
