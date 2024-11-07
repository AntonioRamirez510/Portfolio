import React from 'react';
import fishin from '../assets/Caught_a_fish.PNG'

const Hero = () => {
  return (
    <section data-aos="fade-down" className="hero">
      <div className="hero-content">
        <img className="handsome" alt="My Picture" src={fishin}></img>
        <h1>Hi, I'm Antonio</h1>
        <p>Fullstack Web Developer specialized in React, JavaScript, and Node.js.</p>
        <a href="#projects" className="btn">See My Work</a>
      </div>
    </section>
  );
}

export default Hero;
