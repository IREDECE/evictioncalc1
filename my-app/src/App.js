
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import shelterCost from './components/categories/shelterCost'
// import medicalCost from './components/categories/medicalCost'
// import childrensCost from './components/categories/childrensCost'
// import encampmentCost from './components/categories/encampmentCost'
// import FinalReview from './components/FinalReview'; //for reviewing all inputs before final submission

import logo from './logo.svg';
import './App.css';
import './styles.css';

// src/App.js
// import Header from './components/layout/Header';
import Homepage from './components/Homepage';
import Form from './components/features/Form';
// import Footer from './components/layout/Footer';




function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
      
  );
}

export default App;
