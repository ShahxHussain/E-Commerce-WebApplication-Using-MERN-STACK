import '../Assets/css/Footer.css';

function Footer(){
    return(
<div class="Ftr">
                <footer>
                    <div class="footer-left">
                        <div class="footer-line"> </div>
                        <ul>
                            <li><a href="#">MY ACCOUNT</a></li>
                            <h6>
                            </h6>
                            <li><a href="#">FAQS</a></li>
                            <li><a href="#">ORDER TRACKING</a></li>
                            <li><a href="#">ABOUT US</a></li>
                            <li><a href="#">CONTACT US</a></li>
                            <li><a href="#">STORE LOCATOR</a></li>
                        </ul>
                    </div>
                    <div class="footer-center">
                        <div class="footer-line"> </div>
                        <ul>
                            <li><a href="#">PRIVACY</a></li>
                            <li><a href="#">TERMS &amp; CONDITIONS</a></li>
                            <li><a href="#">RETURN &amp; EXCHANGE POLICY</a></li>
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                    <div class="footer-right">
                        <div class="footer-line"> </div>

                        <div class="contact-info">
                            <p>Email: customercare@hurricanix.com.pk</p>
                            <p>WhatsApp Chat: -+92-3xx-xxx-xx-xx</p>
                            <p>Call: UAN 0xx-xxx-xxx-xxx</p>
                            <p>Customer services timing</p>
                            <p>Monday-Sunday</p>
                            <p>10:00 am to 6:30 pm</p>
                        </div>
                        <div class="subscribe">
                            <input type="text" placeholder="your-email@example.cc" />
                            <button style={{color:"white"}}>Subscribe</button>
                        </div>
                    </div>
                </footer>
            </div>
        )
    
}
export default Footer;