import React from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Navbar from './components/navbar/Navbar'
import Products from './pages/Products'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/Cart'
import ShopCategory from './pages/ShopCategory'
import Footer from './components/footer/Footer'
import mens_banner from "./components/assets/banner_mens.png"
import womens_banner from "./components/assets/banner_women.png"
import kids_banner from "./components/assets/banner_kids.png"
function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={mens_banner} category={"men"} />}/>
        <Route path='/womens' element={<ShopCategory banner={womens_banner} category={"women"} /> }/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category={"kid"} />}/>
        <Route path='/product'  element={<Products/>}>
<Route path=':productId' element={<Products/>}/>
        </Route>
        <Route  path='/login' element={<LoginSignup/>} />
        <Route  path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
      
    </Router>
 
    </>
  )
}

export default App
