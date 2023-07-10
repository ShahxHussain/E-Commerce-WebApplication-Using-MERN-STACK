import axios from 'axios';

const url = 'http://localhost:5000';

export const addSignup = async (userdata) => {
  try {
    const response = await axios.post(`${url}/Signup`, userdata);
    return response.data;
  } catch (error) {
    console.log('Error signing up:', error);
    // throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${url}/Login`, { email, password });
    return response.data;
  } catch (error) {
    console.log('Error logging in:', error);
    throw error;
  }
};

export const getSignup = async (details) => {
    return axios.post(`${url}/Login`,details);
}



export const adddetails = async (formdata)=>{
    return await axios.post(`${url}/admin/addProduct`,formdata);
  }
  
  export const getdetails = async () =>{
    return await axios.get(`${url}/admin/showProduct`);
  }

  export const getProductById = async (id) => {
    return await axios.get(`${url}/Checkout/${id}`);
  };
  

  export const deleteProduct = async (productId) => {
    return await axios.delete(`${url}/admin/showProduct/${productId}`);
  };
  
  export const updateProduct = async (productId, updatedProductData) => {
    try {
      const response = await axios.put(`${url}/admin/showProduct/${productId}`, updatedProductData);
      return response.data;
    } catch (error) {
      console.log('Error updating product:', error);
      throw error;
    }
  };

  export const deleteUser = async (id) =>{
    return await axios.delete(`${url}/${id}`)
  };