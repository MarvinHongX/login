// 인증 관련 액션

import { UserInfo, AuthActionTypes, SET_USER_INFO, CLEAR_USER_INFO } from '../types/authTypes';

export const setUserInfo = (userInfo: UserInfo): AuthActionTypes => {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
};

export const clearUserInfo = (): AuthActionTypes => {
  return {
    type: CLEAR_USER_INFO
  };
};

