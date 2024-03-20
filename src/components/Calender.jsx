import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2024, 3, 1),
      end: new Date(2024, 3, 3),
    },
    {
      title: 'Event 2',
      start: new Date(2024, 3, 7),
      end: new Date(2024, 3, 10),
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl text-center mb-4">My Calendar</h1>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: '50px' }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
