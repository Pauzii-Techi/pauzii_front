import React, { useState } from "react";
import "./Navbar.css";
import pauzii_logo from "/images/pauzii_techi_logo.jpeg";

function Navbar() {
  const [mobile, setMobile] = useState(false);

  const handleClick = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className="navbar-container">
        <img className="nav-logo " src={pauzii_logo} alt="Pauzii Techi Logo" />
        <div
          className={`nav-items ${mobile ? "active" : ""}`}
          onClick={() => setMobile(false)} // Close nav-items when clicked
        >
          <a href="/home">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/courses">Courses</a>
          <a href="/projects">Projects</a>
          <a href="/let's_talk">Let's talk</a>
        </div>
        <div className="mobile" onClick={handleClick}>
          <i className={`fas ${mobile ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
