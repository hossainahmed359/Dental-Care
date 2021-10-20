import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../Images/Banner/banner2.jpg'
import banner2 from '../../Images/Banner/banner3.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{}}
                        className="w-100 d-block "
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

export default Slider;