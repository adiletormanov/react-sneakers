import React from 'react';
import Login from '../Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="content">
      <h1>Войти</h1>
      <Login />
      <p>
        Создать новый
        <Link to="/RegisterPage">
          <span className="login-span"> аккаунт</span>{' '}
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
