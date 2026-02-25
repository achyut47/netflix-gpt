import React from 'react';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { showGptSearch } from '../utils/gptSlice';

const Browse = () => {
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
	//<useNowPlayingMovies />;
	useNowPlayingMovies();
	usePopularMovies();
	return (
		<div>
			<Header />
			{showGptSearch ? (
				<GptSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
