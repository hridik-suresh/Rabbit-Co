const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//@route POST /api/users/register
//@desc Register a new user
//@access Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //Register user
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exist" });

    user = new User({ name, email, password });
    await user.save();

    //Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    //Sign and Return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "10h" },
      (err, token) => {
        if (err) throw err;

        //Send the User and Token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route POST /api/users/login
//@desc Authenticate user
//@access Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    //Find the user by email
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid Credentials!" });
    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials!" });

    //Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    //Sign and Return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "10h" },
      (err, token) => {
        if (err) throw err;

        //Send the User and Token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
