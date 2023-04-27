import React from 'react'
import Navbar from '../components/navbarr/Navbar'
import Footer from '../components/footer/Footer'
import './homePage.css'

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <div className="hero">
          <img src="/img/Web_Fender_0417_22_NEW_PlayerPlus_HomepageSlide_DESKTOP.jpg" alt="" id='hero'/>
        </div>
        <div className="">
          
        </div>
        <Footer/>
    </div>
  )
}
