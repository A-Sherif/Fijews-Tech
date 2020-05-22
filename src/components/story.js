import React from 'react';

import '../styles/story.css'

const Story=() =>{
    return(
        <section className='story'>
            <article>
                <h1>Who We Are</h1>
                <p>
                    Precious Blood Congregation is a small community church which is dedicated to imparting the best Christian teaaching and helping members of the community with any problem they face.
                    Our slogan, 'Adehye mogya bi akasa ama me ', which means 'The precious blood has spoken on my behalf'. This slogan was obatined from'The blood will speak on your behalf' <span style ={{fontWeight: 'bold'}}>Heb 12:24</span> .
                </p>
            </article>
            <article>
                <h1>Our Belief</h1>
                <p>
                    All are welcomed to our church, our pastors are able to speak multiple local languages to enable them impart the Word of God to the masses. We believe that the Christian
                    and non-Christian community should be brought together through the Word of God in such a way that it promotes peace and harmony.
                </p>
            </article>
            <article>
                <h1>Our Story</h1>
                <p>
                    Precious Blood Congregation, was founded in the year 2017 by our church head, Prophetess Vida Sakyi.
                    The church began in her own compound with her giving bible studies to her two sons and a few members of the community that resided close to her home.
                    As the days went by more members of the community started attending the bible studies and this led to a change in the premisis of the church.
                    Currently, she is acting as both a preacher and teacher, with a little assistance from Pastor Samuel Amankwah.
                </p>
            </article>
        </section>
    )
}

export default Story;