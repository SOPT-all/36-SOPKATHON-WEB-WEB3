import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const FilterButton = ({ label, selected, onClick }) => {
  return (
    <Button selected={selected} onClick={onClick}>
      {label}
    </Button>
  );
};

export default FilterButton;

const Button = styled.button`
  height: 3.2rem;

  padding: 0.8rem 1.7rem;
  border-radius: 20px;

  cursor: pointer;

  border: ${({ selected }) => (selected ? 'none' : `1px solid ${theme.colors.gray300}`)};
  background-color: ${({ selected }) => (selected ? theme.colors.green : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : theme.colors.gray800)};
  ${({ selected }) => (selected ? theme.font.pre_body_semi_14 : theme.font.pre_body_reg_14)}
`;
