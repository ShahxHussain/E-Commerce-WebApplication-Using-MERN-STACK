import React from "react";
import { Link } from "react-router-dom";
import '../Admin/AdminPanel.css';
import img1 from '../../Assets/images/SellerDashboard.png';
import img2 from '../../Assets/images/AdminDashboard.png';


const AdminPanel = () => {
  return (
    <div>
       <h1 style={{ fontFamily: 'Arial', fontSize: '34px', fontWeight: 'bold', color: 'blue', textShadow: '2px 2px 2px #000000',color:"rgba(137, 106, 190, 0.7)" }}>
  Welcome to Product Addition and Approval Panel
</h1>

    <div style={{margin:"auto",marginRight:"-10px"}} className="container">
       
        <div style={{display:"flex",flexDirection:"column",margin:"auto"}} className="left-div">
        <Link  to="/admin/Admin">   <img alt="admin" style={{width:"25rem",borderRadius:"10px"}} src={img2}></img></Link>
        
        </div>
        <br />
        <div style={{display:"flex",flexDirection:"column",margin:"auto"}} className="right-div">
          <Link to="/admin/Seller">
        <img  alt="seller" style={{width:"25rem",borderRadius:"10px"}} src={img1}></img></Link>
        
      </div>
    </div>
    </div>
  );
};

export default AdminPanel;

