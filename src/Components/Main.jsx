import React, { useEffect } from 'react';
import me from '../assets/ai.jpg';
import './Main.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div>
      <div className='grid md:grid-cols-2 mb-12  '>
        <div className='h-[]'>
          <img src={me} alt="Profile"  className='h-[100%] bg-gray-800 w-[100%]'/>
        </div>
        <div data-aos="fade-up" className='px-5 mt-[160px]'>
          <div className='flex gap-1 items-center'>
            <span className='w-6 bg-red-600 border-red-600 h-1'></span>
            <span  className='w-1 bg-red-600 border-red-600 h-1'></span>
          <h1 className='text-2xl'>Learn About Me</h1>
          </div >
          <p className='mt-10 mb-11'>
            Passionate full-stack web developer with expertise in creating dynamic, responsive, and user-friendly websites. Skilled in modern front-end 
            and back-end technologies, I craft seamless web solutions that deliver exceptional user experience.
          </p>

          <div data-aos="fade-up">
            <div className='flex justify-between'>
              <p>Web Design</p>
              <p>85%</p>
            </div>
            <div className='web overflow-hidden bg-gray-200 rounded-full'>
              <div data-aos="slide-right"  className='webs rounded-full'></div>
            </div>
          </div>

          <div data-aos="fade-up">
            <div className='flex justify-between pt-5'>
              <p>Web Development</p>
              <p>95%</p>
            </div>
            <div className='app overflow-hidden bg-gray-200 rounded-full'>
              <div data-aos="slide-right"  className='apps rounded-full'></div>
            </div>
          </div>

          <div data-aos="fade-up">
            <div className='flex justify-between pt-5'>
              <p>Web App-Design</p>
              <p>82%</p>
            </div>
            <div className='dev overflow-hidden bg-gray-200 rounded-full'>
              <div data-aos="slide-right" className='devs rounded-full overflow-hidden'></div>
            </div>
          </div>

          <div data-aos="fade-up">
            <div className='flex justify-between pt-5'>
              <p>Web App-Development</p>
              <p>82%</p>
            </div>
            <div className='drow overflow-hidden bg-gray-200 rounded-full'>
              <div data-aos="slide-right"  className='drows rounded-full'></div>
            </div>
          </div>

          <button dats-aos="fade-up" className='bg-red-600 text-white mt-7 px-9 py-3 border-2 border-red-600 hover:bg-white hover:text-gray-500 duration-300 transition-transform ease-out'>Learn More</button>


        </div>

      </div>
    </div>
  );
}

export default Main;
