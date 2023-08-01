import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciceDetail from './pages/ExerciceDetail';
import { useState } from 'react';
function App() {
  const [exercicesNav, setExercicesNav] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar exercicesNav={exercicesNav} setExercicesNav={setExercicesNav} />
        <Routes>
          <Route path="/" element={<Home exercicesNav={exercicesNav} setExercicesNav={setExercicesNav} />} />
          <Route path="/exercise/:id" element={<ExerciceDetail />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
