import React from 'react'
import uni from '../assets/uni.png'
import rent from '../assets/rent.png'
import yoga from '../assets/yoga.png'
import travel from '../assets/travel.png'
import man from '../assets/man.png'
import work from '../assets/work.png'

function Portfolio() {
  return (
    <div>
        <div className='w-full  lg:mx-11 mt-[70px] mb-[15px]'>
        <div data-aos = "zoom-in" className='w-full text-center '>
        <div className='flex gap-1 items-center justify-center text-center '>
            <span className='w-6  bg-red-600 border-red-600 h-1'></span>
            <span  className='w-1 bg-red-600 border-red-600 h-1'></span>
          <h1 className='text-2xl text-gray-700'>MY PORTFOLIO</h1>
          </div >
            <h3 className='text-center py-3 text-5xl text-gray-700 '>My Excellent Portfolio</h3>
        </div>

        </div>

        <div className='flex items-center justify-center gap-2 lg:gap-4 mt-[20px] mb-[10px]'>
            <button  className='bg-red-600 text-white text-center border-2 border-red-600 hover:bg-white hover:border-red-500 hover:text-red-600 py-2 px-4'>All</button>
            <button className='bg-red-600 text-white text-center border-2 border-red-600 hover:bg-white hover:text-red-600 py-2 px-4'>Web Design</button>
            <button className='bg-red-600 text-white text-center border-2 border-red-600 hover:bg-white hover:text-red-600 py-2 px-4'>Mobile Apps</button>
            <button className='bg-red-600 text-white text-center border-2 border-red-600 hover:bg-white hover:text-red-600 py-2 px-4'>Game Dev</button>

        </div>

        <div data-aos = "zoom-in" className='grid md:grid-cols-3 mx-16 gap-7 mb-[50px] items-center justify-center'>
            <div className='relative group h-[190px]  border-3 mt-[30px]  ' >
                <img src={uni} alt="/" className=' md:w-[500px] h-[100%]   relative transform transition duration-300 ease-in-out group-hover:translate-x-2 ' />
                <div className='flex items-center justify-between py-2 ml-0.5 bg-slate-100 w-[99%]  z-10 absolute -bottom-8'>
                    <h1 className='pl-2 group-hover:text-lg transition duration-300 ease-in-out'>University Website</h1>
                   <div className='text-white group-hover:bg-white group-hover:text-red-600 border-2 bg-red-600 py-2 px-3 mx-3 transition duration-300 ease-in-out '>
                   <i class="fa-solid fa-plus"></i>
                   </div>

                </div>


            </div>


            <div className='relative group h-[190px] mt-[30px]   border-3 ' >
                <img src={yoga} alt="/" className=' md:w-[500px] h-[100%]   relative transform transition duration-300 ease-in-out group-hover:translate-x-2 ' />
                <div className='flex items-center justify-between py-2 ml-0.5 bg-slate-100 w-[99%]  z-10 absolute -bottom-8'>
                    <h1 className='pl-2 group-hover:text-lg transition duration-300 ease-in-out'>Yoga Website</h1>
                   <div className='text-white group-hover:bg-white group-hover:text-red-600 border-2 bg-red-600 py-2 px-3 mx-3 transition duration-300 ease-in-out '>
                   <i class="fa-solid fa-plus"></i>
                   </div>

                </div>


            </div>



            <div className='relative group h-[190px] mt-[30px]  border-3 ' >
                <img src={travel} alt="/" className=' md:w-[500px] h-[100%]   relative transform transition duration-300 ease-in-out group-hover:translate-x-2 ' />
                <div className='flex items-center justify-between py-2 ml-0.5 bg-slate-100 w-[99%]  z-10 absolute -bottom-8'>
                    <h1 className='pl-2 group-hover:text-lg transition duration-300 ease-in-out'>Travelling Website</h1>
                   <div className='text-white group-hover:bg-white group-hover:text-red-600 border-2 bg-red-600 py-2 px-3 mx-3 transition duration-300 ease-in-out '>
                   <i class="fa-solid fa-plus"></i>
                   </div>

                </div>


            </div>

        </div>


        <div data-aos = "zoom-in" className='grid md:grid-cols-3 mx-16 gap-7 mb-[50px] items-center justify-center'>
            <div className='relative group h-[190px]  border-3 mt-[30px]  ' >
                <img src={rent} alt="/" className=' md:w-[500px] h-[100%]   relative transform transition duration-300 ease-in-out group-hover:translate-x-2 ' />
                <div className='flex items-center justify-between py-2 ml-0.5 bg-slate-100 w-[99%]  z-10 absolute -bottom-8'>
                    <h1 className='pl-2 group-hover:text-lg transition duration-300 ease-in-out'>Car-Rentals Website</h1>
                   <div className='text-white group-hover:bg-white group-hover:text-red-600 border-2 bg-red-600 py-2 px-3 mx-3 transition duration-300 ease-in-out '>
                   <i class="fa-solid fa-plus"></i>
                   </div>

                </div>


            </div>


            <div className='relative group h-[190px] mt-[30px]   border-3 ' >
                <img src={man} alt="/" className=' md:w-[500px] h-[100%]   relative transform transition duration-300 ease-in-out group-hover:translate-x-2 ' />
                <div className='flex items-center justify-between py-2 ml-0.5 bg-slate-100 w-[99%]  z-10 absolute -bottom-8'>
                    <h1 className='pl-2 group-hover:text-lg transition duration-300 ease-in-out'>Shopping Website</h1>
                   <div className='text-white group-hover:bg-white group-hover:text-red-600 border-2 bg-red-600 py-2 px-3 mx-3 transition duration-300 ease-in-out '>
                   <i class="fa-solid fa-plus"></i>
                   </div>

                </div>


            </div>



            <div className='relative group h-[190px] mt-[30px]  border-3 ' >
                <img src={work} alt="/" className=' md:w-[500px] h-[100%]   relative transform transition duration-300 ease-in-out group-hover:translate-x-2 ' />
                <div className='flex items-center justify-between py-2 ml-0.5 bg-slate-100 w-[99%]  z-10 absolute -bottom-8'>
                    <h1 className='pl-2 group-hover:text-lg transition duration-300 ease-in-out'>Animation Design</h1>
                   <div className='text-white group-hover:bg-white group-hover:text-red-600 border-2 bg-red-600 py-2 px-3 mx-3 transition duration-300 ease-in-out '>
                   <i class="fa-solid fa-plus"></i>
                   </div>

                </div>


            </div>

        </div>






    </div>
  )
}

export default Portfolio