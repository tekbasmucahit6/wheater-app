import React from 'react'
import Header from './Header'
import Wheater from './Wheater'

function Main() {
  return (
    <div>
      <div>
        {/* header compoment */}
        <Header/>

        {/* hava durumu sorgusu component */}
        <Wheater/>
      </div>

    </div>
  )
}

export default Main
