import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {name, picture, price, desription, id} = service;
    const navigate = useNavigate();

    const navigteToServiceSection = id => {
            navigate(`/service/${id}`);
    }

    return (
        <div className='service-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>{desription}</h3>
            <p>{price}</p>
            <button onClick={() => navigteToServiceSection(id)}>Check Out</button>
        </div>
    );
};

export default Service;