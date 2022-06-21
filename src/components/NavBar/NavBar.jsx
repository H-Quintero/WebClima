import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className='nav'>
      <ul className='nav__links'>
        <Link to="/">
          <li>Clima</li>
        </Link>
        <Link to="parking">
          <li>Parking</li>
        </Link>
      </ul>
    </nav>
  )
}
