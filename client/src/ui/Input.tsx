import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div<{ customWidth?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ customWidth }) => customWidth || '16rem'};
  margin: 0 auto 0rem auto;
`;

const InputStyled = styled.input<{
  customHeight?: string;
  customBorder?: string;
}>`
  padding: 10px;
  font-weight: 500;
  font-size: 14px;
  border: ${({ customBorder }) => customBorder || '1.3px solid #a8a8a8'};
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  width: 100%;
  height: ${({ customHeight }) => customHeight || '21px'};
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
  customHeight?: string | undefined;
  customBorder?: string | undefined;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  customWidth,
  customHeight,
  customBorder,
}) => {
  return (
    <InputWrapper customWidth={customWidth}>
      <InputStyled
        customBorder={customBorder}
        customHeight={customHeight}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
