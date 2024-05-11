import React from 'react'
import './Css/loginsign.css'
const LoginSignup = () => {
  return (
    <div className='loginSingup'>
      <div className='loginSingup-container'>
        <h1>Sign in</h1>
        <div className='loginsingup-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Password'/>
        </div>
      <button>Continue</button>
      <p className="loginSignup-login">Already have an account? <span>login</span></p>
      <div className='loginSign-agree'>
        <input type="checkbox" name='' id='' />
        <p>By continuing , i agree to the terms od use and policy</p>

      </div>
      </div>
    </div>
  )
}

export default LoginSignup
