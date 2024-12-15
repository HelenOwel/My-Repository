import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function AboutPage() {
  return (
    <div>
         <Navbar/>
         <Main/>
         <div className='flex flex-col md:flex-row  gap-9 pt-9 mx-5 md:mx-20'>
            <div  data-aos='slide-left' className=''>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252187.4655972249!2d7.285047899859316!3d9.024558400287825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1732976526912!5m2!1sen!2sng" 
            width="500" 
            height="400" 
            className=""
            style={{ border: '1px solid #ccc' }}
            allowFullScreen
            loading="lazy">
            </iframe>

            </div>
            {/* for forms */}
            <div>

                <form data-aos='slide-right' action="" className='space-y-3 pb-20'>
                   <div className='flex gap-3'>
                   <input type="text" placeholder='Your Name' className='fill w-full border py-3 placeholder:text-md placeholder:text-gray-600 px-2 focus:outline-0 focus:ring-2 focus:ring-primary focus:text-sm focus:pt-0  duration-300' />
                   <input type="email" placeholder='Your Email' className='fill  border  w-full py-3 placeholder:text-md placeholder:text-gray-600 px-2 focus:outline-0 focus:ring-2 focus:ring-primary focus:text-sm focus:pt-0  duration-300  '  />
                   </div>
                   <input type="text" placeholder='Subject' className='py-3  border  fill w-full placeholder:text-md placeholder:text-gray-600 px-2 focus:outline-0 focus:py-5 focus:ring-2 focus:ring-primary focus:text-sm focus:pt-0  duration-300' />
                    <textarea placeholder='Message' className='fill  border  w-full h-52 px-3 py-5 placeholder:text-gray-600  focus:outline-0 focus:ring-2 focus:ring-primary focus:text-sm focus:pt-0 duration-300' ></textarea>
                    <button className='w-full bg-red-600 text-white py-3 '>SEND MESSAGE</button>
                </form>
            </div>
        

        </div>
        <Footer/>
       
    </div>
  )
}

export default AboutPage