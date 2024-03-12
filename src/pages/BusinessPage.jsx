import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react'
import BusinessList from '../components/BusinessList'; // Import BusinessList component

const BusinessPage = () => {
  return (
    <div className="min-h-screen mt-10">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">

        <div className="flex-1">
          <Link to="/add-business" className="block mt-4 text-center text-blue-600 hover:underline">Add Business</Link> {/* Add Button to navigate to Add Business page */}

        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10"> {/* Render BusinessList component */}
        <BusinessList />
      </div>
    </div>
  );
};

export default BusinessPage;
