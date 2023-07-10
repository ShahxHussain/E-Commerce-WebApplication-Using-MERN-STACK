import React from "react";
import { useState } from "react";
import "../Assets/css/Buy.css";

function Buy({ cartItems, setCartItems }) {
  const [shippingDetails, setShippingDetails] = useState({
    address: "",
    city: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return totalPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartItems([]);
    setShippingDetails({
      address: "",
      city: "",
      country: "",
    });
  };

  return (
    <div className="buy-container">
      <div className="shipping-details">
        <h2>Shipping Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleInputChange}
            />
          </div>
          <div  className="input-group">
            <label>City: </label>
            <input style={{position:"relative",left:"2rem"}}
              type="text"
              name="city"
              value={shippingDetails.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={shippingDetails.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="payment-method">
            <h2>Payment Method</h2>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="easypaisa"
                  checked={paymentMethod === "easypaisa"}
                  onChange={handlePaymentMethodChange}
                />
                Easypaisa
              </label>
            </div>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="jazzcash"
                  checked={paymentMethod === "jazzcash"}
                  onChange={handlePaymentMethodChange}
                />
                Jazzcash
              </label>
            </div>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="debit_credit_card"
                  checked={paymentMethod === "debit_credit_card"}
                  onChange={handlePaymentMethodChange}
                />
                Debit/Credit Card
              </label>
            </div>
          </div>
          <button type="submit">Place Order</button>
        </form>
        <h4>Total Price: {calculateTotalPrice()}</h4>
      </div>
      <div className="cart-items">
        <h2>Cart Items</h2>
        <div className="grid-container">
          {cartItems.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
        <h4>Total Price: {calculateTotalPrice()}</h4>
      </div>
    </div>
  );
}

export default Buy;
