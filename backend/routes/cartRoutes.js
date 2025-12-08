const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");
const { watch } = require("../models/User");
const { route } = require("./productRoutes");

//Helper function to get a cart by guestId or userId
const getCart = async (guestId, userId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId: guestId });
  }
  return null;
};

//@route POST /api/cart
//@desc Add a product to the cart for a guest user or a loggedin user
//@access Public
router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    //Determine if the user is logged in or a guest
    let cart = await getCart(guestId, userId);

    //If the cart exists, update it
    if (cart) {
      const productIndex = cart.products.findIndex(
        (item) =>
          item.productId.toString() === productId &&
          item.size === size &&
          item.color === color
      );

      if (productIndex > -1) {
        //Product exists in cart, update the quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        //Product does not exist in cart, add new item
        cart.products.push({
          productId: product._id,
          name: product.name,
          image: product.images[0],
          price: product.price,
          size,
          color,
          quantity,
        });
      }

      //Recalculate total price
      cart.totalPrice = cart.products.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      await cart.save();
    } else {
      //If the cart does not exist, create a new one
      cart = new Cart({
        user: userId || undefined,
        guestId: guestId || undefined,
        products: [
          {
            productId: product._id,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      await cart.save();
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


//@route PUT /api/cart
//@desc Update product quantity in the cart for guest or the logged-in user
//@access Public
router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    let cart = await getCart(guestId, userId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const productIndex = cart.products.findIndex(
      (item) =>
        item.productId.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (productIndex > -1) {
      //Update the quantity
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        //Remove the product if quantity is zero or less
        cart.products.splice(productIndex, 1);
      }

      //Recalculate total price
      cart.totalPrice = cart.products.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


//@route DELETE /api/cart
//@desc Remove a product from the cart for guest or the logged-in user
//@access Public
router.delete("/", async (req, res) => {
  const { guestId, userId } = req.body;

    try {
    let cart = await getCart(guestId, userId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(
      (item) =>
        item.productId.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (productIndex > -1) {
      //Remove the product from the cart
      cart.products.splice(productIndex, 1);

        //Recalculate total price
      cart.totalPrice = cart.products.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


//@route GET /api/cart
//@desc Get the cart for a guest user or a logged-in user
//@access Public
router.get("/", async (req, res) => {
  const { guestId, userId } = req.query;

    try {
      let cart = await getCart(guestId, userId);
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
