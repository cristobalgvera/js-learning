import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container">
                <Navbar.Brand as={Link} to="/">React Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/use-state">useState</Nav.Link>
                        <Nav.Link as={Link} to="/use-effect">useEffect</Nav.Link>
                        <Nav.Link as={Link} to="/data-fetching">Data Fetching</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    );
};

export default Menu;