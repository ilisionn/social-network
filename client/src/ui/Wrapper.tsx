import { styled } from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (max-width: 1200px) {
    width: 1000px;
    max-width: none;
  }
  @media (max-width: 1024px) {
    width: 800px;
    max-width: none;
  }
  @media (max-width: 768px) {
    width: 600px;
    max-width: none;
  }
  @media (max-width: 360px) {
    width: 200px;
    max-width: none;
  }
`;

export default Wrapper;
