import React from 'react';

const Service = (props) => {
    const { price, picture, name, description } = props.service
    return (
        <div>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p> <small>{description}</small> </p>
        </div>
    );
};

export default Service;