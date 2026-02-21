import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
	if (!movies || movies.length === 0) return null;
	console.log(movies);
	return (
		<div className="overflow-x-scroll p-2 bg-black text-white hide-scrollbar">
			<h1 className="text-2xl font-bold pb-1">{title}</h1>
			<div className="flex px-2 ">
				{movies.map((movie) => (
					<MovieCard key={movie.id} posterPath={movie.poster_path} />
				))}
			</div>
		</div>
	);
};

export default MovieList;
