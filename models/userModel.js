const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true // এক ইমেইল দিয়ে দুজন একাউন্ট খুলতে পারবে না
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // পদবি শুধু এই দুটির যেকোনো একটি হতে পারবে
        default: 'user' // নতুন কেউ একাউন্ট খুললে বাই-ডিফল্ট সে 'user' বা ক্রেতা হবে
    }
}, { timestamps: true }); // কখন একাউন্ট খোলা হয়েছে তার সময় ধরে রাখবে

const User = mongoose.model('User', userSchema);
module.exports = User;