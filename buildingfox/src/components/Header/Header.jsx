import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-bar">
          <nav>
            <h1>
              <a href="#">
                <img src="./logo.png" alt="logo" width={"120px"} />
              </a>
            </h1>

            <ul className={"nav-list" + (isMobile ? " mobile" : "")}>
              <li>
                <a href="#home" onClick={() => setIsMobile(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsMobile(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMobile(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMobile(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#testimonial" onClick={() => setIsMobile(false)}>
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94771070673"
                  target="_blank"
                  onClick={() => setIsMobile(false)}
                >
                  <img src="./whatsapp.png" />{" "}
                </a>
              </li>
            </ul>

            {/* Hamburger Menu Icon */}
            <div className="hamburger" onClick={handleToggle}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
