'use client'

import React from 'react'

const Contact = () => {
  return (
    <section id="cta" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <p>
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="split style1">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="5"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><button type="submit" className="button submit">Send Message</button></li>
              </ul>
            </form>
          </section>
          <section>
            <ul className="contact">
              <li>
                <h3>Email</h3>
                <a href="mailto:yutoliu2023@163.com">yutoliu2023@163.com</a>
              </li>
              <li>
                <h3>Social</h3>
                <ul className="icons">
                  <li>
                    <a href="https://github.com/xiaohangliuai" className="icon brands fa-github" target="_blank" rel="noopener noreferrer">
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/xiaohangai/" className="icon brands fa-linkedin-in" target="_blank" rel="noopener noreferrer">
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/yutoliu_/" className="icon brands fa-instagram" target="_blank" rel="noopener noreferrer">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Contact
