import { IconClock, Profile } from '@/shared/assets';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@/shared/styles/theme';

const Card = () => {
  return (
    <Wrapper>
      <UpperContainer>
        <LeftContainer>
          <Profile width={36} height={36} />
          <Info>
            <Name>홍길동 농장주</Name>
            <Location>과수원</Location>
          </Info>
        </LeftContainer>
        <RightContainer>
          <IconClock width={18} height={18} />
          <Time>48분</Time>
        </RightContainer>
      </UpperContainer>
      <ImgContainer></ImgContainer>
      <LowerContainer>
        <SecondUppercontainer>
          <Job>가평 사과 과수원</Job>
          <Price>₩50,000/일</Price>
        </SecondUppercontainer>

        <Detail>싱그러운 사과밭에서 수확을 도와주세요!</Detail>
      </LowerContainer>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  gap: 1.4rem;

  border-radius: 8px;
  border: 1px solid ${theme.colors.gray300};
`;
const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  gap: 0.6rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  ${theme.font.pre_body_semi_14}
  color: ${theme.colors.gray800};
`;
const Location = styled.p`
  ${theme.font.pre_body_semi_12}
  color: ${theme.colors.gray500};
`;
const Time = styled.p`
  ${theme.font.pre_body_semi_12}
  color: ${theme.colors.black};
`;
const Job = styled.p`
  ${theme.font.pre_subtitle_semi_16}
  color: ${theme.colors.gray800};
`;
const Price = styled.p`
  ${theme.font.pre_body_semi_14}
  color: ${theme.colors.gray800};
`;
const Detail = styled.p`
  ${theme.font.pre_body_med_14}
  color: ${theme.colors.gray500};
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const ImgContainer = styled.div`
  height: 15.5rem;
  background-color: ${theme.colors.gray300};
  border-radius: 8px;
`;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const SecondUppercontainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
