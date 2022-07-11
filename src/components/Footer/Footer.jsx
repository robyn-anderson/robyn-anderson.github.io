import React, { useState } from 'react'
import './Footer.css'
import linkedInLogo from '../../assets/In-White-21.png'
import gitHubLogo from '../../assets/GitHub-Mark-Light-32px.png'


function Footer() {
// Location, copyright, links to gitHub and LinkedIn  

  return (
   
    <footer>
      <div className='footer-text'>
        <em>Located in Stowe, Vermont</em>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/robyn-anderson-88b80242' target='_blank'><img src={linkedInLogo} alt='linkedIn logo link'/></a><a href='https://github.com/robyn-anderson' target='_blank'><img width='21px'src={gitHubLogo} alt='linkedIn logo link'/></a>
      </div>
      <div className='footer-text'>
        <em>© 2022 Robyn Anderson</em>
      </div>
    </footer>

  )
}

export default Footer