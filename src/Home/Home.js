import React from 'react';
import HomePageServices from '../components/HomePageServices/HomePageServices';
import Slider from '../components/Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomePageServices></HomePageServices>
        </div>
    );
};

export default Home;