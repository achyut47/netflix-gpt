import React from 'react';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
	//<useNowPlayingMovies />;
	useNowPlayingMovies();
	return (
		<div>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default Browse;
