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
    <div className="container mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg rounded-lg">
        {/* Business form */}
        <div>
          <h2 className="text-2xl text-center mb-6 text-purple-500">Add Business</h2>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <BusinessForm serviceId={serviceId} />
          </div>
        </div>

        {/* Render business details */}
        <div>
          <h2 className="text-2xl text-center mb-6 text-purple-500">Business Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? ( // Show loading message while fetching data
              <div>Loading...</div>
            ) : businesses.length > 0 ? ( // Check if businesses array is not empty
              businesses.map((business) => (
                <div key={business._id} className="bg-purple-100 p-4 shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{business.businessName}</h3>
                  <p><strong>Email:</strong> {business.email}</p>
                  <p><strong>Link:</strong> {business.businessLink}</p>
                  <p><strong>Address:</strong> {business.address}, {business.city}, {business.province}, {business.country}, {business.postalCode}</p>
                  <p><strong>Description:</strong> {business.description}</p>
                </div>
              ))
            ) : (
              <div>No businesses found for this service. Please add one.</div> // Display message when no businesses found
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
