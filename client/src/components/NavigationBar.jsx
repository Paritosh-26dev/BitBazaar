import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
    return (
        <div>
            <Navbar bg="transparent" expand="lg" variant="dark">
                <Nav className="container-fluid">
                    <Navbar.Brand as={Link} to="/" >BitBazaar</Navbar.Brand>
                    <Navbar.Toggle data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler-icon" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Nav.Link as={Link} to="/buyCard" >Market Place</Nav.Link>
                            <Nav.Link as={Link} to="/sellCard" >Sell</Nav.Link>
                            <Nav.Link as={Link} to="/" >My Cart</Nav.Link>
                            <Nav.Link as={Link} to="/" >Contact Us</Nav.Link>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </Nav>
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavigationBar;