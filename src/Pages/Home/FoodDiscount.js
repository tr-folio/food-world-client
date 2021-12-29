import React from "react";
import { 
    Container,
    Row,
    Col
} from "react-bootstrap";
import "./HomeCSS/FoodDiscount.css";

const FoodDiscount = () => {
    return (
        <div>
            <Container>
                <h2 style={{color: 'rgb(150, 100, 50)'}}>Available Food Discounts</h2>
                <br/>
                <Row>
                    <Col className="mb-3">
                        <section className="d-block w-100">
                            <section className="d-block m-auto rounded-3 discount-cards">
                                <section className="d-block discount-food-image-section">
                                    <img src="https://i.ibb.co/hLq2B8P/vegitable-sandwitch.jpg" alt="food image" className="img-fluid rounded-3"/>
                                </section>
                                <section className="d-block p-2">
                                    <h5 className="text-start">Food Name</h5>
                                    <h5 className="text-start">Rating</h5>
                                    <h5 className="text-start"><strike>Price: 200$</strike></h5>
                                </section>
                                <section>
                                    <button className="btn btn-dark d-block w-100">Order Now</button>
                                </section>
                            </section>
                        </section>
                    </Col>
                    <Col className="mb-3">
                        <section className="d-block w-100">
                            <section className="d-block m-auto rounded-3 discount-cards">
                                <section className="d-block discount-food-image-section">
                                    <img src="" alt="food image"/>
                                </section>
                                <section className="d-block p-2">
                                    <h5 className="text-start">Food Name</h5>
                                    <h5 className="text-start">Rating</h5>
                                    <h5 className="text-start"><strike>Price: 200$</strike></h5>
                                </section>
                                <section>
                                    <button className="btn btn-dark d-block w-100">Order Now</button>
                                </section>
                            </section>
                        </section> 
                    </Col>
                    <Col className="mb-3">
                        <section className="d-block w-100">
                            <section className="d-block m-auto rounded-3 discount-cards">
                                <section className="d-block discount-food-image-section">
                                    <img src="" alt="food image"/>
                                </section>
                                <section className="d-block p-2">
                                    <h5 className="text-start">Food Name</h5>
                                    <h5 className="text-start">Rating</h5>
                                    <h5 className="text-start"><strike>Price: 200$</strike></h5>
                                </section>
                                <section>
                                    <button className="btn btn-dark d-block w-100">Order Now</button>
                                </section>
                            </section>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDiscount;