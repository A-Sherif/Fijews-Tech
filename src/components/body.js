import React from 'react';
import '../styles/body.css';
import people from '../images/people.jpg';

const Body = () =>{
    return(
        <section>
        <section className='body'>
            <article className = 'main'>
                <h1>Our Vision</h1>
                <p>We are dedicated to providing our community the best in Christain teaching. </p>
            </article>
            <section className='secondary'>
                <article className='biblequote'>
                    <h1> Bible Quote of The Day</h1>
                    <h2>Isaiah 1:18 </h2>
                    <p> 
                        “Come now, let us settle the matter,” 
                        says the LORD. 
                        “Though your sins are like scarlet, 
                        they shall be as white as snow; 
                        though they are red as crimson, 
                        they shall be like wool. 
                    </p>
                </article>
                <div className='tertiary'>
                    <h1>Services</h1>
                    <article className='services'>
                        <div className='english_services'>
                            <h2>English</h2>
                            <p>Monday      <span>5:30 - 6:30 pm</span></p>
                            <p>Wednesday   3:30 - 4:30 pm</p>
                            <p>Sunday      9:30 - 11:30 am</p>
                        </div>
                        <div className='local_services'>
                            <h2>Local Languages</h2>
                            <p>Tuesday: 5:30 - 6:30 pm</p>
                            <p>Thursday: 3:30 - 4:30 pm</p>
                            <p>Sunday : 12:30 - 1:30 pm</p>
                        </div>
                    </article>
                </div>
            </section>
            </section>
            <div className='categories'>
                <div className='events'>
                    <h1> Events</h1>
                </div>
                <div className='appointment'> 
                    <h1>Book An Appointment</h1>
                </div>
            </div>
        </section>
    )
}

export default Body;