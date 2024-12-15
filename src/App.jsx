import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/ProjectsPage";
import "./App.css";

const App = () => {
  return (
    <div>

      <Router>
        <Header /> {/* Header component added here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
