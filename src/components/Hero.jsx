import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-center text-black h-screen bg-white flex flex-col justify-center">
      {/* Main Header */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8">MICRO BUSINESS CONSULTING</h1>
      {/* Content */}
      <div className="text-center mx-auto max-w-md px-4">
        <h1 className="text-5xl md:text-7xl leading-tight mb-4">
          MYKCRO
        </h1>
        <div className="mb-6">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="btn-primary px-6 py-3 font-normal text-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 border hover:bg-purple-500 hover:text-white"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
