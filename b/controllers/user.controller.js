const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
    try {
        // Lấy tất cả user nhưng bỏ trường password ra
        const users = await User.find().select('-password'); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Đã xóa người dùng' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi xóa người dùng' });
    }
};  