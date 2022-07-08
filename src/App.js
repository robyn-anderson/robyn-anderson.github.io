import React, { useState } from 'react'
import{ Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Interests from './components/Interests/Interests';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';

function App() {
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
    </main>
    <Footer />
  </>
  );
}

export default App;
