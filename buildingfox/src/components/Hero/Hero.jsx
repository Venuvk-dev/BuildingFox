import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <>
    
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-image">
                    <img src="./design.png" alt="Hero" />
                </div>
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
                    <h1>Building Fox</h1>
                    <p>Your trusted partner in construction.</p>
                    <button className="hero-button">Get Started</button>
                </div>
        </div>
    </>
  )
}

export default Hero