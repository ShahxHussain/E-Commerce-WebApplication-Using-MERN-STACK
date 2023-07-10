import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../Assets/css/hower.css';
import Dropdown from "react-bootstrap/Dropdown";


const Apple = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'MGN93', chip: "Chip1", price: "Rs:16000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/11-czone.com.pk-1540-10583-260121075212.jpg' },
        { id: 2, name: 'MGN93', chip: "Chip1", price: "Rs:26000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/5-czone.com.pk-1540-10640-291221070239.jpg' },
        { id: 3, name: 'MGN93', chip: "Chip1", price: "Rs:46000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/copy-1605033014-1604829-1540-10583-271120073812.jpg' },
        { id: 4, name: 'MGN93', chip: "Chip1", price: "Rs:26000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/1-czone.com.pk-1-1540-13006-150322084724.jpg' },
        { id: 5, name: 'MGN93', chip: "Chip1", price: "Rs:45000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/13-czone.com.pk-1540-13518-100822053601.jpg' },
        { id: 6, name: 'MGN93', chip: "Chip1", price: "Rs:26000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/9-czone.com.pk-1540-13517-100822053234.jpg' },
        { id: 7, name: 'MGN93', chip: "Chip1", price: "Rs:16000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/16-czone.com.pk-1540-13519-100822053757.jpg' },
        { id: 8, name: 'MGN93', chip: "Chip1", price: "Rs:46000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/16-czone.com.pk-1540-13519-100822053757.jpg' },
        { id: 9, name: 'MGN93', chip: "Chip1", price: "Rs:26000", imageUrl: 'https://www.czone.com.pk/Images/Thumbnails/16-czone.com.pk-1540-13519-100822053757.jpg' },
    ]);

    return (
        <div>
            <div >
                <h1 style={{ textAlign: 'center', padding: "50px" }}>APPLE</h1>
                <hr style={{ width: '100%', marginTop: "-30px", border: "3px solid beige" }} />
            </div>
            <div>
                <Container className="cont">

                    <Row xs={1} md={5}>
                        <Col>
                            <select style={{ marginLeft: "10px", background: "beige", borderRadius: "10px" }}>
                                <option value="">All</option>
                                <option value="50000-100000">Rs. 50,000 - Rs. 100,000</option>
                                <option value="100000-200000">Rs. 100,000 - Rs. 200,000</option>
                                <option value="200000-300000">Rs. 200,000 - Rs. 300,000</option>
                                <option value="300000-above">Rs. 300,000 and above</option>
                            </select>
                        </Col>
                    </Row>
                    <Row xs={1} md={4}>
                        {products.map((product) => (
                            <Col key={product.id}>
                                <Card className="hover-card" style={{ width: '100%', margin: '10px' }}>
                                    <Card.Img variant="top" src={product.imageUrl} style={{ width: '100%', height: 'auto' }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontWeight: "bold" }}>{product.name}</Card.Title>
                                        <h6>{product.chip}</h6>
                                        <h6>{product.price}</h6>
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

export default Apple;
