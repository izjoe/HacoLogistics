const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }, // Nội dung bài viết
    image: { type: String }, // Đường dẫn ảnh (sẽ upload vào folder uploads)
    author: { type: String, default: 'Admin' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('News', newsSchema);