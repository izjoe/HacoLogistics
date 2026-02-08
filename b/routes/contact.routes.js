const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

// Khách gửi liên hệ (Public)
router.post('/', contactController.submitContact);

// Admin xem danh sách (Protected)
router.get('/', verifyToken, isAdmin, contactController.getAllContacts);

module.exports = router;