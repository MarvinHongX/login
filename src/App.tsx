import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';

const App: React.FC = () => {

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