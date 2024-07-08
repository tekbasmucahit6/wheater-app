import React from 'react'
import { CiCloudSun } from "react-icons/ci";


function Header({city}) {
  return (
   <>
    <div className='bg-zinc-950 p-5 text-white font-mono text-3xl shadow-md shadow-slate-900'>
      <b className='flex justify-center items-center'>WHEATERLY</b>
    </div>
   </>
  )
}

export default Header
