import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { cartItems, totalCartAmmout,removeCart, all_product } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-items-formate cartItems-formate-main">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <h1 className="cross-btn" onClick={() => removeCart(e.id)}>✕</h1>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartiems-down">
        <div className="cartitem-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${totalCartAmmout()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Free shiping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${totalCartAmmout()}</p>
            </div>
          </div>
          <button>Propceed to checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promocode , Enter it here</p>
          <div className="cartitems-promocode-field">
            <input type="text" name="" id="" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
