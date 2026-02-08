const express = require('express');
const router = express.Router();

// Import các route con
const authRoutes = require('./auth.routes');
const contactRoutes = require('./contact.routes');
const newsRoutes = require('./news.routes');
const userRoutes = require('./user.routes');

// Định nghĩa đường dẫn cha
router.use('/auth', authRoutes);
router.use('/contact', contactRoutes);
router.use('/news', newsRoutes);
router.use('/users', userRoutes);

module.exports = router;