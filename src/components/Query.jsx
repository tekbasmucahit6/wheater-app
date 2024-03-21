import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'

import { WiDayCloudy , WiBarometer , WiStrongWind  } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";


function Query() {
    const my_api_key = process.env.my_wheater_api_key;
    const navigate = useNavigate()
    const params = useParams()
    const [wheater,setWheater] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const dataCheck = async() => {
            setLoading(true)
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&units=metric&appid=${my_api_key}`)
            setWheater(data)
            setLoading(false)
            console.log(data)
        }
        dataCheck()
    },[])
  return (
    <>
    {
        // loading
    loading?
    <div className='flex h-screen justify-center items-center'>
        <strong className='text-red-700 font-semibold text-xl'>LOADİNG...</strong>
    </div>
    :
    // eğer veriler çekilmişse
        <div>
            <Header city={params.city}/>

            <div className="mt-10 border border-gray-600 rounded-xl shadow-2xl p-5 container mx-auto">
                <div className='flex justify-center text-3xl font-semibold'>
                    {wheater.data.name}
                </div>
                <div className='flex font-semibold gap-2 mt-10 text-2xl justify-center items-center'>
                    <WiDayCloudy className='font-semibold text-5xl text-yellow-500'/> {wheater.data.main.temp}
                </div>
                <div className='flex font-semibold gap-2 mt-10 text-2xl justify-center items-center'>
                    <WiBarometer className="font-semibold text-5xl text-yellow-500"/> {wheater.data.main.feels_like}
                </div>
                <div className='flex font-semibold gap-2 mt-10 text-2xl justify-center items-center'>
                    <WiStrongWind className='font-semibold text-5xl text-yellow-500'/> {wheater.data.wind.speed}
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <button onClick={() => navigate("/")} className='p-4 flex items-center gap-3 rounded-lg bg-red-500 hover:bg-red-900 text-center text-white'>şehir ara <FaSearch /></button>
                </div>
            </div>
        </div>
}
    </>
      
  )
}

export default Query
