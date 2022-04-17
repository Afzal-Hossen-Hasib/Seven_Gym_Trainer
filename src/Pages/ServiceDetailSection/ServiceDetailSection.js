import React from 'react';
import { Link, useParams } from 'react-router-dom';
import trainingImg from '../../image/trainingImg/gym.jpg'
import './ServiceDetailSection.css'

const ServiceDetailSection = () => {

    const {serviceId} = useParams();

    return (
        <div className='container'>
            <h2 className='fitness-title text-center mb-5'> <span>WHY FITNESS FRIENDS</span> WILL WORK FOR YOU <hr/> </h2> 
            <div className="card-section">
                <div className="row">
                    <div className='col-md-5'>
                        <div className="left-section">
                            <img src={trainingImg} alt="" />
                        </div>
                    </div>

                    <div className='col-md-7'>
                    <div className='fitness-detail'>
                        <ul>
                            <li>Eat better, without dieting or feeling deprived.</li>
                            <li>Get active, no matter what shape you’re in now.</li>
                            <li>Ditch the food rules, drop the fad diets and conflicting advice.</li>
                            <li>Build fitness into your life, without it taking over.</li>
                            <li>Achieve, and maintain, your goals, even when life gets busy.</li>
                        </ul>
                    </div>
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