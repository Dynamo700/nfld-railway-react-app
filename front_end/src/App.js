import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Locomotives from './pages/Locomotives';
import PresentDay from './pages/PresentDay';
import TrinityLoop from './pages/TrinityLoop';
import History from './pages/History';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locomotives" element={<Locomotives />} />
        <Route path="/presentday" element={<PresentDay />} />
        <Route path="/trinityloop" element={<TrinityLoop />} />
        <Route path="/history" element={<History />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )

  
};

export default App;