// src/App.jsx
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header.jsx';
import Projects from './Pages/Projects.jsx';

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
