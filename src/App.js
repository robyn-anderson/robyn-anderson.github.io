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
    <Nav />
    <main>
      <div className='main-content'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/work-history' element={ <Work /> } />
        <Route path='/interests' element={ <Interests /> } />
      </Routes>
      </div>
      <button onClick={handleClick} className='contact-button'>Contact Me</button>
      <ContactForm form={form} handleClick={handleClick}/>
    </main>
    <Footer />
  </>
  );
}

export default App;
