import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div<{ customWidth?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ customWidth }) => customWidth || '16rem'};
  margin: 0 auto 1rem auto;
`;

const InputStyled = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1.3px solid #a8a8a8;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 21px;
  transition: all 0.2s ease;

  &:focus {
    outline: #b43aff;
    border: 1.3px solid #b43aff;
  }
`;

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customWidth?: string | undefined;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  customWidth,
}) => {
  return (
    <InputWrapper customWidth={customWidth}>
      <InputStyled
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
