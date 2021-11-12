import React from 'react';
import Advertise from '../../Advertise/Advertise';
import HomeBanner from '../HomeBanner/HomeBanner';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
         
         <HomeBanner></HomeBanner>

         <Advertise></Advertise>

         <LatestNews></LatestNews>
        </div>
    );
};

export default Home;