import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import AboutUs from "./AboutUs";
import AllServices from "./AllServices";
import ContactUs from "./ContactUs";
import FoodDiscount from "./FoodDiscount";
import TopBanner from "./TopBanner";

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <br/> <br/>
            <FoodDiscount/>
            <br/> <br/>
            <AllServices/>
            <div style={{height: '10px', backgroundColor: 'rgb(150, 100, 50)'}}></div>
            <AboutUs/>
            <br/> <br/>
            <ContactUs/>
            <br/> <br/>
            <Footer/>
        </div>
    );
};

export default Home;