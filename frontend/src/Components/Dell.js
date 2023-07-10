import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { getdetails } from "../Service/Api";

const Dell = () => {
  const [products, setProducts] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState("");

  const getDetails = async () => {
    try {
      const response = await getdetails();
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetails();
  }, []);

  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.value);
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: "center",
            padding: "50px",
            color: "rgba(137, 106, 190, 0.7)",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          DELL
        </h1>
        <hr
          style={{
            width: "100%",
            marginTop: "-30px",
            border: "3px solid beige",
          }}
        />
      </div>
      <div>
        <Form.Group
          controlId="variantSelect"
          style={{ width: "10%", marginLeft: "5.5rem" }}
        >
          <Form.Control
            style={{ margin: "10px" }}
            as="select"
            value={selectedVariant}
            onChange={handleVariantChange}
          >
            <option value="">All Variants</option>
            <option value="Inspiron">Inspiron</option>
            <option value="Latitude">Latitude</option>
            <option value="XPS">XPS</option>
          </Form.Control>
        </Form.Group>
        <Container className="cont">
          <Row xs={1} md={4}>
            {products
              .filter(
                (product) =>
                  selectedVariant === "" || product.variant === selectedVariant
              )
              .map((product) => (
                <Col key={product._id}>
                  <Card
                    className="hover-card"
                    style={{ width: "100%", margin: "10px" }}
                  >
                    <Link to={`/Checkout/${product._id}`}>
                      <Card.Img
                        variant="top"
                        src={`http://localhost:5000/${product.image}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        {product.productName}
                      </Card.Title>
                      <h5>Variant: {product.variant}</h5>
                      <h6 className="d-text">{product.productGeneration}</h6>
                      <h6 className="d-text">Rs:{product.price}</h6>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dell;
