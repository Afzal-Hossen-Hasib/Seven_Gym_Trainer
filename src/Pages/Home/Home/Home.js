import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner'
import Trainig from '../../Trainig/Trainig';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Trainig></Trainig>
        </div>
    );
};

export default Home;