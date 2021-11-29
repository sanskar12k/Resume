import React, { useState, useEffect, useRef } from "react";
import dev from "./imgs/about.gif";
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { Row, Col} from "react-bootstrap";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles'

const Footer = () => {
    var len = window.height;
    const [style, setStyle] = useState({display:"inherit"});
    if(len<500){
        setStyle({display:"none"});
    }

   
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
    return (
        <>
        <div className="bgcol" id="contact">
            <Row className="row ">
            <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} >
           
            <ul className="footerstyle text-light text-start lh-lg" >
            <h2 className="underline text-light text-start " > <u> Contact Me </u></h2>
            <li className="mt-md-4 h5">Sanskar Gupta</li>
                <li className=" h5">A.K. Traders,Kachari Road, Ghazipur</li>
                <li className="h5">IIT Kharagpur</li>
                <li className="h5"><a href="tel:7852830128"><CallIcon fontSize="small" /> 7852830128</a></li>
                <li className="h5"><a href="mailto:sanskarmodanwal8@gmail.com"> <MailIcon fontSize="small"/> sanskarmodanwal8@gmail.com</a></li>
            </ul>
            </Col>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }}  className="my-3">
           
            <ul className="footerstyle text-light text-start " >
            <h4 className="underline text-light text-start" > <u>Site Map </u></h4>
                <li className="mt-md-1"><a href = "#about">About </a></li>
                <li> <a href = "#edu">Educations </a> </li>
                <li> <a href = "#skill">Skills </a></li>
                <li> <a href ="#achievement"> Achievement </a></li>
                <li><a href = "#project">Projects  </a></li>
                <li><a href = "#certification"> Certifications</a> </li>
                <li><a href="#por"> Position of Responsibility </a></li>
            </ul>
            </Col>
            <Col xs={{ span: 12, order:3 }} md={{ span: 4, order: 3 }} className="mt-md-4 align-self-center text-start lh-lg"  >
                 <Row className="justify-content-around align-content-stretch"> 
                 <Col xs={4} sm = {12} className="my-md-3 text-md-start text-center">
                 <a href = "https://www.linkedin.com/in/sanskar-gupta-/" target="_blank">
                  <LinkedInIcon fontSize="medium" style={{fill: "white"}}> </LinkedInIcon>
                  <span className="text-light disp" > https://www.linkedin.com/in/sanskar-gupta-/</span> 
                  </a>
                 </Col>
                
                 <Col xs={4}  sm = {12} className="my-md-3 text-md-start text-center">
                 <a href="https://github.com/sanskar12k" target="_blank" >
                  <GitHubIcon fontSize="medium"  style={{fill: "white"}}></GitHubIcon>
                  <span className="text-light disp" > https://github.com/sanskar12k</span> 
                  </a>

                 </Col>
                 {/* <Col sm = {12}>
                 <a href="mailto:sanskarmodanwal8@gmail.com" target="_blank" >
                  <GoogleIcon  fontSize="medium" style={{fill: "white"}}></GoogleIcon>
                  <span className="text-light disp" > sanskarmodanwal8@gmail.com</span> 
                  </a>

                 </Col> */}
                 <Col xs={4}  sm = {12} className="my-md-3 text-md-start text-center">
                 <a href="https://www.facebook.com/sanskar.gupta.3386585" target="_blank">
                  <FacebookIcon fontSize="medium"  style={{fill: "white"}}></FacebookIcon>
                  <span className="text-light disp" > https://www.facebook.com/sanskar.gupta.3386585</span> </a>

                 </Col>
                 </Row>  
            </Col>

            </Row>
</div>
        </>
    )
}
export default Footer;

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ResponsiveStack() {
//   return (
//     <div>
//       <Stack
//         direction={{ xs: 'column', sm: 'row' }}
//         spacing={{ xs: 1, sm: 2, md: 4 }}
//       >
//         <Item>Item 1</Item>
//         <Item>Item 2</Item>
//         <Item>Item 3</Item>
//       </Stack>
//     </div>
//   );
// }
