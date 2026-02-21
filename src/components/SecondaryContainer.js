import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);

	// if (!movies || movies.length === 0) return null;
	return (
		<div className=" bg-black px-10">
			<div className="-mt-40 relative z-30">
				<MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
				<MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
				<MovieList title={'Popular'} movies={movies.popularMovies} />
				<MovieList title={'Horror Movies'} movies={movies.nowPlayingMovies} />
				<MovieList title={'Upcoming Movies'} movies={movies.nowPlayingMovies} />
			</div>
		</div>
	);
};

export default SecondaryContainer;

//https://image.tmdb.org/t/p/w185/pyok1kZJCfyuFapYXzHcy7BLlQa.png
