import React, { createContext, useEffect, useState } from "react";
import CartItems from "../components/cartItems/CartItems.jsx";

export const ShopContext = createContext(null);

const getDefauktCart = () => {

  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }

  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItem] = useState(getDefauktCart());
  const [all_product , setAllproduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/allproducts').then((respo) => respo.json()).then((data) => {setAllproduct(data)})
  } , [])

  const addTocart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-toekn')){
      fetch("http://localhost:4000/addtocart" , {
        method:"POST" , 
        headers:{
          Accept:'application/form-data' ,
          'auth-token': `${localStorage.getItem('auth-token')}`, 
          'Content-Type':'application/json'
        } ,
        body:JSON.stringify({'itemId':itemId})
      }).then((respo) => respo.json())
      .then((data) => {console.log(data)})

  }

  };


  const removeCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const totalCartitems = () => {
    let totalcartItem = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        totalcartItem += cartItems[item];
      }
    }
    return totalcartItem;
  };

  const totalCartAmmout = () => {
    let totalAmmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmmount;
  };
  const contextValue = {
    all_product,
    totalCartitems,
    totalCartAmmout,
    cartItems,
    addTocart,
    removeCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
