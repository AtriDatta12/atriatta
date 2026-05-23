import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Atri Datta</h3>
            <p>Full Stack Web Developer | IT Professional | Assistant Professor & Web Administrator, SVEC</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social Media</h4>
            <div className="social-links">
              <a href="https://github.com/AtriDatta" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Atri Datta. All rights reserved.</p>
          <Link
            to="hero"
            className="scroll-top"
            spy={true}
            smooth={true}
            duration={500}
            title="Back to top"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
