import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

function Wheater() {
    const navigate = useNavigate();
    const [city,setCity] = useState();

    const searchable = () => {
        if(city  != null){
            navigate(`/search/${city}`)
        }
        else{
            console.log("lütfen veri giriniz")
            navigate("/")
        }
    }
    
  
    return (
        <>
        <div className='flex justify-center items-center mt-20'>
        <strong className='font-semibold text-xl'>ŞEHİR İSMİ GİRİNİZ</strong>
        </div>
    <div className=' mt-10 flex w-full place-content-center'>
        <div className='grid grid-cols-2 gap-3'>
            <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='şehir ismi giriniz' className='p-2 bg-transparent outline-none rounded-2xl border border-red-800' />
            <button  onClick={searchable} className='bg-red-800 w-20 text-center text-white flex justify-center items-center p-2 rounded-xl'><FaSearch className={"font-3xl"}/></button>
        </div>
    </div>
        </>
  )
}

export default Wheater
