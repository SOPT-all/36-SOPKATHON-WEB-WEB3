import styled from '@emotion/styled';

import StationList from '@pages/Search/components/StationList';
import Input from '@pages/Search/components/Input';
import { useState, useEffect } from 'react';
import { searchStation } from '../../shared/apis/searchStation';

export default function SearchPage() {
  const [stations, setStations] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const res = await searchStation(searchValue);
        setStations(res.data.subways);
      } catch (error) {
        console.error('지하철역 검색 실패:', err);
      }
    };

    if (searchValue.trim()) fetchStations();
  }, [searchValue]);

  const filteredStations = stations.filter((station) => station.includes(searchValue));
  return (
    <PageWrapper>
      <Input value={searchValue} onChange={setSearchValue} />
      <StationWrapper>
        {searchValue &&
          filteredStations.map((station, idx) => {
            return <StationList key={idx} station={station} />;
          })}
      </StationWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding: 0 2.8rem;
`;

const StationWrapper = styled.div`
  margin-top: 0.5rem;
`;
