import React from "react";
import '../../Assets/css/Admin.css';

import  { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const navigate = useNavigate();
  const handleNavigte = () =>{
    navigate('/admin/showproduct');
  }
  return (
    <div className="admin-panel">
      <div className="admin-panel-sidebar">
        <h2 className="admin-panel-heading">Admin Panel</h2>
        <ul className="admin-panel-tabs">
          <li
            className={`admin-panel-tab ${selectedTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleTabClick('dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`admin-panel-tab ${selectedTab === 'products' ? 'active' : ''}`}
            onClick={handleNavigte}
          >
            Products
          </li>
          <li
            className={`admin-panel-tab ${selectedTab === 'orders' ? 'active' : ''}`}
            onClick={() => handleTabClick('orders')}
          >
            Orders
          </li>
          <li
            className={`admin-panel-tab ${selectedTab === 'customers' ? 'active' : ''}`}
            onClick={() => handleTabClick('customers')}
          >
            Customers
          </li>
        </ul>
      </div>
      <div className="admin-panel-content">
        {selectedTab === 'dashboard' && (
          <div className="dashboard-content">
            <h3>Welcome to the Admin Panel!</h3>
            <p>Here, you can manage your Laptops Shop website.</p>
            {/* Add your dashboard content here */}
          </div>
        )}
        {selectedTab === 'products' && (
          <div className="products-content">
            <h3>Manage Products</h3>
            <p>Add, edit, or delete products from your inventory.</p>
            {/* Add your products management content here */}
          </div>
        )}
        {selectedTab === 'orders' && (
          <div className="orders-content">
            <h3>Manage Orders</h3>
            <p>View and process customer orders.</p>
            {/* Add your orders management content here */}
          </div>
        )}
        {selectedTab === 'customers' && (
          <div className="customers-content">
            <h3>Manage Customers</h3>
            <p>View and manage your customer database.</p>
            {/* Add your customers management content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
