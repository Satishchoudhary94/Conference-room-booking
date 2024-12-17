const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  equipment: [String], // e.g., projector, whiteboard, etc.
  isAvailable: { type: Boolean, default: true },
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
