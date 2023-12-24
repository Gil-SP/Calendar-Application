import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  start: { type: Date, required: true },
  allDay: { type: Boolean, default: false },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;

