import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    // Navigate to the admin logout endpoint
    window.location.href = '/adminLogout';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger modern-container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <i className="fa-sharp fa-solid fa-hospital" aria-hidden="true"></i> Doctor Patient Portal
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-controls="navbarSupportedContent" 
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <i className="fa fa-home" aria-hidden="true"></i> HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/doctor" className="nav-link active" aria-current="page">
                <i className="fa-solid fa-user-doctor" aria-hidden="true"></i> DOCTOR
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/view_doctor" className="nav-link active" aria-current="page">
                <i className="fa-solid fa-list" aria-hidden="true"></i> VIEW DOCTOR
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/patient" className="nav-link active" aria-current="page">
                <i className="fa fa-wheelchair" aria-hidden="true"></i> PATIENT
              </Link>
            </li>
          </ul>

          <div className="dropdown">
            <button 
              className="btn btn-light dropdown-toggle" 
              type="button"
              id="dropdownMenuButton1" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
            >
              <i className="fa fa-universal-access" aria-hidden="true"></i> Admin
            </button>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;