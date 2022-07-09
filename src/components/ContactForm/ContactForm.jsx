import React from 'react'
import './ContactForm.css'

function ContactForm(props) {

    if (props.form === true) {
        return (
          <main id='form-background'>
            <form id='form-content'>
                <label htmlFor='name'>Your Name</label>
                <input type='text' />
                <label htmlFor='email'>Email</label>
                <input type='email' />
                <label htmlFor='phone'>Phone</label>
                <input type='phone' />
                <input type='submit' className='form-submit' onClick={props.handleClick} />
            </form>
          </main>
        );
        }
    
        return (
          <div style={{display:'none'}}></div>
        );
}

export default ContactForm