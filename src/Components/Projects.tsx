import React from 'react';

import SetPatrolPic from '../images/cameraSearch.png'
import GroceryAppPic from '../images/grocery.png'
import MovieAwardsPic from "../images/movie.png"

const Projects = () => {
  return (
    <div className="Projects">
        <div className="container-each">
            <h3>Set Patrol</h3>
            <a href="https://github.com/Chase-42/SetPatrol" target="_blank"><img src={SetPatrolPic} alt='set patrol'  /></a>
            <br/>
            <div className="links">
                <a href="https://github.com/Chase-42/SetPatrol" target="_blank"><i className="fa fa-eye" style={{ fontSize: 24 }}></i></a>
            </div>
        </div>

        <div className="container-each">
            <h3>Flatsy Shops</h3>
            <iframe src="https://www.youtube.com/embed/tzsZxJwcoKI"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            <br/>
            <div className="links">
                <a href='https://github.com/ElizabethKaren/etsy_clone_front_end' target="_blank"><i className="fa fa-eye" style={{ fontSize: 24 }}></i></a>&nbsp;&nbsp;
                <a href='https://github.com/ElizabethKaren/etsy_clone_back_end' target="_blank"><i className="fa fa-eye-slash" style={{ fontSize: 24 }}></i></a>
            </div>
        </div>

        <div className="container-each">
            <h3>Clueless Trivia</h3>
            <a href='https://cluelesstrivia.netlify.app/' target="_blank"><img src="https://i.gifer.com/Ag6K.gif"  /></a>
            <br/>
            <div className="links">
                <a href='https://cluelesstrivia.netlify.app/' target="_blank"><i className="fa fa-eye" style={{ fontSize: 24 }}></i></a>&nbsp;&nbsp;
                <a href='https://github.com/ElizabethKaren/Trivia/tree/cluelessbranch' target="_blank"><i className="fa fa-eye-slash" style={{ fontSize: 24 }}></i></a>
            </div>
        </div>

        <div className="container-each">
            <h3>So Not Facebook</h3>
            <iframe src="https://www.youtube.com/embed/euEMBbeC62U"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            <br/>
            <div className="link">
                <a href='https://github.com/ElizabethKaren/facebookclone_front_end' target="_blank"><i className="fa fa-eye" style={{ fontSize: 24 }}></i></a>&nbsp;&nbsp;
                <a href='https://github.com/ElizabethKaren/facebookclone_real_backend' target="_blank"><i className="fa fa-eye-slash" style={{ fontSize: 24 }}></i></a>
            </div>
        </div>

        <div className="container-each">
            <h3>90s Style Messenger</h3>
            <iframe width="500" height="255" src="https://www.youtube.com/embed/pPGcKVKeSeU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            <br/>
            <div className="link">
                <a href='https://github.com/ElizabethKaren/aol_front_end' target="_blank"><i className="fa fa-eye" style={{ fontSize: 24 }}></i></a>&nbsp;&nbsp;
                <a href='https://github.com/ElizabethKaren/aol_backend' target="_blank"><i className="fa fa-eye-slash" style={{ fontSize: 24 }}></i></a>
            </div>
        </div>

        <div className="container-each">
            <h3>Movie Awards</h3>
            <a href='https://northamericanmovieawareds.netlify.app/' target="_blank"><img src={MovieAwardsPic} /></a>
            <br/>
            <div className="links">
                <a href='https://northamericanmovieawareds.netlify.app/' target="_blank"><i className="fa fa-eye" style={{ fontSize: 24 }}></i></a>&nbsp;&nbsp;
                <a href='https://github.com/ElizabethKaren/movieAwards' target="_blank"><i className="fa fa-eye-slash" style={{ fontSize: 24 }}></i></a>
            </div>
         </div>

        <div className="container-each">
            <h3>Grocery List Using Hooks and local Storage</h3>
            <a href='https://github.com/ElizabethKaren/hooksproject' target='_blank'><img src={GroceryAppPic} alt='grocery' /></a>
            <br/>
            <a href='https://github.com/ElizabethKaren/hooksproject' target='_blank'><i className="fa fa-eye" style={{ fontSize: 24 }}></i></a>
        </div>
    </div>
  )
}

export default Projects;