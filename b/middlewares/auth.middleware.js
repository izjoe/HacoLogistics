const jwt = require('jsonwebtoken');

// 1. Kiểm tra đăng nhập (Có Token không?)
exports.verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Truy cập bị từ chối!' });

    try {
        // Token gửi lên thường dạng "Bearer <token>", ta cần cắt bỏ chữ "Bearer "
        const tokenString = token.replace("Bearer ", "");
        const verified = jwt.verify(tokenString, process.env.JWT_SECRET);
        req.user = verified; // Lưu thông tin user vào request
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token không hợp lệ' });
    }
};

// 2. Kiểm tra quyền Admin
exports.isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Bạn không có quyền Admin!' });
    }
    next();
};