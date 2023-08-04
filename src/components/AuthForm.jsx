import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setPass,
  setName,
  setSurname,
} from '../redux/slices/formSlice';

const AuthForm = ({ title, handleClick }) => {
  const dispatch = useDispatch();
  const { email, pass, name, surname } = useSelector(
    (state) => state.formSlice,
  );

  return (
    <div className="content">
      <div className="AuthForm">
        <input
          className="register-input"
          type="name"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
          placeholder="Имя"
        />
        <input
          className="register-input"
          type="surname"
          value={surname}
          onChange={(e) => dispatch(setSurname(e.target.value))}
          placeholder="Фамилия"
        />
        <input
          className="register-input"
          type="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          placeholder="логин"
        />
        <input
          className="register-input"
          type="password"
          value={pass}
          onChange={(e) => dispatch(setPass(e.target.value))}
          placeholder="пароль"
        />
        <button
          className="register-btn"
          onClick={() => handleClick(email, pass)}
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
