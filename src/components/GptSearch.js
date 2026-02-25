import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
	return (
		<div>
			<div className="absolute -z-21">
				<img className="w-screen h-screen overflow-hidden" src={BG_URL} />
			</div>
			<GptSearchBar />
			<GptMovieSuggestions />
		</div>
	);
};

export default GptSearch;
