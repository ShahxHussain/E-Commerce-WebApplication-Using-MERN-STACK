import '../Assets/css/AboutUs.css';
const AboutUs=()=>{
    return (<div style={{ backgroundColor:"white", height: '100vh' }}>
        {/* <hr></hr> */}
        <div className='row container'>
           
            <div className='col-md-7'>
                <h1 className='head1'>AboutUs</h1>
                <p className='para'>Welcome to our Laptop Store!
  <br></br>
At "HURRICANIX Laptop Shop", we are passionate about providing you with the latest and greatest laptops to meet your computing needs. We understand that laptops have become an essential part of our daily lives, enabling us to work, study, connect, and entertain ourselves wherever we go. That's why we strive to bring you a wide range of high-quality laptops from top brands, ensuring that you find the perfect device to suit your lifestyle.</p>
                <button style={{background:"rgb(137, 106, 190)",borderRadius:"10px",color:"white"}}>Read...</button>
            </div>
            <div className='col-md-5'>
                <img src='https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/my/mkt/plp/laptops/list-d14.jpg'></img>
            </div>

        </div>
    </div>);
}
export default AboutUs;