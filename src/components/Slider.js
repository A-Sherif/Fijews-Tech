import React from 'react'
import { Link } from 'react-router-dom'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import '../styles/slider.css'

//IMAGES
import church from '../images/church.jpg';
import man from '../images/man.jpg';
import people from '../images/people.jpg';

const slides = [
    {
        title: 'Our Church',
        description: 'The place where God dwells',
        image: church,
        button: 'Learn More',
        link: 'About.html'
    }, {
        title: 'Counselling',
        description: 'We hope to lead you down the right path',
        image: man,
        button: 'Read More',
        link: 'blog.html'
    },{
        title: 'Events',
        description: 'Bringing people together to praise and worship the lord',
        image: people,
        button: 'View Our Events',
        link: 'events.html'
    }
  ];

const Slider = () =>{
    return(
        <Carousel className="slider-wrapper" infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
        {slides.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Link to={item.link} className='Link'>{item.button}</Link>
            </div>
          </div>
        ))}
      </Carousel>
    )
}

export default Slider;