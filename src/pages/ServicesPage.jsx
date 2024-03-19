import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BusinessForm from '../forms/BusinessForm';
import * as apiClient from '../http';

const ServicePage = () => {
  const { serviceId } = useParams();
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const data = await apiClient.getBusinessesByService(serviceId);
        setBusinesses(data);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      } finally {
        setIsLoading(false); // Set loading state to false when data is fetched
      }
    };

    fetchBusinesses();
  }, [serviceId]);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Business form */}
        <div>
          <h2 className="text-2xl text-center mb-6 text-purple-500">Add Business</h2>
          <BusinessForm serviceId={serviceId} />
        </div>

        {/* Render business details */}
        <div>
          <h2 className="text-2xl text-center mb-6 text-purple-500">Business Details</h2>
          {isLoading ? ( // Show loading message while fetching data
            <div>Loading...</div>
          ) : businesses.length > 0 ? ( // Check if businesses array is not empty
            <ul className="list-disc ml-8">
              {businesses.map((business) => (
                <li key={business._id}>
                  <div className="font-semibold">{business.businessName}</div>
                  <div>Email: {business.email}</div>
                  <div>Address: {business.address}, {business.city}, {business.province}, {business.country}, {business.postalCode}</div>
                  <div>Description: {business.description}</div>
                </li>
              ))}
            </ul>
          ) : (
            <div>No businesses found for this service. Please add one.</div> // Display message when no businesses found
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
