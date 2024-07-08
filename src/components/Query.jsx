import React, { useEffect, useState } from 'react'

import { WiDayCloudy , WiBarometer , WiStrongWind  } from "react-icons/wi";
import { LiaCitySolid } from "react-icons/lia";
import { TbLocationSearch } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";


function Query({cityData}) {
    console.log(cityData)
  return (
    <>
        <div className='flex flex-col justify-center items-center'>

            <div className="grid grid-cols-2 xl:grid-col-3 gap-10 mt-10 p-5 container mx-auto border shadow rounded-xl">
                <div className='flex justify-center gap-3 items-center text-3xl font-semibold'>
                    <LiaCitySolid className='text-5xl text-blue-500' />
                    {cityData.name?cityData.name:"yükleniyor"}
                </div>
                {/* sıcaklık */}
                <div className='flex gap-2 text-2xl justify-center items-center'>
                    <WiDayCloudy className='font-semibold text-5xl text-blue-600'/> {cityData.main?cityData.main.temp:"yükleniyor"}
                </div>
                {/* hissedilen sıcaklık */}
                <div className='flex gap-2 text-2xl justify-center items-center'>
                    <WiBarometer className="font-semibold text-5xl text-blue-600"/> {cityData.main?cityData.main.feels_like:"yükleniyor"}
                </div>
                {/* rüzgar hızı */}
                <div className='flex gap-2 text-2xl justify-center items-center'>
                    <WiStrongWind className='font-semibold text-5xl text-blue-600'/> {cityData.wind?cityData.wind.speed:"yükleniyor"}
                </div>
                {/* deniz yüksekliği */}
                <div className='flex gap-2 text-2xl justify-center items-center'>
                    <TbLocationSearch className='font-semibold text-4xl text-blue-600'/> {cityData.main?cityData.main.sea_level:"yükleniyor"}
                </div>
                {/* nem */}
                <div className='flex gap-2 text-2xl justify-center items-center'>
                    <WiHumidity className='font-semibold text-5xl text-blue-600'/> {cityData.main?cityData.main.humidity:"yükleniyor"}
                </div>

            </div>
            <div className='flex justify-center items-center text-white mt-10 shadow shadow-black bg-blue-600 rounded-lg p-3'>
                <i>unutmayınız ki bu değerler ortalamadır!</i>
            </div>
        </div>
    </>
      
  )
}

export default Query
