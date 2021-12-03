import React from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import AES from "./AES";
import RSA from "./RSA";
import Sha from "./Sha";

function Header() {
    return (
        <Router>
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">React-Crypto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/sha"}>SHA</Nav.Link>
                        <Nav.Link as={Link} to={"/aes"}>AES</Nav.Link>
                        <Nav.Link as={Link} to={"/rsa"}>RSA</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/about"}>About</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/devs"}>Devs</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/learning"}>Learning</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/sha" element={<Sha />}/>
                    <Route path="/aes" element={<AES/>}/>
                    <Route path="/rsa" element={<RSA />}/>
                </Routes>
            </div>
        </Router>
    );
}
export default Header;