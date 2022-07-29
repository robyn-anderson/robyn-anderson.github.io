import React from 'react'
import profilePhoto from '../../assets/profile-photo.jpeg'
import './Home.css'

function Home() {
  // Profile page with photo and some text.

  return (
    <>
      <h1><em>Profile</em></h1>
      <div className='profile'>
        <img className='profile-photo' src={profilePhoto} alt='Robyn working with her dog Kip' />
        <p>Cuddles are key to success.<br /><br />
          As are perseverance, commitment, and attention to detail.<br /><br />
          I am currently enrolled in Burlington Code Academy's Software Development Bootcamp where I am by turns fascinated and frustrated but always full of gratitude for the opportunity to sprint headlong towards a new and exciting career path.
        </p>
      </div>
    </>
  )
}

export default Home