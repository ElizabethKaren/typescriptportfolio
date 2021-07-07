import React from "react"

import Res from "../images/resume.png";

const Buttons = () => {
    return (
        <div id="buttons">
            <a href="https://github.com/ElizabethKaren" target="_blank"><i className="fa fa-github"></i></a>
            <a href={Res} download="Elizabeth Karen Resume" target="_blank"><i className="fa fa-file-word-o"></i></a>
            <a href="https://www.linkedin.com/in/elizabethkaren/" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="mailto:elizabeth.michael.karen@gmail.com?subject=Hello Elizabeth"><i className="fa fa-envelope"></i></a>
            <a href="https://elizabeth-michael-karen.medium.com/" target="_blank"><i className="fa fa-newspaper-o"></i></a>
      </div>
    )
}

export default Buttons