// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Router>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
