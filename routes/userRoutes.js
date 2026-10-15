const express = require('express');
const router = express.Router();
const { registerUser,getAllUsers, loginUser } = require('../controllers/userControllers');

router.post('/register', registerUser);
router.post('/login', loginUser);
//const { registerUser, getAllUsers } = require('../controllers/userControllers');
router.get('/', getAllUsers);
module.exports = router;