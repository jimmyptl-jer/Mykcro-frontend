const ServiceCard = ({ title, link, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
        Visit Service
      </a>
    </div>
  );
};

export default ServiceCard;