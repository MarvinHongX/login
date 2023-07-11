// 사용자 정보 컴포넌트

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers/authReducer';
import { useNavigate } from 'react-router-dom';
import { clearUserInfo } from '../store/actions/authActions';

const UserInfo: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  const handleLogout = () => {
    dispatch(clearUserInfo());
    //navigate('/login'); 
  };

  return (
    <div>
      <h2>User Information</h2>
      {userInfo ? (
        <React.Fragment>
          <p>Username: {userInfo?.username}</p>
          <p>Email: {userInfo?.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </React.Fragment>
      ) : (
        <p>Loading ...</p>
      )
      }
    </div>
  );
};

export default UserInfo;





