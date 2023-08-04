import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthForm from './AuthForm';
import { setUser } from '../redux/slices/userSlice';

const SignUpUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            name: user.name,
            surname: user.surname,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return <AuthForm title="создать" handleClick={handleRegister} />;
};

export default SignUpUser;
