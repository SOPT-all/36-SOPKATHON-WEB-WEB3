import styled from '@emotion/styled';
import React from 'react';

const DetailContent = ({ description }) => {
  return (
    <ContentWrapper>
      <ContentTitle>상세 내용</ContentTitle>
      <DetailedContents>{description}</DetailedContents>
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
