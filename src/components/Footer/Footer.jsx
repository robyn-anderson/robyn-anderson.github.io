import React, { useState } from 'react'
import './Footer.css'
import linkedInLogo from '../../assets/In-White-21.png'
import gitHubLogo from '../../assets/GitHub-Mark-Light-32px.png'


function Footer() {
  
  

  return (
   
    <footer>
      <div>
        <em>Located in Stowe, Vermont</em>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/robyn-anderson-88b80242' target='_blank'><img src={linkedInLogo} alt='linkedIn logo link'/></a><a href='https://github.com/robyn-anderson' target='_blank'><img width='21px'src={gitHubLogo} alt='linkedIn logo link'/></a>
      </div>
    </footer>

  )
}

export default Footer