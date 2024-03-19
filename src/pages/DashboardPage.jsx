import { Link } from 'react-router-dom';
import Todo from '../components/Todo'
import { useQuery } from 'react-query';
import * as apiClient from '../http';

const Dashboard = () => {
  // Fetch all services using react-query
  const { data: services, isLoading } = useQuery('services', apiClient.getAllServices);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column for services */}
        <div className="col-span-1">
          <h2 className="text-2xl text-center mb-10 text-purple-500">Existing Services</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex flex-col gap-4 justify-center m-4">
              {services.map((service, index) => (
                <div key={index}>
                  <Link to={`/services/${service._id}`} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
                    {service.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Middle and right columns for Todo and TaskList */}
        <div className="col-span-2">
          {/* Middle column for Todo */}
          <div className="max-w-md mx-auto m-8 p-4 bg-gray-100 rounded-lg">
            <Todo />
          </div>

          {/* Right column for TaskList */}
          <div className="max-w-md mx-auto m-8 p-4 bg-gray-100 rounded-lg">
            {/* Render the TaskList component */}
          </div>
        </div>
      </div>

      {/* Button to manage services */}
      <div className="flex justify-center mt-4">
        <Link to="/manage-services" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Manage Services
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
