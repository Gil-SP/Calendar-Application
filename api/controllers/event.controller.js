import Event from '../models/event.model.js';

// Get all events
export const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (error) {
    next(error);
  }
};

// Create a new event
export const createEvent = async (req, res, next) => {
  const { title, start, allDay } = req.body;

  try {
    const newEvent = await Event.create({ title, start, allDay });
    return res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

// Update an event
export const updateEvent = async (req, res, next) => {
  const eventId = req.params.id;
  const { title, start, allDay } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { title, start, allDay },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    return res.json(updatedEvent);
  } catch (error) {
    next(error);
  }
};

// Delete an event
export const deleteEvent = async (req, res, next) => {
  const eventId = req.params.id;

  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    return res.json({ success: true, message: 'Event deleted successfully' });
  } catch (error) {
    next(error);
  }
};
