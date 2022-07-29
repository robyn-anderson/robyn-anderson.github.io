import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './ContactForm.css'

function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s3i1q6a', 'template_z8422j9', form.current, '_6-_odruM0cyRBlx3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  // Contact form is a modal. So far it does not 'do' anything (no email sent). Plan to add this later, possibly using EmailJS?
  if (props.form === true) {
    return (
      <main id='form-background'>
        <form ref={form} onSubmit={sendEmail} id='form-content'>
          <input type='text' placeholder="Your Name" />
          <input type='email' placeholder="Email" />
          <input type='phone' placeholder="Phone" />
          <input type='submit' className='form-submit' onClick={props.handleClick} /> {/* Close the form on 'submit'. Should add a way to display a quick 'thank you' - maybe using a timeout function and naother modal? */}
        </form>
      </main>
    );
  }

  return (
    <div style={{ display: 'none' }}></div>
  );
}

export default ContactForm