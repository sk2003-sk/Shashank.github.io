import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationConfig } from './animations';
  
const Experience = () => {
  useEffect(() => {
    AOS.init({
      ...animationConfig.fadeUp
    });
  }, []);
  return (
    <section id="experience" className="full-page-section bg-light page-transition" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-4 fw-bold text-dark mb-3">Work Experience</h2>
          <div className="bg-primary mx-auto section-title-underline" style={{width: '80px', height: '4px'}}></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card-wrapper">
              <div className="card border-0 shadow-lg card-hover experience-card" data-aos="fade-up">
                <div className="card-body p-5">
                  <div className="row mb-4">
                    <div className="col-md-8">
                      <h3 className="h2 fw-bold text-dark">Software Engineer</h3>
                      <h4 className="h4 text-primary fw-semibold">Unisys India Pvt Ltd</h4>
                      <p className="text-muted">Bangalore, India</p>
                      <span class="badge bg-success bg-opacity-10 text-success fs-6">Full-time</span>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <span className="badge bg-primary bg-opacity-10 text-primary fs-6">
                        <i className="fas fa-calendar me-2"></i>Sep 2023 - May 2024
                      </span>
                    </div>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="fw-semibold text-primary mb-3">Frontend Development</h5>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Boosted user experience through responsive UI design with React.js</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Reduced coding time by 15 hours per project with reusable components</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Integrated CSS modules for improved code maintainability</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Implemented modern UI/UX patterns and best practices</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <h5 className="fw-semibold text-primary mb-3">Backend & Testing</h5>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Developed scalable microservices with Java and Vertx</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Reduced testing time by 30% through automation</span>
                        </li>
                        <li className="d-flex align-items-start mb-3" data-aos="fade-up" data-aos-delay="100">  
                          <i className="fas fa-check-circle text-success me-3 mt-1"></i>
                          <span className="text-muted">Implemented testing with Java, Selenium, and Cucumber</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
