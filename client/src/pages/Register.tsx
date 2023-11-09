import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerUser } from 'src/api/auth/register';
import { useAppDispatch } from 'src/hooks/hooks';
import { Button } from 'src/ui/Button';
import Form from 'src/ui/Form';
import Input from 'src/ui/Input';
import Row from 'src/ui/Row';
type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  age: number;
  userName: string;
  avatar: string;
};
const Register: FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const data = await dispatch(registerUser(values));
      if (data?.payload?.token)
        localStorage.setItem('token', data.payload.token);
      if (!data.payload) {
        setError('Not all required fields are filled in');
      }
    } catch (error) {
      alert('Error');
      console.error(error);
    }
  };

  return (
    <Form submit={handleSubmit(onSubmit)} choosen="Register">
      <Row type="horizontal" style={{ gap: 15 }}>
        <Input
          $height="30px"
          $width="110px"
          placeholder="First Name"
          {...register('firstName', { required: true })}
        />

        <Input
          $height="30px"
          $width="110px"
          placeholder="Last Name"
          {...register('lastName', { required: true })}
        />
      </Row>
      <Row type="horizontal" style={{ gap: 15 }}>
        <Input
          $height="30px"
          $width="110px"
          placeholder="Username"
          {...register('userName', { required: true })}
        />

        <Input
          $height="30px"
          $width="110px"
          placeholder="Age"
          type="number"
          {...register('age', { required: true })}
        />
      </Row>
      <Input
        $height="auth"
        $width="auth"
        placeholder="Email"
        type="email"
        {...register('email', { required: true })}
      />

      <Input
        $height="auth"
        $width="auth"
        placeholder="Password"
        type="password"
        {...register('password', { required: true })}
      />

      <Input
        $height="auth"
        $width="auth"
        placeholder="Confirm password"
        type="password"
        {...register('confirmPassword', {
          required: true,
        })}
      />
      <Input
        $height="auth"
        $width="auth"
        placeholder="avatar"
        type="text"
        {...register('avatar', {
          required: true,
        })}
      />
      {error ? error : ''}
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
