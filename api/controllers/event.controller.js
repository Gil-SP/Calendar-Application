import Event from '../models/event.model.js';

// Get all events
export const getEvents = async (req, res, next) => {

  const userId = req.user._id;

  try {

    const events = await Event.find({ userId });
    return res.json(events);
  } catch (error) {
    next(error);
  }
};

// Create a new event
export const createEvent = async (req, res, next) => {
  try {

    const userId = req.user._id;
    console.log('User ID:', userId);

    const { title, start, allDay } = req.body;
    const newEvent = await Event.create({ userId, title, start, allDay });

    console.log('New Event:', newEvent);

    return res.status(201).json({ success: true, event: newEvent });
  } catch (error) {

    console.error('Error creating event:', error);

    next(error);
  }
};

// Update an event
export const updateEvent = async (req, res, next) => {

  const userId = req.user._id;
  const eventId = req.params.id;
  const { title, start, allDay } = req.body;

  try {

    const updatedEvent = await Event.findOneAndUpdate(
      { _id: eventId, userId },
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

  const userId = req.user._id;
  const eventId = req.params.id;

  try {

    const deletedEvent = await Event.findOneAndDelete({ _id: eventId, userId });

    if (!deletedEvent) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    return res.json({ success: true, message: 'Event deleted successfully' });
  } catch (error) {
    next(error);
  }
};
