
import React from 'react'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './styles.css';

// import Header from './components/layout/Header';
import Homepage from './components/Homepage';
import Form from './components/features/Form';
import ReviewPage from './components/ReviewPage';
import CalculatePage from './components/calculatePage';
// import Footer from './components/layout/Footer';



function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/calculate" element={<CalculatePage />} />
      </Routes>
    </HashRouter>
  );
}



export default App;
