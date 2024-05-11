import React from 'react'
import './DiscriptionBox.css'
const DisscriptionBox = () => {
  return (
    <div className='description-box'>
      <div className='description-navigator'>
        <div className="descriptionBox-new-box">Description</div>
        <div className='descriptionBox-new-box fade'>Reviews</div>
        
      </div>
      <div className="descriptionBox-description">
        <p>"Discover our diverse online marketplace offering a wide range of products to suit your needs. From electronics to fashion, we provide quality items at competitive prices. Enjoy seamless shopping experience with secure transactions and swift delivery. Explore, shop, and experience convenience like never before!"</p>
        <p>
        "Browse our user-friendly platform for the latest trends and essentials. With reliable customer support and easy returns, we ensure your satisfaction. Join our community of satisfied shoppers and elevate your online shopping experience today
        </p>
      </div>
    </div>
  )
}

export default DisscriptionBox
