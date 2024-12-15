import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function ContactPage() {
  const resumeUrl = '/assets/Resume.pdf/Re.pdf';  

  return (
    <div>
      <Navbar />
     
      <div className="resume-download pt-[200px] pb-[200px] flex justify-center items-center bg-gradient-to-r from-red-500 to-black bg-[length:50%_100%]" >
        <a href={resumeUrl} download="Helen_Resume_Re.pdf">
          <button className="bg-black text-white py-2 px-4 rounded">
            Download My Resume
          </button>
        </a>
      </div>


      <Footer />
    </div>
    
  );
}

export default ContactPage;
