import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { APP_ICON, LOGO } from '../utils/constants';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				navigate('/error');
			});
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					}),
				);
				navigate('/browse');
				// ...
			} else {
				// User is signed out
				// ...
				dispatch(removeUser());
				navigate('/');
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<div
			className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-50 
bg-gradient-to-b from-black via-black/70 to-transparent"
		>
			<img
				className="w-48  cursor-pointer mix-blend-lighten"
				alt="netflix-logo"
				src={LOGO}
			/>

			{user && (
				<div className="flex justify-around align-center mt">
					<img src={APP_ICON} className="w-24 p-4 cursor-pointer" />
					<button
						onClick={handleSignOut}
						className="bg-red-600 cursor-pointer h-12 px-2 mt-6 text-white rounded"
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
