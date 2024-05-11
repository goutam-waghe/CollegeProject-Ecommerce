import React from 'react'

import hand_icon from "../assets/hand_icon.png"
import arrow from "../assets/arrow.png"
import hero_img from "../assets/hero_image.png"
import './Hero.css'
const Hero = () => {
  return (
  <div className='hero'>

      <div className="hero-left">
         <h2>NEW ARRIVELS ONLY</h2>
         <div>
         <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections </p>
          <p>for Everyone</p>
         </div>
        <div className='hero-latest-btn'>
          <div>Latest collection</div>
          <img src={arrow} alt="" />
        </div>
     </div>
     <div className="hero-right">
        <img src={hero_img} alt="" />
  </div>
      
  </div>
  )
}

export default Hero
