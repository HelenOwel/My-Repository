import React from 'react'
import 'aos/dist/aos.css';
import car from '../assets/car.png'
import flight from '../assets/flight.png' 
import red from '../assets/rope.png'
import brand from '../assets/Brand.png'
import 'aos/dist/aos.css';


import './Resume.css'


function Resume() {
  return (
    <div className='mt-[100px] '>

      <div data-aos = "zoom-in" className='w-full text-center '>
        <div className='flex gap-1 items-center justify-center text-center '>
            <span className='w-6  bg-red-600 border-red-600 h-1'></span>
            <span  className='w-1 bg-red-600 border-red-600 h-1'></span>
          <h1 className='text-2xl text-gray-700'>My Project</h1>
          </div >
            <h3 className='text-center py-3 md:text-5xl text-3xl text-gray-700'>Awesome Projects</h3>
        </div>


        <div>
            <div className=' relative overflow-hidden grid md:grid-cols-2  gap-1 mt-[60px] items-center justify-center text-center '>
                <div  className='flex justify-between overflow-hidden items-center'>
                <div data-aos="slide-right" className='px-12 flex items-center'>
                <a href="https://flight-booking-app-fe.vercel.app" target="_blank" rel="noopener noreferrer">
                 <img src={flight} alt="Flight Booking App" className=' border-r-8 border-gray-400' />
                  </a>
                 <p data-aos="slide-right " className='p-0 m-0 h-full top-[40%]   right-11 text-gray-400 absolute'> <i class="fa-solid fa-caret-right" ></i></p>
                </div>



                <div className='hidden md:flex overflow-hidden'>
                <p data-aos="zoom-out" className='absolute overflow-hidden left-[54%] top-[40%] text-red-600'>SkyHaven</p>
                <p data-aos="zoom-out" className=' h-4 w-4 overflow-hidden absolute sm:right-[48.5%] lg:right-[49%] top-[40%] z-10 bg-white rounded-lg border-red-600 border-2'></p>
                </div>

                </div>
                
                <div className=' hidden md:block gramp bg-red-600'>

                </div>

             </div>


             <div className=' relative overflow-hidden grid md:grid-cols-2  gap-1  items-center justify-center text-center '>
                <div  className='flex justify-between overflow-hidden items-center mt-[50px] md:mt-[10px] order-1'>
                <div data-aos="slide-right" className='px-12 flex items-center'>
                <a href="https://velocraft.vercel.app/?vercelToolbarCode=UYDDFbKhdmAmIXo" target="_blank" rel="noopener noreferrer">
                 <img src={car} alt="Flight Booking App" className=' border-r-8 border-gray-400' />
                  </a>
                 <p data-aos="slide-right " className='p-0 m-0 h-full top-[40%]   right-11 text-gray-400 absolute'> <i class="fa-solid fa-caret-right" ></i></p>
                </div>



                </div>
                <div className='hidden md:flex overflow-hidden order-2'>
                <p data-aos="zoom-out" className='absolute overflow-hidden right-[54%] top-[40%] text-red-600'>EV-olution</p>
                <p data-aos="zoom-out" className=' h-4 w-4 overflow-hidden absolute sm:right-[48.5%] lg:right-[49%] top-[40%]  bg-white rounded-lg border-red-600 border-2'></p>
                </div>



                
                <div className=' hidden md:block gramp bg-red-600'>

                </div>

             </div>





             <div className=' relative overflow-hidden grid md:grid-cols-2  gap-1  items-center justify-center text-center '>
                <div  className='flex justify-between overflow-hidden items-center mt-[50px] md:mt-[10px]'>
                <div data-aos="slide-right" className='px-12 flex items-center'>
                <a href="https://helenowel.github.io/E-commerce-web-design/" target="_blank" rel="noopener noreferrer">
                 <img src={brand} alt="Flight Booking App" className=' border-r-8 border-gray-400' />
                  </a>
                 <p data-aos="slide-right " className='p-0 m-0 h-full top-[40%]   right-11 text-gray-400 absolute'> <i class="fa-solid fa-caret-right" ></i></p>
                </div>



                <div className='hidden md:flex overflow-hidden'>
                <p data-aos="zoom-out" className='absolute overflow-hidden left-[54%] top-[40%] text-red-600'>E-Commerce Website</p>
                <p data-aos="zoom-out" className=' h-4 w-4 overflow-hidden absolute sm:right-[48.5%] lg:right-[49%] top-[40%] z-10 bg-white rounded-lg border-red-600 border-2'></p>
                </div>

                </div>
                
                <div className=' hidden md:block gramp bg-red-600'>

                </div>

             </div>




             <div className=' relative overflow-hidden grid md:grid-cols-2  gap-1  items-center justify-center text-center '>
                <div  className='flex justify-between overflow-hidden items-center mt-[50px] md:mt-[10px] order-1'>
                <div data-aos="slide-right" className='px-12 flex items-center'>
                <a href="https://finance-three-tan.vercel.app/" target="_blank" rel="noopener noreferrer">
                 <img src={red} alt="Flight Booking App" className=' border-r-8 border-gray-400' />
                  </a>
                 <p data-aos="slide-right " className='p-0 m-0 h-full top-[40%]   right-11 text-gray-400 absolute'> <i class="fa-solid fa-caret-right" ></i></p>
                </div>



                </div>
                <div className='hidden md:flex overflow-hidden order-2'>
                <p data-aos="zoom-out" className='absolute overflow-hidden right-[54%] top-[40%] text-red-600'>SkyHaven</p>
                <p data-aos="zoom-out" className=' h-4 w-4 overflow-hidden absolute sm:right-[48.5%] lg:right-[49%] top-[40%] z-10 bg-white rounded-lg border-red-600 border-2'></p>
                </div>



                
                <div className=' hidden md:block gramp bg-red-600'>

                </div>

             </div>





        </div>
    </div>
  )
}

export default Resume