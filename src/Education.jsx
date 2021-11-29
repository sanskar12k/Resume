import React from "react";
import edu from './imgs/edu.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Table,Col } from "react-bootstrap";
import './edu.css'
const Education = () =>{
return(
    <>
    <div id="edu">
    <h1 className="autohead " >Education</h1>
    <Row className="row container my-5 h-100">

    <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }} className="">
 
    <div className="about">
    
    <div className="tablescroll">
    <Table striped bordered hover size="lg" className="text lh-lg" >
  <thead>
    <tr>
      <th>Year</th>
      <th>Degree/Examination</th>
      <th>Institute</th>
      <th>%/CGPA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2024</td>
      <td>B.Tech(4Y)</td>
      <td>IIT Kharagpur</td>
      <td>8.8(Ongoing)</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>12<sup>th</sup> (C.B.S.E.) </td>
      <td>Sunbeam Suncity</td>
      <td>94.8%</td>
    </tr>
    <tr>
      <td>2017</td>
      <td >10<sup>th</sup>(C.B.S.E.) </td>
      <td>Sunbeam Suncity</td>
      <td>9.4</td>
    </tr>
  </tbody>
</Table>
</div>
</div>

</Col>
<Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }} className=" auto mt-md-5">
    <img src = {edu} alt = "developer" width="80%" />
    </Col>
    </Row>
    </div>
    </>
)
}

export default Education;