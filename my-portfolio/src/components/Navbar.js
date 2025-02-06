import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaFileAlt } from 'react-icons/fa'; // Import the icons
import '../styles/navbar.css';

function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Ab.</Link>
        </div>
        <ul>
          <li>
            <Link to="/">
              <FaHome size={20} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaUser size={20} />
              About
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FaCode size={20} />
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume">
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
