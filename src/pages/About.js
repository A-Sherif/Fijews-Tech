import React from 'react';

import Quote from '../components/quote';

import '../styles/about.css'
import Story from '../components/story'

function About(){
    return(
        <div>
            <Story/>
            <Quote/>
        </div>
    )
}

export default About;