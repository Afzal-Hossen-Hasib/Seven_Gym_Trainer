import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {name, picture, desription, id} = service;
    const navigate = useNavigate();

    const navigteToServiceSection = id => {
            navigate(`/service/${id}`);
    }

    return (
        <div className='service-container'>
            <img src={picture} alt="" />
            <h4 className='my-3'>{name}</h4>
            <p>{desription}</p>
            <button className='service-button' onClick={() => navigteToServiceSection(id)}>Check Out</button>
        </div>
    );
};

export default Service;