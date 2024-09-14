// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import WhatWeDo from './pages/WhatWeDo';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/thewebnavigators-v2.1">
        <Header />
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
