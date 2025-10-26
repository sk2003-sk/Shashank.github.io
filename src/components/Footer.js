import React from 'react';

const Footer = () => {
  return (
    <footer
      className="footer-custom py-4"
      style={{ color: 'var(--text-color)', backgroundColor: 'var(--bg-color)' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">© 2025 Sashank . All rights reserved.</p>
            <small style={{ color: 'var(--muted-text)' }}>
              Built with React &amp; Bootstrap
            </small>
          </div>

          {/* Right side */}
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://www.linkedin.com/in/b-sashank/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-color)' }}
                className="social-btn"
                aria-label="LinkedIn profile"
              >
                <i className="fab fa-linkedin fs-4"></i>
              </a>
              <a
                href="https://github.com/sk2003-sk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-color)' }}
                className="social-btn"
                aria-label="GitHub profile"
              >
                <i className="fab fa-github fs-4"></i>
              </a>
              <a
                href="mailto:sashank200305@gmail.com"
                style={{ color: 'var(--text-color)' }}
                className="social-btn"
                aria-label="Send email"
              >
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
