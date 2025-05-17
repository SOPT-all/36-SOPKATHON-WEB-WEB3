export const API = {
  SUBWAY_LIST: 'api/v1/subways', // 지하철역 리스트 조회
  SUBWAY_SEARCH: 'api/v1/subways/search', // 지하철역 검색
  HEALING_PLACE_LIST: 'api/v1/places', // 힐링 장소 리스트 조회
  FETCH_HEALING_PLACE: (placeId) => `/api/v1/places/${placeId}`, // 힐링 장소 상세 조회
  REQUEST_LABOR: (placeId) => `api/v1/places/${placeId}`, // 일손(?) 신청
  FETCH_APPLY_LIST: 'api/v1/places', // 신청 목록 조회
};
