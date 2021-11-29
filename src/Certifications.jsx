import React, { useState, useEffect, useRef } from "react";
import dev from "./imgs/certi.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css';
import { Col, Row } from "react-bootstrap";

const Certifications = () => {


    return (
        <>
        <div id="certification">
        <h1 className="autohead mb-3" >Certifications</h1>
            <Row className="row container mb-md-5 mb-sm-2 h-100">
                
                <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }} className="col-md-4 auto  ">
                    <img src={dev} alt="developer" width="80%" />
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }} className="col-md-8">

                    <div className="about">
                        <table className="text-start text lh-lg mt-4">
                            <tr>
                                <td>
                                    <ul><li>Active participant in KTJ Web Development Workshop</li></ul>
                                </td>
                                <td className = "text-end">[2021]</td>
                            </tr>
                            <tr>
                                <td>
                                    <ul><li>Completed an IoT Course through Bolt IoT  </li></ul>
                                </td>
                                <td className = "ms-5">[2021]</td>
                            </tr>

                            <tr>
                                <td>
                                    <ul><li>Active participant in Computer Vision conducted in Winter School of AI and Robotics by Technology Robotix Society  </li></ul>
                                </td>
                                <td className = "ms-5">[2021]</td>
                            </tr>
                        </table>
                    </div>

                </Col>
            </Row>
            </div>
        </>
    )
}
export default Certifications;