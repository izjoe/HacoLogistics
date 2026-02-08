const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Đăng ký (Dùng để tạo Admin ban đầu)
exports.register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        
        // Kiểm tra user tồn tại
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: 'Username đã tồn tại' });

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = new User({ username, password: hashedPassword, role });
        await user.save();

        res.status(201).json({ message: 'Tạo tài khoản thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
};

// Đăng nhập
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Tìm user
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Sai thông tin đăng nhập' });

        // So sánh mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Sai thông tin đăng nhập' });

        // Tạo Token
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' } // Token hết hạn sau 1 ngày
        );

        res.json({ 
            token, 
            user: { id: user._id, username: user.username, role: user.role } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
};