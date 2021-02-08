import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        
        <div className='footer-container'>
            <div className='mailing-list-cta'>
                <h2 id='cta'>Support Small</h2>
                <p id="cta-text">Join the Fosse mailing list to receive updates as we grow!</p>
                <input id='footer-input' name='subscribe' placeholder='email'></input>
                <button id='subscribe-marketing-button' for='subscribe'>subscribe</button>
            </div>
            <div className='links-container'>
                <Link className='footer-link' to='/'>Home</Link>
                <Link className='footer-link' to='/shop'>Shop</Link>
                <Link className='footer-link' to='/about'>About</Link>
                <Link className='footer-link' to='/Gallery'>Gallery</Link>
                <Link className='footer-link' to='/contact'>Contact</Link>
                <Link className='footer-link' to='/information'>Information</Link>
                <Link className='footer-link' to='/shipping'>Shipping & Returns</Link>
            </div>
        </div>
    )
}