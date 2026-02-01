import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="s-home target-section">
      <div className="shadow-overlay" id="wave"></div>
      <div className="home-content">
        <div className="row home-content__main">
          <img src="/images/selfie.JPG" alt="Xiaohang Liu" className="selfie" />
          <h1>Xiaohang Liu</h1>
          <p>Software Engineer / AI Agent / Machine Learning Engineer</p>
        </div>
      </div>
      <a 
        href="#intro" 
        className="home-scroll smoothscroll"
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector('#intro');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        <span className="home-scroll__text">Scroll Down</span>
        <span className="home-scroll__icon"></span>
      </a>
    </section>
  );
};

export default Hero;
