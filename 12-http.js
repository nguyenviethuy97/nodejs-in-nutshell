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

// const http = require('http')
// const server = http.createServer((req, res) => {
//     if(req.url === '/') res.end('Home page')
//     if(req.url === '/about') res.end('about page')
//     if(req.url !== '/') res.end('error page')
//     for(let idx = 0; idx < 100; idx ++){
//         for(let j = 0; j < 100; j++){
//             console.log(`${idx}, ${j}`);
//         }
//     }
// })