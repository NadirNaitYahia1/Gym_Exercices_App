import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import ExerciceDetail from './pages/ExerciceDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciceDetail />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
