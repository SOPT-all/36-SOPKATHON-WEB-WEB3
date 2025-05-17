import styled from '@emotion/styled';
import StationList from '@pages/Search/components/StationList';
import Input from '@pages/Search/components/Input';
import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../shared/apis/apiClient';
import { API } from '../../shared/apis/apis';

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('');

  const fetchSubwayList = async () => {
    const response = await apiClient.get('/api/v1/subways');

    if (response.status !== 200) {
      throw new Error('서버 연결 실패');
    }
    console.log(response.data.data);
    return response.data.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['subway-list'],
    queryFn: fetchSubwayList, // fetchSubwayList의 return데이터가 data로 들어감
  });

  const stations = data?.subways ?? [];

  const filteredStations = stations.filter((station) => station.includes(searchValue));

  if (isLoading) return <LoadingText>불러오는 중...</LoadingText>;
  if (error) return <PageWrapper>에러 발생</PageWrapper>;

  return (
    <PageWrapper>
      <Input value={searchValue} onChange={setSearchValue} />
      {!searchValue && (
        <StationWrapper>
          {stations.map((station, idx) => {
            return <StationList key={idx} station={station} />;
          })}
        </StationWrapper>
      )}
      <StationWrapper>
        {searchValue &&
          filteredStations.map((station, idx) => {
            return <StationList key={idx} station={station} />;
          })}
      </StationWrapper>
    </PageWrapper>
  );
}

const LoadingText = styled.p`
  margin: 16px;
  ${({ theme }) => theme.font.pre_title_semi_18}
`;

const PageWrapper = styled.div`
  padding: 0 2.8rem;
`;

const StationWrapper = styled.div`
  margin-top: 0.5rem;
`;
