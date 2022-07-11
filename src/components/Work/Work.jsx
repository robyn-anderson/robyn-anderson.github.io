import React from 'react'
import './Work.css'
import resumePDF from '../../assets/anderson-robyn-resume.pdf'

function Work() {
  return (
    <>
        <h1><em>Work History</em></h1>
        <div className='resume'>
          <a href={resumePDF} download><button id='resume-button'>Download Resume</button></a>
          <h4>Strengths & Qualifications:</h4>
          <strong>Project Leader:</strong> Experienced in creating, monitoring, and managing short and long-term projects involving testing, technical analysis, and systems development.<br/>
          <strong>Coder:</strong>  Currently enrolled in Burlington Code Academy's Software Development Bootcamp.<br/>
          <strong>Analyst:</strong> Proficient in gathering quality data and providing insightful analysis for product and systems development.<br/> 
          <strong>User Training & Support:</strong>  Demonstrated ability in designing effective technical training for internal and external clients. Adept in customizing training.<br/><br/>
          
          <h4>Education & Training:</h4>
          <strong>Burlington Code Academy</strong> | currently enrolled: expected August 2022<br/>
          Software Development Boot Camp<br/><br/>
          <strong>Middlebury College</strong> | 2010<br/>
          Bachelor of Arts, Environmental Studies: Environmental Policy, French minor<br/><br/>
          <strong>University of Vermont Continuing Education</strong> |	2011<br/>
          Website Design and Management, Programming I (MATLAB)<br/><br/>
          <strong>Yestermorrow Design/Build School</strong> |	2010 & 2012<br/>
          Home Design/Build Intensive, Sustainable Logging, Rustic Furniture Making<br/><br/>
          
          <h4>Professional Experience:</h4>
          <strong>Tourcube Software, LLC</strong> | Remote |	2016 to 2022<br/>
          Software Support & Trainer<br/>
          Onboard new customers provide technical support & training for this travel industry software company. Schedule new customer training, including coordinating client customization.<br/> 
          <em>Key Accomplishments:</em><br/>
          Test software updates and bug fixes.<br/>
          Created user-friendly technical documents and materials including software update release notes, training manuals, visual aids, and videos.<br/>
          Use variety of other applications to manage web form integrations and build itinerary templates.<br/><br/>
          <strong>Boundless Journeys</strong> | Stowe, VT | 2014 to 2015<br/>
          Operations Assistant<br/>
          Supported general office operations including catalog & gift trip mailings. Managed trip reservations and guest communications. Assisted staff with itinerary development & informal IT support.<br/>
          <em>Key Accomplishment:</em><br/>
          Collaborated with developer to onboard a new CRM & booking software in beta.<br/><br/>
          <strong>Stowe Craft & Design</strong> | Stowe, VT |2013 to 2014<br/>
          Website & Operations Support<br/>
          Provided marketing, e-commerce, and inventory management support for this interior design company. Monitored and communicated with customers regarding status of orders. Maintained and tracked inventory using Retail Edge and placed special orders with vendors.<br/>
          <em>Key Accomplishments:</em><br/>
          Managed the e-commerce website and updated website.<br/>
          Created marketing materials including photography & videography for use on Social Media.<br/><br/>
          <strong>Barn Door Media</strong> | Chelsea, VT | 2013<br/>
          Web Design/Build Intern<br/> 
          Updated and maintained client websites. Researched and presented new methods and approaches to employees, including responsive design and WordPress.<br/><br/>
          <strong>Vermont Cross-Country</strong> | Lamoille & Washington counties, VT | 2009 to 2013<br/>
          Co-Founder<br/>
          Co-founded and managed this athletic training program with a partner. Created and led intensive group and individual training for athletes of all ages in running and skiing. Organized and promoted programs via online (social media), print, and sponsorship of competitive
          fundraising skiing and running events.<br/><br/>
          <strong>Trapp Family Lodge</strong> | Stowe, VT 	2009 to 2013<br/>
          Ski Shop Sales and Instructor<br/><br/>
          <strong>Utility Risk Management Corporation</strong> | Stowe, VT | 2012<br/>
          Analyst<br/>
          Supported a variety of projects using primarily Geographic Information Systems and
          URMC's Thermal Direct technology. Gathered, entered, and analyzed data with Excel.<br/><br/>
          
          <h4>Community Engagement:</h4>
          Town of Stowe Conservation Commission	| April 2022 to Present<br/>
          Board member - Secretary<br/><br/>
          Stowe Nordic Masters Training Program | 2019 to Present<br/>
          Assistant Coach 

        </div>
    </>
  )
}

export default Work