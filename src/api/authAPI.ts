// HTTP 요청하는 API 모듈
import axios from 'axios';
import { UserInfo } from '../store/types/authTypes';

export async function login(username: string, password: string): Promise<UserInfo> {
  try {
    const testResponse: UserInfo = {
        id: 1,
        username: username,
        email: 'hong@marvinhong.com',
    };  
    return testResponse
    
    //const response = await axios.post('/apiURL/login', { username, password });
    //return response.data;

  } catch (error) {
    throw new Error('Login failed');
  }
}