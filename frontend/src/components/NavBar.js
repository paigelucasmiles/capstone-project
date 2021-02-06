import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import Logo from '../images/FOSSE-choc.png';

export default function NavBar() {
    return (
        <>
        <div className='top-bar-left'>
            <ul className='menu vertical left-medium-horizontal'>
                {/* <Link className="nav-list-item" to='/'>Home</Link> */}
                <Link className="nav-list-item" to='/shop'>Shop</Link>
                <Link className="nav-list-item" to='/gallery'>Gallery</Link>
                <Link className="nav-list-item" to='/about'>About</Link>
            </ul>
        </div>
        <div className='top-bar-center'>
            <a href='/'><img id='logo' src={Logo} alt="Fosse logo" /></a>
        </div>
        <div className='top-bar-right'>
            <ul className="menu vertical right-medium-horizontal">
                <Link className="nav-list-item" to='/login'>Login</Link>
                {/* <Link className="nav-list-item" to='/signup'>Sign Up</Link> */}
                <Link className="nav-list-item" to='/cart'>Cart</Link>
                <Link className="nav-list-item" to='/contact'>Contact</Link>
            </ul>
        </div>
        </>
    )
}
