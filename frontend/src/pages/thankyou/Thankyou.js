import React from 'react'
import './Thankyou.css'

import { Link } from 'react-router-dom'; 

export default function Thankyou() {
    return (
        <div>
            <div id='thank-you-container'>
                <h1 id='thank-you-title'>Thank You For Your Order!</h1>
                <p className='thank-you-text'>For information about how to look after your new Fosse pieces view our <Link className='thankyou-link' to='/information'>care instructions</Link>.</p>
                <p className='thank-you-text'><Link className='thankyou-link' to='/shipping'>Shipping & returns</Link> information.</p>
                <p className='thank-you-text'>Please don't hesitate to <Link className='thankyou-link' to='/contact'>contact</Link> us with any questons.</p>
            </div>
        </div>
    )
}
