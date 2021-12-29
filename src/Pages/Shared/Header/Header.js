import React from "react";
import { 
    Navbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <header className="d-block bg-dark">
                <section className="container text-start">
                    <section className="d-flex justify-content-between">
                        <section>
                            <h2 className="mt-2" style={{color: 'rgb(250, 200, 150)'}}>Food-World</h2>
                        </section>
                        <section>
                            <Navbar bg="dark" variant="dark" expand="lg">
                                <Container fluid>
                                    <Navbar.Brand href="#"></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <NavDropdown title="Order-Now" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="#action3">Order Food</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Ceremony Arrangement</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Career" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="#action3">Chef Training</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Chef Recruitment</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Account" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Register</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#action2">Event</Nav.Link>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </section>
                    </section>
                </section>
            </header>
        </div>
    );
};

export default Header;