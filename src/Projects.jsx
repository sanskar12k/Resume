import React, {useState, useEffect, useRef} from "react";
import dev from "./imgs/project.gif";
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';
import { Accordion } from "react-bootstrap";

const Projects = ()=>{


return(
    <>
    <div id="project">
    <h1 className="autohead mb-3" >Projects</h1>
<div className="row container my-5 h-100">

<div className="col-md-4 auto my-md-5 my-sm-2">
    <img src = {dev} alt = "developer" width="80%" />
    </div>
    <div className="col-md-8">
 
    <div className="about">
    <Accordion  flush >
  <Accordion.Item eventKey="0" className="h5">
    <Accordion.Header > <div className="text lh-lg fw-bold"> 15Puzzle </div></Accordion.Header>
    <Accordion.Body className= "text-start text">
    <ul>
    <li>
     This is a puzzle game made using JavaScript.</li>
     <li>Records time taken in a game.</li>
     <li>Comes in 3 levels: 3X3,4X4 and 5X5.</li>
     </ul>
     <a href = "https://github.com/sanskar12k/15Puzzle" target = "_blank" className="mx-3">GitHub Repo </a> 
     {/* <br/> */}
     <a href = "https://sanskar12k.github.io/15Puzzle/"  target = "_blank"> Website </a> 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className="h5">
    <Accordion.Header> <div className="text lh-lg fw-bold"> Social Media Webiste </div></Accordion.Header>
    <Accordion.Body className= "text-start text">
    <ul>
    <li>This is a social media website made using MERN Stack.</li>
    <li>It comes with login functionality</li>
    <li>One can make a post and posts are visible only if he/she is logged in.
</li>
     </ul>
 <a href = "https://github.com/sanskar12k/Socialgram_with_db" target = "_blank" className="mx-3">GitHub Repo</a>
  
    <a href = "https://socialgramwebsite.herokuapp.com/"  target = "_blank">Webiste</a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" className="h5">
    <Accordion.Header> <div className="text lh-lg fw-bold"> Notes</div> </Accordion.Header>
    <Accordion.Body className= "text-start text">
    <ul>
    <li>This is a note-making website made using PHP and MySQL.
</li>
<li>Comes with editing, deleting, and login functionality so one can see only his own notes.</li>
</ul>
    <a href = "https://github.com/sanskar12k/Notes" target = "_blank">GitHub Repo</a>
  
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>

</div>
    </div>
    </div>
    </>
)
}
export default Projects;