import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <div> 
    <nav className="navbar navbar-expand-lg bg-custom">
    <div className="container">
    <a className="navbar-brand"  href="/"><FontAwesomeIcon icon={faBagShopping}/> <span className="custom-logo">KachaBazar</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        
        <form className="w-75 ms-auto">
        <input className="form-control form-control-lg ms-auto" type="search" placeholder="Search for products(e.g. fish, vegetables)" aria-label=".form-control-lg example"/>
        </form>
     

      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><FontAwesomeIcon icon={faBell} /> </a>
  

        </li>
        <li className="nav-item">
          <a className="nav-link position-relative" href="#"><FontAwesomeIcon icon={faCartShopping} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger custom-badge">
    0</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Header;