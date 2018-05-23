var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on ('request', (function(req, res) {
    if (req.method === 'GET' && req.url === "/") {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        file = fs.createReadStream('./index.html');
        file.pipe(res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'image/png');
        file = fs.createReadStream('./404.png');
        file.pipe(res);
    }
}));


server.listen(8080, function() {
    console.log('Serwer uruchomiony pod adresem: http://localhost:8080');
});