import React, {useState, useEffect, useRef} from "react";
import dev from "./imgs/por.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css';

const POR = ()=>{


return(
    <>
    <div id="por">
    <h1 className="autohead mb-3 " >Position of Resposiblity</h1>
<div className="row container my-5 h-100">

<div className="col-md-4 auto  ">
    <img src = {dev} alt = "developer" width="80%" />
    </div>
    <div className="col-md-8 mt-5">
 
    <div className="about">
  
    <ul className="text-start text lh-lg mt-md-4 mt-sm-2">
        <li>
           Web Team Member at Students' Alumni Cell
        </li>
        <li>
        Student Member at Institue Wellness Group 
        </li>

        
        
    </ul>



    </div>

</div>
    </div>
    </div>
    </>
)
}
export default POR;