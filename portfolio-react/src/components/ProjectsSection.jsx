import React from 'react';

const ProjectsSection = () => {
  const projectsData = [
    {
      title: 'PackMind+ App (iOS & Android)',
      description: '- PackMind+ is your ultimate companion for staying organized with personalized packing lists for any occasion. Create custom packing lists for travel, shopping, sports, and more with our intuitive interface. Never forget essential items again with reminders, visual tracking, and easy sharing capabilities.',
      image: '/images/packmindplus/01.png',
      link: '/packmindplus-support.html',
      position: 'center center'
    },
    {
      title: 'Text-to-image generation for soccer tactics',
      description: '- Leveraged the Segment Anything Model (SAM) to extract and reposition players from real-world soccer images, enhancing dataset diversity for model training.\n- Applied text-to-image diffusion models to generate structured tactical diagrams from textual descriptions, ensuring compliance with spatial constraints such as player formations, offside rules.',
      image: '/images/project-01/corner-kick.jpg',
      link: 'https://github.com/xiaohangliuai/T2I-soccer-cornerkick-freekick',
      position: 'right'
    },
    {
      title: 'YUAttend Attendance App',
      description: '- Developed an Android app using Java in Android Studio to track student attendance via GPS, displaying real-time location and attendance status for teachers.\n- Integrated Firebase for cloud data storage, allowing teachers to manage courses and export attendance records to Excel.\n- Planned for school-wide implementation, enabling all students to take attendance using the app.',
      image: '/images/project-02/Login_page.png',
      link: 'https://github.com/xiaohangliuai/School-Attendance-Tracking-App',
      position: 'top center'
    },
    {
      title: 'Income Prediction Machine Learning Project',
      description: '- Build a Machine Learning web application from scratch in Python with Streamlit. Use real world data from the stack overflow developer survey to build a machine learning model.',
      image: '/images/project-03/img01.png',
      link: '/project-03.html',
      position: 'top center'
    }
  ];

  return (
    <section id="projects" className="wrapper style2 spotlights">
      {projectsData.map((project, index) => (
        <section key={index}>
          <a href={project.link} className="image">
            <img src={project.image} alt={project.title} data-position={project.position} />
          </a>
          <div className="content">
            <div className="inner">
              <h2>{project.title}</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
              <ul className="actions">
                <li>
                  <a href={project.link} className="button">
                    {project.link.includes('github.com') ? 'View Project' : 'View Support Page'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default ProjectsSection;
