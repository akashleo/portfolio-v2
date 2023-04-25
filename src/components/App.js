"use client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import './App.css';

const App = () => {
  return (
    <div >
      <Navbar />
      {/* <div class="grid grid-cols-3 gap-4">
        <div class="bg-orange-200  h-24"></div>
        <div class="bg-amber-800 h-24"></div>
      </div> */}
      <About/>
    </div>
  );
};

export default App;
