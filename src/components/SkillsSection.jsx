// src/components/SkillsSection.jsx
import React from "react";
import SkillCard from "./SkillCard.jsx"; // Ensure correct import name

// Define the data for the skills section
const skillsData = [
  // Note: Using a unique 'id' or 'index' is best practice for the map key
  { title: "Adaptability", imgSrc: null, iconClass: "fas fa-sync-alt" },
  { title: "Bilingual", imgSrc: null, iconClass: "fas fa-language" },
  { title: "Teamplayer", imgSrc: null, iconClass: "fas fa-users" },
  { title: "Time management", imgSrc: null, iconClass: "fas fa-stopwatch" },
  {
    title: "Willingness to learn",
    imgSrc: null,
    iconClass: "fas fa-lightbulb",
  },
];

const SkillsSection = () => (
  <div className="text-center">
    <hr />
    <h1 id="skills" className="heading">
      Skills
    </h1>
    <hr />
    <div className="d-flex justify-content-around flex-wrap">
      {/* Map through the array and render a SkillCard for each item */}
      {skillsData.map((skill, index) => (
        <SkillCard
          key={index} // Use a unique key for list items
          title={skill.title}
          iconClass={skill.iconClass}
          iconImgSrc={skill.imgSrc}
        />
      ))}
    </div>
  </div>
);

export default SkillsSection;
