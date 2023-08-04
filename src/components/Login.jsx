import React from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {setUser} from '../redux/slices/userSlice';
import LoginForm from './LoginForm';


const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email, password) => {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, email, password)
					.then(({user}) => {
							console.log(user);
							dispatch(setUser({
								name: user.name,
								surname: user.surname,
									email: user.email,
									id: user.uid,
									token: user.accessToken,
							}));
							navigate('/');
					})
					.catch(() => alert('Invalid user!'))
	}

	return (
			<LoginForm
					title="войти"
					handleClick={handleLogin}
			/>
	)
}

export default Login
