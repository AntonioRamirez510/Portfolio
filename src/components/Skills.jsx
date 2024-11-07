import React from 'react';
import react from '/React.PNG'
import htmlCssLogo from '/Html-css-logo.PNG'
import javascript from '/Javascript-logo.PNG'
import nodeLogo from '/node-logo.png'
import prismaLogo from '/prisma_logo.PNG'
import threejs from '/threejs.png'

const Skills = () => {
  return (
    <section data-aos="zoom-in" className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div data-aos="fade-right" className="skill-card">
          <div className="logo-title">
            <img className="react-logo" src={react}></img>
            <h3>React</h3>
          </div>
          <p>Building dynamic and responsive user interfaces.</p>
        </div>
        <div data-aos="fade-left" className="skill-card">
          <div className="logo-title">
            <img className="javascript-logo" src={javascript}></img>
            <h3>JavaScript</h3>
          </div>
          <p>Writing clean, maintainable code utilizing Object-Oriented-Programmming.</p>
        </div>
        <div data-aos="fade-right" className="skill-card">
          <div className="logo-title">
            <img className="htmlCssLogo" src={htmlCssLogo}></img>
            <h3>HTML & CSS</h3>
          </div>
          <p>Creating structured and visually appealing layouts.</p>
        </div>
        <div data-aos="fade-left" className="skill-card">
          <div className="logo-title">
            <img className="node-logo" src={nodeLogo}></img>
            <h3>Node.js</h3>
          </div>
          <p>Building efficient server-side applications.</p>
        </div>
        <div data-aos="fade-right" className="skill-card">
          <div className="logo-title">
            <img className="prisma-logo" src={prismaLogo}></img>
            <h3>Prisma</h3>
          </div>
          <p>Simplifies database management through schema-based ORM with type-safe queries and migrations.</p>
        </div>
        <div data-aos="fade-left" className="skill-card">
          <div className="logo-title">
            <img className="threejs-logo"src={threejs}></img>
            <h3>Three.js</h3>
          </div>
          <p>Creates interactive 3D web experiences with advanced rendering, lighting, and animation techniques.</p>
        </div>
        <div data-aos="fade-right" className="skill-card">
          <h3>Git</h3>
          <p>Version controls collaborative projects with branching, merging, and streamlined workflows.</p>
        </div>
        <div data-aos="fade-left" className="skill-card">
          <h3>WebSockets</h3>
          <p>Implements real-time communication for interactive apps like chat systems and multiplayer games.</p>
        </div>
        <div data-aos="fade-right" className="skill-card">
          <h3>REST APIs</h3>
          <p>Designs and integrates RESTful APIs to ensure scalable and maintainable server-client interaction.</p>
        </div>
        <div data-aos="fade-left" className="skill-card">
          <h3>JWT/Bcrypt</h3>
          <p>Secures applications with token-based authentication and strong password encryption.</p>
        </div>
        <div data-aos="fade-right" className="skill-card">
          <h3>Sequelize</h3>
          <p>Handles complex database relationships and schema management with an efficient ORM tool.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
