import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptSearchSuggestion from './GptSearchSuggestion'
import { BANNER_BG_ORIGINAL_IMG } from '../utils/constant'
import { useSelector } from 'react-redux'

const GptSearch = () => {
	const { gptMoviesName, searchedMoviesResult } = useSelector(state => state.gpt)
	return (
		<div>
			<div className='fixed height-100vh -z-10'>
				<img src={BANNER_BG_ORIGINAL_IMG}
					alt="bg"/>
			</div>
			<GptSearchbar />
			<GptSearchSuggestion movieName={gptMoviesName} moviesResult={searchedMoviesResult} />
		</div>
	)
}

export default GptSearch