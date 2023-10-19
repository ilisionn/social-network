import styled from 'styled-components';
import MainNav from './MainNav';

const StyledSidebar = styled.aside`
  max-width: 180px;
  display: flex;
  flex-direction: column;

  margin-right: 70px;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}
