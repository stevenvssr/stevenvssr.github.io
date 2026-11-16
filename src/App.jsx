import React, { useState } from "react";
import "./styles/main.scss";

const projects = [
  {
    title: "SuperMarket",
    type: "Personal project",
    description:
      "A React-based supermarket application built as a larger learning project. A chance to practise structuring an interface into reusable components and managing application state.",
    stack: ["React", "JavaScript"],
    image: "superm.png",
    url: "https://supermarket504.netlify.app/",
    featured: true,
  },
  {
    title: "PokeFinder",
    type: "Personal project",
    description:
      "A Pokédex-style application for exploring Pokémon information. Focused on working with external data and presenting it through a clear interface.",
    stack: ["React", "API integration"],
    image: "pokefinder.png",
    url: "https://pokefinder504.netlify.app/",
  },
  {
    title: "Fun with Flags",
    type: "Personal project",
    description:
      "A small web experience inspired by the idea of learning about countries through their flags and facts.",
    stack: ["JavaScript", "CSS"],
    image: "flags.png",
    url: "https://funwithflags504.netlify.app/",
  },
  {
    title: "React Todo",
    type: "Personal project",
    description:
      "A task-management application built to practise React fundamentals and interactive UI behaviour.",
    stack: ["React", "JavaScript"],
    image: "reacttodo.png",
    url: "https://todo504.netlify.app/",
  },
  {
    title: "Currency Converter",
    type: "Personal project",
    description:
      "A simple currency conversion interface, built around presenting useful information with a straightforward user flow.",
    stack: ["JavaScript", "API"],
    image: "converter.png",
    url: "https://currencyconverter504.netlify.app/",
  },
  {
    title: "Weather App",
    type: "Personal project",
    description:
      "A weather application for looking up conditions by city, with a focus on retrieving and displaying external data.",
    stack: ["JavaScript", "API"],
    image: "weather.png",
    url: "https://weather504.netlify.app/",
  },
];

const experience = [
  "Developed new features for production e-commerce applications.",
  "Maintained, debugged and improved existing storefront functionality.",
  "Translated designs into responsive interfaces across screen sizes.",
  "Integrated APIs and connected frontend features to application data.",
  "Worked with Salesforce Commerce Cloud B2C templates and cartridges.",
  "Collaborated with designers and developers, including code reviews.",
  "Contributed to frontend performance and implementation improvements.",
];

const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Sass / SCSS",
      "jQuery",
      "Ruby on Rails",
      "SQL",
    ],
  },
  {
    title: "Platforms & tools",
    items: ["Salesforce Commerce Cloud B2C", "Vite", "Git", "npm"],
  },
  {
    title: "Development",
    items: [
      "Responsive development",
      "API integration",
      "Component-based UI",
      "Performance optimisation",
      "Code reviews",
    ],
  },
];

