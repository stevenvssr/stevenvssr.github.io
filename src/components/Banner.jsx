// src/components/Banner.jsx (or Header.jsx)

import React from "react";
// Don't forget to initialize AOS in your main index.js file!

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        {/* 1. AVATAR/IMAGE: Centerpiece, appears first and smoothly */}
        <img
          src="https://i.imgur.com/ivGdFlD.jpg" // Replace with your actual path
          alt="Avatar"
          className="avatar"
          data-aos="fade-zoom-in"
          data-aos-duration="1000" // 1 second duration
        />

        {/* 2. MAIN HEADING: Slides up after the avatar */}
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200" // Starts slightly after the avatar
        >
          Hi, I'm Steven Visser
        </h1>

        {/* 3. SUB-TEXT / TYPEWRITER: Follows the main heading */}
        <p>
          I'm a{" "}
          <span
            className="disappear"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500" // Delayed slightly more for emphasis
          >
            Front-End Developer
          </span>
        </p>

        {/* Optional: Call to action button */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="700"
        ></div>
      </div>
    </section>
  );
};

export default Banner;
