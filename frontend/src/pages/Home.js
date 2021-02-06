import React from 'react';

import HomePageOne from '../components/HomePageOne';
import HomePageTwo from '../components/HomePageTwo';
import HomePageThree from '../components/HomePageThree';

export default function Home() {
    return(
        <div className='home-page-wrapper'>
            <HomePageOne />
            <HomePageTwo /> 
            <HomePageThree />
        </div>
    )
}