import { useEffect, useState } from "react";
import "../styles/base/_header.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky-top navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          SV
        </a>
        <div className="navbar-nav">
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#languages">
            Languages
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
