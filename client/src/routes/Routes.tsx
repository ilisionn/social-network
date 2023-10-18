import { FC } from 'react';
import {
  BrowserRouter,
  Routes as DomRoutes,
  Route,
  RouteProps,
} from 'react-router-dom';
import Home from 'src/pages/Home';
import Layout from 'src/ui/Layout';
import { Paths } from './paths';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import Profile from 'src/pages/Profile';
import News from 'src/pages/News';
import Messanger from 'src/pages/Messanger';
import Friends from 'src/pages/Friends';
import Communities from 'src/pages/Communities';

const Routes: FC<RouteProps> = () => {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route element={<Layout />}>
          <Route element={<Home />} path={Paths.home} />
          <Route element={<Profile />} path={Paths.profile} />
          <Route element={<News />} path={Paths.news} />
          <Route element={<Messanger />} path={Paths.messanger} />
          <Route element={<Friends />} path={Paths.friends} />
          <Route element={<Communities />} path={Paths.communities} />
        </Route>
        <Route element={<Login />} path={Paths.login} />
        <Route element={<Register />} path={Paths.register} />
      </DomRoutes>
    </BrowserRouter>
  );
};

export default Routes;
