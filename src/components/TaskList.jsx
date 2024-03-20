import React, { useState, useEffect } from 'react';
import { getAllTasks, deleteTask, updateTask } from '../http'; // Assuming you have deleteTask and updateTask functions in your http module

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

  const handleModify = async (taskId, updatedTaskData) => {
    try {
      setLoading(true);
      await updateTask(taskId, updatedTaskData);
      fetchTasks(); // Fetch tasks again after modification
      setLoading(false);
    } catch (error) {
      setError('Error modifying task');
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
            <li key={task._id} className="py-2 border-b border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold">{task.taskName}</span>
                <span className="text-sm text-gray-500 ml-2">{formatDate(task.date)}</span>
              </div>
              <div>
                <button className="bg-violet-200 text-violet-700 px-3 py-1 rounded-md mr-2" onClick={() => handleDelete(task._id)}>Delete</button>
                {/* <button className="bg-violet-200 text-violet-700 px-3 py-1 rounded-md" onClick={() => handleModify(task._id, { taskName: 'Updated Task Name' })}>Modify</button> */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
