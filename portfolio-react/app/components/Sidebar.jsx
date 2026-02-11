'use client'

import React from 'react'

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li><a href="#home" className="scrolly">Home</a></li>
            <li><a href="#intro" className="scrolly">About</a></li>
            <li><a href="#projects" className="scrolly">Projects</a></li>
            <li><a href="#cta" className="scrolly">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar
