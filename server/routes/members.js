const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

const planDuration = { '3months': 90, '6months': 180, '12months': 365 };
const planPrice    = { '3months': 1200, '6months': 2200, '12months': 4000 };

router.post('/', async (req, res) => {
  try {
    const { name, phone, plan } = req.body;
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + (planDuration[plan] || 90));
    const member = await Member.create({ name, phone, plan, amount: planPrice[plan], startDate, endDate });
    res.status(201).json({ success: true, member });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const members = await Member.find().sort({ startDate: -1 });
    res.json(members);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
