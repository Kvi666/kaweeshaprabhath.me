import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';

const App = () => {
  return (
    <div>
      {/* Header with Sidebar */}
      <Header />

      {/* Main Content Area */}
      <Hero />
    </div>
  );
};

export default App;
