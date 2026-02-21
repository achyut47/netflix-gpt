import React from 'react';

import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

	useMovieTrailer(movieId);
	return (
		<div className="absolute inset-0 -z-10">
			<iframe
				className="w-full h-full object-cover"
				src={
					'https://www.youtube.com/embed/' +
					trailerVideo?.key +
					'?&autoplay=1&mute=1'
				}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
			></iframe>{' '}
		</div>
	);
};

export default VideoBackground;
