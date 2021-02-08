import React from 'react'
import { Link } from 'react-router-dom';
import './HomePageTwo.css'

export default function HomePageTwo() {
    return (
        <div className='home-row'>

            <div className='home-column'>
                <div className='left-column row-2' >
                    <div className='linen-collection-image-container'></div>
                        <div id='left-row-2-text-container'>
                            <h3 className='collection-title'>Organic Linen Collection</h3>
                            <Link className='homepage-shop-link' to='/shop'>Shop Now</Link>
                        </div>
                </div>
            </div>
            <div className='home-column'>
                <div className='right-column row-2' >
                    <div className='silk-collection-image-container'></div>
                        <div id='right-row-2-text-container'>
                            <h3 className='collection-title'>Bamboo Silk Collection</h3>
                            <Link className='homepage-shop-link' to='/shop'>Shop Now</Link>
                        </div>
                </div>
            </div>

        </div>
    )
}
