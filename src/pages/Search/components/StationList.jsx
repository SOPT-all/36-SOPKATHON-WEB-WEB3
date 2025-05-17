import styled from '@emotion/styled';

export default function StationList({ station }) {
  return (
    <ListContainer>
      <StationText>{station}</StationText>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  padding: 1.5rem 1.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const StationText = styled.p`
  ${({ theme }) => theme.font.pre_title_semi_18}
`;
