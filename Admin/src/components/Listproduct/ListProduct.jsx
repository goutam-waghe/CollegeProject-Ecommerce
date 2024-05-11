import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from "../../assets/cross_icon.png"
const ListProduct = () => {
  const [allproducts , setAllproducts] = useState([])
  const fetchInfo = async () => {
          await fetch('http://localhost:4000/allproducts')
          .then((res) => res.json())
          .then((data) => {setAllproducts(data)  })
  }

  useEffect(() => {
    fetchInfo()
  } , [])


  const removeProduct = async (id) => {
            await fetch("http://localhost:4000/removeproduct" ,  {
              method:'POST' , 
              headers:{
                Accept:'application/json' , 
                'Content-type':'application/json'
              } ,
              body:JSON.stringify({id:id})
            })

          await fetchInfo()
  }
  return (
    <div className='listproduct'>
      <h1>All product list</h1>
      <div className="listproduct-formate-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>category</p>
        <p>remove</p>
      </div>
      <div className="listproducts-allproducts">
        <hr />
      {
        allproducts.map((product , index) => {
            return <> <div  key={index} className='listproduct-formate-main listproduct-formate'>
              <img src={product.image} alt="" className='listproduct-image'/>
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
             <img onClick={() => {
              removeProduct(product.id)
             }} className='listproduct-remove-icon' src={cross_icon} alt="" />

            </div>
            <hr /></>
        })
      }
      </div>
      
    </div>
  )
}

export default ListProduct
