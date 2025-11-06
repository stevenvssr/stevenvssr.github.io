// src/components/ProjectsSection.jsx

import React from "react";
import ProjectCard from "./ProjectCard.jsx";

// 💡 1. DYNAMICALLY IMPORT ALL ASSETS from src/assets/
// This uses the updated glob syntax to get the URL for all image files.
const images = import.meta.glob("../assets/*.{png,jpg,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

// Helper function to resolve the image path string into a usable URL
const getImageUrl = (path) => {
  // Construct the relative path key (e.g., "../assets/Cocktails.png")
  const key = `../${path}`;
  // Return the imported URL or the original path as a fallback
  return images[key] || path;
};

// --- 2. Define the Projects Data Array ---
const projectsData = [
  {
    title: "MS Mode",
    description:
      "In my first job as a developer the first webshop I was introduced to was that of MS Mode. With a team that consisted of 4 developers we maintained, updated and improved the webshop.",
    imageSrc: "https://i.imgur.com/8XCCQMW.png", // External link (no change needed)
    projectUrl: "https://www.msmode.nl/",
    aos: { effect: "fade-right", duration: "2500" },
  },
  {
    title: "America Today",
    description:
      "Just like the MS Mode project, I also worked on the America Today webshop. The webshops started out with a separate codebase, but later on we went for the Whitelabel approach.",
    imageSrc: "https://i.imgur.com/S7lFpli.png", // External link (no change needed)
    projectUrl: "https://www.america-today.com/nl-nl",
    aos: { effect: "fade-right", duration: "2500" },
  },
  {
    title: "Fun with Flags",
    description:
      "Inspired by Sheldon Cooper's 'Fun with Flags' series, I created a website that showcases various country flags along with interesting facts about each country.",
    // Use the string path that matches the file in src/assets/
    imageSrc: "assets/flags.png",
    projectUrl: "https://funwithflags504.netlify.app/",
    aos: { effect: "fade-left", duration: "2500" },
  },
  {
    title: "PokeFinder",
    description: "A simple Pokedex app that shows info about Pokemon.",
    imageSrc: "assets/PokeFinder.png",
    projectUrl: "https://pokefinder504.netlify.app/",
    aos: { effect: "fade-left", duration: "2500" },
  },
  {
    title: "Currency Converter",
    description: "A simple page where you can convert currencies.",
    imageSrc: "assets/converter.png",
    projectUrl: "https://currencyconverter504.netlify.app",
    aos: { effect: "fade-right", duration: "2500" },
  },
  {
    title: "Message Board",
    description: "A message board to talk about whatever!",
    imageSrc: "assets/forum.png",
    projectUrl: "https://messageboard504.netlify.app/",
    aos: { effect: "fade-right", duration: "2500" },
  },
  {
    title: "Todo app",
    description: "A todo app build with React",
    imageSrc: "assets/reacttodo.png",
    projectUrl: "https://todo504.netlify.app/",
    aos: { effect: "fade-left", duration: "2500" },
  },
  {
    title: "SuperMarket",
    description:
      "A SuperMarket app that I've build with React. It was the final project of the React-Tutorial course",
    imageSrc: "assets/superm.png",
    projectUrl: "https://supermarket504.netlify.app/",
    aos: { effect: "fade-left", duration: "2500" },
  },
];

// --- 3. Component Structure ---
const ProjectsSection = () => (
  <>
    <hr />
    <h1 id="projects" className="text-center heading">
      Projects
    </h1>
    <hr />

    <div className="d-flex justify-content-around flex-wrap section">
      {/* Map through the array and render a ProjectCard for each item */}
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          // 💡 Use the helper function to get the correct URL for local assets
          imageSrc={
            project.imageSrc.startsWith("http")
              ? project.imageSrc
              : getImageUrl(project.imageSrc)
          }
          projectUrl={project.projectUrl}
          aosData={project.aos}
        />
      ))}
    </div>
  </>
);

export default ProjectsSection;
