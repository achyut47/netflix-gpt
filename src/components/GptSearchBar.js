import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
	const langKey = useSelector((store) => store.config.lang);

	return (
		<div className="flex justify-center pt-[20%]">
			<form className=" bg-black relative w-1/2 grid grid-cols-12">
				<input
					type="text"
					className="p-4 m-2 ml-12 col-span-8 "
					placeholder={lang[langKey].gptSearchPlaceholder}
				/>
				<button className="py-2 col-span-4 m-3 px-4 text-white rounded-md bg-red-600">
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
