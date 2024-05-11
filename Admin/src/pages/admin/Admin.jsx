import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import AddProduct from '../../components/Addproduct/AddProduct'
import ListProduct from '../../components/Listproduct/ListProduct'
import { Routes  , Route } from 'react-router-dom'
import "./Admin.css"


const Admin = () => {
  return (
    <div className='admin'> 
      <Sidebar />
     <Routes>
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/listproduct' element={<ListProduct />} />
     </Routes>
    </div>
  )
}

export default Admin
