import React, { useState, useEffect, useRef } from "react";
import dev from "./imgs/pro.jpeg";
import Typed from 'typed.js';
import Resume from "./imgs/Resume.pdf";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import Button from '@mui/material/Button';

const TypedReactHooksDemo = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        `Hello I'm Sanskar`,
        `Hello I'm a Web Developer`,
        `Hello I'm an IoT Enthusiast`

      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">


      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
    </div>
  );
}

const About = () => {


  return (
    <>
      <div className="row container my-5 h-100" id="about" >
        <div className="col-md-6 auto">
          <img src={dev} alt="developer" width="80%" />
        </div>
        <div className="col-md-6">

          <div className="about">
            <h1 className="autohead mb-3" >About Me</h1>
            <h1 className="auto">
              <TypedReactHooksDemo /> </h1>
            <p className="text text-start px-2 justify">I'm a second-year undergraduate from the department of Electrical Enggineering,IIT Kharagpur enrolled in its 4Year B.Tech Course. I'm from Ghazipur, Uttar Pradesh. Currently, I have completed my 3<sup>rd</sup> semester and now I'm exploring DSA and NodeJS.
            I love working on Web Development and DSA.
            My hobbies are watching movies, webseries and listening songs.
            </p></div>
          {/* <button className="btn btn-primary mx-3"> <a href="#contact"> Contact Me </a></button> */}
          <div className="buttons">
          <a href="#contact"> <Button variant="contained" className="btn-primary mx-1 my-sm-2"> Contact Me </Button></a>
          <a href={Resume}  download = "SanskarGupta" >  <Button variant="outlined" className="btn-outline-primary mx-1">Download Resume</Button> </a>
</div>
        </div>
      </div>
    </>
  )
}
export default About;
