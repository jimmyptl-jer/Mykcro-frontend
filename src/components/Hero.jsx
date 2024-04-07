import React from 'react';

const services = [
  { name: 'Accounting', color: '#FF7FD9' },
  { name: 'Administration', color: '#FDE584' },
  { name: 'Banking', color: '#9DE5FF' },
  { name: 'Government', color: '#EAA4FF' },
  { name: 'Human Resources', color: '#18E8C3' },
  { name: 'Insurance', color: '#FDC2BE' },
  { name: 'Legal', color: '#FF7FD9' },
  { name: 'Marketing', color: '#FDE584' },
  { name: 'Mental Health', color: '#9DE5FF' },
  { name: 'Operations', color: '#EAA4FF' },
  { name: 'Public Relations', color: '#18E8C3' },
  { name: 'Social Media', color: '#FDC2BE' },
];

const Hero = () => {
  return (
    <div className="relative text-center text-black h-screen bg-white flex flex-col justify-center">
      {/* Main Header */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Making life easier for small business owners</h1>
      {/* Service Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {services.map((service, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 text-sm rounded-lg font-medium"
            style={{ backgroundColor: service.color, color: '#fff' }}
          >
            {service.name}
          </span>
        ))}
      </div>
      {/* Content */}
      <div className="text-center mx-auto max-w-md px-4">
        <h1 className="text-5xl md:text-7xl leading-tight mb-4">
          MYKCRO
        </h1>
        <div className="mb-6">
          <p className="text-lg md:text-xl mb-4">FINALLY manage your entire business in one place!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
