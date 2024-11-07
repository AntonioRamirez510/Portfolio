import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import schedge from '/Schedge.PNG'
import lemonLarry from '/LemonLarry.PNG'
import sweetsByTina from '/sweetsByTina.PNG'


const Projects = () => {
  return (
    <section data-aos="zoom-in" className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img className="lemonLarry-logo"src={lemonLarry}></img>
          <p>3D web game with features like collision detection, chat, and world generation.</p>
          <a
          href="https://github.com/4-Team-Arc/Lemon-Larry"
          target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" /> The Legend of Lemon Larry Github
          </a>
        </div>
        <div className="project-card">
          <img className="schedge-logo"src={schedge}></img>
          <p>An automated scheduling tool for small businesses.</p>
          <a href="https://github.com/AntonioRamirez510/schedge" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" /> Schedge GitHub</a>
        </div>
        <div className="project-card">
          <img className="lemonLarry-logo"src={sweetsByTina}></img>
          <p>Order Desserts Online! <br></br> Request Custom Sweets!</p>
          <a href="https://github.com/AntonioRamirez510/sweetsbyTina" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" /> Sweets by Tina GitHub</a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
