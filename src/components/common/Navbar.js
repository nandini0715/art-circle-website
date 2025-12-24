import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 ${scrolled ? 'shadow-sm' : ''}`}>
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 className="m-0 text-primary logo-text">Art Circle Foundation</h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-item nav-link ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/events" className={`nav-item nav-link ${isActive('/events')}`}>
            Events
          </Link>
          <Link to="/get-involved" className={`nav-item nav-link ${isActive('/get-involved')}`}>
            Join the Circle
          </Link>
          <Link to="/press" className={`nav-item nav-link ${isActive('/press')}`}>
            Press
          </Link>
          <Link to="/gallery" className={`nav-item nav-link ${isActive('/gallery')}`}>
            Gallery
          </Link>
          <Link to="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
