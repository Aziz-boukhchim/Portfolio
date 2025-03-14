import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa'; // Import the icons
import '../styles/navbar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Ab.</Link>
        </div>
        {/* Mobile Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navbar Links */}
        <ul className={menuOpen ? 'active' : ''}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <FaHome size={20} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <FaUser size={20} />
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              <FaCode size={20} />
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => setMenuOpen(false)}>
              <FaFileAlt size={20} />
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
