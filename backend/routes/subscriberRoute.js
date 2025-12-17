const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

//@route POST /api/subscribe
//@desc Subscribe a user with their email
//@access Public
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // Create a new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Successfully subscribed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
