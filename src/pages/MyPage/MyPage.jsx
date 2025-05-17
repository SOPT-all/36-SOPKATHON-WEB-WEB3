import { useState } from 'react';
import FilterButton from '@components/filter-button/FilterButton';
import Card from '@components/Card';

import styled from '@emotion/styled';

export default function MyPage() {
  const [selectedIdx, setSelectedIdx] = useState(0); // 인덱스로 상태 관리
  const state = ['수락 대기', '수락 완료'];

  const handleState = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <PageWrapper>
      <StateWrapper>
        {state.map((label, idx) => (
          <FilterButton key={idx} label={label} selected={selectedIdx === idx} onClick={() => handleState(idx)} />
        ))}
      </StateWrapper>
      <CardWrapper>
        <Card /> <Card isCompleted={true} /> <Card />
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
