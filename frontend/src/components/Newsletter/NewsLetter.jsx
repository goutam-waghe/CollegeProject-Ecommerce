import React from 'react'
import "./NewsLetter.css"
const Newsletters = () => {
  return (
    <div className='news-letters'>
      <h1>GET EXCLUSIVES OFFERS ON YOUR EMAIL</h1>
      <p>Subscribe to our news letters and stay updated</p>
      <div>
        <input type="email" name="email" placeholder='your Email' />
        <button type='submit'>Suscribe</button>
        
      </div>
      
    </div>
  )
}

export default Newsletters
