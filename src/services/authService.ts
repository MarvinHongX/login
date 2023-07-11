// 서비스 레이어

import { login } from '../api/authAPI';

export const loginUser = async (username: string, password: string) => {
  const userInfo = await login(username, password);
  return userInfo;
};