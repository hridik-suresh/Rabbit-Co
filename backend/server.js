const express =require('express');
const app= express();
const cors =require('cors');

app.use(cors());
app.use(express.json());

 const PORT = 5000;

 app.get('/', (req, res)=>{
    res.send("Hello World, Rabbit is here!");
 })


 app.listen(PORT, ()=>{
    console.log(`Server is running on the port , http://localhost:${PORT}`);
 })