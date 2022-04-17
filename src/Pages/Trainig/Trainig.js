import React from 'react';
import fitness from '../../image/Banner/fitness.jpg'
import './Trainig.css'

const Trainig = () => {
    return (
        <div id='training' className='container d-flex mt-5 align-items-center finess-section'>
            
                <div className="col-md-6 me-3">
                    <div className='fitness'>
                        <img src={fitness} alt="" /> 
                    </div> 
                </div>
            
            <div className="col-md-6">
                <div className='fitness-detail'>
                    <h3>FITNESS <span>FRIENDS</span> TRAINING CREDO</h3>
                    <h6>I help busy men and women overhaul their health & fitness using a combination of tailored     exercise, nutrition, lifestyle and mindset systems that are holistic and sustainable forever so they can...
                    </h6>
                <ul>
                    <li>Feel confident and attractive around their friends, family, and out in public</li>
                    <li>Feel Physically & mentally strong, capable of taking on any challenge without worrying that their energy levels or body weight will get in the way.</li>
                    <li>Fit into the clothes they want to wear</li>
                    <li>Stop worrying about getting diseases and dying young</li>
                    <li>Run around with their kids, or grandkids, without feeling pain, winded or tired; and do it again the next day</li>
                    <li>Add 10+ years of healthy living to their retirement</li>
                </ul>
                <button className='d-block mx-auto'>Read More..</button>
            </div>
        </div>
        </div>
    );
};

export default Trainig;