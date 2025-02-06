import React from "react";
import "../styles/projects.css";

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
          <img alt="project_related"></img>
          <h4>Project 1</h4>
          <p>Short description of the project...</p>
          <a href="https://github.com/yourusername/project1" className="project-link" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>

        {/* Card 2 */}
        <div className="project-card">
        <img alt="project_related"></img>
          <h4>Project 2</h4>
          <p>Short description of the project...</p>
          <a href="https://github.com/yourusername/project2" className="project-link" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>

        {/* Card 3 */}
        <div className="project-card">
        <img alt="project_related"></img>
          <h4>Project 3</h4>
          <p>Short description of the project...</p>
          <a href="https://github.com/yourusername/project3" className="project-link" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
        <img alt="project_related"></img>
          <h4>Project 4</h4>
          <p>Short description of the project...</p>
          <a href="https://github.com/yourusername/project1" className="project-link" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
        
        <div className="project-card">
        <img alt="project_related"></img>
          <h4>Project 5</h4>
          <p>Short description of the project...</p>
          <a href="https://github.com/yourusername/project1" className="project-link" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
        <img alt="project_related"></img>
          <h4>Project 6</h4>
          <p>Short description of the project...</p>
          <a href="https://github.com/yourusername/project1" className="project-link" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
        {/* Repeat for other projects */}
        
      </div>
      <br></br>  <br></br>  <br></br>
    </div>
  );
}

export default Projects;
