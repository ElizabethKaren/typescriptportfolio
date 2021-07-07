import React from 'react';

import Projects from "./Components/Projects";
import Buttons from "./Components/Buttons"

import './Render.css';

const Render = () => {
  return (
    <div className="render">
      <h1>Elizabeth Karen</h1>
      <Buttons />
      <div className="main-container">
        <Projects/>
      </div>
    </div>
  )
}

export default Render;
