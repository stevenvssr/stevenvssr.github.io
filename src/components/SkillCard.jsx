// src/components/SkillCard.jsx

import React from "react";

// Using the received props to render the icon or image
const SkillCard = ({ iconClass, iconImgSrc, title }) => {
  return (
    <div className="skillcard">
      {/* Conditional rendering: show <img> if iconImgSrc is provided */}
      {iconImgSrc && <img src={iconImgSrc} alt={title} />}

      {/* Conditional rendering: show <i> if iconClass is provided */}
      {iconClass && <i className={iconClass}></i>}

      <br />
      <h3>{title}</h3>
    </div>
  );
};

export default SkillCard;
