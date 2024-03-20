import { useForm } from 'react-hook-form';
import { Button } from 'flowbite-react';
import { useMutation } from 'react-query';
import * as apiClient from '../http';
import { useAppContext } from '../context/AppContext';

const BusinessForm = ({ serviceId }) => {
  const { showToast } = useAppContext();


  const { mutate, isLoading } = useMutation(apiClient.registerBusiness, {
    onSuccess: () => {
      showToast({ message: 'Business added successfully', type: 'SUCCESS' });
    },
    onError: () => showToast({ message: 'Sorry! Something went wrong', type: 'ERROR' }),
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // Include the serviceId in the request payload
    mutate({ ...data, serviceId }); // Make sure serviceId is included here
  });

  return (
    <form className="flex flex-col gap-4 bg-purple-100 shadow-md p-6" onSubmit={onSubmit}>
      {/* Business form fields */}
      <label className="text-black text-sm font-bold">
        Business Name
        <input
          type="text"
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("businessName")}
        />
        {errors.businessName && (
          <span className="text-red-500">{errors.businessName.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Business Link
        <input
          type="text"
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("businessLink")}
        />
        {errors.businessLink && (
          <span className="text-red-500">{errors.businessLink.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Email
        <input
          type="text"
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Address
        <input
          type="text"
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("address")}
        />
        {errors.address && (
          <span className="text-red-500">{errors.address.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        City
        <input
          type="text"
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("city")}
        />
        {errors.city && (
          <span className="text-red-500">{errors.city.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Province
        <input
          type="text"
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("province")}
        />
        {errors.province && (
          <span className="text-red-500">{errors.province.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Country
        <input
          type="text"
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("country")}
        />
        {errors.country && (
          <span className="text-red-500">{errors.country.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Postal Code
        <input
          type="text"
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("postalCode")}
        />
        {errors.postalCode && (
          <span className="text-red-500">{errors.postalCode.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Description
        <textarea
          rows={4}
          className="border-b border-purple-500 w-full py-1 px-2 font-normal focus:outline-none"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>

      <Button type="submit" gradientDuoTone="purpleToPink">
        {isLoading ? 'Adding...' : 'Add'}
      </Button>
    </form>
  );
};

export default BusinessForm;
