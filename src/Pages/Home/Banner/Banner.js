import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/Banner/valery-sysoev-LDAirERNzew-unsplash (1).jpg'
import banner2 from '../../../image/Banner/victor-freitas-nA0UDNDbxys-unsplash (1).jpg'
import banner3 from '../../../image/Banner/victor-freitas-WvDYdXDzkhs-unsplash (1).jpg'
import './Banner.css'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <Carousel className='banner' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>LET'S GET FIT..</h3> 
          <p>Take The First Step To Success.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>LET'S GET FIT..</h3> 
          <p>Take The First Step To Success.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>LET'S GET FIT..</h3> 
          <p>Take The First Step To Success.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner; 