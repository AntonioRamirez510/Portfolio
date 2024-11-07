
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  useEffect(()=> {
    AOS.init({
      duration:1200,
      easing: 'ease-in-out',
      once:true,
    });
  },[])

  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
