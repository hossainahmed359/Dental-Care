import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../Images/Banner/banner1.png'
import banner2 from '../Images/Banner/banner2.png'

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;