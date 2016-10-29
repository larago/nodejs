var http = require('http');

http.createServer(function(request, response){

    // Send Http header
    // http status code 200: ok
    // content-type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // send msg "Hello World"
    response.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://localhost:8888/');