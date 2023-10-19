import React from 'react';
import styled from 'styled-components';
import { SlMagnifier } from 'react-icons/sl';
const InputWrapper = styled.div<{ customWidth?: string }>`
  display: flex;
  align-items: center;

  svg {
    width: 60px;
  }
`;

const InputStyled = styled.input`
  width: 100%;
  /* margin-left: 6px; */
  padding: 10px;
  font-size: 14px;
  /* border: 1.3px solid #b9b9b9; */
  border-radius: 8px;
  background-color: #dfdfdf;
  color: #000;
  max-width: 16rem;
  height: 11px;
  transition: all 0.2s ease;
  border: none;
  outline: none;

  &:focus {
    border: 0.1px solid var(--color-purple);

    width: 200%;
  }
`;

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <SlMagnifier />
      <InputStyled
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default SearchInput;
