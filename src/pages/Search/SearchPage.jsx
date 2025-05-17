import styled from '@emotion/styled';

import StationList from '@pages/Search/components/StationList';
import Input from '@pages/Search/components/Input';
import { useState } from 'react';

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('');
  const stations = ['강남', '서울역', '홍대입구', '잠실', '잠실'];

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
