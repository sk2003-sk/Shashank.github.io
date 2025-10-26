import React from 'react';
import MyImage from '../assets/images/MyImage.jpg';

const Home = ({ scrollToSection }) => {


  return (
    <section id="home" className="gradient-bg hero-section d-flex align-items-center text-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="mb-4">
              <div className="rounded-circle mx-auto mb-4 overflow-hidden shadow-lg profile-photo-hover" style={{ width: '128px', height: '128px' }}>
                <img
                  src={MyImage}
                  alt="Sashank Profile"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h1 className="display-2 fw-bold mb-4">Sashank</h1>
              <div className="fs-3 mb-4 typing-animation">Software Engineer | frontend Developer</div>
              <p className="fs-5 mb-5 opacity-75">
                Passionate about building scalable web applications using modern technologies like  React.js, Node.js,  MySQL, and MongoDB.</p>
            </div>

            <div className="row g-3 justify-content-center mb-5">
              <div className="col-auto">
                <a href="mailto:sashank200305@gmail.com" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-envelope me-2"></i>Email
                </a>
              </div>
              <div className="col-auto">
                <a href="https://www.linkedin.com/in/b-sashank/" rel="noreferrer" target="_blank" className="btn btn-outline-light btn-lg">
                  <i className="fab fa-linkedin me-2"></i>LinkedIn
                </a>
              </div>
              <div className="col-auto">
                <a href="https://github.com/sk2003-sk" rel="noreferrer" target="_blank" className="btn btn-outline-light btn-lg">
                  <i className="fab fa-github me-2"></i>GitHub
                </a>
              </div>
              <div className="col-auto">
                <a href="tel:+919381998039" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-phone me-2"></i>Call
                </a>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="btn btn-light btn-lg fw-semibold text-primary"
              style={{ animation: 'bounce 2s infinite' }}
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
