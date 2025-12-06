const express =require('express');
const app= express();
const cors =require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')


// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());


 const PORT = process.env.PORT || 8080;

 app.get('/', (req, res)=>{
    res.send("Hello World, Rabbit is here!");
 })

 //API Routes
 app.use("/api/users", userRoutes);


 app.listen(PORT, ()=>{
    console.log(`Server is running on the port , http://localhost:${PORT}`);
 })