
import { useForm } from "react-hook-form";
import { Button } from 'flowbite-react';
import { createTask } from '../http';

const Todo = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const services = [
    "Accounting",
    "Administration",
    "Banking",
    "Government",
    "Human Resources",
    "Insurance",
    "Legal",
    "Marketing",
    "Mental Health",
    "Operations",
    "Public Relations",
    "Social Media"
  ];

  const priorities = ["Low", "Medium", "High"];

  const onSubmit = async (data) => {
    try {
      // Include service and priority fields in the form data
      const formData = {
        ...data,
        service: data.service, // Include selected service
        priority: data.priority, // Include selected priority
      };

      console.log(formData);
      await createTask(formData);
      reset();
    } catch (error) {
      console.error('Error creating task:', error.message);
    }
  };

  return (
    <div className="bg-purple-100 rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-500">Add Task</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="taskName" className="text-gray-700 text-sm font-bold mb-1">Task Name</label>
          <input
            id="taskName"
            type="text"
            name="taskName"
            className="border-b border-purple-500 py-2 px-4 w-full focus:outline-none"
            {...register("taskName", { required: "Task name is required" })}
          />
          {errors.taskName && (
            <span className="text-red-500">{errors.taskName.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="service" className="text-gray-700 text-sm font-bold mb-1">Service</label>
          <select
            id="service"
            name="service"
            className="border-b border-purple-500 py-2 px-4 w-full focus:outline-none"
            {...register("service", { required: "Service is required" })}
          >
            <option value="">Select Service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          {errors.service && (
            <span className="text-red-500">{errors.service.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="priority" className="text-gray-700 text-sm font-bold mb-1">Priority</label>
          <select
            id="priority"
            name="priority"
            className="border-b border-purple-500 py-2 px-4 w-full focus:outline-none"
            {...register("priority", { required: "Priority is required" })}
          >
            <option value="">Select Priority</option>
            {priorities.map((priority, index) => (
              <option key={index} value={priority}>{priority}</option>
            ))}
          </select>
          {errors.priority && (
            <span className="text-red-500">{errors.priority.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="text-gray-700 text-sm font-bold mb-1">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            className="border-b border-purple-500 py-2 px-4 w-full focus:outline-none"
            {...register("date")}
          />
        </div>

        <Button type="submit" gradientDuoTone="purpleToPink" className="w-full">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default Todo;
