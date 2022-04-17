import React from 'react';
import { Link, useParams } from 'react-router-dom';
import traingImg from '../../image/trainingImg/gym.jpg'
import './ServiceDetailSection.css'

const ServiceDetailSection = () => {

    const {serviceId} = useParams();

    return (
        <div className='container'>
            <h2 className='fitness-title text-center mb-5'> <span>WHY FITNESS FRIENDS</span> WILL WORK FOR YOU <hr/> </h2> 
            <div id='training' className='container d-flex mt-5 align-items-center finess-section'>
            
                <div className="col-md-6 me-3">
                    <div className='fitness'>
                        <img src={traingImg} alt="" /> 
                    </div> 
                </div>
            
            <div className="col-md-6">
                <div className='fitness-detail'>
                <ul>
                    <li>Becoming a Personal Trainer was an obvious and natural choice for me as I am passionate about healthy living and sharing my expertise and knowledge with people.</li>
                    <li>I worked for a number of corporate gyms as well as at an award winning world top 100 hotel at the start of my career but I felt that I could give more value to my clients which went beyond the little time they spent at the gym.</li>
                    <li>My training ethos is to encourage, inspire, educate and support clients to achieve the best version of themselves, in a progressive, enjoyable, safe and effective manner.</li>
                    <li>I specialise in weight management & racket sports conditioning.</li>
                </ul>
            </div>
        </div>
        </div>
            <Link className='text-decoration-none' to='/checkout'>
                <button className='check-button d-block mx-auto w-50'>Procced Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetailSection;