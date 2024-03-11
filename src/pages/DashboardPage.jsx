import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Todo from '../components/Todo';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleDateClick = (value) => {
    alert(`You clicked on: ${value}`);
  };

  return (
    <div className="container mx-auto mt-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        {/* Calendar Component */}
        <div >
          <h2 className="text-xl font-semibold mb-2">Calendar</h2>
          <Calendar
            onChange={handleDateChange}
            value={date}
            onClickDay={handleDateClick}
            className="w-full"
            tileClassName="hover:bg-gray-100 cursor-pointer"
          />
        </div>

        {/* Other Dashboard Components */}
        <div className="max-w-md mx-auto m-8">
          <Todo />
          {/* Other dashboard components can go here */}
        </div>
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
