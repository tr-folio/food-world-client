import React from "react";
import "./HomeCSS/AllServices.css";

const AllServices = () => {
    return (
        <div className="d-block">
            <h2 style={{color: 'rgb(150, 100, 50)'}}>All Services At A Glance</h2>
            <br/>
            <div className="d-block m-auto all-services-div">
                <div className="d-block bg-info single-service">
                    <div className="single-service-img-div">
                        <img src="https://i.ibb.co/B4z7qMD/order-food.jpg" alt="" className="w-100 h-100"/>
                    </div>
                    <div className="bg-dark text-light p-3 single-service-info-div">
                        <h3 className="text-start text-white">Order Food</h3>
                        <ul>
                            <li className="text-start">Nutritous</li>
                            <li className="text-start">Healthy</li>
                            <li className="text-start">Spicy</li>
                            <li className="text-start">Fresh</li>
                        </ul> <br/>
                        <div className="text-start">
                            <button className="btn btn-light">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="d-block single-service">
                    <div className="bg-dark text-light p-3 single-service-info-div reverse-info">
                        <h3 className="text-start text-white">Ceremony Arrangement</h3>
                        <ul>
                            <li className="text-start">Ceremony</li>
                            <li className="text-start">Festival</li>
                            <li className="text-start">Picnic</li>
                            <li className="text-start">Party</li>
                        </ul> <br/>
                        <div className="text-start">
                            <button className="btn btn-light">Order Now</button>
                        </div>
                    </div>
                    <div className="single-service-img-div reverse-img">
                        <img src="https://i.ibb.co/GJdP4FG/ceremony-arrangement.jpg" alt="" className="w-100 h-100"/>
                    </div>
                </div>
                <div className="d-block bg-info single-service">
                    <div className="single-service-img-div">
                        <img src="https://i.ibb.co/Q8mNTzJ/chef-training.jpg" alt="" className="w-100 h-100"/>
                    </div>
                    <div className="bg-dark text-light p-3 single-service-info-div">
                        <h3 className="text-start text-white">Chef Training</h3>
                        <ul>
                            <li className="text-start">Beginner</li>
                            <li className="text-start">Intermidate</li>
                            <li className="text-start">Workshop (Advanced)</li>
                            <li className="text-start">Certification</li>
                        </ul> <br/>
                        <div className="text-start">
                            <button className="btn btn-light">Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="d-block single-service">
                    <div className="bg-dark text-light p-3 single-service-info-div reverse-info">
                        <h3 className="text-start text-white">Events</h3>
                        <ul>
                            <li className="text-start">Weekly Event</li>
                            <li className="text-start">Cooking Compition</li>
                            <li className="text-start">Chef of the Week</li>
                            <li className="text-start">Be A Kitchen King/Queen</li>
                        </ul> <br/>
                        <div className="text-start">
                            <button className="btn btn-light">Check Event</button>
                        </div>
                    </div>
                    <div className="single-service-img-div reverse-img">
                        <img src="https://i.ibb.co/RDr9g0L/chef-recruitment.jpg" alt="" className="w-100 h-100"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;