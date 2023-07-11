// 로그인 폼 컴포넌트

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../services/authService';
import { setUserInfo } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const userInfo = await loginUser(data.username, data.password); 
      dispatch(setUserInfo(userInfo));
      navigate('/'); 
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login Page</h1>
      <div>
        <label htmlFor="username">ID:</label>
        <input
          type="text"
          id="username"
          {...register('username', { required: '아이디를 입력하세요.', minLength: { value: 4, message: '아이디는 4자리 이상이어야 합니다.' } })}
        />
        {errors.username && <div className="error">{errors.username.message}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: '비밀번호를 입력하세요.', minLength: { value: 8, message: '비밀번호는 8자리 이상이어야 합니다.' }, pattern: { value: /.*[!@#$%^&*]+.*/, message: '비밀번호에는 특수문자가 포함되어야 합니다.' } })}
        />
        {errors.password && <div className="error">{errors.password.message}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;