const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware");

//@route GET /api/admin/users
//@desc Get all users (Admin only)
//@access Private
router.get("/", protect, async (req, res) => {
  if (req.user && req.user.role === "admin") {
    try {
      const users = await User.find().select("-password");
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  } else {
    res.status(403).json({ message: "Access denied" });
  }
});

module.exports = router;
