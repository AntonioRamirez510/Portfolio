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
      </div>
    </section>
  );
}

export default Skills;
