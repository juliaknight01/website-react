import React from "react";
import "./ImgCarouselStyles.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import People from "../../assets/people.jpg";
import Fest from "../../assets/fest.jpg";
import Party from "../../assets/party.jpg";

function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={People} alt="/" />
        </div>
        <div>
          <img src={Fest} alt="/" />
        </div>
        <div>
          <img src={Party} alt="/" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;