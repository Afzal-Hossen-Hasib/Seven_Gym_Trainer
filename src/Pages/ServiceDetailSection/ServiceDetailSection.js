import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetailSection = () => {

    const {serviceId} = useParams();

    return (
        <div>
            <h1>Welcome To service: {serviceId}</h1>
            <Link to='/checkout'>
                <button>Procced Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetailSection;