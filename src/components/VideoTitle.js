import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='px-12 absolute bg-gradient-to-r from-black w-screen aspect-video pt-[25%]'>
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className='py-6 text-lg w-1/3 text-white'>{overview}</p>
      <div className='my-4'>
        <button className=' bg-white text-black px-10 py-3  rounded-md text-center mr-2'>play</button>
        <button className=' bg-gray-500 text-white px-10 py-3  rounded-md text-center'>more info</button>
      </div>
    </div>
  )
}

export default VideoTitle