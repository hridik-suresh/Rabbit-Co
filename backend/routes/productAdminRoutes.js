const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

//@route GET /api/admin/products
//@desc Get all products (Admin only)
//@access Private
router.get("/", protect, async (req, res) => {
  if (req.user && req.user.role === "admin") {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  } else {
    res.status(403).json({ message: "Access denied" });
  }
});

module.exports = router;
