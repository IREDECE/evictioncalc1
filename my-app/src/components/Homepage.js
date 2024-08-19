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
        <p>This is an online calculator that explains and assists users to understand and find out the cost of eviction using national and local data as well as scholarly researches. Feel free to play around with the numbers and explore the cost of eviction including the cost of: </p>
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

