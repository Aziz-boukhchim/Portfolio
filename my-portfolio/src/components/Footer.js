import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the icons
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-content">
          <p>Designed And Developed by Aziz Boukhchim</p>
        </div>
        <div className="right-content">
          <div className="social-links">
            <a href="https://github.com/Aziz-boukhchim" target="_blank" rel="noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aziz-boukhchim-662722288/" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
