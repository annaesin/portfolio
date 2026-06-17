//imports icons from library from 'react-icons/fa
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa";
import "./App.css";
import React, { useState, useEffect } from 'react';
import naviBase from "./assets/navi/original.png";
import naviEyes from "./assets/navi/eyes.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showPopup , setShowPopup] = useState(false);
  const [showNaviMenu, setShowNaviMenu] = useState(false);
  const [naviTip, setNaviTip] = useState("Hi, I’m Navi 👋 Welcome to Annabel’s portfolio.");

  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = {
    backend: {
      title: "Backend Development",
      items: "C# • ASP.NET • REST APIs • Node.js • Express",
      desc: "Building APIs, backend logic, and server-side applications."
    },
    frontend: {
      title: "Frontend Development",
      items: "React • JavaScript • HTML • CSS",
      desc: "Creating responsive and user-friendly web interfaces."
    },
    databases: {
      title: "Data & Databases",
      items: "SQL Server • SQLite • Database Design",
      desc: "Designing, querying, and managing relational databases."
    },
    tools: {
      title: "Tools & Workflow",
      items: "Git • GitHub • DevExpress • AEM • DITA XML",
      desc: "Tools used for development, documentation, and collaboration."
    },
    learning: {
      title: "Currently Learning",
      items: "Docker • Azure • CI/CD • Python",
      desc: "Expanding my cloud, automation, and deployment knowledge."
    }
  };

  //navi pop up and scroll tips
  useEffect(() => {
    setShowPopup(true);
    const handleScroll = () => {
    const sections = [
      { id: "home", tip: "Hi, I’m Navi 👋 Welcome to Annabel’s portfolio." },
      { id: "about", tip: "Fun fact: Annabel studied Psychology, so she thinks a lot about users and usability." },
      { id: "skills", tip: "Here’s the tech stack Annabel has been building with lately." },
      { id: "experience", tip: "This is where Annabel worked on real systems at RCMP and Ciena." },
      { id: "projects", tip: "Projects are the good stuff. Start with Nourivia 👀" },
    ];

    for (const section of sections) {
      const element = document.getElementById(section.id);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          setNaviTip(section.tip);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>

      {/* Navi Pop-up */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="navi-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => {setShowPopup(false);}}>
              ×
            </button>

            <div className="navi-image-wrap">
              <img className="navi-base" src={naviBase} alt="Navi portfolio mascot" />
              <img className="navi-eyes" src={naviEyes} alt="" />
            </div>

            <div className="navi-popup-text">
              <h2>Hi, I’m Navi 👋</h2>
              <p>
                Welcome to Annabel’s portfolio. I’m here to help you explore her
                projects, experience, and resume.
              </p>

              <div className="popup-actions">
                <a href="#projects" onClick={() => setShowPopup(false)}>View Projects</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                <a href="mailto:annabelesin@gmail.com">Contact</a>
              </div>
            </div>
          </div>
        </div>
      )}
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
          
         <p className="hero-meta">
            🎓 Computer Science Graduate | 💼 2 Co-op Experiences | 📍 Ottawa, ON
          </p>

          <p className="lead">
            Software developer focused on backend and full-stack development.
          </p>

          <p className="hero-subtext">
            I build practical, user-centered applications with C#, ASP.NET, SQL, React, and modern web technologies.
          </p>               

          <div className="hero-actions">
            <a className="btn" href="#projects">View projects 🔎︎</a>
            <a className="btn" href= "/resume.pdf" target="_blank" rel="noopener noreferrer">View My Resume 💼</a>
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
          <p>I'm a <strong>Computer Science graduate </strong> from <strong>Carleton University</strong> who enjoys building software that solves practical problems. </p>
          <p>
            I have experience developing <strong>ASP.NET</strong> applications, working with <strong>SQL Server</strong> databases,
            and implementing backend functionality in <strong>C#</strong>. Through internships at the <strong>RCMP</strong> and <strong>Ciena</strong>,
            I've contributed to internal applications, documentation systems, and tools used across large organizations.           
          </p>
          <p>
            Fun fact: I minored in <strong>Psychology</strong>, which influences how I think about usability, problem solving, and designing technology with people in mind.
          </p>
          <p>
            This portfolio is a live project, so if something looks a little off, I’m probably rebuilding it. 😆
          </p>
          <p>
            Outside of coding, you’ll usually find me at concerts, reading, gaming, or still trying to finish One Piece (seriously, will I ever catch up?).
          </p>

          <p className="mt-4">
            📍 <strong>Based in Ottawa.</strong> Always happy to connect.
          </p>

        </section>

        <section id="skills" className="content">
          <div className="window-bar">
            <span className="window-title">toolkit.exe</span>
            <span className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </span>
          </div>

          {/* <div className="skills-grid">
            <div className="skills-card">
              <h4>Backend</h4>
              <p>C# • ASP.NET • REST APIs • Node.js • Express</p>
            </div>

            <div className="skills-card">
              <h4>Frontend</h4>
              <p>React • JavaScript • HTML • CSS</p>
            </div>

            <div className="skills-card">
              <h4>Databases</h4>
              <p> SQL Server • SQLite • Database Design</p>
            </div>
            <div className="skills-card">
              <h4>Tools</h4>
              <p> Git • GitHub • DevExpress • AEM • DITA XML</p>
            </div>
            <div className="skills-card">
              <h4>Currently Learning</h4>
              <p> Docker • Azure • CI/CD </p>
            </div>
          </div> */}
          <p className="desktop-hint">Click a folder to inspect my dev toolkit.</p>

            <div className="desktop-folders">
              <button onClick={() => setSelectedSkill("backend")} className="folder-icon">📁<span>Backend</span></button>
              <button onClick={() => setSelectedSkill("frontend")} className="folder-icon">📁<span>Frontend</span></button>
              <button onClick={() => setSelectedSkill("databases")} className="folder-icon">📁<span>Databases</span></button>
              <button onClick={() => setSelectedSkill("tools")} className="folder-icon">📁<span>Tools</span></button>
              <button onClick={() => setSelectedSkill("learning")} className="folder-icon">📁<span>Learning</span></button>
            </div>

            {selectedSkill && (
              <div className="skill-popup">
                <button className="skill-close" onClick={() => setSelectedSkill(null)}>×</button>
                <h4>{skills[selectedSkill].title}</h4>
                <p>{skills[selectedSkill].desc}</p>
                <p className="skill-items">{skills[selectedSkill].items}</p>
              </div>
            )}
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
              <h4>Software Developer Intern - Royal Canadian Mounted Police</h4>
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
              <h4>Nourivia 🚧</h4>
              <p>Finding community support shouldn't require digging through dozens of websites.</p>
              <p>Nourivia helps users discover food assistance programs, hygiene support services, and other essential community resources based on location and eligibility.</p>
              <p className="tech-skills">React• Node.js • Express</p>
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
              <p>A client-server library management system built in C using TCP/IP sockets for communication and record management.</p>
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
              <p>A multithreaded C application that analyzes character efficiency using threads and mutex synchronization.</p>
              <p className="tech-skills">C • Multithreading • Concurrency</p>
            </a>

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
              <p>A personal portfolio built with React and Vite to showcase projects, experience, and technical skills.</p>
              <p className="tech-skills">React • JavaScript • Vite</p>
            </a>

          </div>
        </section>

      </main>

      <footer className="footer">
        <p>
          Built and designed by <strong>Annabel Esin</strong>.
        </p>
        <p>
          Built with React, coffee, and a lot of Google searches ☕
        </p>
      </footer>

      {/* Navi bottom */}
      {!showPopup && (
        <div
          className="navi-float"
          onClick={() => setShowNaviMenu(!showNaviMenu)}
        >
          <img src={naviBase} alt="Navi" />
          
        </div>
      )}

      {/* Navi bottom menu */}
      {!showPopup && showNaviMenu && (
        <div className="navi-menu">
          <button className="popup-close" onClick={() => setShowNaviMenu(!showNaviMenu)}>
              ×
          </button>
          <h4>💬 Navi says:</h4>
          <p>{naviTip}</p>

          <a href="#projects">📁 Projects</a>
          <a href="#experience">💼 Experience</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">📄 Resume</a>
          <a href="mailto:annabelesin@gmail.com"> ✉ Contact
          </a>
        </div>
      )}
    </div>
    
    
  );
}

