import React, { useState } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className="hero-section">
        <div className="background"><img src="./design.png" alt="background" /></div>
        <div className="headline">
            <center>
            <h1 id='heading'>Elevate your future With</h1>
            <h1 id='nxtLine'> Building Fox</h1>
            <p id='para'>At BUILDING FOX, we believe that great construction begins with great understanding. From the first conversation, our focus is on bringing your vision to life with clarity, care, and expert attention to detail. Whether you're starting something new or refining an existing idea, we're here to make the process smooth, transparent, and truly collaborative — no matter where in the world you are.</p>
            <button className="hero-button">Get Started</button>
            </center>
        </div>
        <div className="nav-container">
      <div className="nav-bar">
        <nav>
            <div className="logo">
            <h1>
            <a href="#"><img src="./logo_.png" alt="logo" width={'120px'} /></a>
          </h1>
            </div>

          {/* AnimatePresence allows exit animations */}
          <AnimatePresence>
            {isMobile && (
              <motion.ul
                className="nav-list mobile"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <li><a href="#home" onClick={() => setIsMobile(false)}>Home</a></li>
                <li><a href="#services" onClick={() => setIsMobile(false)}>Services</a></li>
                <li><a href="#about" onClick={() => setIsMobile(false)}>About</a></li>
                <li><a href="#contact" onClick={() => setIsMobile(false)}>Contact</a></li>
                <li><a href="#testimonial" onClick={() => setIsMobile(false)}>Testimonial</a></li>
                <li><a href="https://wa.me/94771070673" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobile(false)}><img src="./whatsapp.png" alt="WhatsApp"/></a></li>
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <ul className="nav-list desktop">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="https://wa.me/94771070673" target="_blank" rel="noopener noreferrer"><img src="./whatsapp.png" alt="WhatsApp"/></a>
            </li>
          </ul>

          {/* Hamburger */}
          <div className="hamburger" onClick={handleToggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Header;
