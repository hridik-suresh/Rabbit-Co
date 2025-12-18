const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

//@route GET /api/admin/orders
//@desc Get all orders (Admin only)
//@access Private
router.get("/", protect, async (req, res) => {
  if (req.user && req.user.role === "admin") {
    try {
      const orders = await Order.find({}).populate("user", "name email");
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  } else {
    res.status(403).json({ message: "Access denied" });
  }
});

module.exports = router;