import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
import { Link } from 'react-scroll'; // For smooth scroll navigation
import './Footer.css'; // External CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer-container mt-4">
      <div className="footer-content ">
        {/* Left Section with Portfolio Links */}
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="/about" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <Link to="/projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Left Section with Contact Information */}
        <div className="footer-contact">
          <p><span className="font-bold">Email:</span> <a href="mailto:sumanadhikari0231@gmail.com" className="footer-contact-link no-underline text-white font-mono">sumanadhikari0231@gmail.com</a></p>
          <p><span className="font-bold">Phone Number:</span> <a href="tel:+198600089494" className="footer-contact-link no-underline text-white font-mono">+977 9863452660</a></p>
          <p><span className="font-bold">Location:</span> Kathmandu, Nepal</p>
        </div>

        {/* Right Section with Social Media Icons */}
        <div className="footer-social">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Suman Adhikari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
