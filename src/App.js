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
import { PortfolioProvider } from './contexts/PortfolioContext';
import ProjectOverView from './pages/ProjectOverView';
import Blogs from './pages/Blogs';

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <Router basename="/">
          <ScrollToTop />
          <Header />
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectTitle" element={<ProjectOverView />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </Router>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
