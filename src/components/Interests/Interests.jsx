import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import './Interests.css'
import skiingImg from '../../assets/skiing.jpeg'
import hikingImg from '../../assets/hiking.jpeg'
import bakingImg from '../../assets/baking.jpeg'
import bikingImg from '../../assets/biking.jpeg'
import hikingImg2 from '../../assets/hiking2.jpeg'

const interestImgs = [ // Making an array of the images for the animation
  skiingImg,
  hikingImg,
  bakingImg,
  bikingImg,
  hikingImg2
]

function Interests() {

  // Position in the array starts at 0
  const [position, setPosition] = useState(0)

  // React-spring useTransitions to swap out images (ref: https://react-spring.dev/hooks/use-transition#usetransition)
  const transitions = useTransition(position, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  // UseEffect and setInterval to run the animation
  useEffect(() => {
    let imgInterval = setInterval(() => {
      setPosition((index) => (index + 1) % interestImgs.length)
    }, 3000)
    return () => clearInterval(imgInterval) // Clear the interval so it doesn't keep speeding up over time
  }, [])

  return (
    <>
      <h1><em>Interests</em></h1>
      <div className='interest-images'>
        {transitions((style, index) => (
          // animate the figure for the swapping images
          <animated.figure>
            <img src={interestImgs[index]} alt="Interests" />
          </animated.figure>
        ))}
      </div>
    </>
  )
}

export default Interests