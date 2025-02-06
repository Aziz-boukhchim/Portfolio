import React from 'react';
import programmer from '../assets/programmer.webp';
import '../styles/home.css';
import { FaGithub , FaLinkedin } from "react-icons/fa";
import TypingAnimation from '../components/TypingAnimation';

function Home() {
  return (
    <div>
    <section className="home">
      <div className="home-content">
        <h1>Hi There! 👋🏻</h1>
        <h1>I'M AZIZ BOUKHCHIM</h1>
        <TypingAnimation></TypingAnimation>
      </div>
      <div className="home-image">
        <img src={programmer} alt="Description" />
      </div>
     
    </section>
    <section className="about-me">
  <div className="about-me-content">
    <h2>LET ME INTRODUCE MYSELF</h2>
    <p>
      I am a passionate software developer with a keen interest in building innovative and scalable web applications. My journey in programming began with exploring languages like JavaScript, Python, and C++, and I've continued to expand my skill set ever since.
    </p>
    <p>
      I specialize in web development, working with modern JavaScript frameworks such as React.js and Next.js, and I have hands-on experience building full-stack applications. My goal is to create clean, efficient code while maintaining a focus on delivering exceptional user experiences.
    </p>
    <p>
      Beyond web development, I'm also fascinated by cloud technologies and DevOps practices, especially with platforms like AWS and Docker. I enjoy experimenting with new tools and techniques to improve my workflow and keep learning.
    </p>
    <p>
      When I’m not coding, you can find me developing 3D games using Unity, exploring the latest tech trends, or collaborating with other developers on exciting projects.
    </p>
      </div>
  <br></br>
  <div>
    <h2>FIND ME ON</h2>
    <div className="social-links">
            <a href="https://github.com/aziz-boukhchim" target="_blank" rel="noopener noreferrer">
              <FaGithub size={48} />
            </a>
            <a href="https://www.linkedin.com/in/aziz-boukhchim" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={48} />
            </a>
          </div>
    <p className='feel'>Feel free to connect</p>
    

  </div>
</section>
    </div>
  );
}

export default Home;
