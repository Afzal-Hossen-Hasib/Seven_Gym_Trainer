import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
            <footer>
                <h1>Copyright @ {year}</h1>
            </footer>
    );
};

export default Footer;