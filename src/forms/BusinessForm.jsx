import { useForm } from "react-hook-form";
import { Button } from 'flowbite-react'
import { useMutation } from 'react-query'

import * as apiClient from '../http'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const BusinessForm = () => {
  const { showToast } = useAppContext()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(apiClient.registerBusiness, {
    onSuccess: () => {
      showToast({ message: "Business added successfully", type: "SUCCESS" });
      navigate('/');
    },
    onError: () => showToast({ message: "Sorry! Something went wrong", type: "ERROR" })
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    mutate(data);
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <label className="text-gray-700 text-sm font-bold">
        Business Name
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("businessName", { required: "This field is required" })}
        />
        {errors.businessName && (
          <span className="text-red-500">{errors.businessName.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Email
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Address
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("address", { required: "This field is required" })}
        />
        {errors.address && (
          <span className="text-red-500">{errors.address.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        City
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("city", { required: "This field is required" })}
        />
        {errors.city && (
          <span className="text-red-500">{errors.city.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Province
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("province", { required: "This field is required" })}
        />
        {errors.province && (
          <span className="text-red-500">{errors.province.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Country
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("country", { required: "This field is required" })}
        />
        {errors.country && (
          <span className="text-red-500">{errors.country.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Postal Code
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("postalCode", { required: "This field is required" })}
        />
        {errors.postalCode && (
          <span className="text-red-500">{errors.postalCode.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold">
        Description
        <textarea
          rows={10}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>

      <Button type='submit' gradientDuoTone='purpleToPink'>
        {isLoading ? "Adding..." : 'Add'}
      </Button>

    </form>
  );
};

export default BusinessForm;
