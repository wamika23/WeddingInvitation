import React from "react";
import styles from "video-react/dist/video-react.css";
import teaser from './resources/images/tease.mp4';
import { Player } from 'video-react';


function Video() {
    return (
        <div>
             <Player
             playsInline
             poster="/assets/poster.png"
             src={teaser}
           />
        </div>
    );
}

export default Video;