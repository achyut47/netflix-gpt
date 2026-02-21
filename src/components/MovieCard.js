import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
	return (
		<div className="w-36 flex-shrink-0 pr-4 cursor-pointer transition-transform duration-300 hover:scale-110  ">
			<img alt="movie card" src={IMG_CDN_URL + posterPath} />
		</div>
	);
};

export default MovieCard;
