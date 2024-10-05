import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>React</h3>
          <p>Building dynamic and responsive user interfaces.</p>
        </div>
        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Writing clean, maintainable code.</p>
        </div>
        <div className="skill-card">
          <h3>HTML & CSS</h3>
          <p>Creating structured and visually appealing layouts.</p>
        </div>
        <div className="skill-card">
          <h3>Node.js</h3>
          <p>Building efficient server-side applications.</p>
        </div>
        <div className="skill-card">
          <h3>Prisma</h3>
          <p>Simplifies database management through schema-based ORM with type-safe queries and migrations.</p>
        </div>
        <div className="skill-card">
          <h3>Three.js</h3>
          <p>Creates interactive 3D web experiences with advanced rendering, lighting, and animation techniques.</p>
        </div>
        <div className="skill-card">
          <h3>Git</h3>
          <p>Version controls collaborative projects with branching, merging, and streamlined workflows.</p>
        </div>
        <div className="skill-card">
          <h3>WebSockets</h3>
          <p>Implements real-time communication for interactive apps like chat systems and multiplayer games.</p>
        </div>
        <div className="skill-card">
          <h3>REST APIs</h3>
          <p>Designs and integrates RESTful APIs to ensure scalable and maintainable server-client interaction.</p>
        </div>
        <div className="skill-card">
          <h3>JWT/Bcrypt</h3>
          <p>Secures applications with token-based authentication and strong password encryption.</p>
        </div>
        <div className="skill-card">
          <h3>Sequelize</h3>
          <p>Handles complex database relationships and schema management with an efficient ORM tool.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
