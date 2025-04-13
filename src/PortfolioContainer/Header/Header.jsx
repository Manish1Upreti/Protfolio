import React from 'react';
import "../../styles/Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contactme'>Contact</Link>
        <Link to='/resume'>Resume</Link>

    </nav>
  )
}

export default Header