import React from 'react'
import "./AddProduct.css"
import upload_area from "../../assets/upload_area.svg"
import { useState } from 'react'
const AddProduct = () => {

  const [img  , setImg ] = useState(false)
  const [productDetais , setProductDetails] = useState({
    name: "" ,
    image: "" ,
    category: "women" ,
    new_price: "" ,
    old_price: ""
  })
  const imgHandler = (e) => {
      setImg(e.target.files[0])
  } 
  const changeHandler = (e) => {
    setProductDetails({...productDetais , [e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    let responseData ;
    let product = productDetais ;
    let formData = new FormData();
    formData.append('product' , img)
    
    console.log(productDetais)
    await fetch('http://localhost:4000/upload' , {
      method:"POST" ,
      headers:{
        Accept :'application/json' ,
      } , 
      body: formData ,
    }).then((resp) => resp.json()).then((data) => {responseData = data})

if(responseData.success)
  {
    product.image = responseData.image_url
    console.log(product)
    await fetch('http://localhost:4000/addproduct' , {
      method:"POST" , 
      headers:{
        Accept: 'application/json' ,
        "Content-Type" : "application/json"
      } ,
      body: JSON.stringify(product)
      
    }).then((resp) => resp.json()).then((data) => {
      data.success?alert("product added"):alert("failed")
    })
  }

  }
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfiled">
        <p>Product title</p>
        <input value={productDetais.name} onChange={changeHandler} type="text" name='name' placeholder='type here' />
      </div>
      <div className="product-price">
      <div className="addproduct-itemfiled">
        <p>Price</p>
        <input value={productDetais.old_price}  onChange={changeHandler} type="text" name='old_price' placeholder='type here' />
      </div>
      <div className="addproduct-itemfiled">
        <p>Offer Price</p>
        <input value={productDetais.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='type here' />
      </div>
      </div>
      
      <div className="addproduct-itemfiled">
        <p>Product Category</p>
        <select value={productDetais.category} onChange={changeHandler} name="category" className="addProduct-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfiled">
       <label htmlFor="file-input">
        <img src={img?URL.createObjectURL(img):upload_area} className='addProduct-upload-img' alt="" />
       </label>
        <input  onChange={imgHandler} type="file" id='file-input' name='image' hidden/>
      </div>
     <button onClick={() => {
      Add_Product()
     }} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
