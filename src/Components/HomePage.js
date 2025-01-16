import React from 'react';
import heroImage from './Images/suresh_pp.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';
import { asset } from '../assets/assets';

const HomePage = () => {
  const navigate = useNavigate();

  // Handle "Contact Me" button click
  const handleContactButton = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800">Hi! I am Suresh Shrestha.</h1>
          <p className="mt-4 text-lg text-gray-600">Bachelor in Computer Engineering</p>

          {/* Animated Typing Text */}
          <TypeAnimation
            sequence={[
              'I am a FrontEnd Developer', 1200,
              'I am a UI/UX Developer', 1000,
              'I am a Full-Stack Developer', 1000,
              'I am a Developer', 1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: '1.5em',
              display: 'inline-block',
              fontFamily: 'monospace',
              color: 'orange', // Changed text color to orange
            }}
            repeat={Infinity}
          />

          {/* Contact Me Button */}
          <br />
          {/* <button
            variant='outline'
            
            onClick={handleContactButton}
          >
            Contact Me
          </button> */}
          <div className='flex gap-4 justify-center'>
          <button type="button" class="btn btn-outline-warning mt-12 px-3 py-2" onClick={handleContactButton}>Contact Me</button>
         <a href={asset.resume} download="Resume">
             <button type="button" class="btn btn-outline-warning mt-12 px-3 py-2" >Download CV</button>
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="w-full h-screen md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src={heroImage}
            alt="Hero Image"
            className="max-w-screen h-auto object-contain opacity-90 rounded-lg shadow-lg" // Added rounded corners and shadow for better appearance
            loading="lazy"
          />
        </div>
      </header>

      {/* Social Media Section */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">Follow me on social media</p>
        <div className="flex justify-center gap-4">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/profile.php?id=100053963673126"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-500 hover:scale-110 transition-transform duration-300"
            title="Follow me on Facebook"
          >
            <FaFacebook size={30} />
          </a>

          {/* Google Maps Icon */}
          <a
            href="https://maps.app.goo.gl/vR2Gf2bKMQbQh5xS8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-500 hover:scale-110 transition-transform duration-300"
            title="Find me on Google Maps"
          >
            <FaMapMarkerAlt size={30} />
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 hover:scale-110 transition-transform duration-300"
            title="Follow me on Twitter"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
