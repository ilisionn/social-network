import { useEffect } from 'react';
import GlobalStyles from './assets/styles/GlobalStyles';
import Routes from './routes/Routes';
import Wrapper from './ui/Wrapper';
import { useAppDispatch } from './hooks/hooks';
import { currentUser } from './api/auth/current';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Wrapper>
      <GlobalStyles />
      <Routes />
    </Wrapper>
  );
}
export default App;
