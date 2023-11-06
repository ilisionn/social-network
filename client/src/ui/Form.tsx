import { FC } from 'react';
import styled from 'styled-components';

import { Paths } from 'src/routes/paths';
import { CustomLink } from './CustomLink';
const FormStyled = styled.form`
  width: 20rem;
  padding: 1rem 0;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  input {
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
  }
`;

const Selection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 110px;
  margin-bottom: 50px;
  font-size: 24px;
  cursor: pointer;
`;

const Active = styled.div`
  color: #b43aff;
  position: relative;
  margin-right: 40px;
  font-size: 24px;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: 3px;
    background-color: #b43aff;
    border-radius: 10px;
  }
`;

type Props = {
  children: React.ReactNode;
  choosen: string;
  submit: () => void;
};

const Form: FC<Props> = ({ children, choosen, submit }) => {
  return (
    <FormStyled onSubmit={submit}>
      <Selection>
        <Active>{choosen}</Active>
        <CustomLink to={choosen === 'Login' ? Paths.register : Paths.login}>
          {choosen === 'Login' ? 'Register' : 'Login'}
        </CustomLink>
      </Selection>
      {children}
    </FormStyled>
  );
};

export default Form;
