import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Sri Vasavi Engineering College - Official Website",
      description: "Complete institutional website showcasing college information, programs, admissions, and news portal for Sri Vasavi Engineering College.",
      technologies: ["NextJS", "MySQL Server", "TypeScript", "JavaScript"],
      features: ["College Information Portal", "Admissions Module", "News & Events", "Department Details", "Contact Management"],
      role: "Web Administrator & Developer",
      
    },    
    {
      id: 2,
      title: "Learning Management System (LMS) Portal",
      description: "Comprehensive LMS platform for online course delivery, student assignments, and progress tracking with video lecture support.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      features: ["Course Management", "Video Lectures", "Assignment Submission", "Grading System", "Progress Tracking", "Discussion Forum"],
      role: "Full Stack Developer",
      
    },
    {
      id: 3,
      title: "Grievance Portal",
      description: "Dedicated portal for students and staff to lodge, track, and resolve complaints and grievances with automated ticketing system.",
      technologies: ["ReactJS", "ExpressJS", "MySQL", "CSS3"],
      features: ["Ticket Generation", "Status Tracking", "Auto Notifications", "Resolution Management", "Report Analytics"],
      role: "Backend & Frontend Developer",
      
    },
    {
      id: 4,
      title: "Course End Survey",
      description: "Automated survey management system for collecting course feedback and exit surveys from graduating students.",
      technologies: ["PHP", "MySQL", "JavaScript", "jQuery"],
      features: ["Survey Creation", "Student Feedback", "Data Analytics", "Report Generation", "PDF Export"],
      role: "Full Stack Developer",
      
    },
    {
      id: 4,
      title: "Exit Survey Management System",
      description: "Automated survey management system for collecting course feedback and exit surveys from graduating students.",
      technologies: ["ReactJs", "Node.js", "JavaScript", "jQuery","MySQL"],
      features: ["Survey Creation", "Student Feedback", "Data Analytics", "Report Generation", "PDF Export"],
      role: "Full Stack Developer",
      
    },
    {
      id: 5,
      title: "Graduation Day Management System",
      description: "Event management system for organizing graduation ceremonies including student registration, certificate generation, and seating arrangements.",
      technologies: ["PHP", "MySQL", "JavaScript", "PDF Generation"],
      features: ["Student Registration", "Certificate Generation", "Seating Arrangements", "Event Scheduling", "Digital Records"],
      role: "Developer",
      
    },
    {
      id: 6,
      title: "AICTE Idea Lab Platform",
      description: "Innovation platform for AICTE (AI & Cloud Technology Center) to showcase student and faculty ideas with incubation support.",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      features: ["Idea Submission", "Innovation Showcase", "Team Collaboration", "Mentor Assignments", "Project Tracking"],
      role: "Full Stack Developer",
      
    },
    {
      id: 7,
      title: "Exit Facilities Management System",
      description: "System for managing student exit procedures including clearance checklist, equipment return, and facility status verification.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      features: ["Clearance Checklist", "Equipment Tracking", "Department Verification", "Document Management", "Audit Trail"],
      role: "Backend Developer",
      
    },
    {
      id: 8,
      title: "Sri Vasavi Institute of Pharmaceutical Sciences Website",
      description: "Professional website for pharmaceutical sciences institute featuring programs, facilities, research, and alumni network.",
      technologies: ["ReactJs", "HTML/CSS", "JavaScript","TypeScript"],
      features: ["Program Information", "Facility Showcase", "Research Portal", "Alumni Network", "Student Portal"],
      role: "Web Developer & Administrator",
      
    },
    {
      id: 9,
      title: "Pritham Computers - CRUD Applications",
      description: "Multiple business applications developed for Pritham Computer including inventory, CRM, and business process automation solutions.",
      technologies: ["PHP", "Java", "Python", "MySQL", "React"],
      features: ["Inventory Management", "CRM System", "Process Automation", "Reporting Dashboard", "Multi-user Access"],
      role: "Full Stack Developer",
      
    },
    {
      id: 10,
      title: "Modern Tech Stack Applications",
      description: "Latest technology-based applications including responsive web apps, REST APIs, and cloud-based solutions.",
      technologies: ["React", "Node.js", "Python", "MongoDB", "Docker", "AWS"],
      features: ["Responsive Design", "REST APIs", "Real-time Updates", "Cloud Deployment", "Microservices"],
      role: "Senior Developer",
      links: {
        live: "http://www.ssvasvsasramam.org/"
      }
    },
    {
      id: 11,
      title: "Old Age Home Website",
      description: "Professional website for SRI SACHIDANANDA VENKATESWARA AVADHUTHA SAI VRUDHA SANKSHEMA ASRAMAM featuring information about the ashram, spiritual programs, events, and community engagement. Built with modern web technologies for optimal user experience and accessibility.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      links: {
        live: "http://www.ssvasvsasramam.org/"
      }
    },
    {
      id: 12,
      title: "ACE Club Portal",
      description: "Comprehensive portal for ACE Club (Association of Computer Engineers) showcasing club activities, events, member profiles, technical workshops, project exhibitions, and community engagement initiatives. Built with responsive design for seamless access across devices.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      links: {
        live: "https://srivasaviengg.ac.in/aceclub/"
      }
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Real-world applications and solutions</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.links && (
                  <div className="project-links">
                    {project.links.github && (
                      <a href={project.links.github} title="GitHub Repository" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} title="Live Demo" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
