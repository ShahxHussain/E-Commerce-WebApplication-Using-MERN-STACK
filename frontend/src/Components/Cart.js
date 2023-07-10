import React from "react";
import { Row } from "react-bootstrap";
import "../Assets/css/Cart.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const handleRemove = (itemId) => {
  
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
   
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    
    const itemToUpdate = cartItems.find((item) => item.id === itemId);
  
    if (itemToUpdate) {
      let updatedCartItems;
  
      if (newQuantity < 1) {
        
        updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      } else {
        updatedCartItems = cartItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
      }
  
  
      setCartItems(updatedCartItems);
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
},
    [])

  const nav=useNavigate();
  const navigatetobuy =()=>{
    nav('/buy');
  }

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return totalPrice;
  };

  return (
    <div>
      <h1>CART</h1>
      <div className="price">
        <h4 style={{ textAlign: "center" }}>Total Price: {calculateTotalPrice()}</h4>
      </div>
      
          <button onClick={navigatetobuy} className="price">CHECKOUT</button>
      
      {cartItems.map((item) => (
        <div style={{position:"relative",left:"3rem",border:"2px solid black"}} key={item.id} className="row-container">
          <img className="item-image" src={item.imageUrl} alt={item.name} />
          <div className="item-details">
            <h3 style={{display:"inline"}} className="item-name">{item.name}</h3>
            <h5 style={{display:"inline",position:"relative",left:"40rem"}}  className="item-price">Price: {item.price}</h5>
            <div className="c-buttons">
              <button style={{display:"inline"}}  className="c-buttons"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button style={{display:"inline"}}  className="c-buttons"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button  className="c-buttons" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
