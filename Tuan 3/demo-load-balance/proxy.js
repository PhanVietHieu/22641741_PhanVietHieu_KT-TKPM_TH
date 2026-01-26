const http = require('http');
const httpProxy = require('http-proxy');

// 1. Danh sách các server để đảm bảo Availability 24/24
const servers = [
    { host: '127.0.0.1', port: 3001 },
    { host: '127.0.0.1', port: 3002 }
];
let currentServer = 0;

// Khởi tạo công cụ Proxy
const proxy = httpProxy.createProxyServer({});

// 2. Xử lý Fault Tolerance (Chịu lỗi)
// Nếu server được chọn bị lỗi, proxy sẽ không làm sập hệ thống
proxy.on('error', function (err, req, res) {
    console.log("[Lỗi] Server hiện tại không phản hồi, đang thử lại...");
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hệ thống đang điều hướng do sự cố server.');
});

// 3. Tạo server Load Balancer lắng nghe ở cổng 80
const lb = http.createServer((req, res) => {
    // Thuật toán Round Robin đơn giản
    const target = servers[currentServer];
    currentServer = (currentServer + 1) % servers.length;

    console.log(`>>> Đang điều hướng request sang: ${target.port}`);
    proxy.web(req, res, { target: `http://${target.host}:${target.port}` });
});

lb.listen(80, () => {
    console.log("Load Balancer đang chạy tại cổng 80...");
});