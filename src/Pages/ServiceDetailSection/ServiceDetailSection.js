import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailSection = () => {

    const {serviceId} = useParams();

    return (
        <div>
            <h1>Welcome To service: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetailSection;