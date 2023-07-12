// 로그인 폼 컴포넌트

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../services/authService';
import { setUserInfo, clearUserInfo } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { setCookie, getCookie, deleteCookie } from '../utils/cookieUtils';
import { getUserSessionInfo } from '../services/authService';
import { UserInfo } from '../store/types/authTypes';

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
      setCookie('sessionToken', userInfo.token, 7);
      dispatch(setUserInfo(userInfo));
      navigate('/');
    } catch (error) {
      // Handle login error
    }
  };

  React.useEffect(() => {
    const token = getCookie('sessionToken');
    if (token) {
      getUserSessionInfo(token)
        .then((userSessionInfo: UserInfo | null) => {
          if (userSessionInfo) {
            dispatch(setUserInfo(userSessionInfo));
          } else {
            deleteCookie('sessionToken');
            dispatch(clearUserInfo());
          }
        })
        .catch((error) => {
          console.error('Failed to get user session info:', error);
          deleteCookie('sessionToken');
          dispatch(clearUserInfo());
        });
    } else {
      dispatch(clearUserInfo());
    }
  }, [dispatch]);

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