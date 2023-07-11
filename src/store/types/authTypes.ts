// 인증 관련 타입

export interface UserInfo {
  id: number;
  username: string;
  email: string;
}

export const SET_USER_INFO = 'SET_USER_INFO';
export const CLEAR_USER_INFO = 'CLEAR_USER_INFO';

interface SetUserInfoAction {
  type: typeof SET_USER_INFO;
  payload: UserInfo;
}

interface ClearUserInfoAction {
  type: typeof CLEAR_USER_INFO;
}

export type AuthActionTypes = SetUserInfoAction | ClearUserInfoAction;