import { useEffect, useState } from 'react';
import FilterButton from '@components/filter-button/FilterButton';
import Card from '@components/Card';

import styled from '@emotion/styled';
import apiClient from '../../shared/apis/apiClient';

export default function MyPage() {
  const [selectedIdx, setSelectedIdx] = useState(0); 
  const state = ["PENDING", "APPROVED"];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApply = async () => {
      try {
        const response = await apiClient.get(`/api/v1/apply/list`, {
          params: {
            state: state[selectedIdx], // 선택된 state 값을 params로 전달
          },
        });
        setData(response.data.data.getPlaceResponseList);
        console.log(response.data.data.getPlaceResponseList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApply();
  }, [selectedIdx]); // selectedIdx가 변경될 때마다 실행

  const handleState = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <PageWrapper>
      <StateWrapper>
        {state.map((label, idx) => (
          <FilterButton 
            key={idx} 
            label={label} 
            selected={selectedIdx === idx} 
            onClick={() => handleState(idx)} 
          />
        ))}
      </StateWrapper>
      <CardWrapper>
        {data.length > 0 ? (
          data.map((datas, index) => (
            <Card key={index} description={datas.description} farmer={datas.farmer} name={datas.name} photoUrl={datas.photoUrl} price={datas.price} />
          ))
        ) : (
          <p>No data available.</p>
        )}
      </CardWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding: 0 2.8rem;
`;

const StateWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const CardWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
