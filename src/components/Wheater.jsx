import React from 'react'
import { useState } from 'react';
import Query from './Query';
import Loading from './Loading';
import { TiWeatherCloudy } from "react-icons/ti";

function Wheater() {
  // inputtan değerlerin query stateine çekilmesi
  const [query,setQuery] = useState()
  // data state
  const [data,setData] = useState()

  // sorgu fonksiyonu başlangıcı
  const sorgu = async() => {
    if(query && query != "lütfen şehir ismi giriniz"){
      const startfunciton = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=67b10f4df5bc8d4bb7b5e2fdde7598ce`).then(res => res.json()).then(promise => setData(promise))
      setQuery("")
    }
    else{
      console.log("lütfen şehir giriniz")
      setQuery("lütfen şehir ismi giriniz")
      $("#input").css("color","red").css("border-color","red")
    }
  }
  return (
    <div className='h-screen p-2'>
        <div className='flex justify-center items-center mt-10 p-5 gap-8  rounded-xl'>
                <input id='input' onChange={e => setQuery(e.target.value)} type="text" placeholder={"SEARCH (City,village,provide)"} value={query} className='p-3 border border-slate-300 rounded-full w-[350px]' />
                <button onClick={() => sorgu()} className='bg-green-600 hover:bg-green-700 px-10 py-3 rounded-lg text-white'><TiWeatherCloudy className='text-2xl' /></button>
        </div>

        {
          !data?<Loading />:<Query cityData={data} />
        }
    </div>
  )
}

export default Wheater