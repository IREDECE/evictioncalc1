
import React from 'react'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './styles.css';

// src/App.js
// import Header from './components/layout/Header';
import Homepage from './components/Homepage';
import Form from './components/features/Form';
// import Footer from './components/layout/Footer';


function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
      </Routes>
    </HashRouter>
  );
}


// function App() {
//   return (
//     <Router>
//       <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/form" element={<Form />} />
//       </Routes>
//     </Router>
      
//   );
// }

export default App;
