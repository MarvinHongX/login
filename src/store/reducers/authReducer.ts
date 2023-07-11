// 인증 관련 리듀서

import { UserInfo, AuthActionTypes, SET_USER_INFO, CLEAR_USER_INFO } from '../types/authTypes';

export interface RootState {
  userInfo: UserInfo | null;
}

const initialState: RootState = {
  userInfo: null,
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): RootState => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        //userInfo: action.payload,
        userInfo:  {
          id: 1,
          username: "Hong",
          email: "Hong@hong.com",
        }
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