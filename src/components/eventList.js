import React from 'react'

import '../styles/list.css'

const Events=[
    {
        title: 'No Event',
        message:'Unfortunately there are no upcoming events',
        date: '00/00/00'
    },{
        title:'No Event',
        message:'Unfortunately there are no upcoming events',
        date: '00/00/00'
    },{
        title:'No Event',
        message:'Unfortunately there are no upcoming events',
        date: '00/00/00'
    }
]

export default function List(){
    return(
        <section>
            <h1 className='List-Header'>Upcoming Events</h1>
            <div className='events'>
            {Events.map((item,index)=>(
                <div className= 'list' key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.message}</p>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
        </section>
    )
}
