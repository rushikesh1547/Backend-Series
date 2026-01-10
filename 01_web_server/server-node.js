const http = require('http')

const hostname = '127.0.0.1';

const port = 3000

const server = http.createServer((req, res) => {
    if(req.url === '/'){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello Rish this side!")
    }
    else if (req.url === '/ice-tea'){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Thanks for giving ice tea")
    }
    else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end("404 not found")
    }
    
})

server.listen(port , hostname, () => {
    console.log(`Server is listning at http://${hostname}:${port}`);
    
})