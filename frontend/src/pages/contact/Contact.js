import React from 'react';
import './Contact.css'

export default function Contact() {
    return(
        <main id='contact'>
            <div id='contact-form-container'>
                <h1 id='contact-title'>Contact</h1>
                <p>Please do not hesitate to contact us with any enquiries</p>
                <p>Send us a message</p>
                <form id='contact-form'>
                    <input className='contact-input' type='text' placeholder='first name'/>
                    <input className='contact-input' type='text' placeholder='last name'/>
                    <input className='contact-input' type='text' placeholder='email'/>
                    <input className='contact-input' type='text' placeholder='Leave us a message...'/>
                    <button id='create-account-button' >submit</button>
                </form>
            </div>
        </main>
    )
}