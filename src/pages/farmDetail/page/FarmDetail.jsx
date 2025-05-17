import React from 'react';
import styled from '@emotion/styled';
import DetailBody from '../components/DetailBody';
import DetailButton from '../components/DetailButton';
import DetailContent from '../components/DetailContent';
import LaborPrize from '../components/LaborPrize';
import DetailReview from '../components/DetailReview';
import ReviewList from '../components/ReviewList';

const FarmDetail = () => {
  return (
    <FarmDetailContainer>
      <BlankComponent />
      <DetailBody />
      <DetailButton />
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <DetailContent />
      <LaborPrize />
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <DetailReview />
      <ReviewList />
    </FarmDetailContainer>
  );
};

export default FarmDetail;

const FarmDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BlankComponent = styled.div`
  width: 100%;
  height: 174px;
  background-color: #d9d9d9;
`;

const DividerWrapper = styled.div`
  margin: 0 16px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7ea;
  margin: 29px 0;
  padding: 0 16px;
`;
