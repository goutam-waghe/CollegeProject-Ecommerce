import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components/productDisplay/ProductDisplay'
import DisscriptionBox from '../components/DiscriptionBox/DisscriptionBox'
import RelatedProducts from '../components/relatedProducts/RelatedProducts'

const Products = () => {
  const {all_product} = useContext(ShopContext)

  const {productId} = useParams()
console.log(productId)
  const product = all_product.find((e) => {
    return e.id === Number(productId)})

  return (
    <div className='products'>
      
      <Breadcrum product={product}/>
     <ProductDisplay product={product}/>
     <DisscriptionBox />
     <RelatedProducts/>
    </div>
  )
}

export default Products
