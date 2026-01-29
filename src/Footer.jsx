import React from 'react';
import './Footer.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://github.com/OmniDAI/note" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/company/109901279/admin/dashboard/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; 2024 OmniDAI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
