const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  date: { type: Date, default: Date.now()}
}, {
  timestamps: true,
});

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;