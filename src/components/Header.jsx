import React from 'react'
import { CiCloudSun } from "react-icons/ci";


function Header({city}) {
  return (
    <div className='container mx-auto bg-gray-800 rounded-2xl mt-2 flex items-center'>
      <div className='bg-red-800 py-10 px-5 flex justify-center items-center'>
        <h2 className='text-white font-semibold text-xl grid grid-cols-2 gap-3'>weather app <CiCloudSun className={"text-4xl"}/></h2>
      </div>
      <div className='flex mx-auto items-center'>
        {
          city?<strong className='font-semibold text-3xl text-white'>{city}</strong>:<div></div>
        }
      </div>
    </div>
  )
}

export default Header
