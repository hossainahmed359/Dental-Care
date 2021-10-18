import React from 'react';
import Footer from '../Footer/Footer';
import HomePageServices from '../HomePageServices/HomePageServices';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomePageServices></HomePageServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;