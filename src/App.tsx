import React, { useEffect, useState } from 'react';
import './App.css';
import CompanyLogo from './components/CompanyLogo';
import Globe from './components/Globe';
import Hobbies from './components/Hobbies';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;
        const itemBottom = itemTop + rect.height;

        if (scrollPosition >= itemTop && scrollPosition <= itemBottom) {
          const companyName = item.querySelector('h3')?.textContent || '';
          setActiveSection(companyName);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-container">
          <img 
            src="https://github.com/bilalmalik4321.png" 
            alt="Bilal Malik" 
            className="profile-picture"
          />
          <h1>Bilal Malik</h1>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/bilal-malik97/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a 
              href="https://github.com/bilalmalik4321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </header>
      
      <section className="timeline-section">
        <h2>Professional Experience</h2>
        <div className="timeline">
          <div className={`timeline-item ${activeSection === 'Zafin' ? 'active' : ''}`}>
            <div className="timeline-content">
              <a href="https://www.zafin.com" target="_blank" rel="noopener noreferrer" className="company-link">
                <CompanyLogo company="Zafin" />
                <h3>Zafin</h3>
              </a>
              <p className="role">Software Engineer</p>
              <p className="period">Present</p>
            </div>
          </div>
          <div className={`timeline-item ${activeSection === 'Palantir' ? 'active' : ''}`}>
            <div className="timeline-content">
              <a href="https://www.palantir.com" target="_blank" rel="noopener noreferrer" className="company-link">
                <CompanyLogo company="Palantir" />
                <h3>Palantir</h3>
              </a>
              <p className="role">Forward Deployed Engineer</p>
              <p className="period">2022 - 2023</p>
            </div>
          </div>
          <div className={`timeline-item ${activeSection === 'Zynga' ? 'active' : ''}`}>
            <div className="timeline-content">
              <a href="https://www.zynga.com" target="_blank" rel="noopener noreferrer" className="company-link">
                <CompanyLogo company="Zynga" />
                <h3>Zynga</h3>
              </a>
              <p className="role">Software Engineering Intern</p>
              <p className="period">2022</p>
            </div>
          </div>
          <div className={`timeline-item ${activeSection === 'IBM' ? 'active' : ''}`}>
            <div className="timeline-content">
              <a href="https://www.ibm.com" target="_blank" rel="noopener noreferrer" className="company-link">
                <CompanyLogo company="IBM" />
                <h3>IBM</h3>
              </a>
              <p className="role">Software Engineering Intern</p>
              <p className="period">2021</p>
            </div>
          </div>
          <div className={`timeline-item ${activeSection === 'WSIB Innovation' ? 'active' : ''}`}>
            <div className="timeline-content">
              <a href="https://www.wsib.ca" target="_blank" rel="noopener noreferrer" className="company-link">
                <CompanyLogo company="WSIB" />
                <h3>WSIB Innovation</h3>
              </a>
              <p className="role">Full Stack Developer</p>
              <p className="period">2019 - 2020</p>
            </div>
          </div>
        </div>
      </section>

      <section className="globe-section">
        <h2>Where I've Visited</h2>
        <Globe />
      </section>

      <Hobbies />
    </div>
  );
}

export default App;
