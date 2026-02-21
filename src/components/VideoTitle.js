import React from 'react';

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="pt-[12%] px-[3%] absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10 text-white">
			<h1 className="text-6xl font-bold">{title}</h1>
			<p className="py-6 text-lg w-1/4">{overview}</p>
			<div className="">
				<button className="bg-white text-black hover:bg-opacity-40 p-4 px-16 text-lg rounded-md">
					▶︎ Play
				</button>
				<button className="bg-gray-500 mx-2 p-4 px-16 text-lg text-white rounded-md">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
