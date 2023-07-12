// 인증 관련 리듀서

import { UserInfo, AuthActionTypes, SET_USER_INFO, CLEAR_USER_INFO } from '../types/authTypes';

interface AuthState {
  userInfo: UserInfo | null;
}

const initialState: AuthState = {
  userInfo: null,
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case CLEAR_USER_INFO:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default authReducer;