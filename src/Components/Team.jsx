import React from 'react'
import adebayo from '../assets/adebayo.png'
import jane from '../assets/jane.png'
import ike from '../assets/ike.png'
import gold from '../assets/gold.png'
import './Team.css'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

function Team() {
  return (
    <div className=''>
         <div className='   mt-[70px] mb-[15px] ml-8'>
        <div data-aos = "zoom-in" className='w-full text-center '>
        <div className='flex gap-1 items-center justify-center text-center '>
            <span className='w-6  bg-red-600 border-red-600 h-1'></span>
            <span  className='w-1 bg-red-600 border-red-600 h-1'></span>
          <h1 className='text-2xl text-gray-700'>MY Team</h1>
          </div >
            <h3 className='text-center py-3 text-5xl text-gray-700 '>My Excellent Team</h3>




            <div className='grid mt-[70px] md:grid-cols-2 mr-9 items-center gap-10 md:gap-0  justify-center '>
            <div className=' grid lg:grid-cols-2 relative gap-4 md:mx-11   teams'>
                <img src={ike} alt="/" className='h-[300px] md:w-[400px] object-cover' />
                <div className='text-left   '>
                <h2 className='text-gray-700 py-2 text-xl'>Bright Ikechukwu</h2>
                <h4 className='text-gray-800  text-xl font-semibold' >Mobile-app Developer</h4>
                 <div className='flex gap-2 text-2xl pt-3 pb-1'>

                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'><FaFacebook/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'><FaInstagram/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'> <FaTiktok/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'> <FaTwitter/></div>
                
                 </div>
                <p className=' py-5 '>A passionate mobile-app developer with 5 Years of experience </p>
                </div>


            </div>



             <div className=' grid lg:grid-cols-2 relative gap-4 md:mx-11   teams'>
                <img src={jane} alt="/" className='h-[300px] md:w-[400px] object-cover' />
                <div className='text-left   '>
                <h2 className='text-gray-700 py-2 text-xl'>Jane Anezi</h2>
                <h4 className='text-gray-800  text-xl font-semibold' >Web Designer & UI/UX Designer</h4>
                 <div className='flex gap-2 text-2xl pt-3 pb-1'>

                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'><FaFacebook/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'><FaInstagram/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'> <FaTiktok/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'> <FaTwitter/></div>
                
                 </div>
                <p className=' py-5 '>A professional ui/ux designer and app developer with 5 Years of experience </p>
                </div>


            </div>

            </div>


            <div className='grid mt-[70px] md:grid-cols-2 mr-9 items-center gap-10 md:gap-0  justify-center '>
            <div className=' grid lg:grid-cols-2 relative gap-4 md:mx-11   teams'>
                <img src={gold} alt="/" className='h-[300px] md:w-[400px] object-cover' />
                <div className='text-left   '>
                <h2 className='text-gray-700 py-2 text-xl'>Gold James</h2>
                <h4 className='text-gray-800 text-xl font-semibold' >Software Programmer</h4>
                 <div className='flex gap-2 text-2xl pt-3 pb-1'>

                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'><FaFacebook/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'><FaInstagram/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'> <FaTiktok/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'> <FaTwitter/></div>
                
                 </div>
                <p className=' py-5 '>A professional and passionate software programmer with 3 Years of experience </p>
                </div>


            </div>



            <div className=' grid lg:grid-cols-2 relative gap-4 md:mx-11   teams'>
                <img src={adebayo} alt="/" className='h-[300px] md:w-[400px] w-full object-cover' />
                <div className='text-left   '>
                <h2 className='text-gray-700 py-2 text-xl'>Adebayo Ologun</h2>
                <h4 className='text-gray-800  text-xl font-semibold' >Web Designer & Mobile app Developer</h4>
                 <div className='flex gap-2 text-2xl pt-3 pb-1'>

                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'><FaFacebook/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'><FaInstagram/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'> <FaTiktok/></div>
                <div className='bg-red-600 py-2 px-2 text-white hover:text-red-600 hover:bg-white'> <FaTwitter/></div>
                
                 </div>
                <p className=' py-5  '>A professional and devoted web-designer and app developer with 7 Years of experience </p>
                </div>


            </div>


            </div>




        </div>

        </div>

    </div>
  )
}

export default Team