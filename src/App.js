// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/react/Header';
import WhatWeDo from './pages/WhatWeDo';
import Portfolio from './pages/Portfolio';
import Footer from './components/react/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/thewebnavigators-v2.1">
        <ScrollToTop/>
          <Header />
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blogs" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />=
      </Router>
    </ThemeProvider>
  );
}

export default App;
