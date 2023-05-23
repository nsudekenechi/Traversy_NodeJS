const { registerUser, loginUser, getMe } = require('../controllers/userControllers');

const express = require('express');
const protect = require('../middleware/authMiddleware');
const router = express.Router()

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", protect, getMe)

module.exports = router