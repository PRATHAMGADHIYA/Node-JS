const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading page");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url === "/login") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("login Success");
    } else if (req.url === "/signup") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("signup Success");
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("welcome to the contact page");
    } else if (req.url === "/service") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("welcome to the service page");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
    }
});

server.listen(8090, () => {
    console.log("Server is running on port 8090");
});
