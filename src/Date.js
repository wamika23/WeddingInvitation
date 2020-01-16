import React from 'react';
import goldenribbon from './resources/images/goldenribbon.PNG';

function Date(){
    return(
        <div className="date">
            <img src={goldenribbon}/>
            <div className="centered">February 1st,<br/> 2020</div>
        </div>
    );
}

export default Date;