function getAsset(name) {
  const assets = import.meta.glob("./assets/*", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const match = Object.entries(assets).find(([path]) =>
    path.toLowerCase().endsWith(`/${name.toLowerCase()}`),
  );
  return match?.[1] || "";
}

function ArrowIcon() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function ProjectCard({ project }) {
  const image = getAsset(project.image);
  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
    >
      <a
        className="project-image"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        {image ? (
          <img
            src={image}
            alt={`${project.title} project preview`}
            loading="lazy"
          />
        ) : (
          <div className="project-image-fallback">
            <span>{project.title}</span>
          </div>
        )}
        <span className="project-open">
          <ArrowIcon />
        </span>
      </a>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.type}</span>
          {project.featured && <span className="featured-label">Featured</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.stack.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
        <a
          className="text-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          View project <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a
            className="brand"
            href="#home"
            onClick={closeMenu}
            aria-label="Steven Visser home"
          >
            <span className="brand-mark">
              <span>S</span>
              <span>V</span>
            </span>
            <span className="brand-name">
              STEVEN VISSER<span className="brand-dot">.</span>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
          >
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let's talk <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" /> FRONTEND DEVELOPER
            </p>
            <h1>
              Building for the <span>web</span>, with curiosity and care.
            </h1>
            <p className="hero-intro">
              I'm Steven, a frontend developer with 3 years of professional
              experience. I build responsive digital experiences and am
              currently deepening my focus on modern frontend development.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>
            <div className="hero-footnote">
              <span>3 years professional experience</span>
              <span className="footnote-divider" />
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Decorative code-inspired graphic"
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-card">
              <div className="visual-window">
                <span />
                <span />
                <span />
              </div>
              <div className="code-line code-muted">
                const developer = {"{"}
              </div>
              <div className="code-line">
                <span className="code-key">name</span>:{" "}
                <span className="code-string">"Steven"</span>,
              </div>
              <div className="code-line">
                <span className="code-key">mindset</span>:{" "}
                <span className="code-string">"Always learning"</span>
              </div>
              <div className="code-line code-muted">{"}"}</div>
              <div className="visual-cursor" />
            </div>
            <div className="visual-badge">
              <span>SV</span>
              <small>
                FRONTEND
                <br />
                DEVELOPER
              </small>
            </div>
            <span className="visual-spark spark-one">✳</span>
            <span className="visual-spark spark-two">✳</span>
          </div>
          <a className="scroll-cue" href="#about">
            <span /> Scroll to explore
          </a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-strip-inner">
            <p>
              GOOD FRONTEND ISN'T JUST HOW IT LOOKS.
              <br />
              <strong>IT'S HOW IT WORKS.</strong>
            </p>
            <span>Design-minded. Detail-oriented. Always learning.</span>
          </div>
        </section>

        <section
          className="content-section section-wrap about-section"
          id="about"
        >
          <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <h2>
              Curious by nature.
              <br />
              <span>Developer by choice.</span>
            </h2>
            <div className="about-copy">
              <p>
                My journey into programming wasn't exactly a straight line. In
                2020, I left my job as a pastry chef and spent six months
                travelling through Colombia. When I returned, in the middle of
                the pandemic, I decided it was time for a new challenge. I
                joined the Le Wagon coding bootcamp, where nine weeks of
                intensive learning gave me the foundations to start a new career
                in tech.{" "}
              </p>

              <p>
                I landed my first developer role at Coolinvestments, the company
                behind fashion brands such as America Today, MS Mode and
                Coolcat. Over the next three years, I turned what I'd learned at
                bootcamp into practical experience, working on e-commerce
                platforms, collaborating with designers and developers, and
                learning how to build and maintain products in an agile
                environment.
              </p>

              <p>
                When my contract came to an end, my partner and I saw an
                opportunity to do something we'd always wanted: travel. What we
                initially planned as a one-year adventure turned into two and a
                half years, taking us across almost every continent.
              </p>

              <p>
                Now that I'm back, I'm excited to pick up where I left off,
                deepen my skills in React and modern frontend development, and
                keep growing as a developer. I'm bringing back not just a
                renewed focus on programming, but also a broader perspective and
                plenty of stories from the road.
              </p>
              <a
                className="text-link"
                href="https://github.com/stevenvssr"
                target="_blank"
                rel="noreferrer"
              >
                More on GitHub <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap content-section">
            <div className="section-kicker">02 / PROFESSIONAL EXPERIENCE</div>
            <div className="experience-grid">
              <div>
                <p className="section-label">THE FOUNDATION</p>
                <h2>
                  Three years building for <span>real users.</span>
                </h2>
                <p className="section-lead">
                  My commercial experience is in e-commerce development, working
                  on live storefronts and collaborating with designers and
                  developers to deliver and improve customer-facing features.
                </p>
                <div className="experience-stack">
                  <span>JavaScript</span>
                  <span>jQuery</span>
                  <span>Sass</span>
                  <span>Salesforce Commerce Cloud B2C</span>
                </div>
              </div>
              <div className="experience-details">
                <div className="experience-heading">
                  <div>
                    <span className="experience-marker" />{" "}
                    <span>Frontend development</span>
                  </div>
                  <small>3 YEARS</small>
                </div>
                <ul>
                  {experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="experience-note">
                  Salesforce Commerce Cloud is part of my professional
                  background. My next step is focused on React and modern
                  frontend engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="content-section section-wrap projects-section"
          id="projects"
        >
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row">
            <div>
              <h2>
                Things I've <span>built.</span>
              </h2>
              <p className="section-lead">
                A selection of personal projects where I explore ideas, practise
                new skills and turn concepts into working interfaces.
              </p>
            </div>
            <a
              className="text-link desktop-link"
              href="https://github.com/stevenvssr"
              target="_blank"
              rel="noreferrer"
            >
              All repositories <ArrowIcon />
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
          <a
            className="text-link mobile-link"
            href="https://github.com/stevenvssr"
            target="_blank"
            rel="noreferrer"
          >
            Explore all repositories <ArrowIcon />
          </a>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap content-section">
            <div className="section-kicker">04 / MY TOOLKIT</div>
            <div className="section-heading-row">
              <div>
                <h2>
                  Tools of the <span>trade.</span>
                </h2>
                <p className="section-lead">
                  A practical toolkit built through professional experience and
                  independent learning.
                </p>
              </div>
            </div>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-group" key={group.title}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="skills-footnote">
              React is a current development focus, supported by hands-on
              personal projects.
            </p>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="section-kicker">05 / WHAT'S NEXT?</div>
          <div className="contact-panel">
            <div>
              <p className="eyebrow">HAVE A PROJECT OR AN OPPORTUNITY?</p>
              <h2>
                Let's build something <span>meaningful.</span>
              </h2>
              <p>
                I'm interested in frontend opportunities where I can contribute,
                keep learning and grow as a developer.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-light"
                href="mailto:steven_v1987@live.nl"
              >
                Email me <ArrowIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/stevenvssr/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowIcon />
              </a>
              <a
                href="https://github.com/stevenvssr"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">
              <span>S</span>
              <span>V</span>
            </span>
            <span className="brand-name">
              STEVEN VISSER<span className="brand-dot">.</span>
            </span>
          </a>
          <span>
            Designed & built by Steven Visser · {new Date().getFullYear()}
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
