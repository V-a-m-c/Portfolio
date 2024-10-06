import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'; // Your CSS file
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';

function App() {
  return (
    <Router basename="/Portfolio">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
