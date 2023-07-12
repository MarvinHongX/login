import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUserInfo, setUserInfo } from '../store/actions/authActions';
import { RootState } from '../store';
import { getCookie, deleteCookie } from '../utils/cookieUtils';
import { getUserSessionInfo } from '../services/authService';

const UserInformation: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('sessionToken');
    if (token) {
      getUserSessionInfo(token)
        .then((userSessionInfo) => {
          if (userSessionInfo) {
            dispatch(setUserInfo(userSessionInfo));
          } else {
            deleteCookie('sessionToken');
            dispatch(clearUserInfo());
            navigate('/login');
          }
        })
        .catch((error) => {
          console.error('Failed to get user session info:', error);
          deleteCookie('sessionToken');
          dispatch(clearUserInfo());
          navigate('/login');
        });
    } else {
      dispatch(clearUserInfo());
      navigate('/login');
    }
  }, [dispatch, navigate]);

  const handleLogout = () => {
    deleteCookie('sessionToken');
    dispatch(clearUserInfo());
    navigate('/login');
  };
  
  return (
    <div>
      <h2>User Information</h2>
      {userInfo ? (
        <React.Fragment>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </React.Fragment>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default UserInformation;