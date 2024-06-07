import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div id='header'>
      <div className='header-img'>
        <img src="../../../public/header.jpg" alt="Header-img" />
      </div>
      <div className='header'>
        <h1>Food Web</h1>
      </div>
      <div className='header-user-shopping'>
        <Link to='/login'>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to='/Cart'>
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
}
