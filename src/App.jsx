import React from 'react';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <BottomBar />
    </div>
  );
}

export default App;
