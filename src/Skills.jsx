import React, {useState, useEffect, useRef} from "react";
import dev from "./imgs/about.gif";
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css';

const Skills = ()=>{


return(
    <>
    <div id="skill">
    <h1 className="autohead mb-3" >Skills</h1>
<div className="row container my-5 h-100">

<div className="col-md-4 auto  ">
    <img src = {dev} alt = "developer" width="80%" />
    </div>
    <div className="col-md-8">
 
    <div className="about">
  
    <ul className="text-start text lh-lg mt-4">
        <li>
           <strong> Programming: </strong> C/C++,HTML,CSS,Javascript,PHP,Matlab  
        </li>
        <li>
        <strong>  Frameworks: </strong> ReactJS,NodeJS,Express  
        </li>
        <li>
        <strong>  Industry Knowledge:  </strong>GIT  
        </li>
        
        
    </ul>



    </div>

</div>
    </div>
    </div>
    </>
)
}
export default Skills;