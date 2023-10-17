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

const Routes: FC<RouteProps> = () => {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route element={<Layout />}>
          <Route element={<Home />} path={Paths.home} />
        </Route>
        <Route element={<Login />} path={Paths.login} />
        <Route element={<Register />} path={Paths.register} />
      </DomRoutes>
    </BrowserRouter>
  );
};

export default Routes;
