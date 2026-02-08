const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware');

// Ai cũng xem được tin tức
router.get('/', newsController.getNews);
router.get('/:id', newsController.getNewsById);

// Chỉ Admin mới được Thêm/Xóa
// upload.single('image') nghĩa là client gửi lên field tên là 'image'
router.post('/', verifyToken, isAdmin, upload.single('image'), newsController.createNews);
router.delete('/:id', verifyToken, isAdmin, newsController.deleteNews);

module.exports = router;