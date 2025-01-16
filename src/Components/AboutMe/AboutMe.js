import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../Images/suresh_pp.jpg';
import './AboutMe.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variant';
import {asset, resume} from '../../assets/assets'
// import {resume } from './suresh_resume.pdf'

// Reusable component for list items
const InfoListItem = ({ title, description }) => (
  <li className="mb-4">
    <span className="text-orange-600 font-mono text-2xl">{title}</span>
    <br />
    <span className="text-gray-700">{description}</span>
  </li>
);

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('skills'); // State to manage active tab

  const tabContent = {
    skills: [
      { title: 'UI/UX', description: 'Designing Web/App Interfaces' },
      { title: 'Web Development', description: 'Web App Development' },
      { title: 'AI/ML', description: 'Model Training and Validation' },
    ],
    experience: [
      { title: 'Current Status', description: 'Working somewhere as FrontEnd Developer' },
      { title: '2024', description: 'Leads Hack the Circle' },
    ],
    education: [
      { title: '2020-2024', description: 'Bachelor in Computer Engineering from Khwopa College of Engineering' },
      { title: '2018-19', description: '+2 Science from Khwopa College' },
    ],
  };

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="container py-5"
    >
      <div className="row">
        {/* Profile Image Section */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="col-md-4 text-center mb-2 mb-md-0"
        >
          <img
            src={heroImage}
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="col-md-8"
        >
          <h2 className="mb-4">About Me</h2>
          <Tabs
            id="about-tabs"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3 text-orange-400"
          >
            {/* Dynamically generate tabs */}
            {Object.keys(tabContent).map((tabKey) => (
              <Tab
                key={tabKey}
                eventKey={tabKey}
                title={<span className={activeTab === tabKey ? 'active-tab' : ''}>{tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}</span>}
              >
                <ul className="ml-0 text-left">
                  {tabContent[tabKey].map(({ title, description }) => (
                    <InfoListItem key={title} title={title} description={description} />
                  ))}
                </ul>
              </Tab>
            ))}
          </Tabs>
        </motion.div>
      </div>

      {/* Download Resume Button */}
      {/* <motion.div
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mt-4"
      > */}
      <div className='mt-[-12]'>
      <a href={asset.resume} download className="btn btn-outline-warning">
  Download CV
</a>

      </div>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default AboutPage;
