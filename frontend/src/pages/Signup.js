import React, { useState } from 'react';
import './Signup.css'

import { Link, Redirect } from 'react-router-dom';

export default function SignUp(props) {

    const { handleSignUp, user } = props

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSignUp(firstName, lastName, email, password)
    }


    return(

        <main id='signup'>
            {
                user ? <Redirect to='/cart' /> 
                :
                <div id='signup-form-container'>
                    <h1 id='signup-title'>Create Account</h1>
                    <form id='signup-form' onSubmit={handleSubmit} >
                        <input className='signup-input' type='text' value={firstName} placeholder='first name' onChange={handleFirstNameChange} />
                        <input className='signup-input' type='text' value={lastName} placeholder='last name' onChange={handleLastNameChange} />
                        <input className='signup-input' type='text' value={email} placeholder='email' onChange={handleEmailChange} />
                        <input className='signup-input' type='password' value={password} placeholder='password' onChange={handlePasswordChange} />
                        <input id='create-account-button' type='submit' value="submit" />
                        <div id='link-to-login-container'>
                            <p id='have-account-text'>Have an account?</p><Link id="have-account-link" to='/login'>Login</Link>
                        </div>
                    </form>
                </div>
            }
        </main>
    )
}