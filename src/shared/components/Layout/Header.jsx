import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import IconBack from '@assets/IconBack';
import IconPlace from '@assets/IconPlace';
import IconDropDown from '@assets/IconDropDown';
import routePath from '../../routes/routePath';

const pathToTitle = {
  search: '출발지 선택',
  detail: '상세 페이지',
  mypage: '나의 신청 목록',
};

export default function Header() {
  const pathname = useLocation().pathname;

  const matchedKey = Object.keys(pathToTitle).find((key) => pathname.includes(key));

  const title = matchedKey ? pathToTitle[matchedKey] : '';
  const isHome = !matchedKey;

  const navigate = useNavigate();

  return (
    <>
      {isHome ? (
        <HeaderAllWrapper>
          <HomeHeaderWrapper>
            <ImgWrapper>
              <IconPlace />
            </ImgWrapper>
            <StationTextWrapper onClick={() => navigate(routePath.SEARCH)}>
              <StationText>출발지를 선택해주세요</StationText>
              <ImgDropDouwnWrapper>
                <IconDropDown/>
              </ImgDropDouwnWrapper>
            </StationTextWrapper>
          </HomeHeaderWrapper>
        </HeaderAllWrapper>
      ) : (
        <HeaderWrapper>
          <IconLink to="/">
            <IconBack />
          </IconLink>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderWrapper>
      )}
    </>
  );
}

const IconLink = styled(Link)`
  width: 3.2rem;
  height: 3.2rem;
`;

const HeaderWrapper = styled.header`
  position: relative;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme.font.pre_title_semi_18}
`;

const HeaderAllWrapper = styled.div`
  height: 6rem;
`;

const HomeHeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  padding: 0 0.8rem;
  height: 6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ImgWrapper = styled.div`
  width: 1.5rem;
  height: 2rem;
  margin-left: 0.8rem;
  margin-bottom: 0.2rem;
`;

const StationTextWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const StationText = styled.h1`
  ${({ theme }) => theme.font.pre_subtitle_semi_16};
  color: ${({theme})=>theme.colors.gray800};
  margin-top: 0.4rem;
`;

const ImgDropDouwnWrapper = styled.div`
  width: 1.2rem;
  height: 2rem;
  margin-top: 1rem;
  margin-left: 0.8rem;
`;
