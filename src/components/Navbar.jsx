// src/components/Navbar.js
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is past a certain threshold (e.g., 50px)
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

  // Use the correct class name "scrolled" as defined in your _navbar.scss for the scroll effect.
  // NOTE: We are removing "sticky-top" here because it is defined in the CSS as "position: fixed".
  const navbarClasses = `navbar navbar-expand-lg navbar-dark ${
    isScrolled ? "scrolled" : ""
  }`;

  return (
    <nav
      id="mainNav"
      // Use the dynamic class name here
      className={navbarClasses}
      // The CSS relies on position: fixed, so we don't need the Bootstrap utility class sticky-top
    >
      <div className="container-fluid">
        {/* 1. NAV BRAND (Your Name/Logo) */}
        <a className="navbar-brand" href="#home">
          S.V
        </a>

        {/* 2. TOGGLER BUTTON for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 3. COLLAPSIBLE LINKS CONTAINER */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#languages">
                Languages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
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
