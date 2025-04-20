import React from "react";
import { image } from "../data/data.js"; 

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I enjoy building user interfaces and solving problems with code.</p>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
