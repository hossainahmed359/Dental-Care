import React from 'react';
import Footer from '../components/Footer/Footer';
import HomePageServices from '../components/HomePageServices/HomePageServices';
import Slider from '../components/Slider/Slider';


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