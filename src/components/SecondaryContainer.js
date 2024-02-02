import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
	const movies = useSelector(state => state.movies);
	return (
		(movies.nowPlayingMovies || movies.poplarMovies || movies.topRatedMovies 
			|| movies.upcomingMovies) && (
			<div className='bg-black'>
				<div className='-mt-52 pl-12 relative z-10'>
					<MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
					<MovieList title={"Popular Movies"} movies={movies.poplarMovies} /> 
					<MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
					<MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
					
				</div>
			</div>
		)
	)
}

export default SecondaryContainer