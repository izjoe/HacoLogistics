require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const rateLimit = require('express-rate-limit');

// Import bộ định tuyến tổng (tự động tìm file index.js trong folder routes)
const allRoutes = require('./routes'); 

const app = express();

// Kết nối DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 5, // Tối đa 5 lần gửi
  message: "Bạn gửi quá nhiều yêu cầu, vui lòng thử lại sau 15 phút."
});

// --- ROUTES ---
app.use('/api', allRoutes);
app.use('/api/contact', contactLimiter);

// Test Route
app.get('/', (req, res) => {
    res.send('HacoLogistics Backend is Running...');
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});