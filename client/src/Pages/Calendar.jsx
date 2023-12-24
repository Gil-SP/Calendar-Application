import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [events, setEvents] = useState([]);

  // Function to handle event creation
  const handleEventCreate = async (selectInfo) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };
  
      try {
        const res = await fetch('/api/events/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEvent),
        });
  
        if (res.ok) {
          const data = await res.json();
          setEvents((prevEvents) => [...prevEvents, data.event]);
        } else {
          console.error('Failed to create event');
        }
      } catch (error) {
        console.error('Error creating event:', error);
      }
    }
  };

  // Function to handle event update
  const handleEventUpdate = async (arg) => {
    try {
      const res = await fetch(`/api/events/${arg.event.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: arg.event.title,
          start: arg.event.start,
          allDay: arg.event.allDay,
        }),
      });
  
      if (res.ok) {
        // Update state or perform any necessary actions
      } else {
        console.error('Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  // Function to handle event deletion
  const handleEventDelete = (arg) => {
    const updatedEvents = events.filter(
      (event) => event.id !== arg.event.id
    );
    setEvents(updatedEvents);
  };

  return (
    <div>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          listPlugin,
          interactionPlugin,
        ]}
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
