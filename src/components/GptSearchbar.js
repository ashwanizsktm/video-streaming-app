import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/lang.constant';
import openai from '../utils/openai';
import { API_OPTIONS, SEARCH_MOVIES_API, SEARCH_MOVIES_API_FITER } from '../utils/constant';
import { addGptMoviesResult } from '../utils/gptSlice';

const GptSearchbar = () => {
	const langKey = useSelector(state => state?.language.lang);
	const dispatch = useDispatch();
	const searchText = useRef(null);

	const searchMovieTMDB = async(movie) => {
		const data = await fetch(SEARCH_MOVIES_API+movie+SEARCH_MOVIES_API_FITER, API_OPTIONS);
		const json = await data.json();
		return json.results;
	}

	const handleGptSearchClick = async() => {
		const searchQuery = "Act as a Movie Recommendation system and suggest some movies for the query:" + searchText.current.value + 
		"only give me name of 5 movies, comma seperated like the example results given. Example results: Golmal, Andaj apna apana, Don, Shoeley, Gadar";
		const getResults = await openai.chat.completions.create({
			messages: [{ role: 'user', content: searchQuery }],
			model: 'gpt-3.5-turbo',
		});

		// TODO: Error Handling
		if(!getResults.choices) return null;
		
		const moviesName = getResults.choices?.[0]?.message.content.split(',');
		const promiseArray = moviesName.map(movie => searchMovieTMDB(movie));
		const moviesResult = await Promise.all(promiseArray);
		dispatch(addGptMoviesResult( {moviesName, moviesResult}));
	}
	
	return (
		<div className='pt-[10%] flex justify-center'>
			<form className='bg-black bg-opacity-80 w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
				<input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].searchPlaceholder} />
				<button className='col-span-3 m-4  bg-red-700 text-white font-bold cursor-pointer px-5 py-2'
				 onClick={handleGptSearchClick}>
					{lang[langKey].search}</button>
			</form>
		</div>
	)
}

export default GptSearchbar