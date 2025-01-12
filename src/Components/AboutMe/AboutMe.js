import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from './sumanupd.jpg'
import './AboutMe.css';
import { asset } from '../../assets/assets';
// import {resume} from './suman_resume.pdf'

const AboutPage = () => {
  const [key, setKey] = useState('skills'); // Default active tab is 'skills'

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left side: Image */}
        <div className="col-md-4 mt-16 ">
          <img
            src={heroImage}
            alt="Profile"
            className="img-fluid rounded-circle " loading='lazy'
          />
        </div>

        {/* Right side: Content (Tabs) */}
        <div className="col-md-8">
          <h2 className="mb-4">About Me</h2>
          <Tabs
            id="about-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            {/* Skills Tab */}
            <Tab
              eventKey="skills"
              title={<span className={key === 'skills' ? 'active-tab' : ''}>Skills</span>}
            >
              <div>
                <ul className='ml-auto text-left'>
                    <li><span className='text-blue-600 font-mono text-2xl mt-4'>UI/UX</span>
                    <br/>
                    Designing Web/App Interfaces
                    </li>
                    <li><span className='text-blue-600 font-mono text-2xl mt-4'>Web Development</span>
                    <br/>
                    Web App Development
                    </li>
                    <li><span className='text-blue-600 font-mono text-2xl'>AI/ML</span>
                    <br/>
                     Model Training and Validation
                    </li>
                </ul>
              </div>
            </Tab>

            {/* Experience Tab */}
            <Tab eventKey="experience" title="Experience">
              <div>
                <ul className='text-left m-2'>

              <li><span   className='text-blue-600 font-mono text-2xl mt-4'>Current Status</span>
                    <br/>
                    Working Somewhere as FrontEnd Developer
                    </li>
              <li><span className='text-blue-600 font-mono text-2xl mt-4'>2024</span>
                    <br/>
                    Leads Hack the Circle 
                    </li>
                </ul>
              </div>
            </Tab>

            {/* Education Tab */}
            <Tab eventKey="education" title="Education">
              <div>
              <ul className='text-left m-2'>

<li><span className='text-blue-600 font-mono text-2xl mt-4'>2019</span>
      <br/>
      Joined Khwopa Collage of Engineering
      </li>
<li><span className='text-blue-600 font-mono text-2xl mt-4'>2017</span>
      <br/>
      Joined VS Niketan 
      </li>
  </ul>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    <a href={asset.resume} download='Resume'>
       <button type="button" class="btn btn-outline-primary">Download CV</button>
      </a> 
    </div>
  );
};

export default AboutPage;
