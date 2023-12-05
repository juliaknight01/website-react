import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h3>TWILIGHTEVENTS</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
          <div className="social"></div>
          <div className="bottom"></div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>News</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
