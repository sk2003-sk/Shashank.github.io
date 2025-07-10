import React from 'react';

const Navigation = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm" style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.95)'}}>
      <div className="container">
        <span className="navbar-brand fw-bold fs-3" style={{background: 'linear-gradient(45deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Bhaskar Manoj</span>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['home', 'about', 'experience', 'projects', 'certifications', 'contact'].map((section) => (
              <li key={section} className="nav-item position-relative">
                <button
                  onClick={() => scrollToSection(section)}
                  className={`nav-link btn btn-link text-capitalize fw-medium border-0 ${
                    activeSection === section ? 'text-primary active' : 'text-secondary'
                  }`}
                  style={{textDecoration: 'none'}}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
