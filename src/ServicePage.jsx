import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Service from './Components/Service'

function ServicePage() {
  return (
    <div>
        <Navbar/>
      <div className='mt-[130px] mb-[50px]'>
      <Service/>
      </div>
        <Footer/>
    </div>
  )
}

export default ServicePage