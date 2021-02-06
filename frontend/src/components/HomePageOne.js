import React from 'react'
import './HomePageOne.css'

export default function HomePageOne() {
    return (
        <div className='home-row' >
            <div className='home-column'>
                <div className='left-column row-1' >
                    {/* <p>Sometext in blue column</p> */}
                </div>
            </div>
            <div className='home-column' >
                <div className='right-column row-1' >
                    <div className='text-container'>
                        <h1 className='home-title'>Responsible Slow Fashion</h1>
                        <p className='value-prop'>Luxury Loungewear</p>
                        <p className='value-prop'>Sustainable Textiles</p>
                        <p className='value-prop'>Handmade in the UK</p>
                        <a className='shop-collection-link' href='/shop'>Shop Collection</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
