import React from 'react';
import BusinessForm from '../forms/BusinessForm';

const AddBusinessPage = () => {
  return (
    <div className="min-h-screen mt-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add Business</h1>
        <BusinessForm />
      </div>
    </div>
  );
};

export default AddBusinessPage;
