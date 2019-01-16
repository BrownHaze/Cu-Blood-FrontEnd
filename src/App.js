import React, { Component } from 'react';
import Statistic from "./component/Statistic";
//import axios from './core/core';
import Navbar from './component/Navbar';
import EventContainer from './component/EventContainer';
import HomeHead from './component/HomeHead';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FacebookContainer from './component/FacebookContainer';
import Footer from './component/Footer';
import Announcement from './component/Announcement';
import UrgentAnnouncement from './component/UrgentAnnouncement';

//import EventCard from './component/EventCard';


class App extends Component {

  render() {

    return (
        
      <div className="font-sans border-black flex flex-col content-center w-screen" >
        <Navbar />
        <HomeHead />
        <UrgentAnnouncement />
        <Announcement />
        <EventContainer />
        <Statistic />
        <FacebookContainer />
        {/* <EventCard/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
