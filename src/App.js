import React from 'react';
import './App.scss';
import ScrollToTop from "./ScrollToTop.js";

import Home from './pages/Home.js';
import Card from './pages/Card.js'
import Gallery from "./pages/Gallery.js";

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="/cardId/:cardId" element={<Card/>} /> 
        </Routes>
      </ScrollToTop>
      
    </Router>
  )
}

export default App;
