import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap/';


class Menu extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Star Wars</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="hero"></div>
            </React.Fragment>
        );
    }
}

export default Menu;