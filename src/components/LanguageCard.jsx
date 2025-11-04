// src/components/LanguageCard.jsx

import React from "react";
import "../styles/base/_language-card.scss";

// 1. Dynamic Image Import Logic (Required for assets in src/assets)
const images = import.meta.glob("../assets/*.{png,jpg,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const getImageUrl = (path) => {
  if (!path || path.startsWith("http")) return path;
  const key = `../${path}`;
  return images[key] || path;
};

// Removed 'hasProgress' from props destructuring
const LanguageCard = ({
  name,
  imgSrc,
  iconClass,
  aosData = { effect: "none", duration: "0" },
}) => {
  return (
    <div
      className="card-category"
      data-aos={aosData.effect}
      data-aos-duration={aosData.duration}
      // 🟢 NEW: Add data-aos-delay only if it exists
      {...(aosData.delay && { "data-aos-delay": aosData.delay })}
    >
      {/* 🟢 CRITICAL FIX: Restoring the icon/image rendering logic */}
      {iconClass ? (
        // Renders Font Awesome icon
        <i className={iconClass}></i>
      ) : (
        // Renders image using the path resolver (for fallback images)
        <img src={getImageUrl(imgSrc)} alt={name || "Technology"} />
      )}

      {/* Add the name below the icon/image for clarity */}
      <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>{name}</p>

      {/* The progress bar rendering logic was permanently removed here */}
    </div>
  );
};

export default LanguageCard;
