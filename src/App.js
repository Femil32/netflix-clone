import React from 'react'
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rows from './components/Rows';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rows />
    </div>
  );
} 

export default App;
