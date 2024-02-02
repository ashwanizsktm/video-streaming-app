import React from 'react'
import MovieList from './MovieList'


const GptSearchSuggestion = ({ movieName, moviesResult }) => {
	return (
		<div className=' bg-black text-white bg-opacity-80'>
			<div>
				{movieName.map((movieName, index) => (
					<MovieList key={movieName}
						title={movieName}
						movies={moviesResult[index]} />
				))}
			</div>
		</div>
	)
}

export default GptSearchSuggestion