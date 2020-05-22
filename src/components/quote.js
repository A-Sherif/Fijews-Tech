import React from 'react';

import '../styles/quote.css'

function Quote(){
    return(
        <section className= 'quoteContainer'>
            <article className='biblequote'>
                <hr/>
                <h1> Bible Quote of The Day</h1>
                <h2> 
                    <q>
                        “Come now, let us settle the matter,” 
                        says the LORD. 
                        “Though your sins are like scarlet, 
                        they shall be as white as snow; 
                        though they are red as crimson, 
                        they shall be like wool.
                    </q> 
                </h2>
                <h3>Isaiah 1:18 </h3>
                <hr/>
            </article>
        </section>
    )
}

export default Quote;