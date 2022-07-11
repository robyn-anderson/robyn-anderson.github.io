import React, { useState } from 'react'
import{ Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Interests from './components/Interests/Interests';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';

function App() {

  // Function for handling the contact form pop-up
  const [ form, setForm ] = useState(false)

  function handleClick() {
    if (form === true) {
      setForm(false)
    }
    else {
      setForm(true)
    }
  }

  return (
    <>
    <Nav /> {/* persistent nav bar */}
    <main>
      <div className='main-content'>
      <Routes> {/* Routes for navigation */}
        <Route path='/' element={ <Home /> } /> {/* 'Home' is the Profile page */}
        <Route path='/projects' element={ <Projects /> } /> {/* Clips and links to project repos */}
        <Route path='/work-history' element={ <Work /> } /> {/* resume with option to download PDF */}
        <Route path='/interests' element={ <Interests /> } /> {/* Images showing interests */}
      </Routes>
      </div>
      <button onClick={handleClick} className='contact-button'>Contact Me</button>
      <ContactForm form={form} handleClick={handleClick}/> {/* Opening and closing the contact form modal */}
    </main>
    <Footer /> {/* persistent footer which holds copyright and linkedin and github links */}
  </>
  );
}

export default App;
