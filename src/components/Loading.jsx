import React from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
function Loading() {
  return (
    <div className='flex h-2/3 justify-center items-end xl:fixed xl:bottom-5 xl:right-10 lg:fixed lg:bottom-5 lg:right-10 md:fixed md:bottom-5 md:right-10'>
        <div className='flex justify-center items-center'>
            <i className='bg-blue-500 p-5 rounded-full text-white flex justify-center items-center'>lütfen bir şehir arayınız <TiWeatherCloudy className='text-5xl ms-10' /></i>
        </div>
    </div>
  )
}

export default Loading