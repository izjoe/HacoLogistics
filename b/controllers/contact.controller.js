const Contact = require('../models/contact.model');
const nodemailer = require('nodemailer');

// Cấu hình gửi mail (Lấy từ .env)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 1. Khách gửi liên hệ
exports.submitContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // B1: Lưu vào Database (Để Admin xem lại sau này)
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();

        // B2: Gửi Email thông báo về cho chủ doanh nghiệp
        const mailOptions = {
            from: process.env.EMAIL_USER, // Gửi từ bot
            to: process.env.EMAIL_RECEIVER, // Gửi đến bạn
            subject: `🔔 Liên hệ mới từ Website: ${name}`,
            html: `
                <h3>Bạn có liên hệ mới từ HacoLogistics</h3>
                <p><strong>Họ tên:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>SĐT:</strong> ${phone}</p>
                <p><strong>Nội dung:</strong></p>
                <p>${message}</p>
                <hr>
                <small>Đây là email tự động.</small>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Gửi liên hệ thành công!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi khi gửi liên hệ', error: error.message });
    }
};

// 2. Admin xem danh sách liên hệ
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 }); // Mới nhất lên đầu
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi lấy danh sách', error: error.message });
    }
};