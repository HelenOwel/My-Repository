import React from 'react'
import mine from '../assets/meme.png'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='bg-red-700  w-full '>
       <div>
       <div className='grid md:grid-cols-2 justify-between items-center mx-10 lg:mx-20 mt-8 '>
           <div>
          <p className='text-white  text-xl pt-12 md:pt-0 mt-5'>I'm</p>
          <h1 className='text-white text-3xl md:text-6xl py-5 '>Helen Owel</h1>
          <div className='text-white text-2xl md:text-3xl lg:text-5xl '>
          <ReactTyped
      strings={[
        "Web Developer",
        "Web Designer",
        "Front End Developer",
        "Full Stack Developer",
        
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
          </div>
          <div className='text-sm  text-red-600 py-5 mt-5 gap-5 flex'>
        <button className='bg-white border-red-600 hover:border-2  py-4 mx-2 px-7 hover:bg-red-600 hover:border-white hover:text-white duration-300 ease-in-out'>Contact Me</button>
        <button className='bg-white border-red-600 hover:border-2  py-4 px-9  hover:bg-red-600 hover:border-white hover:text-white duration-300 ease-in-out'>Hire Me</button>
       </div>

           </div>
           <div>
           <img src={mine}  alt="/" className=' hidden md:flex transform scale-x-130 object-contain scale-y-100 pt-10' />
           </div>
        </div>
      
       </div>
    </div>
  )
}

export default Hero