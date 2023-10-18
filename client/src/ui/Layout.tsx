import { FC } from 'react';
import Wrapper from './Wrapper';
import Header from '../components/Header';
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
      <Header />
      <Main>
        <Sidebar />
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;
