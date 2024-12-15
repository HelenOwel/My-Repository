import React from 'react'
import Home from './Home'
import Navbar from './Components/Navbar'
import ReviewPage from './ReviewPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './AboutPage'
import ServicePage from './ServicePage'
import PortfolioPage from './PortfolioPage'
import TeamPage from './TeamPage'
import ContactPage from './ContactPage'


function App() {
  return (
    <div>
    
   <BrowserRouter>
   <Routes>
    
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/review' element={<ReviewPage/>}/>
  <Route path='/service' element={<ServicePage/>}/>
  <Route path='/portfolio' element={<PortfolioPage/>}/>
  <Route path='/team' element={<TeamPage/>}/>
  <Route path='/contact' element={<ContactPage/>}/>

      </Routes>
      </BrowserRouter>
  

    </div>
  )
}

export default App