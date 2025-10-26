import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import components
import {
  Navigation,
  Home,
  About,
  Contact,
  Footer
} from './components';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 