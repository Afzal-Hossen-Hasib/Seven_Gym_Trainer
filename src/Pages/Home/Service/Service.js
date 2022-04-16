import React from 'react';
import './Service.css'

const Service = ({service}) => {

    const {name, picture, price, desription} = service;

    return (
        <div className='service-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>{desription}</h3>
            <p>{price}</p>
            <button>Check Out</button>
        </div>
    );
};

export default Service;