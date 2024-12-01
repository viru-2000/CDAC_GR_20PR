import React from "react";
import "../css/all.css";

const Dashboard = () => {
  
  return (
    <div className="dashboard-container">
    <div className="sidebar">
      <h2>Your Logo</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Provider Services</a></li>
        <li><a href="#">Customers</a></li>
        <li><a href="#">Providers</a></li>
        <li><a href="#">Incomplete Registration</a></li>
        <li><a href="#">Live Chat</a></li>
      </ul>
    </div>
    <div className="dashboard-content">
      <div className="header">
        <h1>Dashboard Summary</h1>
      </div>
      <div className="cards">
        <div className="card blue">
          <h3>Total Revenue</h3>
          <p>$0</p>
        </div>
        <div className="card green">
          <h3>Complete Orders</h3>
          <p>0</p>
        </div>
        <div className="card red">
          <h3>Cancelled Orders</h3>
          <p>0</p>
        </div>
        <div className="card yellow">
          <h3>Total Orders</h3>
          <p>0</p>
        </div>
      </div>
      <div className="services">
        <h2>Total Order Of Services</h2>
        <div className="service-grid">
          <div className="service">Dog Walking <p>0</p></div>
          <div className="service">Baby Care <p>0</p></div>
          <div className="service">Pet Care <p>0</p></div>
          <div className="service">Workout Trainer <p>0</p></div>
          <div className="service">Tutors <p>0</p></div>
          <div className="service">Beauty Service <p>0</p></div>
          <div className="service">Massage Service <p>0</p></div>
          <div className="service">Home Cleaning <p>0</p></div>
          <div className="service">Gardening <p>0</p></div>
          <div className="service">Laundry Service <p>0</p></div>
          <div className="service">Pest Control <p>0</p></div>
          <div className="service">AC Repair <p>0</p></div>
          <div className="service">Car Wash <p>0</p></div>
          <div className="service">Plumbers <p>0</p></div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
