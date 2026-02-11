'use client'

import { useEffect } from 'react'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import About from './components/About'
import ProjectsSection from './components/ProjectsSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

export default function Home() {
  useEffect(() => {
    const hidePreloader = () => {
      const preloader = document.getElementById('preloader')
      if (preloader) {
        preloader.style.display = 'none'
      }
    }

    // Remove preload class immediately to show content
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('preload')
      document.documentElement.classList.remove('is-preload')
      document.documentElement.classList.add('loaded')
      document.body.classList.remove('is-preload')
      hidePreloader()
    }
    
    // Load external scripts after component mounts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }

    // Load all required scripts
    const loadScripts = async () => {
      try {
        // Load jQuery first
        await loadScript('/assets/js/jquery.min.js')
        await loadScript('https://cdn.jsdelivr.net/npm/aos@2.3.3/dist/aos.min.js')
        await loadScript('/assets/js/jquery.scrollex.min.js')
        await loadScript('/assets/js/jquery.scrolly.min.js')
        await loadScript('/assets/js/browser.min.js')
        await loadScript('/assets/js/breakpoints.min.js')
        await loadScript('/assets/js/util.js')
        
        // Load THREE.js library (modern version with WebGL support) before main.js (which uses it)
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
        
        // Load Swiper library before script.js (which uses it)
        await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js')
        
        // Now load scripts that depend on THREE and Swiper
        await loadScript('/js/main-modern.js') // Use modernized version
        await loadScript('/js/script.js')
        
        // Load template main.js last
        await loadScript('/assets/js/main.js')
        
        // Re-initialize scrolly after all scripts loaded
        setTimeout(() => {
          if (window.jQuery) {
            window.jQuery('.scrolly').scrolly({
              speed: 1000,
              offset: 0
            })
          }
        }, 500)
        hidePreloader()
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadScripts()

    const fallbackTimeout = setTimeout(() => {
      hidePreloader()
    }, 1000)

    return () => {
      clearTimeout(fallbackTimeout)
    }
  }, [])

  return (
    <div id="top">
      <Hero />
      <Sidebar />
      <div id="wrapper">
        <About />
        <ProjectsSection />
        <Contact />
      </div>
      <Footer />
      <Preloader />
    </div>
  )
}
