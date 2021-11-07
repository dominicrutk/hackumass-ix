import React, { useEffect } from 'react';
import './App.css';
import Map from './Map.js';
import NavBar from './NavBar.js';
import Text from './Text.js';
import Search from './Search.js';

function App() {
  useEffect(() => {
    document.title = 'Internet of Utilities (IOU)';
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Map />
      <Search />
      <Text />
      <div class='w3-bar-item'>Established November 5, 2021 @ HackUMass</div>
    </div>

  );
}

export default App;
