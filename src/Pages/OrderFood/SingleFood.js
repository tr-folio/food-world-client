import React from "react";
import { Col } from "react-bootstrap";
import "./OrderFoodCSS/SingleFood.css";

const SingleFood = (props) => {
    const { singleFood } = props;
    let price = singleFood.price;
    // console.log(singleFood);
    if (singleFood.is_discounted) {
        price = price - (price*singleFood.discount_percentage/100);
    }

    return (
        <Col className="mb-3">
            <section className="d-block w-100">
                <section className="d-block m-auto rounded-3 food-cards">
                    <section className="d-block food-image-section">
                        <img src={singleFood.foodimg_url} alt="food image" className="img-fluid rounded-3"/>
                    </section>
                    <section className="d-block p-2">
                        <h5 className="text-start">{singleFood.food_name}</h5>
                        <h5 className="text-start">Rating: {singleFood.avg_rating}</h5>
                        {singleFood.is_discounted && <h5 className="text-start">Price: <strike>{singleFood.price}$</strike>&nbsp;<span className="text-success">{price}$</span></h5>}
                        {singleFood.is_discounted || <h5 className="text-start">Price: {price}$</h5>}
                    </section>
                    <section>
                        <button className="btn btn-dark d-block w-100">Order Now</button>
                    </section>
                </section>
            </section>
        </Col>
    );
};

export default SingleFood;