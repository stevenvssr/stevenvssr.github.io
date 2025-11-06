// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  // Existing state for scroll effect
  const [isScrolled, setIsScrolled] = useState(false);

  // NEW state for the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu (useful after clicking a link)
  const handleNavLinkClick = () => {
    // Only close if the menu is open (for mobile view)
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `navbar navbar-expand-lg navbar-dark ${
    isScrolled ? "scrolled" : ""
  }`;

  return (
    <nav id="mainNav" className={navbarClasses}>
      <div className="container-fluid">
        {/* 1. NAV BRAND (Your Name/Logo) */}
        <a className="navbar-brand" href="#home">
          S.V
        </a>

        {/* 2. TOGGLER BUTTON for Mobile - FIXED HERE */}
        <button
          className="navbar-toggler"
          type="button"
          // REMOVED: data-bs-toggle and data-bs-target (React now controls visibility)
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen} // Use state for ARIA status
          aria-label="Toggle navigation"
          onClick={handleMenuToggle} // <--- ATTACHED REACT TOGGLE HANDLER
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 3. COLLAPSIBLE LINKS CONTAINER - FIXED HERE */}
        <div
          // Conditionally apply the 'show' class to open the menu on mobile
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                onClick={handleNavLinkClick}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#languages"
                onClick={handleNavLinkClick}
              >
                Languages
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={handleNavLinkClick}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
