let http = require('http');
const hostname = '127.0.0.1';
let server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("Hello World!")
})
server.listen(3000,hostname, ()=>{
    console.log("Server is running at http://127.0.0.1:3000/");
});