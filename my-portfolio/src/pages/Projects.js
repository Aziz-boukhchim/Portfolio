import React from "react";
import "../styles/projects.css";
import contact from '../assets/small.png'
import { FaGithub } from "react-icons/fa";
import blog from '../assets/blog.jpg'
import tounsi from '../assets/Tounsi-Learn.jpg';

function Projects() {
  return (
    <div className="projects-container">
          <br></br>  <br></br>  <br></br>  <br></br>
      <div>
        <h1>My Recent <span className='orange'>Works</span></h1>
        <p>Here are a few projects I've worked on recently</p>
      </div>
      <br></br>  <br></br>

      <div className="projects-grid">
        {/* Card 1 */}
        <div className="project-card">
          <img src={contact} alt="project_related"></img>
          <h4>Manager Contact</h4>
          <p>A simple contact management web app built with Django and Bootstrap. Allows users to add, update, and delete contacts efficiently</p>
          <a href="https://github.com/Aziz-boukhchim/contact-manager" className="project-link" target="_blank" rel="noreferrer">View on GitHub <FaGithub size={20}></FaGithub></a>
        </div>

        {/* Card 2 */}
        <div className="project-card">
        <img src={blog} alt="project_related"></img>
          <h4>Blog Platform</h4>
          <p>A full-stack blogging app built with React and Node.js. Users can create, edit, and delete blog posts with a responsive UI.</p>
          <a href="https://github.com/Aziz-boukhchim/fullstack" className="project-link" target="_blank" rel="noreferrer">View on GitHub <FaGithub size={20}></FaGithub></a>
        </div>

        {/* Card 3 */}
        <div className="project-card">
        <img src={tounsi} alt="Tounsi Learn"></img>
          <h4>Tounsi-Learn</h4>
          <p>A platform for students to upload, search, and download university study materials, ensuring easy access to educational resources.</p>
          <a href="https://github.com/Aziz-boukhchim/TounsiLearn" className="project-link" target="_blank" rel="noreferrer">View on GitHub <FaGithub size={20}></FaGithub></a>
        </div>
        
      </div>
      <br></br>  <br></br>  <br></br><br></br>  <br></br>  <br></br><br></br>  <br></br>  <br></br>
    </div>
  );
}

export default Projects;
