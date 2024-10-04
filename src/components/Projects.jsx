import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>The Legend of Lemon Larry</h3>
          <p>3D web game with features like collision detection, chat, and world generation.</p>
          <a
          href="https://github.com/AntonioRamirez510/lemon-larry"
          target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" /> Lemon Larry Github
          </a>
        </div>
        <div className="project-card">
          <h3>Schedge</h3>
          <p>An automated scheduling tool for small businesses.</p>
          <a href="https://github.com/AntonioRamirez510/schedge" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" /> Schedge GitHub</a>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
}

export default Projects;
