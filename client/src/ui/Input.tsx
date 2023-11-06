import styled from 'styled-components';

type Props = {
  $width: string;
  $height: string;
  $fontSize?: string;
};

const Input = styled.input<Props>`
  width: ${(props) =>
    (props.$width == 'auth' && '250px') || props.$width || '100px'};
  height: ${(props) =>
    (props.$width == 'auth' && '30px') || props.$height || '10px'};
  font-size: ${(props) => props.$fontSize || '14px'};

  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 10px;
  transition: all 0.06s ease;
  &:focus {
    outline: 1px solid var(--color-purple);
  }
`;

export default Input;
