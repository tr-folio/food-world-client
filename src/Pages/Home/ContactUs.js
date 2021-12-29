import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContactUs = () => {
    return (
        <div className="d-block">
            <Container>
                <h2>Contact Us</h2>
                <br/>
                <Row>
                    <Col lg="8" className="mb-3">
                        <div>
                            <form className="w-100">
                                <p>
                                    <input className="w-100 ps-3" type="text" id="contact-name" placeholder="Your Name" required/>
                                </p>
                                <p>
                                    <input className="w-100 ps-3" type="email" id="contact-email" placeholder="Your Email" required/>
                                </p>
                                <p>
                                    <input className="w-100 ps-3" type="text" id="message-title" placeholder="Message Title" required/>
                                </p>
                                <p>
                                    <textarea className="w-100 ps-3" rows="5" placeholder="Your Message"/>
                                </p>
                                <p>
                                    <button className="btn btn-dark rounded-0">Send</button>
                                </p>
                            </form>
                        </div>
                    </Col>
                    <Col lg="4">
                        <Row>
                            <Col xs="6" lg="12">
                                <h6 className="bg-dark text-white py-2">Email Us</h6>
                                <p>food_world@example.com</p>
                                <h6 className="bg-dark text-white py-2">Phone</h6>
                                <p>00000-000000</p>
                            </Col>
                            <Col xs="6" lg="12">
                                <h6 className="bg-dark text-white py-2">Telephone</h6>
                                <p>00-0000-0000</p>
                                <h6 className="bg-dark text-white py-2">Address</h6>
                                <p>Dhaka, Bangladesh</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;