import React from 'react'

import '../styles/footer.css'

import location from '../images/Location2.png'

function Location(){
    return(
        <footer>
            <article className='location-container'>
                <div className='location'>
                    <h1>Our Location</h1>
                    <a href='https://www.google.com/maps/dir//5.577268,-0.404232/@5.5775924,-0.4046796,19.18z'className='aboutLink'>Get Directions</a>
                    <h2>Contact</h2>
                    <p>027 3326 571</p>
                    <p>055 8593 355</p>
                </div>
                <div className='map-container'>
                    <figure className='map'>
                        <a href='https://www.google.com/maps/dir//5.577268,-0.404232/@5.5775924,-0.4046796,19.18z'>
                            <img src={location} alt='location'/>
                        </a>
                    </figure>
                </div>
            </article>
            <article className='copyright'>
                <p>&copy;2020 Precious Blood Congregation</p>
                <p>Site by Sherif | FIJEWS Tech</p>
            </article>
        </footer>
    )
}

export default Location;