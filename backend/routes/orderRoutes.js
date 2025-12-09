const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

//@route GET /api/orders/my-orders
//@desc Get logged-in user's orders
//@access Private
router.get("/my-orders", protect, async (req, res) => {
  try {
    //Find orders for the authenticated users
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    }); //sort by most recent orders
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
