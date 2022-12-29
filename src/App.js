
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import React from "react";
function App() {
  return (
  <>
    <Navbar head="SSP PHOTOGRAPHY" port="Portfolio" abt="about" album="Album" contact="Contact"/>
    <Homepage/>
    <About/>
    <Portfolio/>
    <Contact/>
    </>
  );
}

export default App;
