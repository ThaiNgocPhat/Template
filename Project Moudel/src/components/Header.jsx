import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faUser,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="header-logo">
          <Link to="/">NgocPhat Store</Link>
        </div>
        <div className="search-container">
          <input type="text" id="searchInput" placeholder="Search..." />
          <button id="searchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="user-shopping-pay">
          <div className="user-icon">
            <a href="../Login/Login.html">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
          <div className="shopping-icon">
            <a href="GioHang.html">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
