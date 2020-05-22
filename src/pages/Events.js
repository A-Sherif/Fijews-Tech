import React from 'react';

import Services from '../components/services'
import Categories from '../components/categories'
import List from '../components/eventList'

function Events(){
    return(
        <div>
            <Services/>
            <List/>
            <Categories/>
        </div>
    )
}

export default Events;