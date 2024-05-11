import React, { useContext } from 'react'
import "./productDisplay.css"
import star_dull_icon from "../assets/star_dull_icon.png"
import star_icon from "../assets/star_icon.png"
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props
    const {addTocart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
      <div className='productDisplay_left'>
        <div className="productDisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-list-img">
            <img className='productDisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className='productDisplay-right'>
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
            <div className="product-display-right-old_price">{product.old_price}</div>
            <div className="product-display-right-new_price">{product.new_price}</div>
        </div>
        <div className="productDisplay-right-description">
            Lorem ipsumienistinctio, recusanda exercitationem, quasi ipsa quaerat minus expedita aut, impedit temporibus optio? Reiciendis, animi. Inventore, saepe?
        </div>
        <div className="productDisplay-right-size">
            <h1>Select Size</h1>
            <div className="productDisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={() => {
          console.log(product.id)
          addTocart(product.id)
        }}>Add to cart</button>
        <p className='productDisplay-right-category'><span>Category:</span>women , T-short , crop top</p>
        <p className='productDisplay-right-category'><span>tags:</span>Modern , Letest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
