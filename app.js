const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;
    if (url ==='/'){
        res.write('<html>');
        res.write('<head><tittle>My first page </tittle></head>')
        res.write('<body><form action = "/" method="POST"><input type="text"><button type="submit">Send</button></body>')
        res.write('</html>');
        return res.end();  
    }
    if (url ==='/' && method === 'POST'){
        fs.writeFile('Brijesh');
        // res.statusCode = 302;
        res.setHeader('location','/');
        return res.end();
    }
    res.setHeader('content-type', 'text-html');
    res.write('<html>');
    res.write('<head><tittle>My first page</tittle></head>')
    res.write('<body></body>')
    res.write('</html>');
    res.end();
})
server.listen(3000);