import React, { useRef, useEffect } from 'react';
import '../Assets/css/Login.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import image1 from '../Assets/images/logo11.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSignup, login } from '../Service/Api';


function Login() {
    const [details, setDetails] = useState ({
        email:"",
        pass:""
    });

    const {email,pass}= details;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [userType, setUserType] = useState('customer');
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleChange = (event) =>{
    setDetails({...details , [event.target.name]: event.target.value });
  }

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await getSignup(details);
      const { success, token } = response.data;
      const { user } = response.data;
      if (success) {
        localStorage.setItem('token', token);
        localStorage.setItem('Login', JSON.stringify(user));
  
        // Navigate to the home page
        navigate('/');
        // Reload the page after a short delay
        setTimeout(() => {
          window.location.replace(window.location.href);
        }, 1);
        
      } else {
        alert('Incorrect email or password');
      }
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };
  
  

  const handleNavigateSignup = () => {
    navigate('/Signup');
  };

  return (
    <div className="login">
      <img src={image1} className="d-block" alt="Slide 1" />
      <div className="login-container">
        <div className="user-type-container">
          <label className="labels">
            <input
              type="radio"
              value="admin"
              checked={userType === 'admin'}
              onChange={handleUserTypeChange}
            />
            Admin
          </label>
          <label className="labels">
            <input
              type="radio"
              value="customer"
              checked={userType === 'customer'}
              onChange={handleUserTypeChange}
            />
            Customer
          </label>
        </div>
        <form onSubmit={handleLogin}>
          <label style={{ color: 'white' }} className="div1">
            Email:
          </label>
          <input onChange={handleChange} name='email' style={{ height: '35px' }} className="div1" type="text" ref={emailRef} />
          <label style={{ color: 'white' }} className="div1">
            Password:
          </label>
          <input onChange={handleChange} name='pass' style={{ height: '35px' }} className="div1" type="password" ref={passwordRef} />
         
          <Button onClick={handleLogin}
            style={{
              margin: '18px',
              width: '300px',
              backgroundColor: 'rgb(137, 106, 190)',
              border: '2px solid white',
            }}
            type="submit"
          >
            Login
          </Button>
        </form>
        <Button
          style={{
            margin: '18px',
            width: '300px',
            backgroundColor: 'rgb(137, 106, 190)',
            border: '2px solid white',
          }}
          onClick={handleNavigateSignup}
        >
          Sign Up
        </Button>
        <Link style={{ color: 'white' }}>Forgot password? Click here</Link>
      </div>
    </div>
  );
}

export default Login;
