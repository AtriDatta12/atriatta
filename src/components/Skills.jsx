import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPhp, FaPython, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa'
import './Skills.css'

function Skills() {
  const skillsData = [
    {
      category: "Frontend Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: FaReact, color: "#61dafb" },
        { name: "Next.js", icon: FaReact, color: "#000000" },
        { name: "Vue.js", icon: FaReact, color: "#4fc08d" },
        { name: "Angular", icon: FaReact, color: "#dd0031" },
        { name: "Svelte", icon: FaReact, color: "#ff3e00" }
      ]
    },
    {
      category: "UI & Styling",
      skills: [
        { name: "Tailwind CSS", icon: FaCss3Alt, color: "#06b6d4" },
        { name: "Bootstrap", icon: FaCss3Alt, color: "#7952b3" },
        { name: "Material UI", icon: FaCss3Alt, color: "#007bff" },
        { name: "Shadcn UI", icon: FaCss3Alt, color: "#000000" }
      ]
    },
    {
      category: "Frontend Languages & Tools",
      skills: [
        { name: "JavaScript (ES6+)", icon: FaJs, color: "#f7df1e" },
        { name: "TypeScript", icon: FaJs, color: "#3178c6" },
        { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#563d7c" },
        { name: "Vite", icon: FaJs, color: "#646cff" },
        { name: "Webpack", icon: FaJs, color: "#1c78c0" }
      ]
    },
    {
      category: "Backend Frameworks",
      skills: [
        { name: "Node.js", icon: FaNode, color: "#68a063" },
        { name: "Express.js", icon: FaNode, color: "#90c53f" },
        { name: "NestJS", icon: FaNode, color: "#e0234e" },
        { name: "Django", icon: FaPython, color: "#092e20" },
        { name: "FastAPI", icon: FaPython, color: "#009688" },
        { name: "Spring Boot", icon: FaNode, color: "#6db33f" }
      ]
    },
    {
      category: "Backend Languages",
      skills: [
        { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
        { name: "Python", icon: FaPython, color: "#3776ab" },
        { name: "PHP", icon: FaPhp, color: "#777bb4" },
        { name: "Java", icon: FaNode, color: "#007396" },
        { name: "SQL", icon: FaDatabase, color: "#336791" },
        { name: "C", icon: FaNode, color: "#a8b9cc" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", icon: FaDatabase, color: "#336791" },
        { name: "MySQL", icon: FaDatabase, color: "#00758f" },
        { name: "MongoDB", icon: FaDatabase, color: "#13aa52" },
        { name: "Redis", icon: FaDatabase, color: "#dc382d" },
        { name: "Firebase", icon: FaDatabase, color: "#ffa000" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Docker", icon: FaDocker, color: "#2496ed" },
        { name: "Kubernetes", icon: FaDocker, color: "#326ce5" },
        { name: "AWS", icon: FaAws, color: "#ff9900" },
        { name: "Google Cloud", icon: FaAws, color: "#4285f4" },
        { name: "Microsoft Azure", icon: FaAws, color: "#0078d4" }
      ]
    },
    {
      category: "Trending Technologies",
      skills: [
        { name: "Server Components", icon: FaReact, color: "#00d9ff" },
        { name: "Progressive Web Apps (PWA)", icon: FaReact, color: "#5a67d8" },
        { name: "Micro Frontends", icon: FaReact, color: "#00d9ff" },
        { name: "GraphQL APIs", icon: FaNode, color: "#e10098" },
        { name: "Serverless Architecture", icon: FaAws, color: "#ff9900" },
        { name: "Microservices", icon: FaDocker, color: "#2496ed" },
        { name: "AI-integrated UI", icon: FaJs, color: "#00d9ff" },
        { name: "Edge Computing", icon: FaAws, color: "#ff9900" },
        { name: "Event-driven Architecture", icon: FaNode, color: "#68a063" },
        { name: "WebAssembly", icon: FaJs, color: "#654ff0" }
      ]
    }
  ]

  const additionalSkills = [
    "Web Development",
    "Software Project Management",
    "Database Management",
    "Server Administration",
    "Academic Portal Solutions",
    "Student Information Systems",
    "Web Hosting & Server Management",
    "API Integration",
    "Responsive Web Design",
    "Freelance Applications",
    "Institutional Web Management",
    "Real-world Problem Solving",
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Deep Learning",
    "Cloud Computing",
    "Git & Version Control",
    "GitHub",
    "Motion UI & 3D Web"
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={i} className="skill-item">
                      <IconComponent style={{ color: skill.color }} className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Additional Expertise</h3>
          <div className="skills-tags">
            {additionalSkills.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
