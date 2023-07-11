// 스토어 설정 파일

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer, 
  middleware: [thunk], 
  devTools: true,
  preloadedState: {
    auth: {
      userInfo: null,
    }
  }, 
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;