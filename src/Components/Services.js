import React from 'react';
import { FaCode, FaPaintBrush, FaDatabase } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} className="text-blue-500" />,
    title: 'Web Development',
    description: 'Building responsive and modern websites using React, Node.js, and more.',
  },
  {
    icon: <FaPaintBrush size={40} className="text-pink-500" />,
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces with a focus on great user experiences.',
  },
  {
    icon: <FaDatabase size={40} className="text-green-500" />,
    title: 'Database Management',
    description: 'Efficiently handling data storage and retrieval using MongoDB and SQL.',
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white text-center shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
