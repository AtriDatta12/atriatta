import React from 'react'
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa'
import profileImage from '../assets/images/atridatta.png'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My journey as a developer and educator</p>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate Full Stack Web Developer, AI Enthusiast, and IT Professional with 2 years of industry experience combined with freelance project expertise. Currently, I work as an Assistant Professor and Web Administrator at Vasavi Engineering College.
            </p>

            <p>
              My technical expertise spans full stack web development, software project management, frontend and backend technologies, database management, server administration, Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning. I have hands-on experience in developing and managing academic web portals, student information systems, and real-world freelance applications.
            </p>

            <p>
              I am proficient in multiple programming languages including Java, Python, PHP, JavaScript, SQL, and C, enabling me to design scalable and efficient software solutions across diverse domains. My strong foundation in programming, combined with modern development practices, helps me build secure, user-friendly, and performance-oriented applications.
            </p>

            <p>
              Beyond development, I am deeply passionate about teaching and mentoring students. As an Assistant Professor, I guide students through their technical journey by helping them understand not only the "how" but also the "why" behind modern technologies and software engineering practices. My role combines practical development experience with educational excellence, creating a bridge between academics and industry requirements.
            </p>

            <p>
              I am highly enthusiastic about emerging frontend and backend technologies and continuously explore modern frameworks, libraries, AI tools, and cloud technologies to stay aligned with industry trends. My commitment to continuous learning allows me to develop innovative solutions while keeping students and teams updated with the latest advancements in technology.
            </p>

            <p>
              My areas of interest include: Full Stack Web Development, Artificial Intelligence (AI), Machine Learning (ML), Deep Learning, Cloud Computing, Database Systems, Server Administration, Software Engineering, Academic Technology Solutions, and Freelance Web Applications.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <FaBriefcase className="highlight-icon" />
                <h3>Industry Experience</h3>
                <p>2+ years in IT & Web Development</p>
              </div>
              <div className="highlight-item">
                <FaGraduationCap className="highlight-icon" />
                <h3>Academic Role</h3>
                <p>Assistant Professor & Web Administrator at SVEC</p>
              </div>
              <div className="highlight-item">
                <FaCode className="highlight-icon" />
                <h3>Expertise Areas</h3>
                <p>Full Stack & Portal Management</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="image-placeholder-about">
                <img src={profileImage} alt="Atri Datta Profile" className="about-profile-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
