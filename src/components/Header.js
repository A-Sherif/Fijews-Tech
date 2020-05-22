import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import '../styles/header.css';

const Header = () =>{
    return(
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to= "/">Home</Link></li>   
                        <li><Link to= "/About">Our Church</Link></li>
                        <li><Link to="/Events">Events</Link></li>   
                        <li><Link to="/Blog">Blog</Link></li> 
                    </ul>
                </nav>

            </header>
        </Router>
    )
}
export default Header;