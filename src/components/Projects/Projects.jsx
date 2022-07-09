import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <>
        <h1><em>Projects</em></h1>
        <div className='demos'>
          <figure>
          <iframe width="350" height="300" src="https://www.loom.com/embed/477edd433fa949e69b9cf8f8f7b1fdde" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <figcaption>Week 1: Guess the Number - JS Project<br/><em><a href='https://github.com/burlingtoncodeacademy-students/guess-the-number-robyn-anderson' target='_blank'>Link to gitHub Repository</a></em></figcaption>
          </figure>
          <figure>
          <iframe width="350" height="300" src="https://www.loom.com/embed/55b61f29344e461f884085b8030f992c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <figcaption>Week 2: Zorkington Perry Hill Adventure - JS Project<br/><em><a href='https://github.com/burlingtoncodeacademy-students/zorkington-robyn-anderson' target='_blank'>Link to gitHub Repository</a></em></figcaption>
          </figure>
          <figure>
          <iframe width="350" height="300" src="https://www.loom.com/embed/468c45df0dea4b98ada787d23dd19468" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <figcaption>Weeks 3-4: Jeopardy Game - HTML, CSS, JS Project<br/><em><a href='https://github.com/burlingtoncodeacademy-students/jeopardy-board-robyn-anderson' target='_blank'>Link to gitHub Repository</a></em></figcaption>
          </figure>
        </div>
    </>
  )
}

export default Projects