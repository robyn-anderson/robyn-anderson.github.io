import React from 'react'
import './ContactForm.css'

function ContactForm(props) {
  // Contact form is a modal. So far it does not 'do' anything (no email sent). Plan to add this later, possibly using EmailJS?
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
                <input type='submit' className='form-submit' onClick={props.handleClick} /> {/* Close the form on 'submit'. Should add a way to display a quick 'thank you' - maybe using a timeout function and naother modal? */}
            </form>
          </main>
        );
        }
    
        return (
          <div style={{display:'none'}}></div>
        );
}

export default ContactForm