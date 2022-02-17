const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('page about')
    }
    console.log('sdsdsd');
})

server.listen(5000)
console.log('listening on port 5000...');                                                   