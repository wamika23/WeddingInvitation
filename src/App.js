import React from 'react';
import logo from './logo.svg';
import TopInvite from './TopInvite';
import TopSlideshow from './TopSlideshow';
import Date from "./Date";
import Accordion1 from './Accordion1';
import ImgGallery from './ImgGallery';
import Invite from './Invite';
import Video from './Video';
import Directions from './Directions';
import './App.css';

function App() {
  return (
      <div className="main">
          <TopInvite/>
          <TopSlideshow />
          <Date />
          <Accordion1 />
         
    </div>
  );
}

export default App;
