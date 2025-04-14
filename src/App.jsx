import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Home from './pages/Home';
import AtGlance from './pages/AtGlance'; // <-- Make sure this file exists

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atglance" element={<AtGlance />} />
          </Routes>
        </main>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
