require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import bộ định tuyến tổng (tự động tìm file index.js trong folder routes)
const allRoutes = require('./routes'); 

const app = express();

// Kết nối DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// --- ROUTES ---
// Mount tất cả API vào prefix '/api'
app.use('/api', allRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('HacoLogistics Backend is Running...');
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});