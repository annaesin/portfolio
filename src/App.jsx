//imports icons from library from 'react-icons/fa
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa";
import "./App.css";
import React, { useState, useEffect } from 'react';
import naviBase from "./assets/navi/original.png";
import naviEyes from "./assets/navi/eyes.png";
import naviBlink from "./assets/navi/blink.png";
import naviClosed from "./assets/navi/closed.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showPopup , setShowPopup] = useState(false);
  const [showNaviMenu, setShowNaviMenu] = useState(false);
  const [naviTip, setNaviTip] = useState("Hi, I’m Navi 👋 Welcome to Annabel’s portfolio.");
  const [sectionState, setSectionState] = useState({
    about: "open",
    currently: "open",
    skills: "open",
    experience: "open",
    projects: "open"
  });

  const updateSection = (section, state) => {
    setSectionState(prev => ({
      ...prev,
      [section]: state
    }));
  };

  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = {
    backend: {
      title: "Backend Development",
      items: "C# • ASP.NET • REST APIs",
      desc: "Building APIs, backend logic, and server-side applications."
    },

    learning: {
      title: "Currently Learning",
      items: "Python • Node.js • Express • PostgreSQL • AWS • SAP",
      desc: "Strengthening my backend skills and exploring cloud and enterprise development."
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
      { id: "home", tip: "hey, i'm Navi 👋🏾 Annabel's unofficial tour guide. I'll pop in occasionally... promise I won't be annoying." },
      { id: "about", tip: "okay, here's the lore." },
      { id: "currently", tip: "here's what I'm up to right now." },
      { id: "skills", tip: "the Learning folder is permanently under construction." },
      { id: "experience", tip: "the professional lore. she does in fact have receipts." },
      { id: "projects", tip: "okayyy, now we're getting to the good stuff." },
      { id: "footer", tip: "you made it to the end ♡ thanks for snooping around.😊" }
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
              <h2>hey, I'm Navi 👋🏾</h2>
              <p>
                short for Navigator, because apparently Annabel thought her
                portfolio needed a tour guide 😭
              </p>

              <p>
                i'll pop in here and there. promise i won't be annoying.
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
          <div className="hero-copy">
            <p className="hero-eyebrow">hello, world 👋🏾</p>

            <h1 className="hi-intro">
              Hi, I'm <span>Annabel.</span>
              <span className="typing-cursor">|</span>
            </h1>

            <p className="lead">
              Software developer with a soft spot for backend, good design, and trying new things.
            </p>

            <p className="hero-subtext">
              I enjoy figuring out how things work and building practical, user centered software across backend and full stack development.
            </p>

            <p className="hero-meta">
              📍 Ottawa, ON &nbsp;•&nbsp; 🎓 Computer Science + Psychology
            </p>

            <div className="hero-actions">
              <a className="btn" href="#projects">View projects</a>

              <a
                className="btn-secondary"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my resume
              </a>

              <a className="btn-ghost" href="mailto:annabelesin@gmail.com">
                <FaEnvelope /> Say hi
              </a>
            </div>
          </div>

          <div className="hero-navi">
            <img src={naviBlink} alt="Navi, an avatar illustrated by Annabel" />
            <span className="handmade-note">drawn by me ♡</span>
          </div>
        </section>

        <section id="about" className="content">
          <div className="window-bar">
            <span className="window-title">about.exe</span>
            <span className="window-dots">
              <span
                className="dot red"
                title="Close"
                onClick={() => updateSection("about", "closed")}
              />

              <span
                className="dot yellow"
                title="Minimize"
                onClick={() => updateSection("about", "minimized")}
              />

              <span
                className="dot green"
                title="Restore"
                onClick={() => updateSection("about", "open")}
              />
            </span>
          </div>

          {/* Open */}
            {sectionState.about === "open" && (
              <>
                <p>
                  I'm a <strong>Computer Science graduate</strong> from{" "}
                  <strong>Carleton University</strong> with a minor in{" "}
                  <strong>Psychology</strong>. I've always been curious about how things
                  work, which is probably why I ended up in tech. I enjoy solving problems,
                  building things, and learning as I go.
                </p>

                <p>
                  I'm especially interested in{" "}
                  <strong>backend and full stack development</strong>, and lately I've
                  been working on new projects and exploring different areas of tech
                  that catch my interest.
                </p>

                <p>
                  Outside of coding, I'm probably at the <strong>gym</strong>, at a{" "}
                  <strong>concert</strong>, reading, playing my Switch, or still trying
                  to catch up on <strong>One Piece</strong> 😭
                </p>

                 <p className="about-note">
                  I’m always learning or trying something new, and this portfolio changes with me. So if something looks different next time you’re here... I was probably messing with it ♡
                </p>

                <p className="mt-4">
                  📍 <strong>Based in Ottawa.</strong> Always happy to connect.
                </p>
              </>
            )}
            {sectionState.about === "minimized" && (
              <div className="section-summary">
                <strong>🎓 About</strong> •
                Computer Science Graduate • RCMP • Ciena • Minor in Psychology
              </div>
            )}

            {sectionState.about === "closed" && (
              <div className="section-summary">
                📁 about.exe <span style={{ opacity: 0.7 }}>Window collapsed • Click 🟢 to restore</span>
              </div>
            )}
        </section>

        <section id="currently" className="content currently-window">
          <div className="window-bar">
            <span className="window-title">currently.exe</span>

            <span className="window-dots">
              <span
                className="dot red"
                title="Close"
                onClick={() => updateSection("currently", "closed")}
              />
              <span
                className="dot yellow"
                title="Minimize"
                onClick={() => updateSection("currently", "minimized")}
              />
              <span
                className="dot green"
                title="Restore"
                onClick={() => updateSection("currently", "open")}
              />
            </span>
          </div>

          {sectionState.currently === "open" && (
            <div className="currently-grid">

              <div className="currently-card">
                <span className="currently-label">💻 BUILDING</span>
                <p>Building my backend skills + working on my next project</p>
              </div>

              <div className="currently-card">
                <span className="currently-label">📚 LEARNING</span>
                <p>Python • AWS • SAP</p>
              </div>

              <div className="currently-card">
                <span className="currently-label">📖 READING</span>
                <p>Yinka, Where Is Your Husband?</p>
              </div>

              <div className="currently-card">
                <span className="currently-label">🎧 ON REPEAT</span>
                <p>Hadestown + EPIC 🎭</p>
                <small>Broadway musicals, always</small>
              </div>

            </div>
          )}       

          {sectionState.currently === "minimized" && (
            <div className="section-summary">
              <strong>✨ Currently</strong> • Python • AWS • SAP • reading • creating
            </div>
          )}

          {sectionState.currently === "closed" && (
            <div className="section-summary">
              📁 currently.exe{" "}
              <span style={{ opacity: 0.7 }}>
                Window collapsed • Click 🟢 to restore
              </span>
            </div>
          )}
        </section>

        <section id="skills" className="content">
          <div className="window-bar">
            <span className="window-title">skills.exe</span>
            <span className="window-dots">
              <span
                className="dot red"
                title="Close"
                onClick={() => updateSection("skills", "closed")}
              />

              <span
                className="dot yellow"
                title="Minimize"
                onClick={() => updateSection("skills", "minimized")}
              />

              <span
                className="dot green"
                title="Restore"
                onClick={() => updateSection("skills", "open")}
              />
            </span>
          </div>
          {/* Open */}
          {sectionState.skills === "open" && (
            <>
              <p className="desktop-hint">
                Click a folder to inspect my dev toolkit.
              </p>

              <div className="desktop-folders">
                <button
                  onClick={() => setSelectedSkill("backend")}
                  className="folder-icon"
                >
                  📁
                  <span>Backend</span>
                </button>

                <button
                  onClick={() => setSelectedSkill("frontend")}
                  className="folder-icon"
                >
                  📁
                  <span>Frontend</span>
                </button>

                <button
                  onClick={() => setSelectedSkill("databases")}
                  className="folder-icon"
                >
                  📁
                  <span>Databases</span>
                </button>

                <button
                  onClick={() => setSelectedSkill("tools")}
                  className="folder-icon"
                >
                  📁
                  <span>Tools</span>
                </button>

                <button
                  onClick={() => setSelectedSkill("learning")}
                  className="folder-icon"
                >
                  📁
                  <span>Learning</span>
                </button>
              </div>

              {selectedSkill && (
                <div className="skill-popup">
                  <button
                    className="skill-close"
                    onClick={() => setSelectedSkill(null)}
                  >
                    ×
                  </button>

                  <h4>{skills[selectedSkill].title}</h4>
                  <p>{skills[selectedSkill].desc}</p>
                  <p className="skill-items">
                    {skills[selectedSkill].items}
                  </p>
                </div>
              )}
            </>
          )}
            {sectionState.skills === "minimized" && (
              <div className="section-summary">
                <strong> ⚙ Tech Stack</strong> •
                  React • C# • ASP.NET • SQL • Git • +8 more
              </div>
            )}

            {sectionState.skills === "closed" && (
              <div className="section-summary">
                📁 skills.exe <span style={{ opacity: 0.7 }}>Window collapsed • Click 🟢 to restore</span>
              </div>
            )}
        </section>

        <section id="experience" className="content">
          <div className="window-bar">
            <span className="window-title">experience.exe</span>
            <span className="window-dots">
              <span
                className="dot red"
                title="Close"
                onClick={() => updateSection("experience", "closed")}
              />

              <span
                className="dot yellow"
                title="Minimize"
                onClick={() => updateSection("experience", "minimized")}
              />

              <span
                className="dot green"
                title="Restore"
                onClick={() => updateSection("experience", "open")}
              />
            </span>
          </div>
          {/* Open */}
            {sectionState.experience === "open" && (
              <>
                <h3>Work Experience</h3>
                <div className="experience-grid">
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
                      <li>Transformed product demos into <strong>AI-ready</strong> technical guides </li>
                      <li>Managed versioning and publishing workflows across multiple product teams </li>
                      <li>Supported documentation for multiple enterprise software releases</li>
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
                      <li>Support a student funded service providing on campus food assistance and evening safety support to the Carleton community</li>
                      <li>Assemble and distribute grocery hampers through the <strong>Food Centre</strong>, assisting students facing food insecurity</li>
                      <li>Conduct safe walk escorts through <strong>Foot Patrol</strong>, accompanying students on and off campus to promote safety and well being</li>
                    </ul>
                </div>
              </div>
              </>
            )}
            {sectionState.experience === "minimized" && (
              <div className="section-summary">
                <strong>💼 Experience</strong> •
                  RCMP • Ciena • Unified Support Centre
              </div>
            )}

            {sectionState.experience === "closed" && (
              <div className="section-summary">
                📁 experience.exe <span style={{ opacity: 0.7 }}>Window collapsed •Click 🟢 to restore</span>
              </div>
            )}
        </section>

        <section id="projects" className="content">
          <div className="window-bar">
            <span className="window-title">projects.exe</span>
            <span className="window-dots">
              <span className="dot red"  title="Close" onClick={() => updateSection("projects", "closed")} />
              <span className="dot yellow" title="Minimize" onClick={() => updateSection("projects", "minimized")} />
              <span className="dot green" title="Restore" onClick={() => updateSection("projects", "open")} />
            </span>
          </div>
          {/* Open */}
            {sectionState.projects === "open" && (
              <>
                <h3>Projects</h3>
                <div className="project-grid">
                  <a 
                    href="https://github.com/AnnaEsin/KitchenAid-Hackathon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card">
                    
                    <div className="project-top">
                      <a
                        href="https://github.com/AnnaEsin/KitchenAid-Hackathon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                      </a>
                    </div>

                    <h4>KitchenAid - AI Recipe Assistant</h4>

                    <p>
                      An AI-powered recipe assistant built during cuHacking 7 that generates personalised recipes from available ingredients using Gemini AI and supports voice-guided interaction through ElevenLabs.
                    </p>

                    <p className="tech-skills">
                      Next.js • React • Gemini API • MongoDB • ElevenLabs • Pexels API
                    </p>
                  </a>
                  {/* <a 
                    href=""
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
                    <h4>🚧 Featured Project: Nourivia</h4>
                    <p>A platform that helps people discover food assistance, hygiene support, and other essential community resources based on location and eligibility.</p>
                    <p><strong>Status:</strong> Currently building</p>
                    <ul>
                      <li>Planning the data model</li>
                      <li>Developing the backend API</li>
                      <li>Building the frontend UI</li>
                    </ul>
                    <p className="tech-skills">React• Node.js • Express</p>
                  </a> */}
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
              </>
            )}
          {/* Minimized */}
            {sectionState.projects === "minimized" && (
              <div className="section-summary">
                <strong>⭐ Projects </strong> •
                 KitchenAid • +2 more
              </div>
            )}
          {/* Closed */}
            {sectionState.projects === "closed" && (
              <div className="section-summary">
                📁 projects.exe <span style={{ opacity: 0.7 }}>Window collapsed • Click 🟢 to restore</span>
              </div>
            )}
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
          <img src={naviClosed} alt="Navi" />
          
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

