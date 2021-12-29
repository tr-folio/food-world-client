import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import SingleFood from "./SingleFood";

const OrderFood = () => {
    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/read-foods')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setAllFoods(data);
        });
    }, [])
    return (
        <div>
            <Header/>
            <div>
                <h2>Order Your Favourite Food</h2>
                <br/>
                <Container>
                    <Row>
                        {allFoods.map(singleFood => <SingleFood key={singleFood._id} singleFood={singleFood}></SingleFood>)}
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default OrderFood;