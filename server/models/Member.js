const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  plan: { type: String, enum: ['3months', '6months', '12months'], required: true },
  amount: Number,
  startDate: { type: Date, default: Date.now },
  endDate: Date,
  status: { type: String, enum: ['active', 'expired'], default: 'active' }
});
module.exports = mongoose.model('Member', memberSchema);
