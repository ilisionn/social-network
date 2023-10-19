import { FC } from 'react';
import Wrapper from './Wrapper';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  margin-top: 45px;
`;

const Layout: FC = () => {
  return (
    <Wrapper>
      <Nav />
      <Main>
        <Sidebar />
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;
