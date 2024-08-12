import React from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';
import './App.css'

const App = () => {
  return (
    <div>
      {/* Header with Sidebar */}
      <Header />

      {/* Main Content Area */}
      <Home />
    </div>
  );
};

export default App;
