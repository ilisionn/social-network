import styled from 'styled-components';

const buttonVariants = {
  primary: `
    background-color: #b43aff;
    color: #fff;
  `,
  secondary: `
    background-color: transparent;
    color: #000;
    border: 2px solid #b43aff;
  `,
  danger: `
    background-color: transparent;
    color: #ff0000;
  `,
  regular: `
  font-size: 17px;
  font-weight: 500;
  width: 100%;
  padding: 0;
  `,
};

type Props = {
  variant?: 'primary' | 'secondary' | 'danger' | 'regular' | undefined;
};

export const Button = styled.button<Props>`
  width: 12.5rem;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  ${({ variant }) => buttonVariants[variant]};
`;