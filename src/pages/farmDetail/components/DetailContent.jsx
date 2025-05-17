import styled from '@emotion/styled';
import React from 'react';

const DetailContent = () => {
  return (
    <ContentWrapper>
      <ContentTitle>상세 내용</ContentTitle>
      <DetailedContents>
        블루베리 수확 및 정리, 단순 농장 업무를 도와주실 분을 모집합니다. 간단한 점심 제공, 편한 복장 권장. 서울역 기준
        1시간 이내 대중교통 이동 가능합니다.
      </DetailedContents>
    </ContentWrapper>
  );
};

export default DetailContent;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 16px 16px 16px;
`;

const ContentTitle = styled.p`
  font-size: 14px;
  font-weight: 600px;
  line-height: 140%;
`;

const DetailedContents = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  color: #4b5563;
  white-space: pre-line;
`;
