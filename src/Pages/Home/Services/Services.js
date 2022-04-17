import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect (() => {
        fetch ('services.json')
        .then (res => res.json())
        .then (data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
            <h3 className='services-title mt-5'>FITNESS <span>FRIENDS</span> TRAINING SERVICES <hr /></h3>

            <div className='services-container'>
            {
                services.map (service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>

        </div>
    );
};

export default Services;