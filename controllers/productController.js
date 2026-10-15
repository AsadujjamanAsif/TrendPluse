const Product = require('../models/productModel');

const createProduct = async (req, res) => {
    try {
        // ফিক্স করা হলো: !req.file এর বদলে req.file হবে
        if (req.file){
            req.body.image = req.file.filename;
        }
        const product = await Product.create(req.body);
        res.status(201).json(product);      
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- নতুন যোগ করা হলো: নির্দিষ্ট একটি প্রোডাক্ট আনার ফাংশন ---
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// --------------------------------------------------------

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// সব ফাংশন একসাথে এক্সপোর্ট করা হলো
module.exports = {
    createProduct,
    getProducts,
    getProductById, // এটি এখানে যুক্ত করা হয়েছে
    updateProduct,
    deleteProduct 
};