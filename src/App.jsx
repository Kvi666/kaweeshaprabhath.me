import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header.jsx';

function App() {
  return (
    <div className="flex">
      <Header />
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
}

export default App;
