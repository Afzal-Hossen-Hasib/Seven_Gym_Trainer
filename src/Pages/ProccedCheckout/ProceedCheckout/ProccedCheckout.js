import React from 'react';
import './ProccedCheckout.css'

const ProccedCheckout = () => {
    return (
        <div className='container'>
            <h1 className='check-title text-center my-5'>FITNESS <span>FRIENDS</span></h1>
            <h6 className='text-center'>A tonne of useful advice, guidance and coaching across the 4 keys to success that will help you. <hr /></h6>
            <ul className='details my-4 d-block w-50 mx-auto'>
                <li className='my-3'>Eat better, without dieting or feeling deprived.</li>
                <li>Get active, no matter what shape you’re in now.</li>
                <li className='my-3'>Ditch the food rules, drop the fad diets and conflicting advice.</li>
                <li>Build fitness into your life, without it taking over.</li>
                <li className='my-3'>Achieve, and maintain, your goals, even when life gets busy.</li>
            </ul>
        </div>
    );
};

export default ProccedCheckout;