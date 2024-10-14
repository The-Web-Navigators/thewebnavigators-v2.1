// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

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
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <HelmetProvider> {/* Wrap your app in HelmetProvider */}
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
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              {/* Add more routes as needed */}
            </Routes>
            <Footer />
          </Router>
        </HelmetProvider>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
