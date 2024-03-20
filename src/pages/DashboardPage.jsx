import React from 'react';
import { Link } from 'react-router-dom';
import Todo from '../components/Todo';
import TaskList from '../components/TaskList';
import { useQuery } from 'react-query';
import * as apiClient from '../http';

const Dashboard = () => {
  // Fetch all services using react-query
  const { data: services, isLoading } = useQuery('services', apiClient.getAllServices);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column for services */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl text-purple-500 mb-4">Existing Services</h2>
            {isLoading ? (
              <div className="text-center">Loading...</div>
            ) : services && services.length > 0 ? (
              <div className="flex flex-col gap-4">
                {services.map((service, index) => (
                  <div key={index}>
                    <Link to={`/services/${service._id}`} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full block">
                      {service.name}
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div>No services found.</div>
            )}
          </div>
        </div>

        {/* Middle column for Todo */}
        <div className="col-span-1 md:col-span-2">
          <div className="max-w-md mx-auto bg-white rounded-lg p-4 mb-8">
            <h2 className="text-2xl text-purple-500 mb-4">Todo List</h2>
            <Todo />
          </div>

          <div className="max-w-md mx-auto bg-white rounded-lg p-4">
            <h2 className="text-2xl text-purple-500 mb-4">Task List</h2>
            <TaskList />
          </div>
        </div>
      </div>

      {/* Button to manage services */}
      <div className="flex justify-center mt-8">
        <Link to="/manage-services" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Manage Services
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
