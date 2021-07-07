import React from 'react';

import Projects from "./Components/Projects";

import Res from "./images/resume.png";

import './Render.css';

const Render = () => {
  return (
    <div className="render">
      <h1>Elizabeth Karen</h1>
      <div id="buttons">
        <a href="https://github.com/ElizabethKaren" target="_blank"><i className="fa fa-github" style={{ fontSize: 36 }}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href={Res} download="Elizabeth Karen Resume" target="_blank"><i className="fa fa-file-word-o" style={{ fontSize: 36 }}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/elizabethkaren/" target="_blank"><i className="fa fa-linkedin" style={{ fontSize: 36 }}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="mailto:elizabeth.michael.karen@gmail.com?subject=Hello Elizabeth"><i className="fa fa-envelope" style={{ fontSize: 36 }}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://elizabeth-michael-karen.medium.com/" target="_blank"><i className="fa fa-newspaper-o" style={{ fontSize: 36 }}></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      {/* <h4>Software Engineer with experience in JavaScript and Ruby on Rails I'd love to hear from you!</h4> */}
      <div className="main-container">
        <Projects/>
      </div>
    </div>
  )
}

export default Render;
