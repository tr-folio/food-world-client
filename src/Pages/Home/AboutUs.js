import React from "react";
import "./HomeCSS/AboutUs.css";

const AboutUs = () => {
    return (
        <div className="d-block">
            <div className="p-5 about-us">
                <div className="about-us-text p-3">
                    <h3 style={{color: 'rgb(200, 150, 100)'}}>About Us</h3>
                    <p className="text-white">
                        Hello There! Take our heartiest welcome. We love to cook and deliver fresh, nutritous, healthy and spicy foods of various items. We have different kinds of delicious food items. Order your favourite one and we will deliver it to you as early as possible. We also arrange ceremonies/festivals. Tell us what do you want? We will try our best to serve your guests with delicious and healthy foods.   
                    </p>
                    <p class="text-white">
                        We also provide hands on training on cooking from beginner to advanced (inlcudes workshop) with Certification. Is it your dream to become a Chef. Enroll to our Chef Training Now.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;