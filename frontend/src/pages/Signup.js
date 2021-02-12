import React from 'react';
import './Signup.css'

import { Link } from 'react-router-dom';

export default function SignUp() {
    return(
        <main id='signup'>
            <div id='signup-form-container'>
                <h1 id='signup-title'>Create Account</h1>
                <form id='signup-form'>
                    <input className='signup-input' type='text' placeholder='first name'/>
                    <input className='signup-input' type='text' placeholder='last name'/>
                    <input className='signup-input' type='text' placeholder='email'/>
                    <input className='signup-input' type='password' placeholder='password'/>
                    <button id='create-account-button' >submit</button>
                    <div id='link-to-login-container'>
                        <p id='have-account-text'>Have an account?</p><Link id="have-account-link" to='/login'>Login</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}