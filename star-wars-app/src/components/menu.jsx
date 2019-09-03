import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap/';
import { NavLink } from 'react-router-dom';


class Menu extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand className="navbar-brand mr-auto">
                        <NavLink to="/">Home</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-item nav-link" to="/contact">contact</NavLink>
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