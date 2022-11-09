const mongoose = require('mongoose');
const { Schema } = mongoose;

const TutorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Tutor', TutorSchema);