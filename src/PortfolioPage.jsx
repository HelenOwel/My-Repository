import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'

function PortfolioPage() {
  return (
    <div>
     <Navbar/>
  <div className='lg:mt-[190px]'>
  <Portfolio/>
  </div>
        
        <Footer/>
    </div>
  )
}

export default PortfolioPage