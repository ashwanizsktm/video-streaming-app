import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
	return (
		<div>
			<h1 className=' text-2xl font-bold text-white py-5'>{title}</h1>
			<div className='flex overflow-x-auto no-scrollbar'>
				<div className='flex'>
					{movies?.map(movie => <MovieCard posterPath={movie.poster_path} />)}
				</div>
			</div>
		</div>
	)


}

export default MovieList