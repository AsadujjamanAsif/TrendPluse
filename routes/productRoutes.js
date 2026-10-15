const express = require('express'); 
const upload = require('../middlewares/uploads'); 
const router = express.Router();
const { protect, admin } = require('../middlewares/authMiddleware');

// getProductById ফাংশনটি ইমপোর্ট করা হলো
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:id', getProductById); // এই নতুন রাউটটি যুক্ত করা হলো
router.post('/', protect, admin, upload.single('image'), createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;