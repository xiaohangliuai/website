import React from 'react';

const Sidebar = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li><a href="#intro" onClick={(e) => handleClick(e, '#intro')}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleClick(e, '#projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
