import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Team from './Components/Team'

function TeamPage() {
  return (
    <div>
        <Navbar/>
       <div className='mt-[130px] mb-[60px]'>
       <Team/>
       </div>
        <Footer/>

    </div>
  )
}

export default TeamPage