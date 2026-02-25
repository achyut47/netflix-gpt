import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const handleButtonClick = () => {
		// validate form data
		const message = checkValidData(email.current.value, password.current.value);

		setErrorMessage(message);

		if (message) return;

		if (!isSignInForm) {
			// sign up
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value,
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					// ...
					updateProfile(user, {
						displayName: 'name.current.value',
						photoURL:
							'https://avatars.githubusercontent.com/u/68823462?v=4&size=64',
					})
						.then(() => {
							// Profile updated!
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								}),
							);

							// ...
						})
						.catch((error) => {
							// An error occurred
							// ...
						});
					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		} else {
			// sign in

			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value,
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;

					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		}
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div className="relative">
			<Header />

			<img className="w-screen h-screen overflow-hidden" src={BG_URL} />

			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 p-12 bg-black/40  rounded-2xl"
			>
				<h1 className="text-3xl text-white p-2 font-bold">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				<input
					ref={email}
					type="text"
					placeholder="email"
					className="bg-gray-400 text-white rounded-xl w-full p-2 my-4 bg-opacity-60"
				/>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="name"
						className="bg-gray-400 rounded-xl text-white w-full p-2 my-4 bg-opacity-60"
					/>
				)}

				<input
					ref={password}
					type="password"
					placeholder="password"
					className="bg-gray-400 rounded-xl text-white w-full p-2 my-4 bg-opacity-60"
				/>
				<p className="text-red-500">{errorMessage}</p>
				<button
					onClick={handleButtonClick}
					className=" w-full p-2 my-4 rounded-lg  font-bold text-white bg-red-700 "
				>
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>
				<p className="text-white p-2 cursor-pointer" onClick={toggleSignInForm}>
					{isSignInForm
						? 'New to Netflix? Sign Up Now'
						: 'Already have an account? Sign In'}
				</p>
			</form>
		</div>
	);
};

export default Login;
