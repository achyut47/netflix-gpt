import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { APP_ICON, LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

	const handleGptSearchClick = () => {
		dispatch(toggleGptSearchView());
	};

	const handleLanguageChange = (e) => {
		//console.log(e.target.value);
		dispatch(changeLanguage(e.target.value));
	};

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
				<div className="flex justify-around align-center text-center mb-6 pb-4 items-start">
					{showGptSearch && (
						<select
							onChange={handleLanguageChange}
							className="px-4 mt-6 bg-green-400 mr-2 h-12 text-black rounded"
						>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option value={lang.identifier} key={lang.identifier}>
									{lang.name}
								</option>
							))}
						</select>
					)}

					<img
						src={APP_ICON}
						className="w-14 mt-6 cursor-pointer rounded mx-2"
					/>
					<button
						onClick={handleGptSearchClick}
						className="bg-purple-600 cursor-pointer h-12 px-4 mt-6 mr-2 text-white rounded"
					>
						{showGptSearch ? 'Home' : 'Gpt Search'}
					</button>
					<button
						onClick={handleSignOut}
						className="bg-red-600 cursor-pointer h-12 px-4 mt-6 text-white rounded"
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
