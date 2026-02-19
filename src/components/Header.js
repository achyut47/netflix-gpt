import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate('/');
			})
			.catch((error) => {
				// An error happened.
				navigate('/error');
			});
	};

	return (
		<div
			className="flex opacity-95 justify-between bg-gradient-to-b from-black to-green-200
 w-full absolute"
		>
			<img
				className="w-48 z-20 cursor-pointer mix-blend-lighten"
				alt="netflix-logo"
				src="data:image/webp;base64,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"
			/>

			{user && (
				<div className="flex justify-around align-center mt">
					<img src={user?.photoURL} className="w-24 p-4 cursor-pointer" />
					<button
						onClick={handleSignOut}
						className="bg-red-600 h-12 px-2 mt-6 text-white rounded"
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
