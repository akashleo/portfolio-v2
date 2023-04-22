"use client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import './App.css';

const App = () => {
  return (
    <div className="home-bg">
      <Navbar />
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-orange-200  h-24"></div>
        <div class="bg-amber-800 h-24"></div>
      </div>
    </div>
  );
};

export default App;
