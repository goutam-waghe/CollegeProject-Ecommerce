import React, { useContext } from 'react'
import "./Css/ShopCategory.css"
import { ShopContext } from '../context/ShopContext.jsx'
import dropDwon_icon from "../components/assets/dropdown_icon.png"
import Item from '../components/Items/Item.jsx'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
console.log(all_product)
    return (
    <div className='shop-category'>
    <img className='shop-category-banner' src={props.banner} alt="" />
    <div className="shoCategory-indexSort">
      <p>
        <span>Showing 1-12 </span> out of 36 projects  
      </p>
    <div className='shopcategory-sort' >
      sort by <img src={dropDwon_icon} alt="" />
    </div>
    </div>
    <div className='shopcategory-products'>
      {
        all_product.map((item ,  i) => {
          console.log(item.category , props.category)
          if(item.category === props.category){
          return <Item key={i} image={item.image} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price}/>} else{
            return null
          }
        }
      )
      }
    </div>
    <div className="shop-category-loadmore">
      Expolore
    </div>
    </div>
  )
}

export default ShopCategory
