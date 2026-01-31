import React from 'react';

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li><a href="#intro">About</a></li>
            <li><a href="#tech-skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
