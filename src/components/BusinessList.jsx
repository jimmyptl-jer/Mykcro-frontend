import React, { useEffect, useState } from 'react';
import * as apiClient from '../http';
import { useAppContext } from '../context/AppContext';

const BusinessList = () => {
  const { showToast } = useAppContext();
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const fetchedBusinesses = await apiClient.getAllBusinesses();
        setBusinesses(fetchedBusinesses);
      } catch (error) {
        showToast({ message: "Failed to fetch businesses", type: "ERROR" });
      }
    };

    fetchBusinesses();
  }, [showToast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Businesses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {businesses.map(business => (
          <div key={business._id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">{business.businessName}</h2>
            <p className="text-sm text-gray-500 mb-2">{business.email}</p>
            <p className="text-sm text-gray-700 mb-4">{business.description}</p>
            <p className="text-sm text-gray-700 mb-1">{business.address}, {business.city}, {business.province}, {business.country}</p>
            <p className="text-sm text-gray-700 mb-4">Postal Code: {business.postalCode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
