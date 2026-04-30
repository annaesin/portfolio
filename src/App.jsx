//imports icons from library from 'react-icons/fa
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="dark-theme">
      <nav className="nav">
        <div className="nav-inner">
          <a className="home" href="#home">Annabel Esin</a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
             <div className="nav-icons">
             <a  href="mailto:annabelesin@gmail.com"><FaEnvelope size={20}/></a>
             <a  href="https://www.linkedin.com/in/annabelesin/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
             <a  href="https://www.github.com/annaesin" target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
          </div>
        </div>
      </nav>

      <main className="container">
        <section id="home" className="content hero">
          <h1 className="hi-intro">
            Hi, I'm Annabel<span className="typing-cursor">|</span>
          </h1>

          <p className="lead">
            I turn ideas into working software powered by caffeine and minimal sleep ☕
          </p>

          <div className="hero-actions">
            <a className="btn" href="#projects">View projects 🔎︎</a>
            <a className="btn-ghost" href="mailto:annabelesin@gmail.com">✉ Say hi</a>
          </div>
        </section>

        <section id="about" className="content">
          <div className="window-bar">
            <span className="window-title">about.exe</span>
            <span className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </span>
          </div>
          <p>I am a <strong>Computer Science new grad </strong> from <strong>Carleton University</strong> who enjoys building clean, reliable software and understanding how things work behind the scenes.
          </p>

          <p>
            Lately I’ve been building with <strong>React</strong>, <strong>C#</strong>, and <strong>ASP.NET</strong>, diving deeper into backend systems and databases. I also experiment with <strong>Python</strong> and <strong>AI tools</strong> whenever something sparks my curiosity.
          </p>
          <p>
            Fun fact: I minored in <strong>Psychology</strong>, which shapes how I think about usability, systems, and problem solving.
          </p>
          <p>
            This portfolio is a live project, so if something looks a little off, I’m probably rebuilding it. 😆
          </p>
          <p>
            Outside of coding, you’ll catch me at concerts, reading, or still trying to finish One Piece (seriously, will I ever finish it？) 
          </p>

          <p className="mt-4">
            📍 <strong>Based in Ottawa.</strong> Always happy to connect.
          </p>

        </section>

        <section id="skills" className="content">
          <div className="window-bar">
            <span className="window-title">skills.exe</span>
            <span className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </span>
          </div>

          <div className="skills-grid">
            <div className="skills-card">
              <h4>Languages</h4>
              <p>C# • JavaScript • C • Python • SQL • C++</p>
            </div>

            <div className="skills-card">
              <h4>Frameworks & Tools</h4>
              <p>React • ASP.NET • DITA XML • AEM • SQL Server • Git</p>
            </div>
          </div>
        </section>

        <section id="experience" className="content">
          <div className="window-bar">
            <span className="window-title">experience.exe</span>
            <span className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </span>
          </div>
          <h3>Work Experience</h3>
          <div className="experience-grid">
            <div className="experience-logo">
              <a href="https://www.ciena.com/" target="_blank" rel="noopener noreferrer">
                <img
                      className="avatar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbM5kEgYKYsYulN3CgHfEmjTsn2ph48enZA&s"
                      alt="Ciena logo"
                  />  
              </a>
            </div>
            <div className="experience-card">            
              <h4>Product Content Developer - Ciena </h4>
              <p className="muted">May 2025 - Dec 2025</p>
              <ul>
                <li>Developed structured documentation systems using <strong>DITA XML</strong> and <strong>AEM</strong></li>
                <li>Transformed product demos into <strong>AI ready</strong> technical guides </li>
                <li>Managed versioning and publishing workflows across multiple product teams </li>
                <li>Supported documentation for multiple enterprise software releases</li>
              </ul>
            </div>
            <div className="experience-logo">
              <a href="https://www.rcmp-grc.gc.ca/en" target="_blank" rel="noopener noreferrer">
                <img
                    className="avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Coat_of_arms_of_the_Royal_Canadian_Mounted_Police.svg/250px-Coat_of_arms_of_the_Royal_Canadian_Mounted_Police.svg.png"
                    alt="RCMP logo"
                />
              </a>  
            </div>
            <div className="experience-card">           
              <h4>Full Stack Developer - Royal Canadian Mounted Police</h4>
              <p className="muted">Sept 2023 - Aug 2024</p>
              <ul>
                <li>Built internal <strong>ASP.NET</strong> applications used by operational teams</li>
                <li>Designed and optimized <strong>SQL Server</strong> databases for secure data management</li>
                <li>Implemented backend logic in <strong>C#</strong> supporting production level workflows</li>
                <li>Improved usability using <strong>DevExpress</strong> components</li>
              </ul>
            </div>
          </div>
          <h3>Volunteer Experience</h3>
          <div className="experience-grid">
            <div className="experience-logo">
              <a href="https://unifiedsupportcentre.ca/" target="_blank" rel="noopener noreferrer">
                <img
                      className="avatar"
                      src="https://carleton.ca/webservices/wp-content/uploads/sites/3/logo-th.jpg"
                      alt="Carleton University Logo"   
                  />  
              </a>
            </div>

          <div className="experience-card"> 
              <h4>Unified Support Centre Volunteer - Carleton University Students' Association</h4>
              <p className="muted">Nov 2022 - Present</p>
              <ul>
                <li>Support a <strong>student-funded</strong> service providing on campus food assistance and evening safety support to the <strong>Carleton community</strong></li>
                <li>Assemble and distribute grocery hampers through the <strong>Food Centre</strong>, assisting students facing food insecurity</li>
                <li>Conduct safe walk escorts through <strong>Foot Patrol</strong>, accompanying students on and off campus to promote safety and well being</li>
              </ul>
          </div>
        </div>
        </section>

        <section id="projects" className="content">
          <div className="window-bar">
            <span className="window-title">projects.exe</span>
            <span className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </span>
          </div>
          <h3>Projects</h3>
          <div className="project-grid">
            <a 
              href="https://github.com/annaesin/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card">
              <div className="project-top">
                <a
                  href="https://github.com/annaesin/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                </a>
              </div>
              <h4>React Portfolio</h4>
              <p>A clean portfolio built with React + Vite, focused on responsive layout and UI polish.</p>
              <p className="tech-skills">React • JavaScript • Vite</p>
            </a>
            
            <a 
              href="https://github.com/annaesin/library-management-system"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              >
              <div className="project-top">
                <a
                  href="https://github.com/annaesin/library-management-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                </a>
              </div>
              <h4>Library Book Data Log System</h4>
              <p>A C client server system using TCP/IP sockets to track and log library records.</p>
              <p className="tech-skills">C • TCP/IP • Systems Programming</p>
            </a>

            <a 
              href="https://github.com/annaesin/scenario-efficiency-system"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card">
              <div className="project-top">
                <a
                  href="https://github.com/annaesin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                </a>
              </div>
              <h4>Scenario Efficiency System</h4>
              <p>A multithreaded C program using threads and mutexes to analyze character efficiency.</p>
              <p className="tech-skills">C • Multithreading • Concurrency</p>
            </a>
            <a 
              href="https://github.com/annaesin/scenario-efficiency-system"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card">
              <div className="project-top">
                <a
                  href="https://github.com/annaesin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                </a>
              </div>
              <h4>Nourivia (In Progress)</h4>
              <p>A platform that helps people find essential support services (food, hygiene products, and basic necessities) based on eligibility and location.</p>
              <p className="tech-skills">HTML • CSS • JavaScript • Node.js • Express</p>
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>
          Built and designed by <strong>Annabel Esin</strong>.
        </p>
        <p>
          All rights reserved. © {new Date().getFullYear()}
        </p>
      </footer>

    </div>
    
    
  );
}

