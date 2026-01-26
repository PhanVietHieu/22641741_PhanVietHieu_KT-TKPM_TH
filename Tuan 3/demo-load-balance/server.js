const express = require('express');
const app = express();

// Lấy Port từ môi trường (giúp chạy được nhiều server trên 1 máy)
const PORT = process.argv[2] || 3000;

app.get('/', (req, res) => {
    console.log(`[Log] Request nhận được tại cổng: ${PORT}`);
    res.send(`<h1>Phản hồi từ Server cổng: ${PORT}</h1>`);
});

// Demo Fault Tolerance: Endpoint giả lập server bị sập
app.get('/die', (req, res) => {
    res.send("Server đang tắt...");
    process.exit(1); 
});

app.listen(PORT, () => {
    console.log(`Web Server đang chạy tại: http://localhost:${PORT}`);
});