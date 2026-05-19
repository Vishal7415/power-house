const mongoose = require('mongoose');
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  goal: { type: String, default: 'General Fitness' },
  source: { type: String, default: 'website' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Lead', leadSchema);
