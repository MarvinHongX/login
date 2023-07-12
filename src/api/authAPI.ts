// HTTP 요청하는 API 모듈
import axios from 'axios';
import { UserInfo } from '../store/types/authTypes';

export async function login(username: string, password: string): Promise<UserInfo> {
  try {
    const testResponse: UserInfo = {
        id: 1,
        username: username,
        email: username + '@marvinhong.com',
        token: 'thisIsToken',
    };
    return testResponse
    
    //const response = await axios.post('/apiURL/login', { username, password });
    //return response.data;

  } catch (error) {
    throw new Error('Login failed');
  }
}



export async function getUserSession(sessionToken: string): Promise<UserInfo | null> {
  try {
    // const response = await axios.get('/apiURL/userSession', {
    //   headers: {
    //     Authorization: `Bearer ${sessionToken}`,
    //   },
    // });
    // return response.data;

    const sessionData: UserInfo = {
      id: 1,
      username: 'hong',
      email: 'hong@marvinhong.com',
      token: sessionToken,
    };
    return sessionData;
  } catch (error) {
    console.error('Failed to get user session:', error);
    return null;
  }
}





