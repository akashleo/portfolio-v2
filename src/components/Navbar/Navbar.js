"use client";
import { BrowserRouter } from 'react-router-dom'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Logo from "../../../public/8368.jpg"

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
        <Link to="/" className="nav-item">
          <h1 className='text-lg'>	Contact</h1>
        </Link>
      </div>
    </nav>
    </BrowserRouter>
  );
}

export default Navbar;
