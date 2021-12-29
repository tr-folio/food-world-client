import React from "react";
import { 
    Container,
    Row,
    Col
} from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="d-block bg-dark p-5">
            <Container>
                <Row>
                    <Col>
                        <h3 className="text-white text-start">Follow Us</h3>
                        <br/>
                        <p className="text-start">
                            <button className="btn btn-primary social">Facebook</button>
                        </p>
                        <p className="text-start">
                            <button className="btn btn-secondary social">Instagram</button>
                        </p>
                        <p className="text-start">
                            <button className="btn btn-info social">Twitter</button>
                        </p>
                        <p className="text-start">
                            <button className="btn btn-danger social">YouTube</button>
                        </p>
                    </Col>
                    <Col>
                        <h3 className="text-white">Eat Healthy Foods</h3>
                        <br/>
                        <p className="text-white" style={{textAlign: 'justify'}}>Health is wealth. Health is the root of all happiness. Eat our healthy foods to live a happy life. We provide nutritous, delicious and spicy food items. Order your favourite food now.</p>
                    </Col>
                    <Col>
                        <h3 className="text-white">Quick Links</h3>
                        <br/>
                        <ul className="text-white" style={{listStyleType: 'none'}}>
                            <li className="pb-3">
                                Order Food
                            </li>
                            <li className="pb-3">
                                Ceremony Arrangement
                            </li>
                            <li className="pb-3">
                                Chef Training
                            </li>
                            <li className="pb-3">
                                Login/Register
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;