import styled, { css } from 'styled-components';

type Props = {
  type: 'vertical' | 'horizontal';
};

const Row = styled.div<Props>`
  display: flex;
  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: center;

      align-items: center;
    `}
  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
