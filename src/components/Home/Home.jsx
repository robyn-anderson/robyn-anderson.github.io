import React from 'react'
import profilePhoto from '../../assets/profile-photo.jpeg'
import './Home.css'

function Home() {
  return (
    <>
        <h1><em>Profile</em></h1>
        <div className='profile'>
          <img className='profile-photo' src={profilePhoto} alt='Profile photo'/>
          <p>Cuddles are key to success.<br/><br/>
          As are perseverance, commitment, and attention to detail.<br/><br/>
          I am currently enrolled in Burlington Code Academy's Software Development Bootcamp and am by turns fascinated and frustrated but always full of gratitude for the opportunity to sprint headlong into a new opportunity.</p>
        </div>
    </>
  )
}

export default Home