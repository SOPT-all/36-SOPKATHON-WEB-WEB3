import { useLocation, Link } from 'react-router-dom';
import styled from '@emotion/styled';

import IconBack from '@assets/IconBack';
import IconPlace from '@assets/IconPlace';

export default function Header() {
  const pathname = useLocation().pathname;

  const isHome = !pathname.includes('search') && !pathname.includes('detail');
  const title = pathname.includes('search') ? '출발지 선택' : '상세 페이지';

  return (
    <>
      {isHome ? (
        <HeaderAllWrapper>
          <HomeHeaderWrapper>
            <ImgWrapper>
              <IconPlace />
            </ImgWrapper>
            <StationText>신촌역</StationText>
            <ChangeBtn onClick={() => navigate(routePath.SEARCH)}>변경</ChangeBtn>
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
  border-bottom: 0.08rem solid ${({ theme }) => theme.colors.gray300};
  padding: 0 0.8rem;
  height: 6rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ImgWrapper = styled.div`
  width: 1.7rem;
  height: 2rem;
  margin-left: 0.8rem;
`;

const StationText = styled.h1`
  ${({ theme }) => theme.font.pre_subtitle_semi_16};
  margin-top: 0.3rem;
`;

const ChangeBtn = styled.button`
  border-radius: 0.8rem;
  padding: 0.5rem 0.8rem;
  margin-left: 0.5rem;
`;
