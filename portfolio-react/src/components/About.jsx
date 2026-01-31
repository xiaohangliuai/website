import React from 'react';

const About = () => {
  return (
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1>About me</h1>
        <p>
          I am a graduate student pursuing a Master of Science degree in Artificial Intelligence.
          My expertise spans AI Agents, large language models (LLMs), data science, machine learning,
          deep learning, software engineering, application development and scalable system design.
        </p>
        <p>
          With a broad-minded and proactive approach, I thrive on solving complex problems through code
          and leveraging data to uncover meaningful insights that drive impactful decisions.
          I am passionate about exploring new technologies and constantly pushing the boundaries of what's possible.
        </p>
        <ul className="actions">
          <li><a href="#tech-skills" className="button scrolly">View Skills</a></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
