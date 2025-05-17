import styled from '@emotion/styled';
import IconSearch from '@assets/IconSearch';

export default function Input() {
  return (
    <InputWrapper>
      <IconWrapper>
        <IconSearch />
      </IconWrapper>
      <InputContainer placeholder="지하철역 검색" />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1.1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const IconWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;

const InputContainer = styled.input`
  background-color: transparent;
  ${({ theme }) => theme.font.pre_body_med_14}
`;
