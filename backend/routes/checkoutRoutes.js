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
    return res.status(400).json({ message: "No items in checkout" });
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

//@route PUT /api/checkout/:id/pay
//@desc Update checkout to mark as paid after successful payment
//@access private
router.put("/:id/pay", async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;

  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (paymentStatus == "paid") {
      checkout.isPaid = true;
      checkout.paymentStatus = paymentStatus;
      checkout.paymentDetails = paymentDetails;
      checkout.paidAt = Date.now();
      await checkout.save();

      res.status(200).json(checkout);
    } else {
      res.status(400).json({ message: "Invalid payment status" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Srever Error" });
  }
});
