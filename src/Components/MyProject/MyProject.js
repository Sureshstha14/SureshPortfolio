import React from 'react';
import ecommerceImg from '../Images/Ecommerce.png';
import bookingImg from '../Images/hotelbooking.jpg';
import stockMarketImg from '../Images/stockMarker.jpg';
import education from '../Images/education.jpg';
import chatbot from '../Images/chatbot.jpg';

// ProjectCard Component
const ProjectCard = ({ imgSrc, altText, projectLink, projectName, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    {/* Project Image */}
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <img 
        src={imgSrc} 
        alt={altText} 
        className="w-full h-56 object-cover hover:scale-105" 
        loading="lazy" 
      />
    </a>

    {/* Project Details */}
    <div className="p-4">
      {/* Project Name */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{projectName}</h3>
      
      {/* Project Description */}
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  </div>
);

// MyProject Component
const MyProject = () => {
  const projects = [
    {
      imgSrc: ecommerceImg,
      altText: 'Ecommerce Website',
      projectLink: 'https://www.youtube.com/shorts/z1gPB3l8ipQ',
      projectName: 'Ecommerce Dairy',
      description: 'An ecommerce platform to manage dairy products and sales.',
    },
    {
      imgSrc: bookingImg,
      altText: 'Booking Website',
      projectLink: 'https://github.com/Sureshstha14/SubashDairy',
      projectName: 'Booking System',
      description: 'A booking system for managing hotel reservations efficiently.',
    },
    {
      imgSrc: stockMarketImg,
      altText: 'Stock Market Project',
      projectLink: 'https://github.com/Sureshstha14/SubashDairy',
      projectName: 'Stock Market Analysis',
      description: 'A tool for analyzing stock market trends and data.',
    },
    {
      imgSrc: chatbot,
      altText: 'Chatbot Project',
      projectLink: 'https://github.com/anotherProject',
      projectName: 'Chatbot',
      description: 'An AI-powered chatbot for customer support automation.',
    },
    {
      imgSrc: education,
      altText: 'Educational Website',
      projectLink: 'https://github.com/fifthProject',
      projectName: 'Educational Website',
      description: 'A platform to share educational content and tutorials.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {/* Header */}
      <h2 className="text-center text-4xl font-bold text-blue-500 mb-8">My Projects</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            imgSrc={project.imgSrc} 
            altText={project.altText} 
            projectLink={project.projectLink} 
            projectName={project.projectName} 
            description={project.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default MyProject;
