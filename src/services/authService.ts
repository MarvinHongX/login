// 서비스 레이어

import { login, getUserSession } from '../api/authAPI';
import { UserInfo } from '../store/types/authTypes';

export const loginUser = async (username: string, password: string): Promise<UserInfo> => {
  const userInfo = await login(username, password);
  return userInfo;
};

export const getUserSessionInfo = async (sessionToken: string): Promise<UserInfo | null> => {
  const sessionData = await getUserSession(sessionToken);
  return sessionData;
};