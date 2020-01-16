import React from "react";
import background from './resources/images/background.jpg';
import back2 from './resources/images/back2.jpg';

function Invite() {
    
    return(    
            <div className="invite">
                <img src={back2} />  
                <div className="invitation-content">
                        <h1>Because you have shared in our<br />
                        lives and supported our love,we<br />
                        Wamika<br />
                        and<br />
                        Sagar<br />
                        request the pleasure of your<br />
                        company<br />
                        at the celebration of our<br />
                        marriage<br />
                        Saturday, February 1, 2020<br />
                        at 8:00 PM<br />
                        "Royal Pine,Big Bite Resort"<br />
                        Dinner and Dancing to follow</h1>         
                </div>
        </div>
    );
}

export default Invite;