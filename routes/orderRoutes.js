// const express = require('express');
// const router = express.Router();
// const { addOrderItems } = require('../controllers/orderController');
// const { protect } = require('../middlewares/authMiddleware');

// router.post('/', protect, addOrderItems);
// router.get('/myorders', protect, getMyOrders);
// module.exports = router;

const express = require('express');
const router = express.Router();

// ঠিক এই লাইনে addOrderItems এর পাশে getMyOrders যুক্ত করা হয়েছে
const { addOrderItems, getMyOrders } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, addOrderItems);
router.get('/myorders', protect, getMyOrders);

module.exports = router;