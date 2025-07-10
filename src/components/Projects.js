import React from 'react';

const Projects = () => {


  const projects = [
    {
      title: 'Assisted Collaborative Service Recommendation',
      description: 'Developed a system to recommend web services from a vast pool of emerging services with blockchain integration.',
      technologies: ['Blockchain', 'Encryption', 'Web Services'],
      features: [
        'Ciphertext-Policy Attribute-Based Encryption',
        'Blockchain technology integration',
        'DoS attack mitigation'
      ]
    },
    {
      title: 'User Lifecycle Management System',
      description: 'Engineered a scalable User Management System for schools with secure authentication and role-based access.',
      technologies: ['.NET Core', 'SQL Server', 'MySQL', 'React', 'Entity Framework'],
      features: [
        'Secure user authentication',
        'Role-based access control',
        'Profile management system',
        'Optimized database interactions'
      ]
    }
  ];

  return (
    <section id="projects" className="full-page-section bg-light page-transition">
      <div className="container">
        <div className="text-center mb-5 section-fade">
          <h2 className="display-4 fw-bold text-dark mb-3">Featured Projects</h2>
          <div className="bg-primary mx-auto section-title-underline" style={{
            width: '80px', 
            height: '4px'
          }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6" data-aos="fade-right">
              <div className="card-wrapper project-wrapper h-100">
                <div className="card h-100 border-0 shadow-lg card-hover project-card">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold text-dark mb-3">{project.title}</h3>
                    <p className="text-muted mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="h6 fw-semibold text-primary mb-3">Technologies Used</h4>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="badge bg-primary bg-opacity-10 text-primary fs-6">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="h6 fw-semibold text-primary mb-3">Key Features</h4>
                      <ul className="list-unstyled">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="d-flex align-items-start mb-3">
                            <i className="fas fa-star text-warning me-2 mt-1"></i>
                            <span className="text-muted">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Projects;
