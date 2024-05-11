import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import add_product_icon from "../../assets/Product_Cart.svg"
import Product_list_icon from "../../assets/Product_list_icon.svg"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{
        textDecoration:"none"
      }}>
        <div className="slidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{
        textDecoration:"none"
      }}>
        <div className="slidebar-item">
          <img src={Product_list_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
