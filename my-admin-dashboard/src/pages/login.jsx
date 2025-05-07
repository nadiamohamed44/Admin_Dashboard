import React from 'react';
import { useUserContext } from '../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    login({ name: 'Admin User', role: 'admin' });
    navigate('/admin');
  };

  const handleUserLogin = () => {
    login({ name: 'Normal User', role: 'user' });
    navigate('/admin');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="title">Admin Panel</h1>
        <p className="subtitle">Sign in as a role</p>
        <button className="btn admin-btn" onClick={handleAdminLogin}>Login as Admin</button>
        <button className="btn user-btn" onClick={handleUserLogin}>Login as User</button>
      </div>
    </div>
  );
};

export default Login;
