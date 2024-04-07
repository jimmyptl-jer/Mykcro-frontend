import React, { useState, useEffect } from 'react';
import { getAllTasks, deleteTask } from '../http'; // Assuming you have deleteTask function in your http module

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await getAllTasks();
      setTasks(tasksData);
      setLoading(false);
    } catch (error) {
      setError('Error fetching tasks');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      setLoading(true);
      await deleteTask(taskId);
      fetchTasks(); // Fetch tasks again after deletion
      setLoading(false);
    } catch (error) {
      setError('Error deleting task');
      setLoading(false);
    }
  };

  // Function to format the date to a more user-readable format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto mt-9">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id} className="py-4 border-b border-gray-200">
              <div className="mb-2">
                <span className="text-lg font-semibold">{task.taskName}</span>
              </div>
              <div className="text-sm text-gray-500 mb-2">Service: {task.service}</div>
              <div className="text-sm text-gray-500 mb-2">Priority: {task.priority}</div>
              <div className="text-sm text-gray-500">Date: {formatDate(task.date)}</div>
              <button className="bg-red-200 text-red-700 px-3 py-1 rounded-md mt-2" onClick={() => handleDelete(task._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
