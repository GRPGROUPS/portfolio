import React, { useState } from "react";
import "./App.css";
import resumePdf from "./assets/resume.pdf"; // Importing the resume PDF
import aboutImage from "./assets/about.jpg"; // Importing the About image

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

  const handleDownloadResume = () => {
    window.location.href = resumePdf; // Triggering the download of the resume PDF
  };

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo" onClick={() => setMenuOpen(!menuOpen)}>
          <img src="L.jpg" alt="Logo" className="logo-image" />
        </h1>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="space"></div>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>Hello,</h2>
          <h2>My Name is</h2>
          <h2 className="highlight">V.K. GIRITHAR</h2>
          <button className="portfolio-button">PORTFOLIO</button>
        </div>
      </header>

      <div className="space"></div>

      {/* About Section */}
      <section id="about" className="about">
        <div className="photo-box">
          {/* Displaying the image */}
          <img src={aboutImage} alt="Girithar V.K." />
        </div>
        
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <p>
            Hi, I'm Girithar V.K.! 👋 I'm a passionate frontend developer and a third-year BSc Computer 
            Science student with a strong foundation in HTML, CSS, JavaScript, and React. I love building 
            interactive, user-friendly web experiences and continuously exploring new technologies to 
            enhance my skills.
          </p>
          <button className="resume-button" onClick={handleDownloadResume}>
            Download Resume
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="Skills" className="section">
        <h3>Skills</h3>
        <div className="skills-container">
          {/* Frontend Skills */}
          <div className="skill-card">
            
            
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript</h3>
              <h3>React.js</h3>
            
              
              <h3>Photo Shop </h3>
              <h3>canva</h3>
               {/* Add any other frontend skills you have */}
            
          </div>

          {/* Backend Skills */}
          <div className="skill-card">
        
            <h4>INTERNSHIP</h4>
            <h3>
            Internship For Younity</h3>
<p>I completed an internship at Younity in Sales and Marketing, where I gained experience in lead generation, sales pitching, and digital marketing. This helped me develop strong communication and analytical skills, which I apply to both technical and business projects.
              
            </p>
          </div>

          {/* Database Skills */}
          <div className="skill-card">
            <h4>EDUCATION</h4>
          
          <h2>Alphonsa Matriculation Hr Sec School</h2>
          <p>2021-2022</p>
          <p> Higher Secondary School </p>

          <h2>S.T.Hindu College</h2>
          <p>2022-2025</p>
          <p> BSc Computer Science</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="section">
        <h3>Projects</h3>
        <div className="project-container">

          <div className="project-card">
          <img src="rs.png" alt="college" />
            <h4>Restaraunt</h4>
            
            <button 
              className="project-button"
              onClick={() => window.open("https://restaurant-seven-cyan.vercel.app/", "_blank")}>
              Visit Project
            </button>
          </div>

          <div className="project-card">
          <img src="perfume.png" alt="college" />
            <h4>E-parfum</h4>
           
            <button 
              className="project-button"
              onClick={() => window.open("https://e-perfume-sams-projects-1db21b01.vercel.app/", "_blank")}>
              Visit Project
            </button>
          </div>

          <div className="project-card">
          <img src="logo.png" alt="college" />
            <h4>GRP GROUPS INFO PARK</h4>
            
            <button 
              className="project-button"
              onClick={() => window.open("https://grpgroups.in/", "_blank")}>
              Visit Project
            </button>
          </div>

          <div className="project-card">
            <img src="https://www.veethi.com/images/college/logo/logo_S.-T.-Hindu-College_7437.jpeg" alt="college" />
            <h4>College website</h4>
            
            <button 
              className="project-button"
              onClick={() => window.open("https://college-website-silk.vercel.app/", "_blank")}>
              Visit Project
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
      <h2>CONTACT <span>INFO</span></h2>
      <div className="contact-cards">
        <div className="contact-card">
        <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="Email Icon" />
          <h3>Phone</h3>
          <p>+91 9025493230</p>
        </div>
        <div className="contact-card">
        <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="Email Icon" />
          <h3>Email</h3>
          <p>giritharveeran@gmail.com</p>
        </div>
        <div className="contact-card">
        <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="Email Icon" />

          <h3>Address</h3>
          <p>20/97, Therimelvilai, Eathamozhi, Nagercoil</p>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="footer">
        <h2>V.K.GIRITHAR</h2>
        <h3>YOUR COMPLETE WEB SOLUTION</h3>
        <p>&copy; 2025 Girithar V.K. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
