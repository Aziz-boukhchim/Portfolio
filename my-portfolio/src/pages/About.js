import React from "react";
import { SiReact, SiMongodb, SiCplusplus, SiPhp, SiSpringboot, SiMysql, SiPostman, SiGithubactions } from "react-icons/si";
import { FaNode, FaPython, FaNodeJs, FaBootstrap, FaJava, FaGitAlt, FaDocker } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import about from "../assets/about.png";
import '../styles/about.css' 


function About() {
    return (
        <div className="about-container">
            <br></br><br></br><br></br><br></br><br></br>
            <div className="about-content">
                <div className="about-text">
                    <h1>Know Who <span className='orange'>I'M</span></h1>
                    <p className="projects-h2">
                        Hi Everyone, I'm <span className='orange'>Aziz Boukhchim</span>, a passionate software developer with a strong interest in 
                        building modern web technologies and products. <br />
                        I enjoy solving problems and creating efficient, user-friendly applications. <br />
                        I'm always eager to learn new technologies and explore innovative solutions. 
                    </p>
                </div>
                <div className="about-image">
                    <img src={about} alt="about_pic"/>
                </div>
            </div>
            <br></br> <br></br> <br></br> <br></br> <br></br>
           
            <h1>Professional <span className='orange'>Skillset</span></h1>

            <div className="card-container">
                <div className="card">
                    <FaNodeJs title="JavaScript" size="2rem"/>
                    <p>JavaScript</p>
                </div>
                <div className="card">
                    <SiReact title="React.js" size="2rem" />
                    <p>React.js</p>
                </div>
                <div className="card">
                    <FaPython title="Python" size="2rem"/>
                    <p>Python</p>
                </div>
                <div className="card">
                    <FaBootstrap title="Bootstrap" size="2rem" />
                    <p>Bootstrap</p>
                </div>
                <div className="card">
                    <IoLogoFirebase title="Firebase" size="2rem" />
                    <p>Firebase</p>
                </div>
                <div className="card">
                    <FaJava title="Java" size="2rem" />
                    <p>Java</p>
                </div>
                <div className="card">
                    <SiMongodb title="MongoDB" size="2rem" />
                    <p>MongoDB</p>
                </div>
                <div className="card">
                    <SiPhp title="PHP" size="2rem" />
                    <p>PHP</p>
                </div>
                <div className="card">
                    <SiSpringboot title="Spring Boot" size="2rem" />
                    <p>Spring Boot</p>
                </div>
                <div className="card">
                    <FaNode title="Node.js" size="2rem" />
                    <p>Node.js</p>
                </div>
                <div className="card">
                    <SiCplusplus title="C++" size="2rem" />
                    <p>C++</p>
                </div>
                <div className="card">
                    <SiMysql title="MySQL" size="2rem" />
                    <p>MySQL</p>
                </div>
            </div>

            <h1><span className='orange'>Tools</span> I Use</h1>
            <div className="card-container">
                <div className="card">
                    <VscVscode title="VSCode" size="2rem" />
                    <p>VSCode</p>
                </div>
                <div className="card">
                    <SiPostman title="Postman" size="2rem" />
                    <p>Postman</p>
                </div>
                <div className="card">
                    <SiGithubactions title="GitHub Actions" size="2rem" />
                    <p>GitHub Actions</p>
                </div>
                <div className="card">
                    <FaGitAlt title="Git" size="2rem" />
                    <p>Git</p>
                </div>
                <div className="card">
                    <FaDocker title="Docker" size="2rem" />
                    <p>Docker</p>
                </div>
            </div>
            <br></br><br></br>
        </div>
    );
}

export default About;
