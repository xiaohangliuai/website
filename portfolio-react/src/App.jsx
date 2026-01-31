import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  useEffect(() => {
    // Load external scripts after component mounts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load all required scripts
    const loadScripts = async () => {
      try {
        await loadScript('/assets/js/jquery.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/aos@2.3.3/dist/aos.min.js');
        await loadScript('/assets/js/jquery.scrollex.min.js');
        await loadScript('/assets/js/jquery.scrolly.min.js');
        await loadScript('/assets/js/browser.min.js');
        await loadScript('/assets/js/breakpoints.min.js');
        await loadScript('/assets/js/util.js');
        await loadScript('/assets/js/main.js');
        await loadScript('/js/main.js');
        await loadScript('/js/script.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);

  return (
    <>
      <div id="top">
        <Hero />
        <Sidebar />
        <div id="wrapper">
          <About />
          <Skills />
          <ProjectsSection />
          <Contact />
        </div>
        <Footer />
        <Preloader />
      </div>
    </>
  );
}

export default App;
