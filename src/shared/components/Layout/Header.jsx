import { useLocation, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import IconBack from '@assets/IconBack';

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

  return (
    <>
      {!isHome && (
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
