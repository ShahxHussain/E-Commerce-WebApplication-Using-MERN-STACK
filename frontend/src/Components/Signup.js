// Signup.js
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import image1 from '../Assets/images/logo11.png';
import { addSignup } from '../Service/Api';
import '../Assets/css/Signup.css';

function Signup() {
  const [userdata, setUserData] = useState({
    fname:'',
    lname: '',
    email: '',
    pass: '',
    confirmpass: '',
  });

  const fnameRef = useRef(null);


  const handleChange = (event) => {
    setUserData({
      ...userdata,
      [event.target.name]: event.target.value,
    })
  };
  
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    console.log(userdata);
      await addSignup(userdata);
      navigate('/Login');
    };

  return (
    <div className="Signup">
      <img src={image1} className="d-block" alt="Slide 1" />
      <div className="Signup-container">
        <form>
          <label className="div11">
            First Name:
            <input type="text" ref={fnameRef} required onChange={handleChange} name="fname" />
          </label>
          <label className="div11">
            Last Name:
            <input type="text"  required onChange={handleChange} name="lname" />
          </label>
          <label className="div11">
            Email:
            <input type="email"  required onChange={handleChange} name="email" />
          </label>
          <label className="div11">
            Password:
            <input type="password"  required onChange={handleChange} name="pass" />
          </label>
          <label className="div11">
            Confirm Password:
            <input type="password"  required onChange={handleChange} name="confirmpass" />
          </label>
          <Button onClick={(event) => handleSignup(event)}
            style={{
              margin: '18px',
              width: '300px',
              backgroundColor: 'rgb(137, 106, 190)',
              border: '2px solid white',
            }}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <p>
          Already have an account? <Link style={{ color: 'white' }} to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
