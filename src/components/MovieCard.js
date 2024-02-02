import React from 'react'
import { MOVIES_IMAGE_BASE_PATH } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className='w-52  pr-6 cursor-pointer'>
      <img src={MOVIES_IMAGE_BASE_PATH + posterPath} alt="MOVIE-CARD" style={{height: '250px'}}/>
    </div>
  )
}

export default MovieCard