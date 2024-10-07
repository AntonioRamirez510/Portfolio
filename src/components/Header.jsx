import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Antonio's Portfolio</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
