import React from 'react';

import HomePageOne from '../../components/home/HomePageOne';
import HomePageTwo from '../../components/home/HomePageTwo';
import HomePageThree from '../../components/home/HomePageThree';

export default function Home() {
    return(
        <div className='home-page-wrapper'>
            <HomePageOne />
            <HomePageTwo /> 
            <HomePageThree />
        </div>
    )
}