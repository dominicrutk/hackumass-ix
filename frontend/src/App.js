import React, { useEffect } from 'react';
import './App.css';
import Map from './Map.js';
import NavBar from './NavBar.js';
import Text from './Text.js';
import Search from './Search.js';

function App() {
  useEffect(() => {
    document.title = 'Name TBD';
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Map />
      <Search />
      <Text />
    </div>
  );
}

export default App;
