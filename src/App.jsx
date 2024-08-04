import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <Hero />
      </div>
    </div>
  );
};

export default App;
