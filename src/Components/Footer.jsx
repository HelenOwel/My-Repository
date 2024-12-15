import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='bg-red-500 py-14 text-center text-white'>
         <div class="footer wow fadeIn" data-wow-delay="0.3s">
            <div class="container-fluid">
                <div class="container">
                    <div class="footer-info">
                        <h2>Helen Owel</h2>
                        <h3>Aco Estate, Abuja</h3>
                        <div class="footer-menu">
                            <p>+2347065113988</p>
                            <p>helenowel6@gmail.com</p>
                        </div>
                        <div class="footer-social space-x-1">
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-youtube"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="container copyright">
                    <p>&copy; <a href="#">HS codeSpace</a>, All Right Reserved | Designed By <a href="">HS </a></p>
                </div>
            </div>
        </div>
        <a href="#" className="btn back-to-top bg-red-800"><i class="fa fa-chevron-up"></i></a>
    </div>
  )
}

export default Footer