const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscriberRoutes = require("./routes/subscriberRoute");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World, Rabbit is here!");
});

//API Routes
app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/checkout", checkoutRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/upload", uploadRoutes);

app.use("/api", subscriberRoutes);


// Admin Routes
app.use("/api/admin/users", adminRoutes);

app.use("/api/admin/products", productAdminRoutes);

app.use("/api/admin/orders", adminOrderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on the port , http://localhost:${PORT}`);
});
