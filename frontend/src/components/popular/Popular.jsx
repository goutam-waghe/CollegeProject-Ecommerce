import React, { useEffect, useState } from 'react'
import "./Popular.css"

import Item from '../Items/Item.jsx'

const Popular = () => {
  const [popularinwomen , setPopularinwomen] = useState([])
useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
    .then((respo) => respo.json())
    .then((data) => setPopularinwomen(data))
} , [])
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularinwomen.map((item , i) => {
        return <Item key={i} image={item.image} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
