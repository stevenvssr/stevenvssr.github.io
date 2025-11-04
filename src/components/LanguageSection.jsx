// src/components/LanguagesSection.jsx
import React from "react";
import LanguageCard from "./LanguageCard.jsx";

// 💡 1. Dynamic Image Import Logic (REQUIRED FOR LOCAL IMAGES)
const images = import.meta.glob("../assets/*.{png,jpg,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

// Function to safely get the image URL from the imported module list
const getImageUrl = (path) => {
  const key = `../${path}`;
  return images[key] || path;
};

const languagesData = [
  // Staggering the first 4-5 items works best for a smooth reveal
  {
    name: "HTML",
    iconClass: "fab fa-html5",
    aos: { effect: "fade-right", duration: "1000", delay: "0" },
  },
  {
    name: "CSS",
    iconClass: "fab fa-css3-alt",
    aos: { effect: "fade-left", duration: "1000", delay: "150" },
  },
  {
    name: "JavaScript",
    iconClass: "fab fa-js",
    aos: { effect: "fade-right", duration: "1000", delay: "300" },
  },
  {
    name: "React",
    iconClass: "fab fa-react",
    aos: { effect: "fade-left", duration: "1000", delay: "450" },
  },
  // Use a simpler effect without delay for the rest
  {
    name: "Sass",
    iconClass: "fab fa-sass",
    aos: { effect: "zoom-in", duration: "1000" },
  },
  {
    name: "Bootstrap",
    iconClass: "fab fa-bootstrap",
    aos: { effect: "zoom-in", duration: "1000" },
  },
  {
    name: "jQuery",
    iconClass: "fab fa-npm",
    aos: { effect: "zoom-in", duration: "1000" },
  },
  {
    name: "Ruby",
    iconClass: "fas fa-gem",
    aos: { effect: "zoom-in", duration: "1000" },
  },
  {
    name: "Rails",
    iconClass: "fas fa-server",
    aos: { effect: "zoom-in", duration: "1000" },
  },
  {
    name: "SQL",
    iconClass: "fas fa-database",
    aos: { effect: "zoom-in", duration: "1000" },
  },
  {
    name: "Salesforce",
    iconClass: "fas fa-handshake",
    aos: { effect: "zoom-in", duration: "1000" },
  },
];

const LanguagesSection = () => (
  <>
    <hr />
    <h1 className="text-center heading" id="languages">
      Languages
    </h1>
    <hr />
    <div className="d-flex justify-content-center flex-wrap section w-100">
      {languagesData.map((lang, index) => (
        <LanguageCard
          key={index}
          // 🟢 FIX 1: Pass the name property
          name={lang.name}
          // 🟢 FIX 2: Pass the iconClass property (will be used by LanguageCard)
          iconClass={lang.iconClass}
          // Only resolve imgSrc if it exists (for non-icon items)
          imgSrc={lang.imgSrc ? getImageUrl(lang.imgSrc) : null}
          aosData={lang.aos}

          // Removed hasProgress as per your request, but keep it out of the array.
          // Note: If you want to delete hasProgress from the languagesData array above, do so.
        />
      ))}
    </div>
  </>
);

export default LanguagesSection;
