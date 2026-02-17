import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div className="relative">
			<Header />

			<img
				className="w-screen h-screen overflow-hidden"
				src="https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg"
			/>

			<form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 p-12 bg-black/40  rounded-2xl">
				<h1 className="text-3xl text-white p-2 font-bold">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				<input
					type="text"
					placeholder="email"
					className="bg-gray-400 text-white rounded-xl w-full p-2 my-4 bg-opacity-60"
				/>
				{!isSignInForm && (
					<input
						type="text"
						placeholder="name"
						className="bg-gray-400 rounded-xl text-white w-full p-2 my-4 bg-opacity-60"
					/>
				)}

				<input
					type="password"
					placeholder="password"
					className="bg-gray-400 rounded-xl text-white w-full p-2 my-4 bg-opacity-60"
				/>
				<button className=" w-full p-2 my-4 rounded-lg  font-bold text-white bg-red-700 ">
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
