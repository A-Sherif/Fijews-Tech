import React from 'react';
import '../styles/header.css'

const Header = () =>{
    return(
        <nav>
            <ul>
                <li><a href='index.html'><ul></ul>Home</a></li>
                <li><a href='events.html'><ul></ul>Events</a></li>   
                <li><a href='forum.html'><ul></ul>Forum</a></li>    
                <li><a href='about.html'><ul></ul>About</a></li>
            </ul>
        </nav>
    )
}
export default Header;