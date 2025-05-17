import React from 'react';
import LeftButton from '../../../shared/assets/LeftButton';
import styled from '@emotion/styled';

const DetailHeader = () => {
  return (
    <Header>
      <StyledLeftButton />
      <HeaderText>상세 페이지</HeaderText>
    </Header>
  );
};

export default DetailHeader;

const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
`;

const StyledLeftButton = styled(LeftButton)`
  width: 32px;
  height: 32px;
`;

const HeaderText = styled.span`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 130%;
  margin-top: 2px;
`;
