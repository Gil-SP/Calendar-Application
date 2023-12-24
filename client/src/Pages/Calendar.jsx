import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";


function Calendar() {
  const [events, setEvents] = useState([]);

// Function to handle event creation
const handleEventCreate = (selectInfo) => {
  const title = prompt('Enter event title:');
  if (title) {
    const newEvent = {
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    };

    // Optimistically update the state
    setEvents((prevEvents) => [...prevEvents, newEvent]);

    // Make the API request
    fetch('http://localhost:5173/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          console.error('Failed to create event');
          // Rollback the state update if the request fails
          setEvents((prevEvents) => prevEvents.filter((event) => event !== newEvent));
        }
      })
      .catch((error) => {
        console.error('Error creating event:', error);
        console.log('Raw response:', error.responseText);
        // Rollback the state update if there's an error
        setEvents((prevEvents) => prevEvents.filter((event) => event !== newEvent));
      });
  }
};

  // Function to handle event update
  const handleEventUpdate = (arg) => {
    // Find the updated event in the events array
    const updatedEvents = events.map((event) =>
      event.id === arg.event.id ? { ...event, ...arg.event.toPlainObject() } : event
    );

    setEvents(updatedEvents);
  };

  // Function to handle event deletion
  const handleEventDelete = (arg) => {
    const updatedEvents = events.filter((event) => event.id !== arg.event.id);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay,list",
        }}
        height="90vh"
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleEventCreate}
        eventClick={handleEventUpdate}
        eventChange={handleEventUpdate}
        eventRemove={handleEventDelete}
      />
    </div>
  );
}

export default Calendar;
