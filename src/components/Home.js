import React from "react";
import Header from './Home/Header';
import HomeSectionTwo from './Home/HomeSectionTwo';
import AboutUs from './Home/AboutUs';
import VideoSection from './Home/VideoSection';
// import Accomplishments from './Home/Accomplishments';

const Home = () => (

    <div>
        <Header />
        <HomeSectionTwo />
        <AboutUs/>
        <VideoSection/>
        {/*<Accomplishments/>*/}
    </div>

);

export default Home;