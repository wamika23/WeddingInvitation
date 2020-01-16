import React from "react";
import ImageGallery from 'react-image-gallery';
import styles from "react-image-gallery/styles/css/image-gallery.css";
import img1 from './resources/images/img1.PNG';
import img2 from './resources/images/img3.PNG';
import img3 from './resources/images/img3.PNG';
import img4 from './resources/images/img4.PNG';
import img from './resources/images/img.JPG'


function ImgGallery() {

    const images = [
        {
            original: img1,
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },

    ];

    return (
        <ImageGallery items={images} infinite={true} autoPlay={true} showPlayButton={false} showFullscreenButton={false} showBullets={true}/>
    );
}

export default ImgGallery;