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

//@route PUT /api/admin/orders/:id
//@desc Update order status (Admin only)
//@access Private
router.put("/:id", protect, async (req, res) => {
  if (req.user && req.user.role === "admin") {
    const { id } = req.params;
    const { status } = req.body;

    try {
      const order = await Order.findById(id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      if (status) {
        order.status = status || order.status;
        order.isDelivered = status === "Delivered" ? true : order.isDelivered;
        order.deliveredAt =
          status === "Delivered" ? Date.now() : order.deliveredAt;
      }

      await order.save();

      res.json({
        message: "Order status updated successfully",
        order,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  } else {
    res.status(403).json({ message: "Access denied" });
  }
});

module.exports = router;
