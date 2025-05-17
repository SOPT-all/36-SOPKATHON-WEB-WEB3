import { IconClock, Profile } from '@/shared/assets';
import styled from '@emotion/styled';
import { theme } from '@/shared/styles/theme';

const Card = ({ name, duration, description, farmer, price, photoUrl, isCompleted = false }) => {
  return (
    <Wrapper>
      <UpperContainer>
        <LeftContainer>
          <ProfileWrapper>
            <Profile width={36} height={36} />
          </ProfileWrapper>
          <Info>
            <Name>{farmer}</Name>
            <Location>{name}</Location>
          </Info>
        </LeftContainer>
        <RightContainer>
          <IconClock width={18} height={18} />
          <Time>{duration}</Time>
        </RightContainer>
      </UpperContainer>

      <ImgContainer>
        <Image src={photoUrl} alt={name} />
      </ImgContainer>

      <LowerContainer>
        <SecondUppercontainer>
          <Job>{name}</Job>
          <Price>{`₩${price.toLocaleString()}/일`}</Price>
        </SecondUppercontainer>
        <Detail>{description}</Detail>
      </LowerContainer>

      {isCompleted && (
        <BlockWrapper>
          <BlockText>보상 지급 중</BlockText>
        </BlockWrapper>
      )}
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

const ProfileWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
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
  background-color: ${theme.colors.gray300};
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 15.5rem;
  object-fit: cover;
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

const BlockWrapper = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${theme.colors.gradation};
`;

const BlockText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  ${theme.font.pre_subtitle_semi_18};
  color: ${theme.colors.white};
`;
