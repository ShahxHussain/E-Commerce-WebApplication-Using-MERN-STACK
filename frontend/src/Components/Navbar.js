import { Nav, Dropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import '../Assets/css/Navbar.css';
import '../Assets/css/button.css';
import image1 from '../Assets/images/logo11.png';
import image2 from '../Assets/images/login111.png';
import image3 from '../Assets/images/shopping-cart.png';
import image4 from '../Assets/images/wishlist(2).png';
import image5 from '../Assets/images/add.png';
import image6 from '../Assets/images/search(1).png';
import image00 from '../Assets/icons/active.png';
import image11 from '../Assets/icons/bin.png';
import image22 from '../Assets/icons/logout.png';
import { FaUser } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { deleteUser } from '../Service/Api';

function Navbar() {
    const [showSessionDetails, setShowSessionDetails] = useState(false);
    const session = JSON.parse(localStorage.getItem('Login'));
    const sessionRef = useRef();

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLoginClick = () => {
        setShowSessionDetails(!showSessionDetails);
    };

    const handleDelete = async (id) => {
        try {
            const confirmed = window.confirm("Are you sure you want to delete your account?");

            if (confirmed) {
                const deleteResponse = await deleteUser(id);
                const { response } = deleteResponse.data;

                if (response) {
                    handleLogout();
                } else {
                    alert("Account Not Deleted");
                }
            }
        } catch (error) {
            console.log(error);
            alert("Account Does Not Exist");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('Login');
        localStorage.removeItem('token');
        setShowSessionDetails(false);
        window.location.reload();
    };


    const handleClickOutside = (event) => {
        if (
            sessionRef.current &&
            !sessionRef.current.contains(event.target) &&
            !event.target.classList.contains('login-button')
        ) {
            setShowSessionDetails(false);
        }
    };

    return (
        <div>
            <div className="navbardiv">
                <img src={image1} alt="Logo" className="logo-img" />



                <div className="text">

                    <div style={{ display: 'flex', alignItems: 'center' }}>


                        <Link to="/">
                            <button style={{ position: "relative", right: "15rem" }}>
                                HOME
                            </button>
                        </Link>
                        <NavLink to="/DELL">
                            <button style={{ position: "relative", right: "12rem" }}>
                                PRODUCTS
                            </button>
                        </NavLink>
                        <NavLink to="/ACCESSORIES">
                            <button style={{ position: "relative", right: "10rem" }}>
                                ACCESSORIES
                            </button>
                        </NavLink>
                        <NavLink to="/AboutUs">
                            <button style={{ position: "relative", right: "8rem" }}>
                                ABOUT
                            </button>
                        </NavLink>

                        {/* <img src={image6} alt="cart" className="icons" />
                        <input type="Search" style={{ borderRadius: '10px', marginRight: '10px' }}></input> */}

                        <NavLink to="/cart" className="NavText" style={{ color: 'white', marginRight: '220px' }}>
                            <button style={{ position: "relative", right: "6rem" }}>
                                CART
                            </button>
                            {/* <img
                                style={{ border: '2px solid white', borderRadius: '20px 20px', color: 'black' }}
                                src={image3}
                                alt="cart"
                                className="icons"
                            /> */}
                        </NavLink>

                        <NavLink to="/admin" className="NavText" style={{ color: 'white' }}>
                            <button style={{ position: "relative", right: "18rem" }}>
                                MANAGE PRODUCTS
                            </button>

                            {/* <img
                                style={{ border: '2px solid white', borderRadius: '20px 20px', margin: '2px' }}
                                src={image5}
                                className="icons"
                            ></img> */}
                        </NavLink>



                        {session ? (
                            <div style={{ position: 'absolute', top: '-30%', right: 0 }}>
                                <Dropdown style={{ position: 'absolute', top: '50%', right: 0, }}>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="login-button">
                                        <FaUser style={{ marginRight: '3px' }} />
                                        {session.fname}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ background: "beige" }} ref={sessionRef}>
                                        <Dropdown.Item>Status: Active <img src={image00} alt="cart" className="icons" /></Dropdown.Item>
                                        <hr></hr>
                                        <Dropdown.Item>
                                            Username: {session.fname} {session.lname}
                                        </Dropdown.Item>
                                        <hr></hr>
                                        <Dropdown.Item>Email: {session.email}</Dropdown.Item>
                                        <Dropdown.Item>
                                            <hr></hr>
                                            <Button style={{ background: "black", width: "100%" }} onClick={handleLogout}>Logout
                                                <img src={image22} alt="cart" className="icons" />
                                            </Button>
                                            <br></br> <br></br>
                                            <Button style={{ background: "black", width: "100%" }} onClick={() => handleDelete(session._id)}>Delete
                                                <img src={image11} alt="cart" className="icons" />
                                            </Button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        ) : (
                            <Link to="/Login" className="NavText" style={{ color: 'white' }}>
                                <img
                                    style={{ border: '2px solid white', borderRadius: '30px 30px' }}
                                    src={image2}
                                    alt="Login"
                                    className="icons"
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            {/* <div>
                <Nav className="container-fluid">
                    <Link className="linktext" to="/">
                        HOME
                    </Link>
                    <NavLink className="linktext" to="/DELL">
                        DELL
                    </NavLink>
                    <NavLink className="linktext" to="/ACCESSORIES">
                        ACCESSORIES
                    </NavLink>
                    <NavLink style={{ position: 'relative', left: '2.5rem' }} className="linktext" to="/AboutUs">
                        ABOUT
                    </NavLink>
                </Nav>
            </div> */}
        </div>
    );
}

export default Navbar;
