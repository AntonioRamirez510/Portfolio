
import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
