import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import Header from './components/Header';
import Body from './components/body';

function App(){
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

