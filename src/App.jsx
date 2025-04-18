import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Home from './pages/Home';
import AtGlance from './pages/AtGlance'; // <-- Make sure this file exists
import OurHistory from './pages/OurHistory';
import StrategicModel from './pages/StrategicModel';
import Purpose from './pages/Purpose';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atglance" element={<AtGlance />} />
            <Route path="/ourhistory" element={<OurHistory />} />
            <Route path="/strategicmodel" element={<StrategicModel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/purpose" element={<Purpose />} />
          </Routes>
        </main>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
