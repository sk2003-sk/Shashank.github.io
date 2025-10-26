import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationConfig } from './animations';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      ...animationConfig.fadeUp
    });
  }, []);

  return (
    <section id="contact" className="full-page-section gradient-bg text-white page-transition" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-4 fw-bold mb-2">Let's Connect</h2>
          <div className="bg-white mx-auto mb-3" style={{
            width: '80px',
            height: '4px'
          }}></div>
          <p className="fs-6 mb-3 opacity-75">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>

          <div className="row g-3 mb-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <a href="mailto:sashank200305@gmail.com" className="text-decoration-none text-white">
                <div className="card bg-white bg-opacity-10 border-0 h-100 card-hover contact-card-hover">
                  <div className="card-body text-center py-4 px-3">
                    <i className="fas fa-envelope fs-2 mb-3"></i>
                    <h3 className="h6 fw-semibold mb-2">Email</h3>
                    <p className="small opacity-75 mb-0">sashank200305@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>

            <div key={0} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <a href="tel:+919381998039" className="text-decoration-none text-white">
                <div className="card bg-white bg-opacity-10 border-0 h-100 card-hover contact-card-hover">
                  <div className="card-body text-center py-4 px-3">
                    <i className="fas fa-phone fs-2 mb-3"></i>
                    <h3 className="h6 fw-semibold mb-2">Phone</h3>
                    <p className="small opacity-75 mb-0">+91 9381998039</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <a href="https://www.linkedin.com/in/b-sashank/" rel="noreferrer" target="_blank" className="text-decoration-none text-white">
                <div className="card bg-white bg-opacity-10 border-0 h-100 card-hover contact-card-hover">
                  <div className="card-body text-center py-4 px-3">
                    <i className="fab fa-linkedin fs-2 mb-3"></i>
                    <h3 className="h6 fw-semibold mb-2">LinkedIn</h3>
                    <p className="small opacity-75 mb-0">Connect with me</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <a href="https://github.com/sk2003-sk" rel="noreferrer" target="_blank" className="text-decoration-none text-white">
                <div className="card bg-white bg-opacity-10 border-0 h-100 card-hover contact-card-hover">
                  <div className="card-body text-center py-4 px-3">
                    <i className="fab fa-github fs-2 mb-3"></i>
                    <h3 className="h6 fw-semibold mb-2">GitHub</h3>
                    <p className="small opacity-75 mb-0">View my code</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(15px)'
              }} data-aos="fade-up">
                <div className="card-body p-5">
                  <h3 className="h4 fw-semibold mb-4 text-white">Quick Message</h3>
                  <form className="contact-form">
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: 'var(--text-color)',
                            backdropFilter: 'blur(10px)'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: 'var(--text-color)',
                            backdropFilter: 'blur(10px)'
                          }}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Your Message"
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          color: 'var(--text-color)',
                          backdropFilter: 'blur(10px)'
                        }}
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      onClick={() => alert('This is a demo form. Please use the contact links above to reach out!')}
                      className="btn w-100 fw-semibold py-3 btn-demo"
                    >
                      Send Message (Demo)
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
