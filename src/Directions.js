import React from "react";
import map from './resources/images/map.png';
import background from './resources/images/background.jpg';
import back2 from './resources/images/back2.jpg';
function Directions() {
    return (
        <div>
                  
            <div className="direction">
                <img src={back2} /> 
                <div className="direction-content">
                    <h1>"Royal Pine"<br/>
                    Big Bite Resort<br/>
                    NH-58, Meerut Bypass Rd, Partapur, Meerut<br/>
                    Click on the image below to get the directions to the location</h1>
                    <div>
                        <a href="https://www.google.com/maps/dir//Big+Bite+Resort,+NH-58,+Meerut+Bypass+Rd,+opposite+BIT+college,+Partapur,+Meerut,+Uttar+Pradesh+250103,+India/@28.928966,77.641355,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390c614fcf5827d5:0xef583c1addf1d776!2m2!1d77.641355!2d28.928966?hl=en-US" target="_blank">
                            <img src={map}/>
                        </a>
                    </div>

                 </div>
            </div>
        </div>
    );
}

export default Directions;