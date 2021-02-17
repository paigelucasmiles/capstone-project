import React, { useState } from 'react';
import './Login.css'

import { Link, Redirect } from 'react-router-dom';

export default function Login(props) {

    const { handleLogin, user, errorMessage } = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleLogin(email, password)
    }

    return(
        <main id='login'>
            {
                user 
                ? <Redirect to='/cart' /> 
                :
                <div id='login-form-container'>
                    <h1 id='login-title'>Log in to your account</h1>
                    <form id='login-form' onSubmit={handleSubmit} >
                        <input className='login-input' type='text' value={email} placeholder='email' onChange={handleEmailChange} />
                        <input className='login-input' type='password' value={password} placeholder='password' onChange={handlePasswordChange} />
                        {errorMessage ? <p className='error-message'>Incorrect email or password</p> : null}
                        <input className="input-submit" type="submit" id='login-button' value="login" />
                        <div id='link-to-signup-container'>
                            <p id='need-account-text'>Don't have an account?</p><Link id="need-account-link" to='/signup'>Create Account</Link>
                        </div>
                    </form>
                </div>
            }
        </main>
    )
}