import React from 'react'
import logo from "../assets/logo.png"
import whatsapp from '../assets/whatsapp_icon.png'
import instagram from '../assets/instagram_icon.png'
import pinterest from '../assets/pintester_icon.png'
import './Footer.css'

const Footer = () => {
    
  return (
    <div className='footer'>
        <div className='footer-logo'>
        <img src={logo} alt="" />
        <h1>Shoppy</h1>
        </div>
        <ul className='footer-links'>
          <li>company</li>
          <li>products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className='footer-social-icon'>
          <div className="footer-social-container">
            <img src={whatsapp} alt="" />
          </div>
          <div className="footer-social-container">
            <img src={instagram} alt="" />
          </div>
          <div className="footer-social-container">
            <img src={pinterest} alt="" />
          </div>
        </div>
        <div  className='footer-copyright'>
          <hr />
          <p>copyright @2024 all right reserved!</p>
        </div>  </div>
  )
}

export default Footer
