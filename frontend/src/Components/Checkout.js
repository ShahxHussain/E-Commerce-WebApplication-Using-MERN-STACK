import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Service/Api";

const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    console.log(id);
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="image-container">
        <img
          src={`http://localhost:5000/${product.image}`}
          alt={product.productName}
        />
      </div>
      <div className="details-container">
        <h3 style={{ padding: "10px" }}>{product.productName}</h3>
        <h5>Variant: {product.variant}</h5>
        <h5>Generation: {product.productGeneration}</h5>
        <h5>Price: {product.price}</h5>
        {/* Rest of the component */}
      </div>
    </div>
  );
};

export default Checkout;
