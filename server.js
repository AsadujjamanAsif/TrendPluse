// const express = require('express');
// const app = express();
// const PORT = 5000;

// const productRoutes = require('./routes/productRoutes');

// app.use('/api/products', productRoutes);


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });