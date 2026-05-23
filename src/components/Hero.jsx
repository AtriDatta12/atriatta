import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import profileImage from '../assets/images/atridatta.png'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span>Atri Datta</span></h1>
          <p className="hero-subtitle">Full Stack Web Developer | IT Professional | Assistant Professor</p>
          <p className="hero-description">
            A passionate Full Stack Web Developer with 2 years of industry experience and freelance expertise.
            Currently serving as Assistant Professor and Web Administrator at Vasavi Engineering College.
            Specializing in web development, software project management, and institutional portal solutions.
          </p>

        </div>
        
        <div className="hero-image">
          <div className="image-placeholder">
            <img src={profileImage} alt="Atri Datta Profile" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <FaChevronDown />
      </div>
    </section>
  )
}

export default Hero
