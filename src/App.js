import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Herosection from './components/Herosection';
import Test from './components/Test';
import About from './components/About';
import PastEvents from './components/PastEvents';


function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <PastEvents />
      {/* <Test /> */}
    </>
  );
}

export default App;
