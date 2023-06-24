import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="navbar-custom">
                    <Container fluid>
                        <Navbar.Brand href="#" className="navbar-brand">BRYAXIS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1" className="navbar-home">Home</Nav.Link>
                                <Nav.Link href="#action2" className="navbar-link1">Link1</Nav.Link>
                                <NavDropdown title="Link2" id="navbarScrollingDropdown" className='navbar-dropdown'>
                                    <NavDropdown.Item href="#action3" className="dropdown-item">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4" className="dropdown-item">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5" className="dropdown-item">Something else here</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="search-bar"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success" className="search-button">Search</Button>
                            </Form>
                            <Nav.Link href="#" className="navbar-cart-icon">
                                <FontAwesomeIcon icon={faShoppingBasket} className="icon-basket" />
                            </Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;