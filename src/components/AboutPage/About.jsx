import React from "react";
import "./About.css";
import aboutImage from "/images/hero_image_3.jpg";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-session">
          <h1>About Us</h1>
          <p>
            Welcome to Pauzii Techi (PT), a dynamic software and learning
            company based in the vibrant city of Osogbo, Osun State, Nigeria. At
            PT, we passionately navigate the vast landscape of software
            development, offering a diverse range of solutions across all
            software fields.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
        <div className="about-img">
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
