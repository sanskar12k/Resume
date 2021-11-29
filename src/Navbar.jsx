import React from "react";
import './navbar.css';
import { Navbar, Container, Nav,Stack ,NavDropdown} from "react-bootstrap";
const Navbars  = () =>{
    return(
        <>

<Navbar bg="light" expand="lg" className=" sticky-top">
  <Container>
    <Navbar.Brand href="#about" className="fw-bold navhead ps-4 ">Sanskar Gupta</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav mx-4" />
   
    <Navbar.Collapse id="basic-navbar-nav" className="outline mx-2">
      <Nav className="ms-auto fw-normal h5">
        <Nav.Link href="#about" className="navlink">Home</Nav.Link>
        <Nav.Link href="#edu" className="navlink">Education</Nav.Link>
        <Nav.Link href="#skill" className="navlink">Skills</Nav.Link>
        <Nav.Link href="#achievement" className="navlink">Achievement</Nav.Link>
        <Nav.Link href="#project" className="navlink">Projects</Nav.Link>
        <Nav.Link href="#certification" className="navlink">Certifications</Nav.Link>
        <Nav.Link href="#por" className="navlink">POR</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#edu" className="navlink">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
    
  </Container>
</Navbar>

        </>
    )
}

export default Navbars;