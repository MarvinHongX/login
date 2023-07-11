import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers/authReducer';

const App: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  return (
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<UserInfo />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;