// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    // 🟢 FIX 1: Change wrapper class from "text-center test" to "contact-section"
    <div className="contact-section">
      <h4 id="contact" className="heading contact-heading">
        Contact
      </h4>
      {/* 🟢 FIX 2: Change inner wrapper class from "footer" to "contact-info" */}
      <div className="contact-info">
        {/* Email Link */}
        <p>
          <i className="far fa-envelope"></i>
          {/* The class "mail" is correctly used here */}
          <a className="mail" href="mailto: steven_v1987@live.nl">
            steven_v1987@live.nl
          </a>
        </p>

        {/* Social Media Links */}
        <div className="footer-links">
          <a
            href="https://github.com/stevenvssr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/stevenvssr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/stevenvssr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/stevenvssr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Note: I removed the WhatsApp link as it was not present in your last snippet. 
           If you need it, add it back using the same <p> structure as the email. */}
      </div>
    </div>
  );
};

export default Contact;
