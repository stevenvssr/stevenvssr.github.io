// src/App.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

// Import all your converted components
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import LanguageSection from "./components/LanguageSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import Contact from "./components/Contact.jsx";

// Import your global styles (assuming it's in the src directory now)
import "./styles/main.scss"; // Use the main Sass file you were working on

const App = () => {
  useEffect(() => {
    // Initialize AOS once when the application component mounts
    AOS.init({
      duration: 1000, // Customize as needed
      once: true, // Animate only once per element
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    // We use a React Fragment (<>) to return a single parent element
    <>
      <Navbar />
      <Banner />
      {/* Container wraps the main content sections */}
      <div className="container">
        <SkillsSection />
        <LanguageSection />
        <ProjectsSection />
      </div>
      <br /> {/* Original spacing element */}
      <Contact />
      {/* NOTE: Original <script> tags for Bootstrap JS and jQuery 
        have been handled: 
        - Bootstrap JS is assumed to be handled by a CDN link in public/index.html 
          or replaced by a React-Bootstrap library (recommended).
        - jQuery and local JS logic have been converted to React hooks (useState/useEffect) 
          in Navbar.jsx and Banner.jsx.
      */}
    </>
  );
};

export default App;
