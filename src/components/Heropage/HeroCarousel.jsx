import React, { useState } from "react";
import "./HeroCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "images/hero_image_1.jpg",
  "/images/hero_image_2.jpg",
  "/images/hero_image_3.jpg",
  "/images/hero_image_4.jpg",
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the speed of autoplay in milliseconds (e.g., 3000 = 3 seconds)
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="carousel-content">
              <h1 className="hero-title">
                "Empowering Futures: Crafting Innovative Solutions and Nurturing
                Tech Talents"
              </h1>
              <p className="fadeIn">
                We believe in empowering individuals to shape their future
                through innovative solutions, leveraging technology as a
                powerful tool for positive change. Our dedication extends beyond
                problem-solving; we are passionate about nurturing the next
                generation of tech talents, providing them with the skills and
                guidance needed to thrive in an ever-evolving digital world.
                With a focus on creativity, innovation, and mentorship, we
                aspire to contribute to a future where technology becomes an
                enabler for progress, and individuals are equipped to make
                meaningful contributions to the technological landscape.
              </p>
              <button className="btn">Let's talk</button>
            </div>
          </div>
        ))}
      </Slider>
      <p className="current-slide">Current Slide: {currentSlide + 1}</p>
    </div>
  );
}

export default HeroCarousel;
