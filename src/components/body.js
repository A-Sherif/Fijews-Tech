import React from 'react';
import { Link } from 'react-router-dom'

//COMPONENTS
import Services from '../components/services';
import Categories from '../components/categories'

//STYLE
import '../styles/body.css';
import Quote from './quote';

const Body = () =>{
    return(
        <section>
            <section className='secondary'>
                <Quote/>
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
                    <Link to='/About' className='aboutLink'>Learn More</Link>
                    </div>
                </article>
               <Services/>
               <Categories/>
            </section>
        </section>
    )
}

export default Body;