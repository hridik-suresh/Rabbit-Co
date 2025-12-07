const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

//@route POST /api/products
//@desc Create a new product
//@access Private (Admin only)
router.post("/", protect, async (req, res) => {
  if (req.user && req.user.role === "admin") {
    try {
      const {
        name,
        description,
        price,
        discountPrice,
        countInStock,
        category,
        brand,
        sizes,
        colors,
        collections,
        material,
        gender,
        images,
        isFeatured,
        isPublished,
        dimensions,
        weight,
        sku,
      } = req.body;
      const product = new Product({
        name,
        description,
        price,
        discountPrice,
        countInStock,
        category,
        brand,
        sizes,
        colors,
        collections,
        material,
        gender,
        images,
        isFeatured,
        isPublished,
        dimensions,
        weight,
        sku,
        user: req.user.id, //Refference to the admin who created the product
      });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  } else {
    res.status(403).json({ message: "Access denied" });
  }
});

module.exports = router;
