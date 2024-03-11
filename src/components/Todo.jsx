import { useForm } from "react-hook-form";
import { Button } from 'flowbite-react';
import { createTask } from '../http';

const Todo = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data)
      await createTask(data);
      reset();
    } catch (error) {
      console.error('Error creating task:', error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Task Name
          <input
            type="text"
            name="taskName" // Ensure the name attribute matches the key used in the data object
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("taskName", { required: "Task name is required" })}
          />
          {errors.taskName && (
            <span className="text-red-500">{errors.taskName.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Date
          <input
            type="date"
            name="date" // Ensure the name attribute matches the key used in the data object
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("date")}
          />
        </label>

        <Button type="submit" gradientDuoTone="purpleToPink">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default Todo;
