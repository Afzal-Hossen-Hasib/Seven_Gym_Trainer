import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetailSection = () => {

    const {serviceId} = useParams();

    return (
        <div className='container'>
            <h1>Welcome To service</h1>
            <div>
                <p>Becoming a Personal Trainer was an obvious and natural choice for me as I am passionate about healthy living and sharing my expertise and knowledge with people.</p>
                <p>I worked for a number of corporate gyms as well as at an award winning world top 100 hotel at the start of my career but I felt that I could give more value to my clients which went beyond the little time they spent at the gym.</p>
                <p>My training ethos is to encourage, inspire, educate and support clients to achieve the best version of themselves, in a progressive, enjoyable, safe and effective manner.</p>
                <p>I specialise in weight management & racket sports conditioning.​
                </p>
            </div>
            <Link to='/checkout'>
                <button>Procced Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetailSection;