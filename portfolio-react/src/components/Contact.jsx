import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Contact</h2>
        <p>I am actively seeking opportunities to collaborate on innovative and impactful projects. Let's work together to create something remarkable.</p>
        <div className="split style1">
          <section>
            <ul className="contact">
              <li>
                <h3>Address</h3>
                <span>
                  Jersey City, New Jersey<br />
                  United States<br />
                </span>
              </li>
              <li>
                <h3>Email</h3>
                <p>2024@xiaohangliuai.com</p>
              </li>
              <li>
                <h3>Social</h3>
                <ul className="icons">
                  <li>
                    <a href="https://www.linkedin.com/in/xiaohangliuai/" className="icon brands fa-linkedin-in">
                      <span className="label">Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/xiaohangliuai" className="icon brands fa-github">
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/yutoliu_/" className="icon brands fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
