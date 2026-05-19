const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/leads', require('./routes/leads'));
app.use('/api/members', require('./routes/members'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/payment', require('./routes/payment'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', gym: 'The Fitness Empire' }));

// MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fitness_empire';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('⚠️  MongoDB not connected — running without DB:', err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
