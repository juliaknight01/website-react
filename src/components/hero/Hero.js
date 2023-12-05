import React from "react";
import "./HeroStyles.css";

import Video from "../../assets/fireworks.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <div className="main-header-div">
          <h1 className="main-header">Creating Unforgettable Memories</h1>
        </div>
        <form className="form"></form>
      </div>
    </div>
  );
}

export default Hero;
