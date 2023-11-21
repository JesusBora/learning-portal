import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
