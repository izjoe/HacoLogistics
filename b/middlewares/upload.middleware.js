const multer = require('multer');
const path = require('path');

// Cấu hình nơi lưu ảnh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Lưu vào thư mục uploads
    },
    filename: (req, file, cb) => {
        // Đặt tên file: thời gian hiện tại + tên gốc (tránh trùng tên)
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Chỉ nhận file ảnh
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Chỉ được upload file ảnh!'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;