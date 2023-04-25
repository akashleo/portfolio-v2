"use client";
import { BrowserRouter } from 'react-router-dom'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="duration-150">
          <h1 className='aqash text-lg'>	&lt;aqash !&gt;<span class="blink">_</span></h1>
        </Link>
        
        <div className='right-container'>
        <Link to="/" className="nav-item">
          <h1 className='text-lg'>	About</h1>
        </Link>
        <Link to="/" className="nav-item">
          <h1 className='text-lg'>	Projects</h1>
        </Link>
        <Link to="/" className="nav-item">
          <h1 className='text-lg'>	Sevices</h1>
        </Link>
        <Link to="/" className="nav-item">
          <h1 className='text-lg'>	Reach out</h1>
        </Link>
        </div>
      </div>
    </nav>
    </BrowserRouter>
  );
}

export default Navbar;
