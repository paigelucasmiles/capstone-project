import React from 'react';

import './About.css'

export default function About() {
    return(
        <main id='about'>
            <h1 className='page-title'>Our Story</h1>
            <div className="about-page-container">
                <p className='about-description'>Working from home is our new normal: it's time to invest in comfort without sacrificing elegance.</p>
                <p className='about-description'>Fosse is a clothing brand focused on creating sustainable loungewear, with an emphasis on luxurious, high quality pieces that will last</p>
                <p className='about-description'>Fosse is dedicated to using responsible business practices, contributing to slow fashion and using only sustainable textiles.</p>
                <p className='about-description'>Each Fosse piece is designed ad handmase in out studio in Somerset. For now, Fosse will be operating on a made-to-order basis with bamboo silk or certified linen peices that can be made in the colours shown.</p>
                <p className='about-description'>This is a very new process so please be patient, we will do everything we can to get you beautiful pieces to you as soon as possible.</p>
            </div>
        </main>
    )
}