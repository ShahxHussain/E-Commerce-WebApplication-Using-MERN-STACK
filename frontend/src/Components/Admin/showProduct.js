// Showproduct.js
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { getdetails, deleteProduct, updateProduct } from '../../Service/Api';
import imgd from '../../Assets/icons/delete.png';
import imge from '../../Assets/icons/edit.png';

function Showproduct() {
  const [productDetails, setProductDetails] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProductName, setUpdatedProductName] = useState('');
  const [updatedProductGeneration, setUpdatedProductGeneration] = useState('');
  const [updatedProductPrice, setUpdatedProductPrice] = useState('');

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      const result = await getdetails();
      setProductDetails(result.data);
    } catch (error) {
      console.log('Error retrieving product details:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setUpdatedProductName(product.productName);
    setUpdatedProductGeneration(product.productGeneration);
    setUpdatedProductPrice(product.price);
  };

  const handleSave = async () => {
    try {
      const updatedProduct = {
        productName: updatedProductName,
        productGeneration: updatedProductGeneration,
        price: updatedProductPrice,
      };

      await updateProduct(editingProduct._id, updatedProduct);
      setEditingProduct(null);
      getProductDetails();
    } catch (error) {
      console.log('Error updating product:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      const updatedProducts = productDetails.filter((product) => product._id !== id);
      setProductDetails(updatedProducts);
    } catch (error) {
      console.log('Error deleting product:', error);
    }
  };

  return (
    <div>
      <Table style={{ marginTop: '3rem' }} striped bordered hover>
        <thead>
          <tr >
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Generation</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {productDetails.map((details, index) => (
            <tr key={index}>
              <td >
                <img style={{ width: '7rem', height: '5rem' }} src={`http://localhost:5000/${details.image}`} alt="" />
              </td>
              <td>
                {editingProduct && editingProduct._id === details._id ? (
                  <input
                    value={updatedProductName}
                    onChange={(e) => setUpdatedProductName(e.target.value)}
                  />
                ) : (
                  details.productName
                )}
              </td>
              <td>
                {editingProduct && editingProduct._id === details._id ? (
                  <input
                    value={updatedProductGeneration}
                    onChange={(e) => setUpdatedProductGeneration(e.target.value)}
                  />
                ) : (
                  details.productGeneration
                )}
              </td>
              <td >
                {editingProduct && editingProduct._id === details._id ? (
                  <input
                    value={updatedProductPrice}
                    onChange={(e) => setUpdatedProductPrice(e.target.value)}
                  />
                ) : (
                  details.price
                )}
              </td>
              <td>
                {editingProduct && editingProduct._id === details._id ? (
                  <>
                    <Button variant="primary" onClick={handleSave}>
                      Save
                    </Button>
                    <Button style={{position:'relative',left:"1rem"}} variant="secondary" onClick={() => setEditingProduct(null)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <img
                      style={{ height: '2.2rem', marginRight: '2rem' }}
                      src={imge}
                      alt="edit"
                      onClick={() => handleEdit(details)}
                    />
                    <img
                      style={{ height: '2rem' }}
                      onClick={() => handleDelete(details._id)}
                      src={imgd}
                      alt="Delete"
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Showproduct;
