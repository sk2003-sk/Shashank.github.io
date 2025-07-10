import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-custom text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">© 2025 Bhaskar Manoj. All rights reserved.</p>
            <small className="text-white-50">Built with React &amp; Bootstrap</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://linkedin.com/in/manoj-bhaskar-99b842234/" target="_blank" rel="noopener noreferrer" className="text-white social-btn" aria-label="LinkedIn profile">
                <i className="fab fa-linkedin fs-4"></i>
              </a>
              <a href="https://github.com/Manoj584" target="_blank" rel="noopener noreferrer" className="text-white social-btn" aria-label="GitHub profile">
                <i className="fab fa-github fs-4"></i>
              </a>
              <a href="mailto:manojbhaskar01234@gmail.com" className="text-white social-btn" aria-label="Send email">
                <i className="fas fa-envelope fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
