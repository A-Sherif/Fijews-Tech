import React from 'react';
import '../styles/header.css'

const Header = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><a href='index.html'><ul></ul>Home</a></li>   
                    <li><a href='about.html'><ul></ul>Our Church</a></li>
                    <li><a href='events.html'><ul></ul>Events</a></li>   
                    <li><a href='blog.html'><ul></ul>Blog</a></li> 
                </ul>
            </nav>

            <hgroup>
                <h1>Our Church</h1>
                <p>The place where God dwells</p>
                <a href='about.html'>Learn More</a>
            </hgroup>
        </header>
    )
}
export default Header;