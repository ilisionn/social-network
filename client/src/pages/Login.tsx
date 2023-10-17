import { FC, useState } from 'react';
import Form from 'src/ui/Form';
import Input from 'src/ui/Input';
import Wrapper from 'src/ui/Wrapper';
import styled from 'styled-components';
import { Button } from './../ui/Button';

const GreatingText = styled.div`
  color: #b43aff;
  font-size: 16px;
  width: 31.25rem;
  font-weight: 700;
`;

const LoginWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
`;

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginWrapper>
      <Form choosen="Login">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary">Login</Button>
      </Form>
      <GreatingText>
        Sovion is your gateway to a world of connection, communication, and
        community. Join us now and discover a new way to connect with friends,
        share your life, and explore the stories of others.
        <br />
        Start your Sovion journey by creating your free account. It's a few easy
        steps to a world of social connections.
      </GreatingText>
    </LoginWrapper>
  );
};

export default Login;
