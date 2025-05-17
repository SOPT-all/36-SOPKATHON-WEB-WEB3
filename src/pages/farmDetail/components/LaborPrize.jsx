import styled from '@emotion/styled';
import React from 'react';
import LaborPrizeImg from '../../../shared/assets/LaborPrize';

const LaborPrize = ({ price }) => {
  return (
    <LaborPrizeBoxContainer>
      <LaborPrizeBox>
        <StyledBoxTextWrapper>
          <StyledLaborPrize />
          <StyledBoxText>일손 보상</StyledBoxText>
        </StyledBoxTextWrapper>
        <StyledPrize>₩{price}/일</StyledPrize>
      </LaborPrizeBox>
    </LaborPrizeBoxContainer>
  );
};

export default LaborPrize;

const LaborPrizeBoxContainer = styled.div`
  margin: 0 16px;
`;

const LaborPrizeBox = styled.div`
  width: 100%;
  padding: 13px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #3ad291;
  border-radius: 8px;
`;

const StyledBoxText = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
`;

const StyledPrize = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
`;

const StyledBoxTextWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledLaborPrize = styled(LaborPrizeImg)`
  width: 16.5px;
  height: 16.5px;
`;
