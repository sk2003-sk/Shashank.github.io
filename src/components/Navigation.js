import React, { useEffect, useState } from 'react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored ? stored === 'dark' : prefersDark;
    setIsDarkMode(shouldUseDark);
    document.body.classList.toggle('dark', shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.body.classList.toggle('dark', next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm" style={{ backdropFilter: 'blur(10px)' }}>
      <div className="container">
        <span className="navbar-brand fw-bold fs-3" style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sashank</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {['home', 'about', 'contact'].map((section) => (
              <li key={section} className="nav-item position-relative">
                <button
                  onClick={() => scrollToSection(section)}
                  className={`nav-link btn btn-link text-capitalize fw-medium border-0 ${activeSection === section ? 'active' : ''
                    }`}
                  style={{ textDecoration: 'none' }}
                >
                  {section}
                </button>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                onClick={toggleTheme}
                className="btn btn-sm btn-outline-secondary"
                aria-label="Toggle theme"
                aria-pressed={isDarkMode}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {!isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
