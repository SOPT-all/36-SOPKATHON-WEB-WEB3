import styled from '@emotion/styled';
import React from 'react';

const DetailReview = () => {
  return (
    <ReviewContainer>
      <ReviewHeader>
        <TextContainer>
          <StyledReviewText>이 농장 리뷰</StyledReviewText>
          <StyledReviewNum>(3)</StyledReviewNum>
        </TextContainer>
        <StyledSeeAll>전체 보기</StyledSeeAll>
      </ReviewHeader>
    </ReviewContainer>
  );
};

export default DetailReview;

const ReviewContainer = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledReviewText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  color: #4b5563;
`;

const StyledReviewNum = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

const StyledSeeAll = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 140%;
  text-decoration: underline;
  color: #4b5563;
`;
