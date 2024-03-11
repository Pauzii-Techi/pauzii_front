import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/Heropage/HeroCarousel";
import About from "./components/AboutPage/About";

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <About />
    </>
  );
}

export default App;
