import React from 'react';
import about from '../../image/about/shape-4.png'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <h1 className='mission-title text-center my-5 text-uppercase'>My Mission</h1>
            <div className="about-section">
                <div className="row align-items-center">
                    <div className='col-md-6'>
                        <div className="about-left">
                        <img src={about} alt="" />
                        </div>
                    </div>
                    
                    <div className='col-md-6'>
                        <div className="about-right">
                            <h5 className='mb-5'>My name is <span className='fw-bold'>Afzal Hossen Hasib</span>. I started learning web development in 2022 with Jhankar Mahbub Sir. My focus is on learning web development and making myself more expert.</h5>

                         <p><span className='fw-bold'>MISSION:</span> My mission is complete the programming hero course with Jhankar Mahbub Sir. To be an honest, empathetic and impactful person is also my mission.</p>   

                         <p className='my-4'><span className='fw-bold'>VISSION:</span> Vission 2022 is the most important part for my life. because i started learning programming in 2022 and doing very special work .</p>  

                         <p><span className='fw-bold'>GOALS:</span> My Goal Is Very Uniqe. In 2022 I started learning programming. I Have to Finished it into 2022. My goals is on learning web development and making myself more expert.</p>   

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;