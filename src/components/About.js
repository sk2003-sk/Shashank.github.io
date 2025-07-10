import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animationConfig } from './animations';

const About = () => {
  useEffect(() => {
    AOS.init({
      ...animationConfig.fadeUp
    });
  }, []);
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'SQL', 'C#'],
    
    frameworksAndLibraries: ['Bootstrap', 'Tailwind CSS', 'Angular', 'React', 'React Native', 'Node.js', 'Express.js', 'ADO.NET'],
    
    databases: ['SQL Server', 'MySQL', 'MongoDB'],
    
    tools: ['Visual Studio Code', 'IntelliJ IDEA', 'Jira', 'Git', 'GitHub', 'Postman', 'Swagger'],
    
    softSkills: [
      'Time Management',
      'Excellent Communication',
      'Adaptability',
      'Problem Solving',
      'Team Collaboration'
    ]
  };
  

  return (
    <section id="about" className="full-page-section bg-white page-transition" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-4 fw-bold text-dark mb-3">About Me</h2>
          <div className="bg-primary mx-auto section-title-underline" style={{width: '80px', height: '4px'}}></div>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="h2 fw-semibold mb-4 text-dark">Education & Background</h3>
            <div className="card bg-light border-0 mb-4">
              <div className="card-body p-4">
                <h4 className="fw-semibold text-primary">Bachelor of Technology</h4>
                <p className="text-muted mb-1">Computer Science and Engineering</p>
                <p className="text-muted mb-1">Siddharth Institute of Engineering and Technology</p>
                <p className="text-muted mb-0">June 2018 - May 2022 | GPA: 7.67</p>
              </div>
            </div>
            <p className="text-muted lead">
              I'm a passionate Software Engineer with experience in both frontend and backend development. 
              I love creating user-friendly applications and solving complex problems with innovative solutions.
            </p>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="h2 fw-semibold mb-4 text-dark">Technical Skills</h3>
            
            <div className="mb-4">
              <h4 className="fw-semibold mb-3 text-primary">Languages</h4>
              <div className="d-flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="badge bg-primary bg-opacity-10 text-primary fs-6 skill-badge" data-aos="fade-up" data-aos-delay={index * 100}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-semibold mb-3 text-primary">Frameworks</h4>
              <div className="d-flex flex-wrap gap-2">
                {skills.frameworksAndLibraries.map((skill, index) => (
                  <span key={index} className="badge bg-info bg-opacity-10 text-info fs-6 skill-badge" data-aos="fade-up" data-aos-delay={index * 100}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-semibold mb-3 text-primary">Databases</h4>
              <div className="d-flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="badge bg-success bg-opacity-10 text-success fs-6 skill-badge" data-aos="fade-up" data-aos-delay={index * 100}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-semibold mb-3 text-primary">Tools</h4>
              <div className="d-flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="badge bg-danger bg-opacity-10 text-danger fs-6 skill-badge" data-aos="fade-up" data-aos-delay={index * 100}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-semibold mb-3 text-primary">Soft Skills</h4>
              <div className="d-flex flex-wrap gap-2">
                {skills.softSkills.map((skill, index) => (
                  <span key={index} className="badge bg-warning bg-opacity-10 text-warning fs-6 skill-badge" data-aos="fade-up" data-aos-delay={index * 100}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
