import styled, { css } from 'styled-components';

type Props = {
  type: 'vertical' | 'horizontal';
};

const Row = styled.div<Props>`
  display: flex;
  ${(props) =>
    props.type === 'horizontal' &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
    `};
`;

export default Row;
