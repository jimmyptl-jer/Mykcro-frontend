import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAppContext } from '../context/AppContext';
import * as apiClient from '../http';

const ServiceManagement = () => {
  const { showToast } = useAppContext();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const queryClient = useQueryClient();

  const [services, setServices] = useState([]);

  const { isLoading: isServicesLoading } = useQuery('services', apiClient.getAllServices, {
    onSuccess: (data) => {
      setServices(data);
    },
  });

  const { mutate, isLoading } = useMutation(apiClient.registerService, {
    onSuccess: () => {
      showToast({ message: "Service Added Successful", type: "SUCCESS" });
    },
    onError: () => showToast({ message: "Sorry! Something went wrong", type: "ERROR" })
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    mutate(data);
  });

  const handleRemoveService = async (serviceId) => {
    await apiClient.deleteService(serviceId);
    queryClient.invalidateQueries('services');
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Service Management</h1>
      <form onSubmit={onSubmit} className="mb-4">
        <input
          type="text"
          {...register("name", { required: "Service name is required" })}
          placeholder="Enter service name"
          className="border border-gray-300 rounded-md py-2 px-4 mr-2"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isLoading ? 'Registering...' : 'Add Service'}
        </button>
      </form>
      <ul>
        {isServicesLoading ? (
          <div>Loading...</div>
        ) : (
          services.map((service, index) => (
            <li key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
              <span>{service.name}</span>
              <button onClick={() => handleRemoveService(service._id)} className="text-red-500 font-bold">Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ServiceManagement;
