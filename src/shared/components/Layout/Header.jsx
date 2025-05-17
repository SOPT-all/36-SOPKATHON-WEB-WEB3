import { useLocation, Link } from 'react-router-dom';
import styled from '@emotion/styled';

import IconBack from '@assets/IconBack';

export default function Header() {
  const pathname = useLocation().pathname;

  const isHome = !pathname.includes('search') && !pathname.includes('detail');
  const title = pathname.includes('search') ? '출발지 선택' : '상세 페이지';

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
