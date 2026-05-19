const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');

// Initialize Razorpay with test keys
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_TYu8j6h9aQz9P1',
  key_secret: process.env.RAZORPAY_SECRET || 'test_secret_1234567890',
});

// Create an order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', plan } = req.body;
    
    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency,
      receipt: `receipt_order_${Date.now()}`,
      notes: { plan }
    };
    
    const order = await razorpay.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");
    
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Verify payment
router.post('/verify', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      memberDetails
    } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET || 'test_secret_1234567890')
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      // Normal flow: save memberDetails to DB
      return res.status(200).json({ message: "Payment verified successfully", verified: true });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!", verified: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

module.exports = router;
