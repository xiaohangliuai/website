import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      icon: 'fa-brain',
      title: 'Artificial Intelligence & Machine Learning',
      items: [
        'AI Agents, LLMs (Large Language Models)',
        'Supervised & Unsupervised Learning',
        'Deep Learning (CNNs, RNNs, Transformers)',
        'Reinforcement Learning, Transfer Learning'
      ]
    },
    {
      icon: 'fa-cogs',
      title: 'Development Tools',
      items: [
        'VS Code, PyCharm, XCode',
        'Android Studio, Postman',
        'RStudio IDE, Jupyter Notebook'
      ]
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Application Development',
      items: [
        'React Native, iOS, Android',
        'RESTful APIs, UI/UX Design',
        'Responsive Design (XML, Jetpack)'
      ]
    },
    {
      icon: 'fa-database',
      title: 'Databases & Cloud',
      items: [
        'Firebase, MongoDB, MySQL, PostgreSQL',
        'Google Cloud (Firestore, BigQuery)',
        'Microsoft Azure, AWS (S3, EC2)'
      ]
    },
    {
      icon: 'fa-code',
      title: 'Programming & Scripting',
      items: [
        'Python, R, Java, SQL, C++',
        'JavaScript (Node.js, basic React)',
        'Bash/Shell scripting'
      ]
    },
    {
      icon: 'fa-network-wired',
      title: 'AI & ML Frameworks',
      items: [
        'PyTorch, TensorFlow, Keras',
        'Scikit-learn, Hugging Face Transformers',
        'OpenAI API, LangChain'
      ]
    },
    {
      icon: 'fa-chart-line',
      title: 'Data Science & Analytics',
      items: [
        'Pandas, NumPy, Matplotlib, Seaborn',
        'EDA, Statistical Modeling',
        'A/B Testing, Time Series Analysis'
      ]
    },
    {
      icon: 'fa-code-branch',
      title: 'Version Control & Collaboration',
      items: [
        'Git, GitHub, GitLab',
        'Effective communicator',
        'Strong problem-solving skills'
      ]
    }
  ];

  return (
    <section id="tech-skills" className="wrapper style3 fade-up">
      <div className="inner">
        <h2>Skills</h2>
        <div className="features">
          {skillsData.map((skill, index) => (
            <section key={index}>
              <span className={`icon solid major ${skill.icon}`}></span>
              <h3>{skill.title}</h3>
              <p>
                {skill.items.map((item, i) => (
                  <React.Fragment key={i}>
                    {item}
                    {i < skill.items.length - 1 && <><br /></>}
                  </React.Fragment>
                ))}
              </p>
            </section>
          ))}
        </div>
        <ul className="actions">
          <li>
            <a 
              href="#projects" 
              className="button"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#projects');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              View Projects
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
