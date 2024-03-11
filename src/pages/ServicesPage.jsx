import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Using useNavigate for redirection

const Services = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  const tiles = ['Accounting', 'Administration', 'Banking', 'Government', 'Human-Resource', 'Legal', 'Marketing', 'Mental-Health', 'Operations', 'Public-Relations', 'Social-Media'];

  const [selectedTile, setSelectedTile] = useState('');

  // Function to handle tile click and redirect to respective page
  const handleTileClick = (tile) => {
    setSelectedTile(tile);
    navigate(`/${tile.toLowerCase()}`); // Redirect to the selected tile's page
  };

  return (
    <div className="md:m-8 lg:m-8 flex justify-center">
      <div className="container">
        <h2 className="text-2xl text-center mb-10 text-purple-500">Existing Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {tiles.map((tile, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col border-l-4 border border-slate-700 transition duration-300 transform hover:scale-105 hover:border-purple-500 hover:bg-purple-500 hover:text-white shadow-md p-4">
                <button
                  key={tile}
                  type="button"
                  onClick={() => handleTileClick(tile)}
                >
                  {tile}
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Services;
