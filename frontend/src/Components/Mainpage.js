import '../Assets/css/Mainpage.css';
import '../Assets/images/logo1.png';
import image1 from '../Assets/images/laptops.png';
import image2 from '../Assets/images/333.jpg';
import image3 from '../Assets/images/444.webp';
import image4 from '../Assets/images/13th.png';
import image5 from '../Assets/images/Apple.png';
import image6 from '../Assets/images/AMD.png';
import PaymentComponent from './paymentopt';

function Mainpage() {
    return (
        <div className="Main">
            <div className='Coursel'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image2} className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
            <div className='Product-container'>
                <div className='Product1'>
                    <img src={image4} className="d-block w-100" alt="" />

                </div>
                <div className='Product2'>
                    <img src={image5} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className='Product3'>
                    <img src={image6} className="d-block w-100" alt="Slide 1" />
                </div>
            </div>
            <PaymentComponent />
            <div class="border-line"></div>

        </div>
    )
}
export default Mainpage;