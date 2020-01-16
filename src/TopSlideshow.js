import React from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from './resources/images/image1.JPG';
import image2 from './resources/images/image2.JPG';
import image3 from './resources/images/image3.JPG';
import image4 from './resources/images/image4.JPG';
import image6 from './resources/images/image6.JPG';
function TopSlideshow(){
    
    return(
        <div>
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} width={500} showArrows={false} dynamicHeight={true} showStatus={false} showIndicators={false}>
                <div>
                    <img src={image1} />               
                </div>
                <div>
                    <img src={image2} />                   
                </div>
                <div>
                    <img src={image3} />                   
                </div>
                <div>
                    <img src={image4} />
                </div>
                <div>
                    <img src={image6} />
                </div>
            </Carousel>
        </div>
    );
}

export default TopSlideshow;
