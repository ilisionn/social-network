import { FC, useState } from 'react';
import Form from 'src/ui/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from 'src/ui/Input';
import { Button } from './../ui/Button';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { userLogin } from 'src/api/auth/login';
import { isAuthSelector } from 'src/redux/slices/auth';
import { Navigate } from 'react-router-dom';
import { ErrorMessage } from 'src/ui/ErrorMessage';

type Inputs = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const [test, setTest] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (value) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const data = await dispatch(userLogin(value));

      if (data?.payload?.token)
        localStorage.setItem('token', data.payload.token);
      if (!data.payload) {
        setTest('Введен неверно логин или пароль');
      }
    } catch (error) {
      console.error(error);
      alert('Не удалось войти');
    }
  };
  if (isAuth) return <Navigate to="/" />;
  return (
    <Form submit={handleSubmit(onSubmit)} choosen="Login">
      <Input
        $height="auth"
        $width="auth"
        placeholder="Email"
        type="email"
        {...register('email', { required: 'Email is a required field' })}
      />
      <ErrorMessage>
        {errors?.email && <p>{errors.email.message || 'Error'}</p>}
      </ErrorMessage>
      <Input
        $height="auth"
        $width="auth"
        placeholder="Passsword"
        type="pasword"
        {...register('password', { required: 'Password is a required field' })}
      />
      <ErrorMessage>
        {errors?.password && <p>{errors.password.message || 'Error'}</p>}
      </ErrorMessage>
      {test ? test : ''}
      <Button type="submit" variant="primary">
        Login
      </Button>
    </Form>
  );
};

export default Login;
