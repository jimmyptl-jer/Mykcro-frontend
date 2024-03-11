import { useState, useEffect } from 'react';
import { getAllTasks, deleteTask, updateTask } from '../http'; // Assuming you have deleteTask and updateTask functions in your http module

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const tasksData = await getAllTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks(); // Fetch tasks again after deletion
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const handleModify = async (taskId, updatedTaskData) => {
    try {
      await updateTask(taskId, updatedTaskData);
      fetchTasks(); // Fetch tasks again after modification
    } catch (error) {
      console.error('Error modifying task:', error.message);
    }
  };

  // Function to format the date to a more user-readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto mt-9">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
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
    </div>
  );
};

export default TaskList;
