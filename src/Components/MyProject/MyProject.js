import React from 'react';
import ecommerceImg from '../Images/Ecommerce.png';
import bookingImg from '../Images/hotelbooking.jpg';
import stockMarketImg from '../Images/stockMarker.jpg';
import education from '../Images/education.jpg';
import chatbot from '../Images/chatbot.jpg';

const ProjectCard = ({ imgSrc, altText, projectLink, projectName }) => (
    <div className="relative group h-screen w-full">
    <a 
      href={projectLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="absolute top-50 left-0 w-full text-red-600 z-10 opacity-10 no-underline text-center text-mono text-3xl style-none group-hover:text-blue-900 group-hover:opacity-100"
    >
      {projectName}
    </a>
  
    {/* Hidden image */}
    <img 
      src={imgSrc} 
      alt={altText} 
      className=" opacity-90 hover:opacity-10 h-full"  // Hides the image entirely
    />
    
  </div>
  
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
      altText: 'Chatboy',
      projectLink: 'https://github.com/anotherProject',
      projectName: 'Chatbot',
    },
    {
      imgSrc: education,
      altText: 'Education',
      projectLink: 'https://github.com/fifthProject',
      projectName: 'Educational website',
    },
  ];

  return (
    <>
      <div className="flex justify-center font-mono text-3xl text-blue-400 m-4">
        My Projects
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-400 h-full p-4 rounded-md"
          >
            <ProjectCard 
              imgSrc={project.imgSrc} 
              altText={project.altText} 
              projectLink={project.projectLink} 
              projectName={project.projectName} 
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyProject;
