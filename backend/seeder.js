const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const User = require('./models/User');
const Product = require('./models/Product');
const products = require('./data/products');


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

//Seed data function
const seedData = async () => {
    try {
        //Clear existing data
        await Product.deleteMany();
        await User.deleteMany();

        //Create an admin user
        const adminUser = new User({
            name: 'Admin User',
            email: 'admin@example.com',
            password: 'adminpassword',
            role: 'admin',
        });
        await adminUser.save();

        //Assign the default userID to each product
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser._id };
        });
        await Product.insertMany(sampleProducts);
        console.log('Data seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();