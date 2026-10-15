const Order = require('../models/orderModel');

// ফাংশনের নাম addOrderItems করে দিলাম
const addOrderItems = async (req, res) => {
    try {
        const { orderItems, shippingAddress, totalPrice } = req.body;

        if (orderItems && orderItems.length === 0) {
            return res.status(400).json({ message: 'No order items' });
        } else {
            const order = new Order({
                orderItems,
                shippingAddress,
                totalPrice,
                user: req.user._id // এটি একবারই থাকবে
            });

            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { addOrderItems, getMyOrders };

// // এখন ঠিক ফাংশনটিই এক্সপোর্ট হচ্ছে
// module.exports = { addOrderItems };