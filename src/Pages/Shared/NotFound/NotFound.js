import React from 'react';
import errorImg from '../../../image/404img/404-1.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-container'>
                <img src={errorImg} alt="" />
        </div>
    );
};

export default NotFound;