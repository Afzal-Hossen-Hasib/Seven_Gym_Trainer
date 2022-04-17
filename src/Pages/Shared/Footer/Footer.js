import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
            <footer className='footer-section'>
                <div className='footer'>
                    <ul className='footer-list'>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    </ul>
                    <p className='footer-title'>Fitness <span>Friends</span> @ {year}</p>
                </div> 
            </footer>
    );
};

export default Footer;