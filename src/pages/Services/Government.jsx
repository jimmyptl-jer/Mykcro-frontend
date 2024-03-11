import React from 'react';
import ServiceCard from '../../components/ServiceCard';

const Government = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Government Services</h2>
      <ServiceCard
        title="Canada Revenue Agency (CRA)"
        link="https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/business-account.html"
        description="The Canada Revenue Agency provides various digital services for businesses."
      />
    </div>
  );
};

export default Government;
