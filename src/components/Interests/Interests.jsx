import React from 'react'
import './Interests.css'
import skiingImg from '../../assets/skiing.jpeg'
import hikingImg from '../../assets/hiking.jpeg'
import knittingImg from '../../assets/knitting.jpeg'
import bakingImg from '../../assets/baking.jpeg'
import bikingImg from '../../assets/biking.jpeg'
import hikingImg2 from '../../assets/hiking2.jpeg'

function Interests() {
  return (
    <>
        <h1><em>Interests</em></h1>
        <div className='interest-images'>
          <img src={hikingImg2} alt='Hiking with my dog' />
          <img src={knittingImg} alt='Knitting socks' />
          <img src={skiingImg} alt='Backcountry skiing' />
          <img src={hikingImg} alt='Relaxing in the outdoors' />
          <img src={bakingImg} alt='Baking tasty treats' />
          <img src={bikingImg} alt='All kinds of biking' />
        </div>
    </>
  )
}

export default Interests