import React from "react";
import { 
    Col,
    Container, 
    Row 
} from "react-bootstrap";
import "./HomeCSS/TopBanner.css";

const TopBanner = () => {
    return (
        <div className="d-block">
            <div className="topbanner-bg-div">

            </div>
            <Container className="mb-3 banner-card-div">
                <Row className="h-100">
                    <Col lg="6" className="mb-3 banner-cards">
                        <section className="d-block w-75 h-100 m-auto rounded-pill text-white" id="welcome-card">
                            <section className="d-flex h-100 justify-content-center align-items-center">
                                <section>
                                    <h2>Welcome to</h2>
                                    <h2>Food-World</h2>
                                </section>
                            </section>
                        </section>
                    </Col>
                    <Col lg="6" className="banner-cards">
                        <section className="d-block w-75 h-100 m-auto rounded-pill">
                            <img src="https://i.ibb.co/Wg6sVpC/recipe-2508859.jpg" alt="food image" className="w-100 h-100 rounded-pill"/>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;