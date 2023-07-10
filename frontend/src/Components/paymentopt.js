import React from 'react';
import '../Assets/css/Mainpage.css';
import '../Assets/css/hower.css';
import image1 from '../Assets/images/APPLE1.png';
import image2 from '../Assets/images/Dell.png';
import image3 from '../Assets/images/Asus.png';
import image4 from '../Assets/images/HP.png';
import image5 from '../Assets/images/Acer.png';
import image6 from '../Assets/images/Lenovo.png';
import { Link } from 'react-router-dom';

const PaymentComponent = () => {
    
    const paymentImages = [
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAuOSAyMGgxLjhhMy41IDMuNSAwIDAgMSAzLjUgMy42djIxLjhhMy41IDMuNSAwIDAgMS0zLjUgMy41SDE0YTMuNSAzLjUgMCAwIDEtMy41LTMuNXYtMi43IiBzdHJva2U9IiM5OTlDQTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTQ0LjcgMTFIN0EzLjkgMy45IDAgMCAwIDMgMTQuOVYzNmMwIDIuMSAxLjcgMy45IDMuOSAzLjloMzcuOGMyLjIgMCAzLjktMS44IDMuOS0zLjlWMTQuOWMwLTIuMi0xLjctMy45LTMuOS0zLjl6IiBzdHJva2U9IiM5OTlDQTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTQwLjUgMjYuOWEzLjggMy44IDAgMCAwLTMuOCAzLjUgMy44IDMuOCAwIDEgMCAzLjgtMy41eiIgZmlsbD0iI0ZBQkIxQSIvPjxwYXRoIGQ9Ik0zNS44IDI2LjlhMy44IDMuOCAwIDAgMC0zLjggMy41IDMuOCAzLjggMCAxIDAgMy44LTMuNXoiIGZpbGw9IiNGQUJCMUEiLz48cGF0aCBkPSJNNDguNiAxNS40SDN2NS40aDQ1LjZ2LTUuNHpNMTMuMyAzMS43SDcuOWMtLjUgMC0uOS40LS45Ljl2MWMwIC41LjQuOSAxIC45aDUuM2MuNSAwIC45LS40LjktLjl2LTFjMC0uNS0uNC0uOS0xLS45ek0yMy4zIDI2LjZIOGMtLjUgMC0uOS4zLS45Ljh2MWMwIC41LjQgMSAxIDFoMTUuM2MuNSAwIC45LS41LjktMXYtMWMwLS41LS40LS44LS45LS44ek0yMy4zIDMxLjdIMThjLS41IDAtMSAuNC0xIC45djFjMCAuNS41LjkgMSAuOWg1LjNjLjUgMCAuOS0uNC45LS45di0xYzAtLjUtLjQtLjktLjktLjl6IiBmaWxsPSIjOTk5Q0E4Ii8+PC9zdmc+',
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDIuMyA0Ny45SDI1LjdNMTggNDcuOWgtMy40YTEuOCAxLjggMCAwIDEtMS40LS43bC0yLjUtM2MtLjMtLjMtLjQtLjctLjQtMS4xVjI2LjhBMS44IDEuOCAwIDAgMSAxMiAyNWgyNy43YTcuMSA3LjEgMCAwIDEgNiAzLjFsMy4xIDQuNWMuNC42LjkgMS4yIDEuNSAxLjZsNS41IDMuNWEzIDMgMCAwIDEgMS40IDIuNnYzLjRhMyAzIDAgMCAxLTIuNSAzbC01IC45IiBzdHJva2U9IiM5OTlDQTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIyIDUyLjRhNC41IDQuNSAwIDEgMCAwLTkgNC41IDQuNSAwIDAgMCAwIDl6TTQ2LjEgNTIuNGE0LjUgNC41IDAgMSAwIDAtOSA0LjUgNC41IDAgMCAwIDAgOXoiIGZpbGw9IiNGQUJCMUEiLz48cGF0aCBkPSJNMyAzMWgxMC40TTUuNiAzNWg3LjhNNy4zIDM5LjRoNi4xTTMyLjkgMjVhMTEuNSAxMS41IDAgMSAxIDE0LjggNSIgc3Ryb2tlPSIjOTk5Q0E4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00Mi44IDEyLjF2OC4ybDQuNy0yLjhNNDAgMjguN2wuMiAzLjVBMi45IDIuOSAwIDAgMCA0MyAzNWg4LjciIHN0cm9rZT0iIzk5OUNBOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=',
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjkuOCA2YTI0LjYgMjQuNiAwIDAgMCAyMS43IDljMS43IDE3LTcuNCAzMy0yMS43IDM4LjEtMTQuMy01LTIzLjMtMjEtMjEuNi0zOC4xYTI0LjYgMjQuNiAwIDAgMCAyMS42LTl6IiBzdHJva2U9IiM5OTlDQTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI3LjcgMzYuN2wtNi02YTEgMSAwIDAgMSAwLTEuNmwxLjMtMS4zYTEgMSAwIDAgMSAxLjUgMGwzLjIgMy4zYS42LjYgMCAwIDAgLjkgMGw4LjUtOC42YTEgMSAwIDAgMSAxLjYgMGwxLjMgMS4zYTEgMSAwIDAgMSAwIDEuNUwyOC42IDM2LjdhLjYuNiAwIDAgMS0xIDB6IiBmaWxsPSIjRkFCQjFBIi8+PC9zdmc+',
    ];

    return (
        <div>
            <div class="brands">
                <div class="browsebrand">
                    <h2>BROWSE BRANDS</h2>
                </div>

                <div class="brand1">
                    <Link to="/APPLE">
                        <img src={image1} className="" alt="" />
                    </Link>
                </div>
                <div class="brand1">
                    <Link to="/DELL">
                        <img src={image2} className="" alt="" />
                    </Link>
                </div>
                <div class="brand1">
                    <Link to="/ASUS">
                        <img src={image3} className="" alt="" />
                    </Link>
                </div>
                <div class="brand1">
                    <Link to="/HP">
                        <img src={image4} className="" alt="" />
                    </Link>
                </div>
                <div class="brand1">
                    <Link to="/ACER">
                        <img src={image5} className="" alt="" />
                    </Link>
                </div>
                <div class="brand1">
                    <Link to="/LENOVO">
                        <img src={image6} className="" alt="" />
                        </Link>
                </div>
            </div>
            <div className='payment-container'>
                <div className="Payment1">
                    <img src={paymentImages[0]} alt="Payment 1" />
                    <h4>CASH ON DELIVERY</h4>
                    <p>With our advanced payment module you can select the payment menthod that fits! And always secure!</p>
                </div>
                <div className="Payment2">
                    <img src={paymentImages[1]} alt="Payment 2" />
                    <h4>FREE DELIVERY</h4>
                    <p>Benefit from our free shipping to get your products wherever you need them.</p>
                </div>
                <div className="Payment3">
                    <img src={paymentImages[2]} alt="Payment 3" />
                    <h4>SECURITY, from start to finish</h4>
                    <p>We take security very seriously. This is why we don’t store your data and encrypt all transactions.</p>
                </div>
            </div>
            {/* <div className='contact' >
                <h2 className='contacttext'>Questions?...TALK TO US</h2>
                <h2 className='contacttext'>03xx-xxxxxxx</h2>
                <h2 className='contacttext'>Chat Now</h2>
                <h2 className='contacttext'>Message us</h2>
            </div> */}
        </div>
    );
};

export default PaymentComponent;
