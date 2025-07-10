import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationConfig } from './animations';

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      ...animationConfig.fadeUp
    });
  }, []);
  const certificates = [
    { name: 'Data Analytics with Python', issuer: 'NPTEL - IIT Kharagpur', date: 'May 2022', type: 'Elite Certificate' },
    { name: 'Blockchain and its Applications', issuer: 'NPTEL - IIT Kharagpur', date: 'May 2022', type: 'Elite Certificate' },
    { name: 'JavaScript Certification', issuer: 'HackerRank', date: 'March 2023', type: 'Basic & Intermediate' },
    { name: 'Node.js Certification', issuer: 'HackerRank', date: 'August 2023', type: 'Basic & Intermediate' }
  ];

  return (
    <section id="certifications" className="full-page-section bg-light page-transition" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-4 fw-bold text-dark mb-3">Certifications</h2>
          <div className="bg-primary mx-auto section-title-underline" style={{
            width: '80px', 
            height: '4px'
          }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {certificates.map((cert, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card-wrapper certificate-wrapper">
                <div className="card h-100 border-0 shadow-lg card-hover certificate-card" style={{
                  background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)'
                }} data-aos="fade-up">
                  <div className="card-body text-center p-4">
                    <i className="fas fa-certificate text-primary fs-1 mb-3"></i>
                    <h4 className="h5 fw-bold text-dark mb-2">{cert.name}</h4>
                    <p className="text-primary fw-semibold mb-1">{cert.issuer}</p>
                    <p className="text-muted small mb-2">{cert.date}</p>
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      {cert.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
