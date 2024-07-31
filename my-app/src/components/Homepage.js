import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Homepage() {
  return (
    <div className="container">
      <div className="header">
        <h1>The Cost of Eviction Calculator</h1>
      </div>
      <div className="main">
        <p>Welcome to the Cost of Eviction Calculator!</p>
        <p>This Calculator allows any user to leverage national and local data to estimate the cost of providing social services to people experiencing eviction-related displacement, including the cost of:</p>
        <ul>
          <li>Emergency shelter</li>
          <li>Inpatient and emergency medical care</li>
          <li>Foster care services</li>
          <li>Juvenile delinquency services</li>
          <li>City encampment costs</li>
        </ul>
        <Link to="/form">
          <button className="button">LET'S GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;

