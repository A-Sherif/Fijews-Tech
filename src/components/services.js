import React from 'react';
import '../styles/services.css'

const table = [
    {
        type: 'Main',
        day: 'Sunday',
        time: '8:30 A.M - 11:30 A.M',
    },{
        type: 'Bible Study',
        day: 'Tuesday',
        time: '6:30pm - 8:30pm',
    },{
        type: 'Convenant Service',
        day: 'Friday',
        time: '6:30pm - 8:30pm',
    },
]

const Services = () =>{
    return(
        <article className='services-Article'>
            <div className='services-Header'>
                <h1>Meeting Times</h1>
                <h3>Join us during our services for exciting takes on the word of God</h3>
            </div>
            <div className='table-size'>
            {table.map((item,index) => (
                <div 
                    key= {index} 
                    className='table-content'>
                    <div className='table-inner'>
                        <h2>{item.type}</h2>
                        <h3>{item.day}</h3>
                        <h3>{item.time}</h3>
                    </div>
                </div>
            ))}
            </div>
        </article>

    )
}

export default Services;