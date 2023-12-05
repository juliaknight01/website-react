// Navbar.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./NavbarStyles.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>TWILIGHT EVENTS.</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="destinations" smooth={true} duration={500}>
          <li>Events</li>
        </Link>
        <Link to="views" smooth={true} duration={500}>
          <li>Tour</li>
        </Link>
        <Link to="search" smooth={true} duration={500}>
          <li>Book</li>
        </Link>
        <Link to="carousel" smooth={true} duration={500}>
          <li>Views</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="destinations" smooth={true} duration={500}>
            <li>Events</li>
          </Link>
          <Link to="carousel" smooth={true} duration={500}>
            <li>Tour</li>
          </Link>
          <Link to="search" smooth={true} duration={500}>
            <li>Book</li>
          </Link>
          <Link to="views" smooth={true} duration={500}>
            <li>Views</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="mobile-menu-icons"></div>
          <button>Search</button>
          <button>Account</button>

          <div className="social-icons">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
