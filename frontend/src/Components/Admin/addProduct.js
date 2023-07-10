import React from "react";
import { useState } from 'react';
import { adddetails } from "../../Service/Api";
import '../../Assets/css/addProduct.css';
import { useNavigate } from "react-router-dom";


function Addproduct() {
  const [details, setdetails] = useState({
    productName: "",
    productVariant: "",
    productGeneration: "",
    price: "",
    image: null
  })
  const navigate = useNavigate();

  const { productName, productVariant, productGeneration, price, image } = details;

  const handleChange = (event) => {

    setdetails({ ...details, [event.target.name]: event.target.value });

  };

  const handleImageChange = (event) => {
    setdetails({ ...details, [event.target.name]: event.target.files[0] });

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append('productName', productName);
      formdata.append('productVariant', productVariant);
      formdata.append('productGeneration', productGeneration);
      formdata.append('price', price);
      formdata.append('image', image);

      await adddetails(formdata);
      alert("data is saved");
      navigate('/admin/Seller');
    }
    catch (error) {
      console.log("Error")
    }

  }
  return (

    <div className="addProduct">
      <div className="side-panel">
      </div>
      <div id="Mn01" >
      <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>
        Add Product
      </h2>
        <form >
          <div className="input-fields">
            <label htmlFor="productName">Product Name:</label> <br></br>
            <input className="input"
              name="productName"
              type="text"
              id="productName"
              value={productName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-fields">
            <label htmlFor="productVariant">Product Variant:</label><br></br>
            <input className="input"
              name="productVariant"
              id="productVariant"
              value={productVariant}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="input-fields">
            <label htmlFor="productGeneration">productGeneration:</label><br></br>
            <input className="input"
              name="productGeneration"
              type="text"
              id="productGeneration"
              value={productGeneration}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-fields">
            <label htmlFor="price">Price:</label><br></br>
            <input className="input"
              name="price"
              type="number"
              id="price"
              value={price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-fields">
            <label htmlFor="images">Images:</label><br></br>
            <input className="input"
              name="image"
              type="file"
              id="images"
              onChange={handleImageChange}
              multiple
              required
            />
          </div>
          <button className="btnadd" type="submit" onClick={handleSubmit}>Submit</button>


          {/* <button onClick={navigateShowProduct} className="btnadd" type="submit" >View Products</button> */}

          {/* <Link to="/showProduct">
        <button className="btnadd" type="submit" >View Products</button>
        </Link> */}
        </form>
      </div>

    </div>

  );
}
export default Addproduct;




