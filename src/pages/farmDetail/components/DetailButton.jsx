import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailButton = () => {

  const navigate = useNavigate();
  return (
    <StyledButtonWrapper>
      <StyledButton type="button" onClick={() => navigate('/mypage')}>신청하기</StyledButton>
    </StyledButtonWrapper>
  );
};

export default DetailButton;

const StyledButton = styled.button`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #3ad291;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  color: white;
`;

const StyledButtonWrapper = styled.div`
  padding: 0 16px;
`;
