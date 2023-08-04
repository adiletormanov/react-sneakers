import React from 'react';
import { Link } from 'react-router-dom';
import SignUpUser from '../SignUpUser';

const RegisterPage = () => {
  return (
    <div className="content">
      <h1>Создайте аккаунт</h1>
      <SignUpUser />
      <p>
        У вас уже есть аккаунт? <Link to="/LoginPage"> <span className='login-span'>Войти</span> </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
