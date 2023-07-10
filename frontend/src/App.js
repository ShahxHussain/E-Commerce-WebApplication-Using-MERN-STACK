import Mainpage from "./Components/Mainpage";
import React from "react";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Apple from "./Components/Apple";
import Dell from "./Components/Dell";
import Checkout from "./Components/Checkout";
import Data from "./Components/Data";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import { useState } from "react";
import Buy from "./Components/Buy";
import AboutUs from "./Components/AboutUs";
import Accessories from "./Components/Accessories";
import Signup from "./Components/Signup";
import Showproduct from "./Components/Admin/showProduct";
import AdminPanel from "./Components/Admin/AdminPanel";
import Addproduct from "./Components/Admin/addProduct";
import Seller from "./Components/Admin/Seller";
import Admin from "./Components/Admin/Admin";

function App() {

  const [products, setProducts] = useState(Data);
  const addProduct = (newProduct) => {
    const newProductId = products.length + 1;
    const product = { id: newProductId, ...newProduct };
    setProducts([...products, product]);
  };
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/APPLE" element={<Apple />}></Route>
        <Route path="/DELL" element={<Dell />} />
        <Route path="/DELL/:id" element={<Checkout />} />

        {/* <Route path="/DELL/:id"element={<Checkout addToCart={addToCart} />} /> */}
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/buy" element={<Buy cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/admin/addProduct" element={<Addproduct />}></Route>
        <Route path="/admin/showproduct" element={<Showproduct />}></Route>
        <Route path="/ACCESSORIES" element={<Accessories />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/admin/Seller" element={<Seller />}></Route>
        <Route path="/admin/Admin" element={<Admin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;