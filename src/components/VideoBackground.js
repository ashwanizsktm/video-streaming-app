import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMoviesTrailer from '../hooks/useMoviesTrailer';

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector(state => state.movies?.trailerVideo);
	useMoviesTrailer(movieId);

	return (
		<div className='w-screen'>
			<iframe
			    src= {"https://www.youtube.com/embed/" + trailerVideo?.key +"?&autoplay=1&mute=1"}
				title="YouTube video player"
				className='w-screen aspect-video box-shadow' 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
		</div>
	)
}

export default VideoBackground