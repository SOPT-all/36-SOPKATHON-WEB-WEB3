import { isAxiosError } from 'axios';
import apiClient from './apiClient';

const getHealingPlace = async () => {
  try {
    const response = await apiClient.get('/api/v1/places', {
      params: {
        subway: '',
      },
    });

    return response.data.data.getPlaceResponseList ?? [];
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error('힐링 장소 정보를 불러오지 못했습니다.');
    } else {
      throw new Error('네트워크 오류가 발생했습니다.');
    }
  }
};

export default getHealingPlace;
