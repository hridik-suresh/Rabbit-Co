const express = require("express");
const router = express.Router();
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

//@route POST /api/checkout
//@desc Create a new checkout session
//@access private
router.post("/", async (req, res) => {
  const { checkOutItems, shippingAddress, paymentMethod, totalPrice } =
    req.body;

  if (!checkOutItems || checkOutItems.length === 0) {
    return res.status(400).json({ message: "No items in chechout" });
  }

  try {
    //Create a new checkout session
    const newCheckout = await Checkout.create({
      user: req.user._id,
      checkOutItems: checkOutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "Pending",
      isPaid: false,
    });
    console.log(`Checkout created for user: ${req.user._id}`);
    res.status(201).json(newCheckout);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "server error" });
  }
});
