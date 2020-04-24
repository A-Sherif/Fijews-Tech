import React from 'react';

import '../styles/body.css';

const Body = () =>{
    return(
        <section>
            <section className='secondary'>
                <article className='biblequote'>
                    <hr/>
                    <h1> Bible Quote of The Day</h1>
                    <h2> 
                        “Come now, let us settle the matter,” 
                        says the LORD. 
                        “Though your sins are like scarlet, 
                        they shall be as white as snow; 
                        though they are red as crimson, 
                        they shall be like wool. 
                    </h2>
                    <h3>Isaiah 1:18 </h3>
                    <hr/>
                </article>
                <article className='About'>
                    <div>
                    <h2>Our Church</h2>
                    <h1>A church that loves God and people</h1>
                    <p>
                        We have a strong sense of community with parishioners. 
                        People and children of all ages here are encouraged to 
                        learn about their own faith and the role of the church 
                        in our community and worldwide.
                    </p>
                    <a href='about.html'>More About Us</a>
                    </div>
                </article>
                <article className='tertiary'>
                    <div className='services_Header'>
                        <h1>Services</h1>
                        <h3>Join us during our services for exciting takes on the word of God</h3>
                    </div>
                    <div className='services'>
                        <div className='english_services'>
                                <table>
                                    <tr> 
                                        <th rowspan={3}><h2>English</h2></th> 
                                        <th>
                                            <h3>Monday</h3>
                                            <p>3:30 - 4:30 pm</p>    
                                        </th>
                                        <th>
                                            <h3>Wednesday</h3>
                                            <p>5:30 - 6:30 pm</p>    
                                        </th>
                                        <th>
                                            <h3>Sunday</h3>
                                            <p>9:30 - 11:30 am</p>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                        <div className='local_services'>
                            <table>
                                    <tr>
                                        <th rowspan={3}><h2>Local Languages</h2></th>
                                        <th>Twi</th>
                                        <th>Ga</th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <h3>Tuesday</h3>
                                            <p>5:30 - 6:30 pm</p>
                                        </th>
                                        <th>
                                            <h3>Thursday</h3>
                                            <p>3:30 - 4:30 pm</p>
                                        </th>
                                    </tr>
                                </table>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <h4 className='categories_Header'>Our Services</h4>
                <h1 className='categories_text'>Keeping our church running smoothly</h1>
                <article className='categories'>
                <div className='events'>
                    <hr/>
                    <h2>Praise & Worship</h2>
                    <p>
                        Our church is open and friendly with many social activities. 
                        To keep our church running smoothly, we have committees . 
                    </p>
                    <a href='events.html'>+ View Our Events</a>
                    <hr/>
                </div>
                <div className='appointment'> 
                    <hr/>
                    <h2>Counselling</h2>
                    <p>
                        We exist to represent Christ to our community and world so that 
                        they might see Jesus and realize all that God has planned for them! 
                    </p>
                    <a href='events.html'>+ Read more</a>
                    <hr/>
                </div>
                <div className='sermons'> 
                    <hr/>
                    <h2>Sermons</h2>
                    <p>
                        We exist to represent Christ to our community and world so that 
                        they might see Jesus and realize all that God has planned for them! 
                    </p>
                    <a href='events.html'>+ Read more</a>
                    <hr/>
                </div>
                </article>
            </section>
        </section>
    )
}

export default Body;