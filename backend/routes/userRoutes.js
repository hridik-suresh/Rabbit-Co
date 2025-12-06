const express = require('express');
const router = express.Router();
const  jwt = require('jsonwebtoken');
const User = require('../models/User');

//@route POST /api/usera/register
//@desc Register a new user
//@access Public
router.post('/register', async (req, res)=>{
    const {name, email, password} = req.body;
    try{
       //Register user
       let user = await User.findOne({email});
       if(user) return res.status(400).json({message: "User already exist"});

       user = new User({name, email, password});
       await user.save();

       res.status(201).json({
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        }
       })

    }catch(error){
       console.log(error);
         res.status(500).send('Server Error'); 
    }
})


module.exports = router;