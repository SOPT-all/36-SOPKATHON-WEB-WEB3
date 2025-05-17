import styled from '@emotion/styled';
import IconSearch from '@assets/IconSearch';

import { useState } from 'react';

export default function Input({ value, onChange }) {
  const [station, setStation] = useState('');

  return (
    <InputWrapper>
      <IconWrapper>
        <IconSearch />
      </IconWrapper>
      <InputContainer placeholder="지하철역 검색" value={value} onChange={(e) => onChange(e.target.value)} />
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
  width: 100%;
  background-color: transparent;
  ${({ theme }) => theme.font.pre_body_med_14};
  color: ${({ theme }) => theme.colors.gray800};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;
