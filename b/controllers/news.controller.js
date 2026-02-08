const News = require('../models/news.model');

// Lấy danh sách tin (Public)
exports.getNews = async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
};

// Lấy chi tiết 1 tin
exports.getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'Không tìm thấy tin tức' });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
};

// Tạo tin mới (Admin only)
exports.createNews = async (req, res) => {
    try {
        const { title, content } = req.body;
        // req.file do Multer xử lý (sẽ cấu hình ở bước Route)
        const image = req.file ? req.file.path : ''; 

        const newNews = new News({ title, content, image });
        await newNews.save();

        res.status(201).json(newNews);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi tạo tin', error: error.message });
    }
};

// Xóa tin (Admin only)
exports.deleteNews = async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'Đã xóa tin tức' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi xóa tin' });
    }
};