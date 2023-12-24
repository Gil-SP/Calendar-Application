import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  allDay: { type: Boolean, default: false },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
