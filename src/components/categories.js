import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/categories.css'

const Selections=[
    {
        title: 'Praise & Worship',
        message:'Our church is open and friendly with many social activities.To keep our church running smoothly, we have committees.',
        button:'+ View Our Events',
        destination: 'Events'
    },{
        title:'Teaching',
        message:' Educating the community with the best in Christian values to empower the youth.',
        button:'+ Read more',
        destination: 'About'
    },{
        title:'Sermons',
        message:'We exist to represent Christ to our community and world so that they might see Jesus and realize all that God has planned for them!',
        button:'+ Read more',
        destination: 'Blog'
    }
]

const Categories = () =>{
    return(
        <section>
            <h3 className='categories_Header'>Our Services</h3>
            <h1 className='categories_text'>Keeping our church running smoothly</h1>
        
        <div className='categories'>
            {Selections.map((item,index)=>(
                <Link to={item.destination} className='containerLink'>
                    <div className= 'types' key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.message}</p>
                        <p className='catLink'>{item.button}</p>
                    </div>
                </Link>
            ))}
        </div>
        </section>
    )
}

export default Categories;