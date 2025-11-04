// src/components/ProjectCard.jsx

import React from "react";

const ProjectCard = ({ title, description, imageSrc, projectUrl, aosData }) => {
  return (
    <div
      className="card"
      data-aos={aosData.effect}
      data-aos-duration={aosData.duration}
    >
      <img src={imageSrc} alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>

      {/* 🟢 NEW: Button wrapper for alignment */}
      <div className="card-actions">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
