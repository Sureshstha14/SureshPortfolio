import React from 'react';
import ecommerceImg from '../Images/Ecommerce.png';
import bookingImg from '../Images/hotelbooking.jpg';
import stockMarketImg from '../Images/stockMarker.jpg';
import education from '../Images/education.jpg';
import chatbot from '../Images/chatbot.jpg';

const ProjectCard = ({ imgSrc, altText, projectLink, projectName }) => (
  <a 
    href={projectLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group block relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    {/* Project Image */}
    <img 
      src={imgSrc} 
      alt={altText} 
      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy" 
    />
    
    {/* Overlay with Project Name */}
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white text-lg font-semibold">{projectName}</span>
    </div>
  </a>
);

const MyProject = () => {
  const projects = [
    {
      imgSrc: ecommerceImg,
      altText: 'Ecommerce Website',
      projectLink: 'https://www.youtube.com/shorts/z1gPB3l8ipQ',
      projectName: 'Ecommerce Dairy',
    },
    {
      imgSrc: bookingImg,
      altText: 'Booking Website',
      projectLink: 'https://github.com/Sureshstha14/SubashDairy',
      projectName: 'Booking System',
    },
    {
      imgSrc: stockMarketImg,
      altText: 'Stock Market Project',
      projectLink: 'https://github.com/Sureshstha14/SubashDairy',
      projectName: 'Stock Market Analysis',
    },
    {
      imgSrc: chatbot,
      altText: 'Chatbot Project',
      projectLink: 'https://github.com/anotherProject',
      projectName: 'Chatbot',
    },
    {
      imgSrc: education,
      altText: 'Educational Website',
      projectLink: 'https://github.com/fifthProject',
      projectName: 'Educational Website',
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
          />
        ))}
      </div>
    </div>
  );
};

export default MyProject;
