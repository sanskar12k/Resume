import React, { useState, useEffect, useRef } from "react";
import dev from "./imgs/ache.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css';
import { Row,Col } from "react-bootstrap";

const Acheievment = () => {


    return (
        <>
        <div id="achievement">
        <h1 className="autohead mb-3" >Acheievment</h1>
            <Row className="row container my-5 h-100">
               
                
                <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }} >

                    <div className="about">
                        <table className="text-start text lh-lg mt-4">
                            <tr>
                                <td>
                                    <ul><li>Achieved 2nd position in National Aero Tech Fest conducted by IAS (International Aircraft Sales)  </li></ul>
                                </td>
                                <td className = "ms-5">[2019]</td>
                            </tr>
                            <tr>
                                <td>
                                    <ul><li>Cleared Ramanujan Mathematics Contest conducted by BHU. </li></ul>
                                </td>
                                <td>[2016]</td>
                            </tr>
                        </table>



                    </div>

                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }} >
                    <img src={dev} alt="developer" width="95%" />
                </Col>
            </Row>
            </div> 
        </>
    )
}
export default Acheievment;